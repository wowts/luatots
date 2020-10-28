import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { LuaLexer } from "./LuaLexer";
import { LuaParser } from "./LuaParser";
import { TsVisitor } from "./tsvisitor";
import * as fs from "fs";
import * as path from "path";
import * as mkdirp from "mkdirp";

const inputPath = process.argv[2];
const outputPath = process.argv[3];

function processDirectory(dirPath: string, outputPath: string) {
    for (const dirEntry of fs.readdirSync(dirPath)) {
        const fullInputName = path.join(dirPath, dirEntry);
        const fullOutputName = path.join(outputPath, dirEntry);
        if (fs.statSync(fullInputName).isDirectory()) {
            if (dirEntry == "libs") continue;
            processDirectory(fullInputName, fullOutputName);
        } else if (dirEntry.match(/\.lua$/)) {
            const tsName = fullOutputName.replace(/\.lua$/, ".ts");
            console.log(fullInputName);
            let source = fs.readFileSync(fullInputName, "utf8");
            let inputStream = new ANTLRInputStream(source);
            let lexer = new LuaLexer(inputStream);
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new LuaParser(tokenStream);
            // Parse the input, where `compilationUnit` is whatever entry point you defined
            let result = parser.chunk();
            let visitor = new TsVisitor();
            result.accept(visitor);
            mkdirp.sync(path.dirname(tsName));
            fs.writeFileSync(tsName, visitor.getResult(), { encoding: "utf8" });
            for (const error of visitor.errors) {
                const token = tokenStream.get(error.position);
                console.error(
                    `${fullInputName}:${token.line}:${token.charPositionInLine} ${error.message}`
                );
            }
        } else if (dirEntry.match(/\.toc$/)) {
            const tsName = fullOutputName + ".ts";
            const source = fs.readFileSync(fullInputName, "utf8");
            const lines = source.split("\n");
            const output = lines.map((x) => {
                x = x.replace("#", "//");
                if (x.includes(".lua")) {
                    x = `import './${x.replace(/\.lua$/, "")}';`;
                }
                return x;
            });
            fs.writeFileSync(tsName, output.join("\n"), { encoding: "utf8" });
        }
    }
}

processDirectory(inputPath, outputPath);
