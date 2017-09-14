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

options {
  backtrack=true;
}

chunk : (stat (';')?)* (laststat (';')?)?;

block : chunk;

stat :  assignment | 
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

unopexp: unop exp;

operand: 'nil' | 'false' | 'true' | number | string | '...' | function | prefixexp | tableconstructor | unopexp;

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

parlist1 : namelist (',' '...')? | '...';

tableconstructor : '{' (fieldlist)? '}';

fieldlist : field (fieldsep field)* (fieldsep)?;

field : '[' exp ']' '=' exp | NAME '=' exp | exp;

fieldsep : ',' | ';';

binop : '+' | '-' | '*' | '/' | '^' | '%' | '..' | 
		 '<' | '<=' | '>' | '>=' | '==' | '~=' | 
		 'and' | 'or';

unop : '-' | 'not' | '#';

number : INT | FLOAT | EXP | HEX;

string	: NORMALSTRING | CHARSTRING | LONGSTRING;


// LEXER

NAME	:('a'..'z'|'A'..'Z'|'_')('a'..'z'|'A'..'Z'|'_'|'0'..'9')*
	;

INT	: ('0'..'9')+;

FLOAT 	:INT '.' INT ;

EXP	: (INT| FLOAT) ('E'|'e') ('-')? INT;

HEX	:'0x' ('0'..'9'| 'a'..'f')+ ;

	

NORMALSTRING
    :  '"' ( EscapeSequence | ~('\\'|'"') )* '"' 
    ;

CHARSTRING
   :	'\'' ( EscapeSequence | ~('\''|'\\') )* '\''
   ;

LONGSTRING
	:	'['('=')*'[' ( EscapeSequence | ~('\\'|']') )* ']'('=')*']'
	;

fragment
EscapeSequence
    :   '\\' ('b'|'t'|'n'|'f'|'r'|'\"'|'\''|'\\')
    |   UnicodeEscape
    |   OctalEscape
    ;
    
fragment
OctalEscape
    :   '\\' ('0'..'3') ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7') ('0'..'7')
    |   '\\' ('0'..'7')
    ;
    
fragment
UnicodeEscape
    :   '\\' 'u' HexDigit HexDigit HexDigit HexDigit
    ;
    
fragment
HexDigit : ('0'..'9'|'a'..'f'|'A'..'F') ;


COMMENT
    :   '--[[' ( . )*? ']]' {skip();}
    ;
    
LINE_COMMENT
    : '--' ~('\n'|'\r')* '\r'? '\n' {skip();}
    ;
    
    
WS  :  (' '|'\t'|'\u000C') {skip();}
    ;
    
NEWLINE	: ('\r')? '\n' {skip();}
	;
