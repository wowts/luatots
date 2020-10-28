// Generated from Lua.g by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ChunkContext } from "./LuaParser";
import { BlockContext } from "./LuaParser";
import { StatContext } from "./LuaParser";
import { DoblockContext } from "./LuaParser";
import { WhileContext } from "./LuaParser";
import { IfContext } from "./LuaParser";
import { ElseifContext } from "./LuaParser";
import { ElseContext } from "./LuaParser";
import { ForContext } from "./LuaParser";
import { ForinContext } from "./LuaParser";
import { FunctiondeclContext } from "./LuaParser";
import { LocalfunctiondeclContext } from "./LuaParser";
import { LocalvardeclContext } from "./LuaParser";
import { AssignmentContext } from "./LuaParser";
import { RepeatContext } from "./LuaParser";
import { LaststatContext } from "./LuaParser";
import { FuncnameContext } from "./LuaParser";
import { Varlist1Context } from "./LuaParser";
import { NamelistContext } from "./LuaParser";
import { Explist1Context } from "./LuaParser";
import { ExpContext } from "./LuaParser";
import { UnopexpContext } from "./LuaParser";
import { OperandContext } from "./LuaParser";
import { VarContext } from "./LuaParser";
import { PrefixexpContext } from "./LuaParser";
import { FunctioncallContext } from "./LuaParser";
import { VarOrExpContext } from "./LuaParser";
import { NameAndArgsContext } from "./LuaParser";
import { VarSuffixContext } from "./LuaParser";
import { ArgsContext } from "./LuaParser";
import { FunctionContext } from "./LuaParser";
import { FuncbodyContext } from "./LuaParser";
import { Parlist1Context } from "./LuaParser";
import { TableconstructorContext } from "./LuaParser";
import { FieldlistContext } from "./LuaParser";
import { FieldContext } from "./LuaParser";
import { FieldsepContext } from "./LuaParser";
import { BinopContext } from "./LuaParser";
import { UnopContext } from "./LuaParser";
import { NumberContext } from "./LuaParser";
import { StringContext } from "./LuaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LuaParser`.
 */
export interface LuaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.doblock`.
	 * @param ctx the parse tree
	 */
	enterDoblock?: (ctx: DoblockContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.doblock`.
	 * @param ctx the parse tree
	 */
	exitDoblock?: (ctx: DoblockContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.while`.
	 * @param ctx the parse tree
	 */
	enterWhile?: (ctx: WhileContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.while`.
	 * @param ctx the parse tree
	 */
	exitWhile?: (ctx: WhileContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.if`.
	 * @param ctx the parse tree
	 */
	enterIf?: (ctx: IfContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.if`.
	 * @param ctx the parse tree
	 */
	exitIf?: (ctx: IfContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.elseif`.
	 * @param ctx the parse tree
	 */
	enterElseif?: (ctx: ElseifContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.elseif`.
	 * @param ctx the parse tree
	 */
	exitElseif?: (ctx: ElseifContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.else`.
	 * @param ctx the parse tree
	 */
	enterElse?: (ctx: ElseContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.else`.
	 * @param ctx the parse tree
	 */
	exitElse?: (ctx: ElseContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.for`.
	 * @param ctx the parse tree
	 */
	enterFor?: (ctx: ForContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.for`.
	 * @param ctx the parse tree
	 */
	exitFor?: (ctx: ForContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.forin`.
	 * @param ctx the parse tree
	 */
	enterForin?: (ctx: ForinContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.forin`.
	 * @param ctx the parse tree
	 */
	exitForin?: (ctx: ForinContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.functiondecl`.
	 * @param ctx the parse tree
	 */
	enterFunctiondecl?: (ctx: FunctiondeclContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functiondecl`.
	 * @param ctx the parse tree
	 */
	exitFunctiondecl?: (ctx: FunctiondeclContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.localfunctiondecl`.
	 * @param ctx the parse tree
	 */
	enterLocalfunctiondecl?: (ctx: LocalfunctiondeclContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.localfunctiondecl`.
	 * @param ctx the parse tree
	 */
	exitLocalfunctiondecl?: (ctx: LocalfunctiondeclContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.localvardecl`.
	 * @param ctx the parse tree
	 */
	enterLocalvardecl?: (ctx: LocalvardeclContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.localvardecl`.
	 * @param ctx the parse tree
	 */
	exitLocalvardecl?: (ctx: LocalvardeclContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.laststat`.
	 * @param ctx the parse tree
	 */
	enterLaststat?: (ctx: LaststatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.laststat`.
	 * @param ctx the parse tree
	 */
	exitLaststat?: (ctx: LaststatContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.varlist1`.
	 * @param ctx the parse tree
	 */
	enterVarlist1?: (ctx: Varlist1Context) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varlist1`.
	 * @param ctx the parse tree
	 */
	exitVarlist1?: (ctx: Varlist1Context) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	enterNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	exitNamelist?: (ctx: NamelistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.explist1`.
	 * @param ctx the parse tree
	 */
	enterExplist1?: (ctx: Explist1Context) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.explist1`.
	 * @param ctx the parse tree
	 */
	exitExplist1?: (ctx: Explist1Context) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.unopexp`.
	 * @param ctx the parse tree
	 */
	enterUnopexp?: (ctx: UnopexpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.unopexp`.
	 * @param ctx the parse tree
	 */
	exitUnopexp?: (ctx: UnopexpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp?: (ctx: PrefixexpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFunctioncall?: (ctx: FunctioncallContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	enterVarOrExp?: (ctx: VarOrExpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varOrExp`.
	 * @param ctx the parse tree
	 */
	exitVarOrExp?: (ctx: VarOrExpContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	enterNameAndArgs?: (ctx: NameAndArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.nameAndArgs`.
	 * @param ctx the parse tree
	 */
	exitNameAndArgs?: (ctx: NameAndArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	enterVarSuffix?: (ctx: VarSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varSuffix`.
	 * @param ctx the parse tree
	 */
	exitVarSuffix?: (ctx: VarSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	enterFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	exitFuncbody?: (ctx: FuncbodyContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.parlist1`.
	 * @param ctx the parse tree
	 */
	enterParlist1?: (ctx: Parlist1Context) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.parlist1`.
	 * @param ctx the parse tree
	 */
	exitParlist1?: (ctx: Parlist1Context) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	enterFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	exitFieldlist?: (ctx: FieldlistContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.binop`.
	 * @param ctx the parse tree
	 */
	enterBinop?: (ctx: BinopContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.binop`.
	 * @param ctx the parse tree
	 */
	exitBinop?: (ctx: BinopContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.unop`.
	 * @param ctx the parse tree
	 */
	enterUnop?: (ctx: UnopContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.unop`.
	 * @param ctx the parse tree
	 */
	exitUnop?: (ctx: UnopContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

