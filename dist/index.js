"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const LuaLexer_1 = require("./LuaLexer");
const LuaParser_1 = require("./LuaParser");
const tsvisitor_1 = require("./tsvisitor");
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const inputPath = process.argv[2];
const outputPath = process.argv[3];
function processDirectory(dirPath, outputPath) {
    for (const dirEntry of fs.readdirSync(dirPath)) {
        const fullInputName = path.join(dirPath, dirEntry);
        const fullOutputName = path.join(outputPath, dirEntry);
        if (fs.statSync(fullInputName).isDirectory()) {
            if (dirEntry == "libs")
                continue;
            processDirectory(fullInputName, fullOutputName);
        }
        else if (dirEntry.match(/\.lua$/)) {
            const tsName = fullOutputName.replace(/\.lua$/, ".ts");
            console.log(fullInputName);
            let source = fs.readFileSync(fullInputName, 'utf8');
            let inputStream = new antlr4ts_1.ANTLRInputStream(source);
            let lexer = new LuaLexer_1.LuaLexer(inputStream);
            let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            let parser = new LuaParser_1.LuaParser(tokenStream);
            // Parse the input, where `compilationUnit` is whatever entry point you defined
            let result = parser.chunk();
            let visitor = new tsvisitor_1.TsVisitor();
            result.accept(visitor);
            mkdirp.sync(path.dirname(tsName));
            fs.writeFileSync(tsName, visitor.result, { encoding: 'utf8' });
            for (const error of visitor.errors) {
                const token = tokenStream.get(error.position);
                console.error(`${fullInputName}:${token.line}:${token.charPositionInLine} ${error.message}`);
            }
        }
    }
}
processDirectory(inputPath, outputPath);
//# sourceMappingURL=index.js.map