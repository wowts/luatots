"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const LuaLexer_1 = require("./LuaLexer");
const LuaParser_1 = require("./LuaParser");
const tsvisitor_1 = require("./tsvisitor");
const fs = require("fs");
// Create the lexer and parser
let source = fs.readFileSync('sample.lua', 'utf8');
let inputStream = new antlr4ts_1.ANTLRInputStream(`local a = 2
if a == 3 then a = 1 else  a = 2 end`);
let lexer = new LuaLexer_1.LuaLexer(inputStream);
let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
let parser = new LuaParser_1.LuaParser(tokenStream);
// Parse the input, where `compilationUnit` is whatever entry point you defined
let result = parser.chunk();
let visitor = new tsvisitor_1.TsVisitor();
result.accept(visitor);
fs.writeFileSync('sample.ts_', visitor.result, { encoding: 'utf8' });
//# sourceMappingURL=index.js.map