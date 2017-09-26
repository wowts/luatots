/*
 * Lua 5.1 grammar
 * 
 * Nicolai Mainiero
 * May 2007
 * 
 * This is a Lua (http://www.lua.org) grammar for the version 5.1 for ANTLR 3.
 * I tested it with basic and extended examples and it worked fine. It is also used
 * for LunarEclipse (http://lunareclipse.sf.net) a Lua editor based on Eclipse.
 * 
 * Thanks to Johannes Luber and Gavin Lambert who helped me with some mutually left recursion.
 *  
 */

grammar Lua;

chunk : (stat (';')?)* (laststat (';')?)?;

block : chunk;

stat : assignment | 
	functioncall | 
	doblock | 
	while | 
	repeat | 
	if | 
	for | 
	forin | 
	functiondecl | 
	localfunctiondecl | 
	localvardecl ;

doblock: 'do' block 'end';

while: 'while' exp 'do' block 'end';

if: 'if' exp 'then' block (elseif)* (else)? 'end';

elseif: 'elseif' exp 'then' block;

else: 'else' block;

for: 'for' NAME '=' exp ',' exp (',' exp)? 'do' block 'end';

forin: 'for' namelist 'in' explist1 'do' block 'end';

functiondecl: 'function' funcname funcbody;

localfunctiondecl: 'local' 'function' NAME funcbody;

localvardecl: 'local' namelist ('=' explist1)?;

assignment: varlist1 '=' explist1;

repeat: 'repeat' block 'until' exp;

laststat : 'return' (explist1)? | 'break';

funcname : NAME ('.' NAME)* (':' NAME)? ;

varlist1 : var (',' var)*;


namelist : NAME (',' NAME)*;

explist1 : (exp ',')* exp;

exp : operand (binop exp)* ;

unopexp: unop operand;

operand: 'nil' | 'false' | 'true' | number | string | SPREAD | function | prefixexp | tableconstructor | unopexp;

var: (NAME | '(' exp ')' varSuffix) varSuffix*;

prefixexp: varOrExp nameAndArgs*;

functioncall: varOrExp nameAndArgs+;

/*
var :  NAME | prefixexp '[' exp ']' | prefixexp '.' NAME; 

prefixexp : var | functioncall | '(' exp ')';

functioncall :  prefixexp args | prefixexp ':' NAME args ;
*/

varOrExp: var | '(' exp ')';

nameAndArgs: (':' NAME)? args;

varSuffix: nameAndArgs* ('[' exp ']' | '.' NAME);

args :  '(' (explist1)? ')' | tableconstructor | string ;

function : 'function' funcbody;

funcbody : '(' (parlist1)? ')' block 'end';

parlist1 : namelist (',' SPREAD)? | SPREAD;

SPREAD: '...';

tableconstructor : '{' (fieldlist)? '}';

fieldlist : field (fieldsep field)* (fieldsep)?;

field : '[' exp ']' '=' exp | NAME '=' exp | exp;

fieldsep : ',' | ';';

binop : '+' | '-' | '*' | '/' | '^' | '%' | '..' | 
		 '<' | '<=' | '>' | '>=' | '==' | '~=' | 
		 'and' | 'or';

unop : '-' | 'not' | '#';

number : INT | HEX | FLOAT | HEX_FLOAT;

string	: NORMALSTRING | CHARSTRING | LONGSTRING;


// LEXER

NAME
    : [a-zA-Z_][a-zA-Z_0-9]*
    ;

NORMALSTRING
    : '"' ( EscapeSequence | ~('\\'|'"') )* '"' 
    ;

CHARSTRING
    : '\'' ( EscapeSequence | ~('\''|'\\') )* '\''
    ;

LONGSTRING
    : '[' NESTED_STR ']'
    ;

fragment
NESTED_STR
    : '=' NESTED_STR '='
    | '[' .*? ']'
    ;

INT
    : Digit+
    ;

HEX
    : '0' [xX] HexDigit+
    ;

FLOAT
    : Digit+ '.' Digit* ExponentPart?
    | '.' Digit+ ExponentPart?
    | Digit+ ExponentPart
    ;

HEX_FLOAT
    : '0' [xX] HexDigit+ '.' HexDigit* HexExponentPart?
    | '0' [xX] '.' HexDigit+ HexExponentPart?
    | '0' [xX] HexDigit+ HexExponentPart
    ;

fragment
ExponentPart
    : [eE] [+-]? Digit+
    ;

fragment
HexExponentPart
    : [pP] [+-]? Digit+
    ;

fragment
EscapeSequence
    : '\\' [abfnrtvz"'\\]
    | '\\' '\r'? '\n'
    | DecimalEscape
    | HexEscape
    | UtfEscape
    ;
    
fragment
DecimalEscape
    : '\\' Digit
    | '\\' Digit Digit
    | '\\' [0-2] Digit Digit
    ;
    
fragment
HexEscape
    : '\\' 'x' HexDigit HexDigit
    ;
fragment
UtfEscape
    : '\\' 'u{' HexDigit+ '}'
    ;
fragment
Digit
    : [0-9]
    ;
fragment
HexDigit
    : [0-9a-fA-F]
    ;
COMMENT
    : '--[' NESTED_STR ']' -> channel(HIDDEN)
    ;
    
LINE_COMMENT
    : '--'
    (                                               // --
    | '[' '='*                                      // --[==
    | '[' '='* ~('='|'['|'\r'|'\n') ~('\r'|'\n')*   // --[==AA
    | ~('['|'\r'|'\n') ~('\r'|'\n')*                // --AAA
    ) ('\r\n'|'\r'|'\n'|EOF)
    -> channel(HIDDEN)
    ;
    
WS  
    : [ \t\u000C\r\n]+ -> skip
    ;
SHEBANG
    : '#' '!' ~('\n'|'\r')* -> channel(HIDDEN)
    ;