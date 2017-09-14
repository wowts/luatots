// Generated from Lua.g by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ChunkContext } from './LuaParser';
import { BlockContext } from './LuaParser';
import { StatContext } from './LuaParser';
import { DoblockContext } from './LuaParser';
import { WhileContext } from './LuaParser';
import { IfContext } from './LuaParser';
import { ElseifContext } from './LuaParser';
import { ElseContext } from './LuaParser';
import { ForContext } from './LuaParser';
import { ForinContext } from './LuaParser';
import { FunctiondeclContext } from './LuaParser';
import { LocalfunctiondeclContext } from './LuaParser';
import { LocalvardeclContext } from './LuaParser';
import { AssignmentContext } from './LuaParser';
import { RepeatContext } from './LuaParser';
import { LaststatContext } from './LuaParser';
import { FuncnameContext } from './LuaParser';
import { Varlist1Context } from './LuaParser';
import { NamelistContext } from './LuaParser';
import { Explist1Context } from './LuaParser';
import { ExpContext } from './LuaParser';
import { UnopexpContext } from './LuaParser';
import { OperandContext } from './LuaParser';
import { VarContext } from './LuaParser';
import { PrefixexpContext } from './LuaParser';
import { FunctioncallContext } from './LuaParser';
import { VarOrExpContext } from './LuaParser';
import { NameAndArgsContext } from './LuaParser';
import { VarSuffixContext } from './LuaParser';
import { ArgsContext } from './LuaParser';
import { FunctionContext } from './LuaParser';
import { FuncbodyContext } from './LuaParser';
import { Parlist1Context } from './LuaParser';
import { TableconstructorContext } from './LuaParser';
import { FieldlistContext } from './LuaParser';
import { FieldContext } from './LuaParser';
import { FieldsepContext } from './LuaParser';
import { BinopContext } from './LuaParser';
import { UnopContext } from './LuaParser';
import { NumberContext } from './LuaParser';
import { StringContext } from './LuaParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LuaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChunk?: (ctx: ChunkContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat?: (ctx: StatContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.doblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoblock?: (ctx: DoblockContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile?: (ctx: WhileContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf?: (ctx: IfContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.elseif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif?: (ctx: ElseifContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse?: (ctx: ElseContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor?: (ctx: ForContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.forin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForin?: (ctx: ForinContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.functiondecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctiondecl?: (ctx: FunctiondeclContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.localfunctiondecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalfunctiondecl?: (ctx: LocalfunctiondeclContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.localvardecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalvardecl?: (ctx: LocalvardeclContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.laststat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLaststat?: (ctx: LaststatContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncname?: (ctx: FuncnameContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.varlist1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist1?: (ctx: Varlist1Context) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamelist?: (ctx: NamelistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.explist1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplist1?: (ctx: Explist1Context) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.unopexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnopexp?: (ctx: UnopexpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixexp?: (ctx: PrefixexpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctioncall?: (ctx: FunctioncallContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.varOrExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrExp?: (ctx: VarOrExpContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.nameAndArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAndArgs?: (ctx: NameAndArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.varSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarSuffix?: (ctx: VarSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncbody?: (ctx: FuncbodyContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.parlist1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParlist1?: (ctx: Parlist1Context) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableconstructor?: (ctx: TableconstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldlist?: (ctx: FieldlistContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsep?: (ctx: FieldsepContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinop?: (ctx: BinopContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.unop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnop?: (ctx: UnopContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

