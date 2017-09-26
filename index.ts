import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { LuaLexer } from './LuaLexer';
import { LuaParser } from './LuaParser';
import { TsVisitor } from './tsvisitor';
import * as fs from 'fs';
import * as path from "path";
import * as mkdirp from "mkdirp";

const inputPath = process.argv[2];
const outputPath = process.argv[3];

function processDirectory(dirPath: string, outputPath: string){
    for (const dirEntry of fs.readdirSync(dirPath)) {
        const fullInputName = path.join(dirPath, dirEntry);
        const fullOutputName = path.join(outputPath, dirEntry);
        if (fs.statSync(fullInputName).isDirectory()) {
            if (dirEntry == "libs") continue;
            processDirectory(fullInputName, fullOutputName)
        }
        else if (dirEntry.match(/\.lua$/)) {
            const tsName = fullOutputName.replace(/\.lua$/, ".ts");
            console.log(fullInputName);
            let source = fs.readFileSync(fullInputName, 'utf8');
            let inputStream = new ANTLRInputStream(source);
            let lexer = new LuaLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new LuaParser(tokenStream);
            // Parse the input, where `compilationUnit` is whatever entry point you defined
            let result = parser.chunk();
            let visitor = new TsVisitor();
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