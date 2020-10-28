import test from "ava";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { LuaLexer } from "./LuaLexer";
import { LuaParser } from "./LuaParser";
import { TsVisitor } from "./tsvisitor";

function testTransform(lua: string) {
    let inputStream = new ANTLRInputStream(lua);
    let lexer = new LuaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LuaParser(tokenStream);

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let result = parser.chunk();
    let visitor = new TsVisitor();
    result.accept(visitor);
    return visitor.getResult();
}

test("basic expression", (t) => {
    t.is(
        testTransform("local a = 2 + 3"),
        `let a = 2 + 3;
`
    );
});

test("array", (t) => {
    t.is(
        testTransform(`local array
local a = #array + 1`),
        `import { lualength } from "@wowts/lua";
let array;
let a = lualength(array) + 1;
`
    );
});

test("array spreading", (t) => {
    t.is(
        testTransform(`local a, b,c
a, b = c`),
        `let a, b, c;
[a, b] = c;
`
    );
});

test("local function", (t) => {
    t.is(
        testTransform(`local function test(a, b, c)
end`),
        `function test(a, b, c) {
}
`
    );
});

test("for", (t) => {
    t.is(
        testTransform(`for k = #test, 1, -1 do
end`),
        `import globals from "./globals";
import { lualength } from "@wowts/lua";
for (let k = lualength(globals.test); k >= 1; k += -1) {
}
`
    );
});

test("multiline text", (t) => {
    t.is(
        testTransform(`local a = [[test
text]]`),
        `let a = \`test
text\`;
`
    );
});

test("multiline text with escapes", (t) => {
    t.is(
        testTransform(`local a = [=[te\`st
text]=]`),
        `let a = \`te\\\`st
text\`;
`
    );
});

test("repeat", (t) => {
    t.is(
        testTransform(`local a = 1
repeat
    a = a + 1
until a > 5`),
        `let a = 1;
do {
    a = a + 1;
}
while (!(a > 5));
`
    );
});

test("method call", (t) => {
    t.is(
        testTransform(`local k, v = o:method()`),
        `import globals from "./globals";
let [k, v] = globals.o.method();
`
    );
});

test("property access with variable", (t) => {
    t.is(
        testTransform(`Ovale.refreshNeeded[self_playerGUID] = true`),
        `import globals from "./globals";
globals.Ovale.refreshNeeded[globals.self_playerGUID] = true;
`
    );
});

test("complex method call", (t) => {
    t.is(
        testTransform(`if comboEvent.reason == "Anticipation" then
    state:RemoveAuraOnGUID(self_playerGUID, ANTICIPATION, "HELPFUL", true, comboEvent.atTime)
    break
end`),
        `import globals from "./globals";
if (globals.comboEvent.reason == "Anticipation") {
    globals.state.RemoveAuraOnGUID(globals.self_playerGUID, globals.ANTICIPATION, "HELPFUL", true, globals.comboEvent.atTime);
    return;
}
`
    );
});

test("function Class:Method()", (t) => {
    t.is(
        testTransform(`local Class = {}
function Class:First()
end

function Class:Second()
end`),
        `let Class = {}
Class.First = function() {
}
Class.Second = function() {
}
`
    );
});

test("various function declarations", (t) => {
    t.is(
        testTransform(`local Class = {}
function Class:First()
end

function Class:Second()
end

function Third()
end
`),
        `let Class = {}
Class.First = function() {
}
Class.Second = function() {
}
function Third() {
}
`
    );
});

test("array declaration", (t) => {
    t.is(
        testTransform(`local a = { 'a', 'b', 'c' }`),
        `let a = {
    1: 'a',
    2: 'b',
    3: 'c'
}
`
    );
});

test("object declaration", (t) => {
    t.is(
        testTransform(`local a = { TEST = 'a', ["a"] = 'b', c = { d = "z" } }`),
        `let a = {
    TEST: 'a',
    ["a"]: 'b',
    c: {
        d: "z"
    }
}
`
    );
});

test("for pairs", (t) => {
    t.is(
        testTransform(`for keyword, value in pairs(SPELL_AURA_KEYWORD) do
    DECLARATION_KEYWORD[keyword] = value
end`),
        `import globals from "./globals";
import { pairs } from "@wowts/lua";
for (const [keyword, value] of pairs(globals.SPELL_AURA_KEYWORD)) {
    globals.DECLARATION_KEYWORD[keyword] = value;
}
`
    );
});

test("various operators", (t) => {
    t.is(
        testTransform(`local a,b,c
if not a ~= 4 then
    b = 3.0
elseif a == 4 then
    b = 4 + (3 * 4)
else
    c = 4
end`),
        `let a, b, c;
if (!a != 4) {
    b = 3.0;
} else if (a == 4) {
    b = 4 + (3 * 4);
} else {
    c = 4;
}
`
    );
});

test("function that returns multiple values", (t) => {
    t.is(
        testTransform(`function a()
    return 3, 5
end`),
        `function a() {
    return [3, 5];
}
`
    );
});

test("inline function", (t) => {
    t.is(
        testTransform(`local a = function(a) return 2 end`),
        `let a = function (a) {
    return 2;
}
`
    );
});

test("local variable that copies global variable", (t) => {
    t.is(
        testTransform(`local a = a
a = 2;`),
        `let _a = a;
_a = 2;
`
    );
});

test("operator precedence", (t) => {
    t.is(
        testTransform(`local b = 1
local a = not a or b`),
        `let b = 1;
let a = !a || b;
`
    );
});

test("function with variable args", (t) => {
    t.is(
        testTransform(`local function SyntaxError(tokenStream, ...)
    OvaleAST:Print(...)
end`),
        `import globals from "./globals";
function SyntaxError(tokenStream, ...__args) {
    globals.OvaleAST.Print(...__args);
}
`
    );
});

test("global args", (t) => {
    t.is(
        testTransform(`local AppName, App = ...
local Me = App:NewModule("ModuleName", "dep1", "dep2")
local Test = App.Test
`),
        `import __addon from "addon";
let [AppName, App] = __addon;
let Me = App.NewModule("ModuleName", "dep1", "dep2");
let Test = App.Test;
`
    );
});

test("use global variable", (t) => {
    t.is(
        testTransform(
            `a = {}
a.z = 3
a.test = function() end
function a:toto()
end`
        ),
        `import globals from "./globals";
globals.a = {}
globals.a.z = 3;
globals.a.test = function () {
}
globals.a.toto = function() {
}
`
    );
});

test("declare multiple variables", (t) => {
    t.is(
        testTransform(`local function test()
end
    local a, b, c = test()
a = b + c
    `),
        `function test() {
}
let [a, b, c] = test();
a = b + c;
`
    );
});
