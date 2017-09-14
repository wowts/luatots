import { LuaVisitor } from './LuaVisitor';
import { ChunkContext, BlockContext, NumberContext, LuaParser, StatContext, IfContext, AssignmentContext, Varlist1Context, Explist1Context, LocalvardeclContext, NamelistContext, VarContext, ExpContext, OperandContext, BinopContext, LocalfunctiondeclContext, FuncbodyContext, Parlist1Context, ForContext, UnopContext, UnopexpContext, FuncnameContext, ArgsContext, NameAndArgsContext } from './LuaParser';

import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { Console } from 'console';

export class TsVisitor implements LuaVisitor<void> {
    public result: string = "";
    visitBlock(ctx: BlockContext): void {
        this.result += "{";
        this.visitChildren(ctx);
        this.result += "}";
    }

    visitStat(ctx: StatContext):void{
        this.visitChildren(ctx);
        const lastChar = this.result[this.result.length - 1];
        if (lastChar === '}' || lastChar === "\n") this.result += "\n";
        else this.result += ";\n";
    }

    visitNumber(ctx: NumberContext): void {
        if (ctx.INT()) {
            this.result += ctx.INT().symbol.text;
        }
    }

    visitIf(ctx: IfContext): void {
        this.result += "if (";
        console.log(ctx.getChild(0).text);
        ctx.getChild(1).accept(this);
        this.result += ")";
        ctx.getChild(3).accept(this);
    }

    visitAssignment(ctx: AssignmentContext): void {
        const vars = ctx.getChild<Varlist1Context>(0, Varlist1Context);
        if (vars.childCount> 1) {
            this.result += "[";
        }
        vars.accept(this);
        if (vars.childCount> 1) {
            this.result += "]";
        }
        this.result += " = ";
        const exps = ctx.getChild<Explist1Context>(0, Explist1Context);
        if (exps.childCount > 1 || exps.childCount == 0) {
            throw Error("Unnsport exp list > 1");
        }
        exps.getChild<ExpContext>(0, ExpContext).accept(this);
    }

    visitLocalvardecl(ctx: LocalvardeclContext):void{
        const namelist = ctx.getChild<NamelistContext>(0, NamelistContext);
        this.result += "let ";
        if (namelist.childCount>  1){
            this.result += "[";
        }
        namelist.accept(this);
        if (namelist.childCount>  1){
            this.result += "]";
        }

        const explist1 = ctx.tryGetChild<Explist1Context>(0, Explist1Context);
        if (explist1) {
            this.result += " = ";
            explist1.accept(this);
        }
    }

    visitExplist1(ctx: Explist1Context) {
        for (let i = 0; i < ctx.childCount; i++) {
            if (i > 0) this.result += ", ";
            ctx.getChild(i).accept(this);
        }
    }

    visitBinop(ctx: BinopContext) {
        this.result += ` ${ctx.text} `;
    }

    visitLocalfunctiondecl(ctx: LocalfunctiondeclContext) {
        this.result += `const ${ctx.NAME().text} = function`;
        ctx.getChild<FuncbodyContext>(0, FuncbodyContext).accept(this);
    }

    visitFuncbody(ctx: FuncbodyContext) {
        this.result += '(';
        ctx.getChild<Parlist1Context>(0, Parlist1Context).accept(this);
        this.result += ') ';
        ctx.getChild<BlockContext>(0, BlockContext).accept(this);
    }

    visitParlist1(ctx: Parlist1Context) {
        ctx.getChild<NamelistContext>(0, NamelistContext).accept(this);
    }

    // visitFuncname(ctx: FuncnameContext) {
    //     this.result += ctx.NAME[0];
    //     if (ctx.NAME.length > 1) {
    //         this.result += ".";
    //         this.result += ctx.NAME[1];
    //     }
    // }

    visitNamelist(ctx: NamelistContext) {
        const names = ctx.NAME();
        for (let i = 0; i< names.length; i++){
            if (i != 0) this.result += ", ";
            this.result += names[i].text;
        }
    }

    visitFor(ctx: ForContext) {
        const name = ctx.NAME();
        this.result += `for (let ${name} = `;
        ctx.getChild<ExpContext>(0, ExpContext).accept(this);
        const direction = ctx.tryGetChild<ExpContext>(2, ExpContext);
        let step;
        if (direction !== undefined) {
            step = parseInt(direction.text);
        }
        else {
            step = 1;
        }
        this.result += `; ${name}`;
        const end = ctx.getChild<ExpContext>(1, ExpContext);
        if (step > 0) {
            this.result += ` <= `;
        }
        else {
            this.result += " >= ";
        }
        end.accept(this);
        this.result += `; ${name} += ${step}) `;
        ctx.getChild<BlockContext>(0, BlockContext).accept(this);
    }

    visitUnopexp(ctx: UnopexpContext) {
        const operator = ctx.getChild<UnopContext>(0, UnopContext);
        switch (operator.text) {
            case "#":
                this.result += "luat_length(";
                ctx.getChild<ExpContext>(0, ExpContext).accept(this);
                this.result += ")";
                break;

            default:
                this.result += operator.text;
                ctx.getChild<ExpContext>(0, ExpContext).accept(this);
                break;
        }
    }

    visitArgs(ctx: ArgsContext) {
        const expList = ctx.tryGetChild(0, Explist1Context);
        if (ctx.childCount > 1) {
            this.result += "(";
            expList && expList.accept(this);
            this.result += ")";
        }
        else{
            ctx.getChild(0).accept(this);
        }
    }

    visitNameAndArgs(ctx: NameAndArgsContext) {
        const name = ctx.NAME();
        if (name) {
            this.result += ".";
            this.result += name;
        }
        ctx.getChild(0, ArgsContext).accept(this);
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

    visitVar(ctx: VarContext): void {
        this.result += ctx.NAME().text;
    }

    visit(tree: ParseTree): void {
    }
    /**
     * Visit the children of a node, and return a user-defined result
     * of the operation.
     *
     * @param node The {@link RuleNode} whose children should be visited.
     * @return The result of visiting the children of the node.
     */
    visitChildren(node: RuleNode):void {
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
    visitTerminal(node: TerminalNode):void {
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
    visitErrorNode(node: ErrorNode): void {}
}