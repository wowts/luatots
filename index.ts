import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LuaLexer } from './LuaLexer';
import { LuaParser } from './LuaParser';
import { TsVisitor } from './tsvisitor';
import * as fs from 'fs';

// Create the lexer and parser
let source = fs.readFileSync('sample.lua', 'utf8');
let inputStream = new ANTLRInputStream(`local a = 2
if a == 3 then a = 1 else  a = 2 end`);
let lexer = new LuaLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new LuaParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let result = parser.chunk();
let visitor = new TsVisitor();
result.accept(visitor);
fs.writeFileSync('sample.ts_', visitor.result, { encoding: 'utf8' });