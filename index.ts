import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LuaLexer } from './LuaLexer';
import { LuaParser } from './LuaParser';
import { TsVisitor } from './tsvisitor';
import * as fs from 'fs';

// Create the lexer and parser
const fileName = 'tests/samples/sample.lua';
let source = fs.readFileSync(fileName, 'utf8');
let inputStream = new ANTLRInputStream(source);
let lexer = new LuaLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LuaParser(tokenStream);
// Parse the input, where `compilationUnit` is whatever entry point you defined
let result = parser.chunk();
let visitor = new TsVisitor();
result.accept(visitor);
fs.writeFileSync('../ovale-ts/sample.ts', visitor.result, { encoding: 'utf8' });
for (const error of visitor.errors) {
    const token = tokenStream.get(error.position);
    console.error(`${fileName}:${token.line}:${token.charPositionInLine} ${error.message}`);
}