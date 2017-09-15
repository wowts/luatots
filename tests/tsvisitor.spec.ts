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
    t.is(testTransform(`local function test(a, b, c)
end`), `const test = function(a, b, c) {
}
`);
});

test(t => {
    t.is(testTransform(`for k = #test, 1, -1 do
end`), `for (let k = table.getn(test); k >= 1; k += -1) {
}
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
    t.is(testTransform(`local a = { 'a', 'b', 'c' }`), `let a = { 1: 'a', 2: 'b', 3: 'c' }
`)
});


test(t => {
    t.is(testTransform(`local a = { TEST = 'a', ["a"] = 'b' }`), `let a = { TEST: 'a', ["a"]: 'b' }
`)
});