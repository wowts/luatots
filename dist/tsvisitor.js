"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LuaParser_1 = require("./LuaParser");
class TsVisitor {
    constructor() {
        this.result = "";
        this.tabs = 0;
        this.blocks = [];
        this.currentBlock = {};
    }
    visitBlock(ctx) {
        this.result += "{";
        if (ctx.childCount > 0) {
            this.result += '\n';
            this.tabs++;
            for (let i = 0; i < ctx.childCount; i++) {
                ctx.getChild(i).accept(this);
            }
            this.tabs--;
        }
        this.writeTabs();
        this.result += "}";
    }
    visitStat(ctx) {
        this.writeTabs();
        this.visitChildren(ctx);
    }
    visitChunk(ctx) {
        this.blocks.push(this.currentBlock);
        this.currentBlock = {};
        for (let i = 0;; i++) {
            const child = ctx.tryGetChild(i, LuaParser_1.StatContext);
            if (!child)
                break;
            const content = child.getChild(0);
            if (content instanceof LuaParser_1.FunctiondeclContext) {
                const className = this.getClassName(content);
                if (className !== this.currentBlock.currentClass) {
                    this.endClass();
                    if (className)
                        this.startClass(className);
                }
            }
            else if (this.currentBlock.currentClass) {
                this.endClass();
            }
            child.accept(this);
            const lastChar = this.result[this.result.length - 1];
            if (lastChar === '}' || lastChar === "\n")
                this.result += "\n";
            else
                this.result += ";\n";
        }
        const last = ctx.tryGetChild(0, LuaParser_1.LaststatContext);
        if (last)
            last.accept(this);
        this.endClass();
        this.currentBlock = this.blocks.pop();
    }
    visitNumber(ctx) {
        if (ctx.INT()) {
            this.result += ctx.INT().symbol.text;
        }
    }
    visitIf(ctx) {
        this.result += "if (";
        console.log(ctx.getChild(0).text);
        ctx.getChild(1).accept(this);
        this.result += ") ";
        ctx.getChild(3).accept(this);
    }
    visitAssignment(ctx) {
        const vars = ctx.getChild(0, LuaParser_1.Varlist1Context);
        if (vars.childCount > 1) {
            this.result += "[";
        }
        vars.accept(this);
        if (vars.childCount > 1) {
            this.result += "]";
        }
        this.result += " = ";
        const exps = ctx.getChild(0, LuaParser_1.Explist1Context);
        if (exps.childCount > 1 || exps.childCount == 0) {
            throw Error("Unnsport exp list > 1");
        }
        exps.getChild(0, LuaParser_1.ExpContext).accept(this);
    }
    visitLocalvardecl(ctx) {
        const namelist = ctx.getChild(0, LuaParser_1.NamelistContext);
        this.result += "let ";
        if (namelist.childCount > 1) {
            this.result += "[";
        }
        namelist.accept(this);
        if (namelist.childCount > 1) {
            this.result += "]";
        }
        const explist1 = ctx.tryGetChild(0, LuaParser_1.Explist1Context);
        if (explist1) {
            this.result += " = ";
            explist1.accept(this);
        }
    }
    visitExplist1(ctx) {
        for (let i = 0;; i++) {
            const exp = ctx.tryGetChild(i, LuaParser_1.ExpContext);
            if (exp) {
                if (i > 0)
                    this.result += ", ";
                exp.accept(this);
            }
            else {
                break;
            }
        }
    }
    visitLaststat(ctx) {
        this.writeTabs();
        const explist1 = ctx.tryGetChild(0, LuaParser_1.Explist1Context);
        if (explist1) {
            this.result += "return ";
            explist1.accept(this);
            this.result += ";\n";
        }
        else {
            this.result += "break;\n";
        }
    }
    visitBinop(ctx) {
        this.result += ` ${ctx.text} `;
    }
    visitLocalfunctiondecl(ctx) {
        this.result += `const ${ctx.NAME().text} = function`;
        ctx.getChild(0, LuaParser_1.FuncbodyContext).accept(this);
    }
    visitFunctiondecl(ctx) {
        const name = ctx.getChild(0, LuaParser_1.FuncnameContext);
        if (name.NAME().length > 1) {
            this.result += name.NAME(1).text;
        }
        else {
            this.result += 'function ';
            name.accept(this);
        }
        ctx.getChild(0, LuaParser_1.FuncbodyContext).accept(this);
    }
    getClassName(ctx) {
        const name = ctx.getChild(0, LuaParser_1.FuncnameContext);
        if (name.NAME().length > 1)
            return name.NAME(0).text;
        return undefined;
    }
    visitFuncbody(ctx) {
        this.result += '(';
        const parlist1 = ctx.tryGetChild(0, LuaParser_1.Parlist1Context);
        if (parlist1)
            parlist1.accept(this);
        this.result += ') ';
        ctx.getChild(0, LuaParser_1.BlockContext).accept(this);
    }
    visitParlist1(ctx) {
        ctx.getChild(0, LuaParser_1.NamelistContext).accept(this);
    }
    visitFuncname(ctx) {
        this.result += ctx.NAME(0).text;
        if (ctx.NAME().length > 1) {
            this.result += ".";
            this.result += ctx.NAME(1);
        }
    }
    visitNamelist(ctx) {
        const names = ctx.NAME();
        for (let i = 0; i < names.length; i++) {
            if (i != 0)
                this.result += ", ";
            this.result += names[i].text;
        }
    }
    visitFor(ctx) {
        const name = ctx.NAME();
        this.result += `for (let ${name} = `;
        ctx.getChild(0, LuaParser_1.ExpContext).accept(this);
        const direction = ctx.tryGetChild(2, LuaParser_1.ExpContext);
        let step;
        if (direction !== undefined) {
            step = parseInt(direction.text);
        }
        else {
            step = 1;
        }
        this.result += `; ${name}`;
        const end = ctx.getChild(1, LuaParser_1.ExpContext);
        if (step > 0) {
            this.result += ` <= `;
        }
        else {
            this.result += " >= ";
        }
        end.accept(this);
        this.result += `; ${name} += ${step}) `;
        ctx.getChild(0, LuaParser_1.BlockContext).accept(this);
    }
    visitUnopexp(ctx) {
        const operator = ctx.getChild(0, LuaParser_1.UnopContext);
        switch (operator.text) {
            case "#":
                this.result += "table.getn(";
                ctx.getChild(0, LuaParser_1.ExpContext).accept(this);
                this.result += ")";
                break;
            default:
                this.result += operator.text;
                ctx.getChild(0, LuaParser_1.ExpContext).accept(this);
                break;
        }
    }
    visitArgs(ctx) {
        const expList = ctx.tryGetChild(0, LuaParser_1.Explist1Context);
        if (ctx.childCount > 1) {
            this.result += "(";
            expList && expList.accept(this);
            this.result += ")";
        }
        else {
            ctx.getChild(0).accept(this);
        }
    }
    visitNameAndArgs(ctx) {
        const name = ctx.NAME();
        if (name) {
            this.result += ".";
            this.result += name;
        }
        ctx.getChild(0, LuaParser_1.ArgsContext).accept(this);
    }
    visitVarSuffix(ctx) {
        for (let i = 0;; i++) {
            const child = ctx.tryGetChild(0, LuaParser_1.NameAndArgsContext);
            if (!child)
                break;
            child.accept(this);
        }
        const exp = ctx.tryGetChild(0, LuaParser_1.ExpContext);
        if (exp) {
            this.result += '[';
            exp.accept(this);
            this.result += ']';
        }
        else {
            this.result += '.';
            this.result += ctx.NAME().text;
        }
    }
    visitOperand(ctx) {
        if (ctx.text == 'true') {
            this.result += "true";
        }
        else if (ctx.text == "nil") {
            this.result += "undefined";
        }
        else {
            ctx.getChild(0).accept(this);
        }
    }
    // visitExp(ctx: ExpContext):void{
    //     const operand = ctx.getChild<OperandContext>(0, OperandContext);
    //     let i = 0;
    //     while (true) {
    //         const binop = ctx.tryGetChild<BinopContext>(i, BinopContext);
    //         if (!binop) {
    //             break;
    //         }
    //         const exp = ctx.tryGetChild<
    //         i++;
    //     }
    // }
    visitVar(ctx) {
        const exp = ctx.tryGetChild(0, LuaParser_1.ExpContext);
        if (exp) {
            this.result += "(";
            exp.accept(this);
            this.result += ")";
        }
        else {
            this.result += ctx.NAME().text;
        }
        for (let i = 0;; i++) {
            const suffix = ctx.tryGetChild(i, LuaParser_1.VarSuffixContext);
            if (!suffix)
                break;
            suffix.accept(this);
        }
    }
    visitString(ctx) {
        const string = ctx.NORMALSTRING();
        if (string) {
            this.result += string.text;
        }
        else if (ctx.CHARSTRING()) {
            this.result += ctx.CHARSTRING().text;
        }
        else {
            this.result += '`';
            this.result += ctx.LONGSTRING().text;
            this.result += '`';
        }
    }
    visit(tree) {
    }
    /**
     * Visit the children of a node, and return a user-defined result
     * of the operation.
     *
     * @param node The {@link RuleNode} whose children should be visited.
     * @return The result of visiting the children of the node.
     */
    visitChildren(node) {
        for (let i = 0; i < node.childCount; i++) {
            node.getChild(i).accept(this);
        }
    }
    /**
     * Visit a terminal node, and return a user-defined result of the operation.
     *
     * @param node The {@link TerminalNode} to visit.
     * @return The result of visiting the node.
     */
    visitTerminal(node) {
        // switch (node.symbol.type) {
        //     case LuaParser.INT:
        //         this.result += node.symbol.text;
        //         break;
        //     case LuaParser.NAME:
        //         this.result += node.symbol.text;
        //         break;
        //     case LuaParser.NORMALSTRING:
        //         this.result += `"${node.symbol.text}"`;
        //         break;
        //     case LuaParser.T__0:
        //         if (node.symbol.text !== ';') console.log(`Unexpected line separator ${node.symbol.text}`);
        //         this.result += ';';
        //         break;
        //     case LuaParser.T__1:
        //         if (node.symbol.text !== '=') console.log(`Unexpected parameter separator ${node.symbol.text}`);
        //         this.result += "=";
        //         break;
        //     case LuaParser.T__3:
        //         if (node.symbol.text !== 'end') console.log(`Unexpected end ${node.symbol.text}`);
        //         this.result += "}";
        //         break;
        //     case LuaParser.T__8:
        //         if (node.symbol.text !== 'then') console.log(`Unexpected end ${node.symbol.text}`);
        //         this.result += "{";
        //         break;
        //     case LuaParser.T__10:
        //         if (node.symbol.text !== 'else') console.log(`Unexpected else ${node.symbol.text}`);
        //         this.result += "else";
        //         break;
        //     case LuaParser.T__12:
        //         if (node.symbol.text !== ',') console.log(`Unexpected parameter separator ${node.symbol.text}`);
        //         this.result += ",";
        //         break;
        //     case LuaParser.T__14:
        //         if (node.symbol.text !== 'function') console.log(`Unexpected function ${node.symbol.text}`);
        //         this.result += "function  ";
        //         break;
        //     case LuaParser.T__15:
        //         this.result += "var ";
        //         break;
        //     case LuaParser.T__16:
        //         if (node.symbol.text !== 'return') console.log(`Unexpected return ${node.symbol.text}`);
        //         this.result += "return ";
        //         break;
        //     case LuaParser.T__17:
        //         if (node.symbol.text !== '[') console.log(`Unexpected [ ${node.symbol.text}`);
        //         this.result += "[";
        //         break;
        //     case LuaParser.T__19:
        //         if (node.symbol.text !== ':') console.log(`Unexpected : ${node.symbol.text}`);
        //         this.result += ".";
        //         break;
        //     case LuaParser.T__24:
        //         if (node.symbol.text !== '(') console.log(`Unexpected ( ${node.symbol.text}`);
        //         this.result += "(";
        //         break;
        //     case LuaParser.T__25:
        //         if (node.symbol.text !== ')') console.log(`Unexpected ) ${node.symbol.text}`);
        //         this.result += ")";
        //         break;
        //     case LuaParser.T__26:
        //         if (node.symbol.text !== 'return') console.log(`Unexpected return ${node.symbol.text}`);
        //         this.result += "return ";
        //         break;
        //     case LuaParser.T__27:
        //         if (node.symbol.text !== ']') console.log(`Unexpected ] ${node.symbol.text}`);
        //         this.result += "]";
        //         break;
        //     case LuaParser.T__30:
        //         if (node.symbol.text !== '+') console.log(`Unexpected + ${node.symbol.text}`);
        //         this.result += "+";
        //         break;
        //     case LuaParser.T__40:
        //         if (node.symbol.text !== '+') console.log(`Unexpected + ${node.symbol.text}`);
        //         this.result += ">=";
        //         break;
        //     case LuaParser.T__43:
        //         if (node.symbol.text !== 'and') console.log(`Unexpected and ${node.symbol.text}`);
        //         this.result += "&&";
        //         break;
        //     default:
        //         this.result += node.symbol.text;
        //         console.log(`Unknown terminal ${node.symbol.type} of text ${node.symbol.text}`);
        // }
        // node.text;
    }
    /**
     * Visit an error node, and return a user-defined result of the operation.
     *
     * @param node The {@link ErrorNode} to visit.
     * @return The result of visiting the node.
     */
    visitErrorNode(node) { }
    startClass(name) {
        this.currentBlock.currentClass = name;
        this.result += `class ${this.currentBlock.currentClass} {\n`;
        this.tabs++;
        // this.writeTabs();
    }
    endClass() {
        if (!this.currentBlock.currentClass)
            return;
        this.result += "}\n";
        this.tabs--;
        this.currentBlock.currentClass = undefined;
    }
    writeTabs() {
        for (let i = 0; i < this.tabs; i++)
            this.result += "    ";
    }
}
exports.TsVisitor = TsVisitor;
//# sourceMappingURL=tsvisitor.js.map