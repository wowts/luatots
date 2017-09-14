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
end`), `const test = function(a, b, c) {}
`);
});

test(t => {
    t.is(testTransform(`for k = #test, 1, -1 do
end`), `for (let k = luat_length(test); k >= 1; k += -1) {}
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