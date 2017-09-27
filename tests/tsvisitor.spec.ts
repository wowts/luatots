import test from 'ava';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LuaLexer } from '../LuaLexer';
import { LuaParser } from '../LuaParser';
import { TsVisitor } from '../tsvisitor';

function testTransform(lua: string) {
    let inputStream = new ANTLRInputStream(lua);
    let lexer = new LuaLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LuaParser(tokenStream);
    
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let result = parser.chunk();
    let visitor = new TsVisitor();
    result.accept(visitor);
    return visitor.result;
}

test(t => {
    t.is(testTransform("local a = 2 + 3"), `let a = 2 + 3;
`);
});


test(t => {
    t.is(testTransform("local a = #array + 1"), `let a = lualength(array) + 1;
`);
});

test(t => {
    t.is(testTransform(`a, b = c`), `[a, b] = c;
`);
});

test(t => {
    t.is(testTransform(`local function test(a, b, c)
end`), `const test = function(a, b, c) {
}
`);
});

test(t => {
    t.is(testTransform(`for k = #test, 1, -1 do
end`), `for (let k = lualength(test); k >= 1; k += -1) {
}
`);
});


test(t => {
    t.is(testTransform(`a = [[test
text]]`), `a = \`test
text\`;
`);
});

test(t => {
    t.is(testTransform(`a = [=[te\`st
text]=]`), `a = \`te\\\`st
text\`;
`);
});


test(t => {
    t.is(testTransform(`repeat
    a = a + 1
until a > 5`), `do {
    a = a + 1;
}
while (!(a > 5));
`);
});

test(t => {
    t.is(testTransform(`local k, v = o:method()`), `let [k, v] = o.method();
`);
});

test(t => {
    t.is(testTransform(`Ovale.refreshNeeded[self_playerGUID] = true`), `Ovale.refreshNeeded[self_playerGUID] = true;
`);
});

test(t => {
    t.is(testTransform(`if comboEvent.reason == "Anticipation" then
    state:RemoveAuraOnGUID(self_playerGUID, ANTICIPATION, "HELPFUL", true, comboEvent.atTime)
    break
end`), `if (comboEvent.reason == "Anticipation") {
    state.RemoveAuraOnGUID(self_playerGUID, ANTICIPATION, "HELPFUL", true, comboEvent.atTime);
    break;
}
`);
});

test(t => {
    t.is(testTransform(`function Class:First()
end

function Class:Second()
end`), `class Class {
    First() {
    }
    Second() {
    }
}
`);
});


test(t => {
    t.is(testTransform(`function Class:First()
end

function Class:Second()
end

function Third()
end
`), `class Class {
    First() {
    }
    Second() {
    }
}
function Third() {
}
`);
});

test(t => {
    t.is(testTransform(`local a = { 'a', 'b', 'c' }`), `let a = {
    1: 'a',
    2: 'b',
    3: 'c'
}
`)
});


test(t => {
    t.is(testTransform(`local a = { TEST = 'a', ["a"] = 'b', c = { d = "z" } }`), `let a = {
    TEST: 'a',
    ["a"]: 'b',
    c: {
        d: "z"
    }
}
`)
});

test(t => {
    t.is(testTransform(`for keyword, value in pairs(SPELL_AURA_KEYWORD) do
    DECLARATION_KEYWORD[keyword] = value
end`), `for (const [keyword, value] of pairs(SPELL_AURA_KEYWORD)) {
    DECLARATION_KEYWORD[keyword] = value;
}
`)
});


test(t => {
    t.is(testTransform(`if not a ~= 4 then
    b = 3.0
elseif a == 4 then
    b = 4 + (3 * 4)
else
    c = 4
end`), `if (!a != 4) {
    b = 3.0;
} else if (a == 4) {
    b = 4 + (3 * 4);
} else {
    c = 4;
}
`)
});

test(t => {
    t.is(testTransform(`function a()
    return 3, 5
end`), `function a() {
    return [3, 5];
}
`)
});

test(t => {
    t.is(testTransform(`local a = function(a) return 2 end`), `let a = function (a) {
    return 2;
}
`)
});


test(t => {
    t.is(testTransform(`local a = a
a = 2;`), `let _a = a;
_a = 2;
`)
});

test(t => {
    t.is(testTransform(`local a = not a or b`), `let a = !a || b;
`)
});


test(t => {
    t.is(testTransform(`local function SyntaxError(tokenStream, ...)
    OvaleAST:Print(...)
end`), `const SyntaxError = function(tokenStream, ...__args) {
    OvaleAST.Print(...__args);
}
`);
})


test(t => {
    t.is(testTransform(`local AppName, App = ...
local Me = App:NewModule("ModuleName", "dep1", "dep2")
local Test = App.Test
`), `import __addon from "addon";
let [AppName, App] = __addon;
let Me = App.NewModule("ModuleName", "dep1", "dep2");
import { Test } from "./Test";
`);
})
