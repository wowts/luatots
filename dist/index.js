"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const LuaLexer_1 = require("./LuaLexer");
const LuaParser_1 = require("./LuaParser");
const tsvisitor_1 = require("./tsvisitor");
const fs = require("fs");
// Create the lexer and parser
const fileName = 'tests/samples/sample.lua';
let source = fs.readFileSync(fileName, 'utf8');
let inputStream = new antlr4ts_1.ANTLRInputStream(source);
let lexer = new LuaLexer_1.LuaLexer(inputStream);
let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
let parser = new LuaParser_1.LuaParser(tokenStream);
// Parse the input, where `compilationUnit` is whatever entry point you defined
let result = parser.chunk();
let visitor = new tsvisitor_1.TsVisitor();
result.accept(visitor);
fs.writeFileSync('../ovale-ts/sample.ts', visitor.result, { encoding: 'utf8' });
for (const error of visitor.errors) {
    const token = tokenStream.get(error.position);
    console.error(`${fileName}:${token.line}:${token.charPositionInLine} ${error.message}`);
}
//# sourceMappingURL=index.js.map