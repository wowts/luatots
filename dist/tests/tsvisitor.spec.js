"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const antlr4ts_1 = require("antlr4ts");
const LuaLexer_1 = require("../LuaLexer");
const LuaParser_1 = require("../LuaParser");
const tsvisitor_1 = require("../tsvisitor");
function testTransform(lua) {
    let inputStream = new antlr4ts_1.ANTLRInputStream(lua);
    let lexer = new LuaLexer_1.LuaLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new LuaParser_1.LuaParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let result = parser.chunk();
    let visitor = new tsvisitor_1.TsVisitor();
    result.accept(visitor);
    return visitor.result;
}
ava_1.default(t => {
    t.is(testTransform("local a = 2 + 3"), `let a = 2 + 3;
`);
});
ava_1.default(t => {
    t.is(testTransform(`local function test(a, b, c)
end`), `const test = function(a, b, c) {
}
`);
});
ava_1.default(t => {
    t.is(testTransform(`for k = #test, 1, -1 do
end`), `for (let k = table.getn(test); k >= 1; k += -1) {
}
`);
});
ava_1.default(t => {
    t.is(testTransform(`local k, v = o:method()`), `let [k, v] = o.method();
`);
});
ava_1.default(t => {
    t.is(testTransform(`Ovale.refreshNeeded[self_playerGUID] = true`), `Ovale.refreshNeeded[self_playerGUID] = true;
`);
});
ava_1.default(t => {
    t.is(testTransform(`if comboEvent.reason == "Anticipation" then
    state:RemoveAuraOnGUID(self_playerGUID, ANTICIPATION, "HELPFUL", true, comboEvent.atTime)
    break
end`), `if (comboEvent.reason == "Anticipation") {
    state.RemoveAuraOnGUID(self_playerGUID, ANTICIPATION, "HELPFUL", true, comboEvent.atTime);
    break;
}
`);
});
ava_1.default(t => {
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
ava_1.default(t => {
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
//# sourceMappingURL=tsvisitor.spec.js.map