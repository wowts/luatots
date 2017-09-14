"use strict";
// Generated from Lua.g by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class LuaParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(LuaParser._ATN, this);
    }
    get vocabulary() {
        return LuaParser.VOCABULARY;
    }
    get grammarFileName() { return "Lua.g"; }
    get ruleNames() { return LuaParser.ruleNames; }
    get serializedATN() { return LuaParser._serializedATN; }
    chunk() {
        let _localctx = new ChunkContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, LuaParser.RULE_chunk);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 88;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__1) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__8) | (1 << LuaParser.T__12) | (1 << LuaParser.T__13) | (1 << LuaParser.T__14) | (1 << LuaParser.T__24))) !== 0) || _la === LuaParser.NAME) {
                    {
                        {
                            this.state = 82;
                            this.stat();
                            this.state = 84;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === LuaParser.T__0) {
                                {
                                    this.state = 83;
                                    this.match(LuaParser.T__0);
                                }
                            }
                        }
                    }
                    this.state = 90;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__16 || _la === LuaParser.T__17) {
                    {
                        this.state = 91;
                        this.laststat();
                        this.state = 93;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LuaParser.T__0) {
                            {
                                this.state = 92;
                                this.match(LuaParser.T__0);
                            }
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, LuaParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 97;
                this.chunk();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    stat() {
        let _localctx = new StatContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, LuaParser.RULE_stat);
        try {
            this.state = 110;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 99;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 100;
                        this.functioncall();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 101;
                        this.doblock();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 102;
                        this.while();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 103;
                        this.repeat();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 104;
                        this.if();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 105;
                        this.for();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 106;
                        this.forin();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 107;
                        this.functiondecl();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 108;
                        this.localfunctiondecl();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 109;
                        this.localvardecl();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    doblock() {
        let _localctx = new DoblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, LuaParser.RULE_doblock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.match(LuaParser.T__1);
                this.state = 113;
                this.block();
                this.state = 114;
                this.match(LuaParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    while() {
        let _localctx = new WhileContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, LuaParser.RULE_while);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 116;
                this.match(LuaParser.T__3);
                this.state = 117;
                this.exp();
                this.state = 118;
                this.match(LuaParser.T__1);
                this.state = 119;
                this.block();
                this.state = 120;
                this.match(LuaParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    if() {
        let _localctx = new IfContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, LuaParser.RULE_if);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.match(LuaParser.T__4);
                this.state = 123;
                this.exp();
                this.state = 124;
                this.match(LuaParser.T__5);
                this.state = 125;
                this.block();
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LuaParser.T__6) {
                    {
                        {
                            this.state = 126;
                            this.elseif();
                        }
                    }
                    this.state = 131;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__7) {
                    {
                        this.state = 132;
                        this.else();
                    }
                }
                this.state = 135;
                this.match(LuaParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    elseif() {
        let _localctx = new ElseifContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, LuaParser.RULE_elseif);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 137;
                this.match(LuaParser.T__6);
                this.state = 138;
                this.exp();
                this.state = 139;
                this.match(LuaParser.T__5);
                this.state = 140;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    else() {
        let _localctx = new ElseContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, LuaParser.RULE_else);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                this.match(LuaParser.T__7);
                this.state = 143;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    for() {
        let _localctx = new ForContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, LuaParser.RULE_for);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(LuaParser.T__8);
                this.state = 146;
                this.match(LuaParser.NAME);
                this.state = 147;
                this.match(LuaParser.T__9);
                this.state = 148;
                this.exp();
                this.state = 149;
                this.match(LuaParser.T__10);
                this.state = 150;
                this.exp();
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__10) {
                    {
                        this.state = 151;
                        this.match(LuaParser.T__10);
                        this.state = 152;
                        this.exp();
                    }
                }
                this.state = 155;
                this.match(LuaParser.T__1);
                this.state = 156;
                this.block();
                this.state = 157;
                this.match(LuaParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    forin() {
        let _localctx = new ForinContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, LuaParser.RULE_forin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 159;
                this.match(LuaParser.T__8);
                this.state = 160;
                this.namelist();
                this.state = 161;
                this.match(LuaParser.T__11);
                this.state = 162;
                this.explist1();
                this.state = 163;
                this.match(LuaParser.T__1);
                this.state = 164;
                this.block();
                this.state = 165;
                this.match(LuaParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    functiondecl() {
        let _localctx = new FunctiondeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, LuaParser.RULE_functiondecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.match(LuaParser.T__12);
                this.state = 168;
                this.funcname();
                this.state = 169;
                this.funcbody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    localfunctiondecl() {
        let _localctx = new LocalfunctiondeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, LuaParser.RULE_localfunctiondecl);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.match(LuaParser.T__13);
                this.state = 172;
                this.match(LuaParser.T__12);
                this.state = 173;
                this.match(LuaParser.NAME);
                this.state = 174;
                this.funcbody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    localvardecl() {
        let _localctx = new LocalvardeclContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, LuaParser.RULE_localvardecl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 176;
                this.match(LuaParser.T__13);
                this.state = 177;
                this.namelist();
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__9) {
                    {
                        this.state = 178;
                        this.match(LuaParser.T__9);
                        this.state = 179;
                        this.explist1();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, LuaParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 182;
                this.varlist1();
                this.state = 183;
                this.match(LuaParser.T__9);
                this.state = 184;
                this.explist1();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    repeat() {
        let _localctx = new RepeatContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, LuaParser.RULE_repeat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 186;
                this.match(LuaParser.T__14);
                this.state = 187;
                this.block();
                this.state = 188;
                this.match(LuaParser.T__15);
                this.state = 189;
                this.exp();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    laststat() {
        let _localctx = new LaststatContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, LuaParser.RULE_laststat);
        let _la;
        try {
            this.state = 196;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LuaParser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 191;
                        this.match(LuaParser.T__16);
                        this.state = 193;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__12) | (1 << LuaParser.T__20) | (1 << LuaParser.T__21) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuaParser.T__31 - 32)) | (1 << (LuaParser.T__45 - 32)) | (1 << (LuaParser.T__46 - 32)) | (1 << (LuaParser.NAME - 32)) | (1 << (LuaParser.INT - 32)) | (1 << (LuaParser.FLOAT - 32)) | (1 << (LuaParser.EXP - 32)) | (1 << (LuaParser.HEX - 32)) | (1 << (LuaParser.NORMALSTRING - 32)) | (1 << (LuaParser.CHARSTRING - 32)) | (1 << (LuaParser.LONGSTRING - 32)))) !== 0)) {
                            {
                                this.state = 192;
                                this.explist1();
                            }
                        }
                    }
                    break;
                case LuaParser.T__17:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 195;
                        this.match(LuaParser.T__17);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    funcname() {
        let _localctx = new FuncnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, LuaParser.RULE_funcname);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(LuaParser.NAME);
                this.state = 203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LuaParser.T__18) {
                    {
                        {
                            this.state = 199;
                            this.match(LuaParser.T__18);
                            this.state = 200;
                            this.match(LuaParser.NAME);
                        }
                    }
                    this.state = 205;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__19) {
                    {
                        this.state = 206;
                        this.match(LuaParser.T__19);
                        this.state = 207;
                        this.match(LuaParser.NAME);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    varlist1() {
        let _localctx = new Varlist1Context(this._ctx, this.state);
        this.enterRule(_localctx, 34, LuaParser.RULE_varlist1);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.var();
                this.state = 215;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === LuaParser.T__10) {
                    {
                        {
                            this.state = 211;
                            this.match(LuaParser.T__10);
                            this.state = 212;
                            this.var();
                        }
                    }
                    this.state = 217;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    namelist() {
        let _localctx = new NamelistContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, LuaParser.RULE_namelist);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                this.match(LuaParser.NAME);
                this.state = 223;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 219;
                                this.match(LuaParser.T__10);
                                this.state = 220;
                                this.match(LuaParser.NAME);
                            }
                        }
                    }
                    this.state = 225;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    explist1() {
        let _localctx = new Explist1Context(this._ctx, this.state);
        this.enterRule(_localctx, 38, LuaParser.RULE_explist1);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 226;
                                this.exp();
                                this.state = 227;
                                this.match(LuaParser.T__10);
                            }
                        }
                    }
                    this.state = 233;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                }
                this.state = 234;
                this.exp();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    exp() {
        let _localctx = new ExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, LuaParser.RULE_exp);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.operand();
                this.state = 242;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 237;
                                this.binop();
                                this.state = 238;
                                this.exp();
                            }
                        }
                    }
                    this.state = 244;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    unopexp() {
        let _localctx = new UnopexpContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, LuaParser.RULE_unopexp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 245;
                this.unop();
                this.state = 246;
                this.exp();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    operand() {
        let _localctx = new OperandContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, LuaParser.RULE_operand);
        try {
            this.state = 258;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LuaParser.T__20:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 248;
                        this.match(LuaParser.T__20);
                    }
                    break;
                case LuaParser.T__21:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 249;
                        this.match(LuaParser.T__21);
                    }
                    break;
                case LuaParser.T__22:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 250;
                        this.match(LuaParser.T__22);
                    }
                    break;
                case LuaParser.INT:
                case LuaParser.FLOAT:
                case LuaParser.EXP:
                case LuaParser.HEX:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 251;
                        this.number();
                    }
                    break;
                case LuaParser.NORMALSTRING:
                case LuaParser.CHARSTRING:
                case LuaParser.LONGSTRING:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 252;
                        this.string();
                    }
                    break;
                case LuaParser.T__23:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 253;
                        this.match(LuaParser.T__23);
                    }
                    break;
                case LuaParser.T__12:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 254;
                        this.function();
                    }
                    break;
                case LuaParser.T__24:
                case LuaParser.NAME:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 255;
                        this.prefixexp();
                    }
                    break;
                case LuaParser.T__28:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 256;
                        this.tableconstructor();
                    }
                    break;
                case LuaParser.T__31:
                case LuaParser.T__45:
                case LuaParser.T__46:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 257;
                        this.unopexp();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    var() {
        let _localctx = new VarContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, LuaParser.RULE_var);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 266;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LuaParser.NAME:
                        {
                            this.state = 260;
                            this.match(LuaParser.NAME);
                        }
                        break;
                    case LuaParser.T__24:
                        {
                            this.state = 261;
                            this.match(LuaParser.T__24);
                            this.state = 262;
                            this.exp();
                            this.state = 263;
                            this.match(LuaParser.T__25);
                            this.state = 264;
                            this.varSuffix();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 271;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 268;
                                this.varSuffix();
                            }
                        }
                    }
                    this.state = 273;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    prefixexp() {
        let _localctx = new PrefixexpContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, LuaParser.RULE_prefixexp);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 274;
                this.varOrExp();
                this.state = 278;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 275;
                                this.nameAndArgs();
                            }
                        }
                    }
                    this.state = 280;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    functioncall() {
        let _localctx = new FunctioncallContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, LuaParser.RULE_functioncall);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this.varOrExp();
                this.state = 283;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 282;
                                    this.nameAndArgs();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 285;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    varOrExp() {
        let _localctx = new VarOrExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, LuaParser.RULE_varOrExp);
        try {
            this.state = 292;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 287;
                        this.var();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 288;
                        this.match(LuaParser.T__24);
                        this.state = 289;
                        this.exp();
                        this.state = 290;
                        this.match(LuaParser.T__25);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    nameAndArgs() {
        let _localctx = new NameAndArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, LuaParser.RULE_nameAndArgs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__19) {
                    {
                        this.state = 294;
                        this.match(LuaParser.T__19);
                        this.state = 295;
                        this.match(LuaParser.NAME);
                    }
                }
                this.state = 298;
                this.args();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    varSuffix() {
        let _localctx = new VarSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, LuaParser.RULE_varSuffix);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__19) | (1 << LuaParser.T__24) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LuaParser.NORMALSTRING - 53)) | (1 << (LuaParser.CHARSTRING - 53)) | (1 << (LuaParser.LONGSTRING - 53)))) !== 0)) {
                    {
                        {
                            this.state = 300;
                            this.nameAndArgs();
                        }
                    }
                    this.state = 305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 312;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case LuaParser.T__26:
                        {
                            this.state = 306;
                            this.match(LuaParser.T__26);
                            this.state = 307;
                            this.exp();
                            this.state = 308;
                            this.match(LuaParser.T__27);
                        }
                        break;
                    case LuaParser.T__18:
                        {
                            this.state = 310;
                            this.match(LuaParser.T__18);
                            this.state = 311;
                            this.match(LuaParser.NAME);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    args() {
        let _localctx = new ArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, LuaParser.RULE_args);
        let _la;
        try {
            this.state = 321;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LuaParser.T__24:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 314;
                        this.match(LuaParser.T__24);
                        this.state = 316;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__12) | (1 << LuaParser.T__20) | (1 << LuaParser.T__21) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuaParser.T__31 - 32)) | (1 << (LuaParser.T__45 - 32)) | (1 << (LuaParser.T__46 - 32)) | (1 << (LuaParser.NAME - 32)) | (1 << (LuaParser.INT - 32)) | (1 << (LuaParser.FLOAT - 32)) | (1 << (LuaParser.EXP - 32)) | (1 << (LuaParser.HEX - 32)) | (1 << (LuaParser.NORMALSTRING - 32)) | (1 << (LuaParser.CHARSTRING - 32)) | (1 << (LuaParser.LONGSTRING - 32)))) !== 0)) {
                            {
                                this.state = 315;
                                this.explist1();
                            }
                        }
                        this.state = 318;
                        this.match(LuaParser.T__25);
                    }
                    break;
                case LuaParser.T__28:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 319;
                        this.tableconstructor();
                    }
                    break;
                case LuaParser.NORMALSTRING:
                case LuaParser.CHARSTRING:
                case LuaParser.LONGSTRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 320;
                        this.string();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function() {
        let _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, LuaParser.RULE_function);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 323;
                this.match(LuaParser.T__12);
                this.state = 324;
                this.funcbody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    funcbody() {
        let _localctx = new FuncbodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, LuaParser.RULE_funcbody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 326;
                this.match(LuaParser.T__24);
                this.state = 328;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__23 || _la === LuaParser.NAME) {
                    {
                        this.state = 327;
                        this.parlist1();
                    }
                }
                this.state = 330;
                this.match(LuaParser.T__25);
                this.state = 331;
                this.block();
                this.state = 332;
                this.match(LuaParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parlist1() {
        let _localctx = new Parlist1Context(this._ctx, this.state);
        this.enterRule(_localctx, 64, LuaParser.RULE_parlist1);
        let _la;
        try {
            this.state = 340;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case LuaParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 334;
                        this.namelist();
                        this.state = 337;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === LuaParser.T__10) {
                            {
                                this.state = 335;
                                this.match(LuaParser.T__10);
                                this.state = 336;
                                this.match(LuaParser.T__23);
                            }
                        }
                    }
                    break;
                case LuaParser.T__23:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 339;
                        this.match(LuaParser.T__23);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tableconstructor() {
        let _localctx = new TableconstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, LuaParser.RULE_tableconstructor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.match(LuaParser.T__28);
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__12) | (1 << LuaParser.T__20) | (1 << LuaParser.T__21) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__26) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuaParser.T__31 - 32)) | (1 << (LuaParser.T__45 - 32)) | (1 << (LuaParser.T__46 - 32)) | (1 << (LuaParser.NAME - 32)) | (1 << (LuaParser.INT - 32)) | (1 << (LuaParser.FLOAT - 32)) | (1 << (LuaParser.EXP - 32)) | (1 << (LuaParser.HEX - 32)) | (1 << (LuaParser.NORMALSTRING - 32)) | (1 << (LuaParser.CHARSTRING - 32)) | (1 << (LuaParser.LONGSTRING - 32)))) !== 0)) {
                    {
                        this.state = 343;
                        this.fieldlist();
                    }
                }
                this.state = 346;
                this.match(LuaParser.T__29);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    fieldlist() {
        let _localctx = new FieldlistContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, LuaParser.RULE_fieldlist);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.field();
                this.state = 354;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 349;
                                this.fieldsep();
                                this.state = 350;
                                this.field();
                            }
                        }
                    }
                    this.state = 356;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                }
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === LuaParser.T__0 || _la === LuaParser.T__10) {
                    {
                        this.state = 357;
                        this.fieldsep();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field() {
        let _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, LuaParser.RULE_field);
        try {
            this.state = 370;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 360;
                        this.match(LuaParser.T__26);
                        this.state = 361;
                        this.exp();
                        this.state = 362;
                        this.match(LuaParser.T__27);
                        this.state = 363;
                        this.match(LuaParser.T__9);
                        this.state = 364;
                        this.exp();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 366;
                        this.match(LuaParser.NAME);
                        this.state = 367;
                        this.match(LuaParser.T__9);
                        this.state = 368;
                        this.exp();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 369;
                        this.exp();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    fieldsep() {
        let _localctx = new FieldsepContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, LuaParser.RULE_fieldsep);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                _la = this._input.LA(1);
                if (!(_la === LuaParser.T__0 || _la === LuaParser.T__10)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    binop() {
        let _localctx = new BinopContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, LuaParser.RULE_binop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                _la = this._input.LA(1);
                if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (LuaParser.T__30 - 31)) | (1 << (LuaParser.T__31 - 31)) | (1 << (LuaParser.T__32 - 31)) | (1 << (LuaParser.T__33 - 31)) | (1 << (LuaParser.T__34 - 31)) | (1 << (LuaParser.T__35 - 31)) | (1 << (LuaParser.T__36 - 31)) | (1 << (LuaParser.T__37 - 31)) | (1 << (LuaParser.T__38 - 31)) | (1 << (LuaParser.T__39 - 31)) | (1 << (LuaParser.T__40 - 31)) | (1 << (LuaParser.T__41 - 31)) | (1 << (LuaParser.T__42 - 31)) | (1 << (LuaParser.T__43 - 31)) | (1 << (LuaParser.T__44 - 31)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    unop() {
        let _localctx = new UnopContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, LuaParser.RULE_unop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                _la = this._input.LA(1);
                if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuaParser.T__31 - 32)) | (1 << (LuaParser.T__45 - 32)) | (1 << (LuaParser.T__46 - 32)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    number() {
        let _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, LuaParser.RULE_number);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                _la = this._input.LA(1);
                if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (LuaParser.INT - 49)) | (1 << (LuaParser.FLOAT - 49)) | (1 << (LuaParser.EXP - 49)) | (1 << (LuaParser.HEX - 49)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    string() {
        let _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, LuaParser.RULE_string);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                _la = this._input.LA(1);
                if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (LuaParser.NORMALSTRING - 53)) | (1 << (LuaParser.CHARSTRING - 53)) | (1 << (LuaParser.LONGSTRING - 53)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!LuaParser.__ATN) {
            LuaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(LuaParser._serializedATN));
        }
        return LuaParser.__ATN;
    }
}
LuaParser.T__0 = 1;
LuaParser.T__1 = 2;
LuaParser.T__2 = 3;
LuaParser.T__3 = 4;
LuaParser.T__4 = 5;
LuaParser.T__5 = 6;
LuaParser.T__6 = 7;
LuaParser.T__7 = 8;
LuaParser.T__8 = 9;
LuaParser.T__9 = 10;
LuaParser.T__10 = 11;
LuaParser.T__11 = 12;
LuaParser.T__12 = 13;
LuaParser.T__13 = 14;
LuaParser.T__14 = 15;
LuaParser.T__15 = 16;
LuaParser.T__16 = 17;
LuaParser.T__17 = 18;
LuaParser.T__18 = 19;
LuaParser.T__19 = 20;
LuaParser.T__20 = 21;
LuaParser.T__21 = 22;
LuaParser.T__22 = 23;
LuaParser.T__23 = 24;
LuaParser.T__24 = 25;
LuaParser.T__25 = 26;
LuaParser.T__26 = 27;
LuaParser.T__27 = 28;
LuaParser.T__28 = 29;
LuaParser.T__29 = 30;
LuaParser.T__30 = 31;
LuaParser.T__31 = 32;
LuaParser.T__32 = 33;
LuaParser.T__33 = 34;
LuaParser.T__34 = 35;
LuaParser.T__35 = 36;
LuaParser.T__36 = 37;
LuaParser.T__37 = 38;
LuaParser.T__38 = 39;
LuaParser.T__39 = 40;
LuaParser.T__40 = 41;
LuaParser.T__41 = 42;
LuaParser.T__42 = 43;
LuaParser.T__43 = 44;
LuaParser.T__44 = 45;
LuaParser.T__45 = 46;
LuaParser.T__46 = 47;
LuaParser.NAME = 48;
LuaParser.INT = 49;
LuaParser.FLOAT = 50;
LuaParser.EXP = 51;
LuaParser.HEX = 52;
LuaParser.NORMALSTRING = 53;
LuaParser.CHARSTRING = 54;
LuaParser.LONGSTRING = 55;
LuaParser.COMMENT = 56;
LuaParser.LINE_COMMENT = 57;
LuaParser.WS = 58;
LuaParser.NEWLINE = 59;
LuaParser.RULE_chunk = 0;
LuaParser.RULE_block = 1;
LuaParser.RULE_stat = 2;
LuaParser.RULE_doblock = 3;
LuaParser.RULE_while = 4;
LuaParser.RULE_if = 5;
LuaParser.RULE_elseif = 6;
LuaParser.RULE_else = 7;
LuaParser.RULE_for = 8;
LuaParser.RULE_forin = 9;
LuaParser.RULE_functiondecl = 10;
LuaParser.RULE_localfunctiondecl = 11;
LuaParser.RULE_localvardecl = 12;
LuaParser.RULE_assignment = 13;
LuaParser.RULE_repeat = 14;
LuaParser.RULE_laststat = 15;
LuaParser.RULE_funcname = 16;
LuaParser.RULE_varlist1 = 17;
LuaParser.RULE_namelist = 18;
LuaParser.RULE_explist1 = 19;
LuaParser.RULE_exp = 20;
LuaParser.RULE_unopexp = 21;
LuaParser.RULE_operand = 22;
LuaParser.RULE_var = 23;
LuaParser.RULE_prefixexp = 24;
LuaParser.RULE_functioncall = 25;
LuaParser.RULE_varOrExp = 26;
LuaParser.RULE_nameAndArgs = 27;
LuaParser.RULE_varSuffix = 28;
LuaParser.RULE_args = 29;
LuaParser.RULE_function = 30;
LuaParser.RULE_funcbody = 31;
LuaParser.RULE_parlist1 = 32;
LuaParser.RULE_tableconstructor = 33;
LuaParser.RULE_fieldlist = 34;
LuaParser.RULE_field = 35;
LuaParser.RULE_fieldsep = 36;
LuaParser.RULE_binop = 37;
LuaParser.RULE_unop = 38;
LuaParser.RULE_number = 39;
LuaParser.RULE_string = 40;
LuaParser.ruleNames = [
    "chunk", "block", "stat", "doblock", "while", "if", "elseif", "else",
    "for", "forin", "functiondecl", "localfunctiondecl", "localvardecl", "assignment",
    "repeat", "laststat", "funcname", "varlist1", "namelist", "explist1",
    "exp", "unopexp", "operand", "var", "prefixexp", "functioncall", "varOrExp",
    "nameAndArgs", "varSuffix", "args", "function", "funcbody", "parlist1",
    "tableconstructor", "fieldlist", "field", "fieldsep", "binop", "unop",
    "number", "string"
];
LuaParser._LITERAL_NAMES = [
    undefined, "';'", "'do'", "'end'", "'while'", "'if'", "'then'", "'elseif'",
    "'else'", "'for'", "'='", "','", "'in'", "'function'", "'local'", "'repeat'",
    "'until'", "'return'", "'break'", "'.'", "':'", "'nil'", "'false'", "'true'",
    "'...'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'+'", "'-'", "'*'",
    "'/'", "'^'", "'%'", "'..'", "'<'", "'<='", "'>'", "'>='", "'=='", "'~='",
    "'and'", "'or'", "'not'", "'#'"
];
LuaParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "NAME",
    "INT", "FLOAT", "EXP", "HEX", "NORMALSTRING", "CHARSTRING", "LONGSTRING",
    "COMMENT", "LINE_COMMENT", "WS", "NEWLINE"
];
LuaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(LuaParser._LITERAL_NAMES, LuaParser._SYMBOLIC_NAMES, []);
LuaParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03=\u0181\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
    "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
    "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
    "\x03\x02\x05\x02W\n\x02\x07\x02Y\n\x02\f\x02\x0E\x02\\\v\x02\x03\x02\x03" +
    "\x02\x05\x02`\n\x02\x05\x02b\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
    "\x04q\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x82" +
    "\n\x07\f\x07\x0E\x07\x85\v\x07\x03\x07\x05\x07\x88\n\x07\x03\x07\x03\x07" +
    "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9C\n\n\x03\n\x03\n\x03\n\x03\n\x03\v" +
    "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB7" +
    "\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x11\x03\x11\x05\x11\xC4\n\x11\x03\x11\x05\x11\xC7\n\x11\x03" +
    "\x12\x03\x12\x03\x12\x07\x12\xCC\n\x12\f\x12\x0E\x12\xCF\v\x12\x03\x12" +
    "\x03\x12\x05\x12\xD3\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\xD8\n\x13\f" +
    "\x13\x0E\x13\xDB\v\x13\x03\x14\x03\x14\x03\x14\x07\x14\xE0\n\x14\f\x14" +
    "\x0E\x14\xE3\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xE8\n\x15\f\x15\x0E" +
    "\x15\xEB\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16" +
    "\xF3\n\x16\f\x16\x0E\x16\xF6\v\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
    "\x18\u0105\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19" +
    "\u010D\n\x19\x03\x19\x07\x19\u0110\n\x19\f\x19\x0E\x19\u0113\v\x19\x03" +
    "\x1A\x03\x1A\x07\x1A\u0117\n\x1A\f\x1A\x0E\x1A\u011A\v\x1A\x03\x1B\x03" +
    "\x1B\x06\x1B\u011E\n\x1B\r\x1B\x0E\x1B\u011F\x03\x1C\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1C\x05\x1C\u0127\n\x1C\x03\x1D\x03\x1D\x05\x1D\u012B\n\x1D\x03" +
    "\x1D\x03\x1D\x03\x1E\x07\x1E\u0130\n\x1E\f\x1E\x0E\x1E\u0133\v\x1E\x03" +
    "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u013B\n\x1E\x03\x1F" +
    "\x03\x1F\x05\x1F\u013F\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0144\n\x1F" +
    "\x03 \x03 \x03 \x03!\x03!\x05!\u014B\n!\x03!\x03!\x03!\x03!\x03\"\x03" +
    "\"\x03\"\x05\"\u0154\n\"\x03\"\x05\"\u0157\n\"\x03#\x03#\x05#\u015B\n" +
    "#\x03#\x03#\x03$\x03$\x03$\x03$\x07$\u0163\n$\f$\x0E$\u0166\v$\x03$\x05" +
    "$\u0169\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0175" +
    "\n%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x02\x02\x02" +
    "+\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
    "\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
    "*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
    "F\x02H\x02J\x02L\x02N\x02P\x02R\x02\x02\x07\x04\x02\x03\x03\r\r\x03\x02" +
    "!/\x04\x02\"\"01\x03\x0236\x03\x0279\u018D\x02Z\x03\x02\x02\x02\x04c\x03" +
    "\x02\x02\x02\x06p\x03\x02\x02\x02\br\x03\x02\x02\x02\nv\x03\x02\x02\x02" +
    "\f|\x03\x02\x02\x02\x0E\x8B\x03\x02\x02\x02\x10\x90\x03\x02\x02\x02\x12" +
    "\x93\x03\x02\x02\x02\x14\xA1\x03\x02\x02\x02\x16\xA9\x03\x02\x02\x02\x18" +
    "\xAD\x03\x02\x02\x02\x1A\xB2\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E" +
    "\xBC\x03\x02\x02\x02 \xC6\x03\x02\x02\x02\"\xC8\x03\x02\x02\x02$\xD4\x03" +
    "\x02\x02\x02&\xDC\x03\x02\x02\x02(\xE9\x03\x02\x02\x02*\xEE\x03\x02\x02" +
    "\x02,\xF7\x03\x02\x02\x02.\u0104\x03\x02\x02\x020\u010C\x03\x02\x02\x02" +
    "2\u0114\x03\x02\x02\x024\u011B\x03\x02\x02\x026\u0126\x03\x02\x02\x02" +
    "8\u012A\x03\x02\x02\x02:\u0131\x03\x02\x02\x02<\u0143\x03\x02\x02\x02" +
    ">\u0145\x03\x02\x02\x02@\u0148\x03\x02\x02\x02B\u0156\x03\x02\x02\x02" +
    "D\u0158\x03\x02\x02\x02F\u015E\x03\x02\x02\x02H\u0174\x03\x02\x02\x02" +
    "J\u0176\x03\x02\x02\x02L\u0178\x03\x02\x02\x02N\u017A\x03\x02\x02\x02" +
    "P\u017C\x03\x02\x02\x02R\u017E\x03\x02\x02\x02TV\x05\x06\x04\x02UW\x07" +
    "\x03\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02XT\x03" +
    "\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[a" +
    "\x03\x02\x02\x02\\Z\x03\x02\x02\x02]_\x05 \x11\x02^`\x07\x03\x02\x02_" +
    "^\x03\x02\x02\x02_`\x03\x02\x02\x02`b\x03\x02\x02\x02a]\x03\x02\x02\x02" +
    "ab\x03\x02\x02\x02b\x03\x03\x02\x02\x02cd\x05\x02\x02\x02d\x05\x03\x02" +
    "\x02\x02eq\x05\x1C\x0F\x02fq\x054\x1B\x02gq\x05\b\x05\x02hq\x05\n\x06" +
    "\x02iq\x05\x1E\x10\x02jq\x05\f\x07\x02kq\x05\x12\n\x02lq\x05\x14\v\x02" +
    "mq\x05\x16\f\x02nq\x05\x18\r\x02oq\x05\x1A\x0E\x02pe\x03\x02\x02\x02p" +
    "f\x03\x02\x02\x02pg\x03\x02\x02\x02ph\x03\x02\x02\x02pi\x03\x02\x02\x02" +
    "pj\x03\x02\x02\x02pk\x03\x02\x02\x02pl\x03\x02\x02\x02pm\x03\x02\x02\x02" +
    "pn\x03\x02\x02\x02po\x03\x02\x02\x02q\x07\x03\x02\x02\x02rs\x07\x04\x02" +
    "\x02st\x05\x04\x03\x02tu\x07\x05\x02\x02u\t\x03\x02\x02\x02vw\x07\x06" +
    "\x02\x02wx\x05*\x16\x02xy\x07\x04\x02\x02yz\x05\x04\x03\x02z{\x07\x05" +
    "\x02\x02{\v\x03\x02\x02\x02|}\x07\x07\x02\x02}~\x05*\x16\x02~\x7F\x07" +
    "\b\x02\x02\x7F\x83\x05\x04\x03\x02\x80\x82\x05\x0E\b\x02\x81\x80\x03\x02" +
    "\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02" +
    "\x02\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x88\x05\x10" +
    "\t\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02" +
    "\x02\x02\x89\x8A\x07\x05\x02\x02\x8A\r\x03\x02\x02\x02\x8B\x8C\x07\t\x02" +
    "\x02\x8C\x8D\x05*\x16\x02\x8D\x8E\x07\b\x02\x02\x8E\x8F\x05\x04\x03\x02" +
    "\x8F\x0F\x03\x02\x02\x02\x90\x91\x07\n\x02\x02\x91\x92\x05\x04\x03\x02" +
    "\x92\x11\x03\x02\x02\x02\x93\x94\x07\v\x02\x02\x94\x95\x072\x02\x02\x95" +
    "\x96\x07\f\x02\x02\x96\x97\x05*\x16\x02\x97\x98\x07\r\x02\x02\x98\x9B" +
    "\x05*\x16\x02\x99\x9A\x07\r\x02\x02\x9A\x9C\x05*\x16\x02\x9B\x99\x03\x02" +
    "\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x07\x04" +
    "\x02\x02\x9E\x9F\x05\x04\x03\x02\x9F\xA0\x07\x05\x02\x02\xA0\x13\x03\x02" +
    "\x02\x02\xA1\xA2\x07\v\x02\x02\xA2\xA3\x05&\x14\x02\xA3\xA4\x07\x0E\x02" +
    "\x02\xA4\xA5\x05(\x15\x02\xA5\xA6\x07\x04\x02\x02\xA6\xA7\x05\x04\x03" +
    "\x02\xA7\xA8\x07\x05\x02\x02\xA8\x15\x03\x02\x02\x02\xA9\xAA\x07\x0F\x02" +
    "\x02\xAA\xAB\x05\"\x12\x02\xAB\xAC\x05@!\x02\xAC\x17\x03\x02\x02\x02\xAD" +
    "\xAE\x07\x10\x02\x02\xAE\xAF\x07\x0F\x02\x02\xAF\xB0\x072\x02\x02\xB0" +
    "\xB1\x05@!\x02\xB1\x19\x03\x02\x02\x02\xB2\xB3\x07\x10\x02\x02\xB3\xB6" +
    "\x05&\x14\x02\xB4\xB5\x07\f\x02\x02\xB5\xB7\x05(\x15\x02\xB6\xB4\x03\x02" +
    "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\x1B\x03\x02\x02\x02\xB8\xB9\x05$" +
    "\x13\x02\xB9\xBA\x07\f\x02\x02\xBA\xBB\x05(\x15\x02\xBB\x1D\x03\x02\x02" +
    "\x02\xBC\xBD\x07\x11\x02\x02\xBD\xBE\x05\x04\x03\x02\xBE\xBF\x07\x12\x02" +
    "\x02\xBF\xC0\x05*\x16\x02\xC0\x1F\x03\x02\x02\x02\xC1\xC3\x07\x13\x02" +
    "\x02\xC2\xC4\x05(\x15\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02" +
    "\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC7\x07\x14\x02\x02\xC6\xC1\x03\x02\x02" +
    "\x02\xC6\xC5\x03\x02\x02\x02\xC7!\x03\x02\x02\x02\xC8\xCD\x072\x02\x02" +
    "\xC9\xCA\x07\x15\x02\x02\xCA\xCC\x072\x02\x02\xCB\xC9\x03\x02\x02\x02" +
    "\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
    "\xCE\xD2\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07\x16\x02\x02" +
    "\xD1\xD3\x072\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02" +
    "\xD3#\x03\x02\x02\x02\xD4\xD9\x050\x19\x02\xD5\xD6\x07\r\x02\x02\xD6\xD8" +
    "\x050\x19\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xD7" +
    "\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA%\x03\x02\x02\x02\xDB\xD9" +
    "\x03\x02\x02\x02\xDC\xE1\x072\x02\x02\xDD\xDE\x07\r\x02\x02\xDE\xE0\x07" +
    "2\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03" +
    "\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\'\x03\x02\x02\x02\xE3\xE1\x03" +
    "\x02\x02\x02\xE4\xE5\x05*\x16\x02\xE5\xE6\x07\r\x02\x02\xE6\xE8\x03\x02" +
    "\x02\x02\xE7\xE4\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02" +
    "\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB\xE9\x03\x02" +
    "\x02\x02\xEC\xED\x05*\x16\x02\xED)\x03\x02\x02\x02\xEE\xF4\x05.\x18\x02" +
    "\xEF\xF0\x05L\'\x02\xF0\xF1\x05*\x16\x02\xF1\xF3\x03\x02\x02\x02\xF2\xEF" +
    "\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5" +
    "\x03\x02\x02\x02\xF5+\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8" +
    "\x05N(\x02\xF8\xF9\x05*\x16\x02\xF9-\x03\x02\x02\x02\xFA\u0105\x07\x17" +
    "\x02\x02\xFB\u0105\x07\x18\x02\x02\xFC\u0105\x07\x19\x02\x02\xFD\u0105" +
    "\x05P)\x02\xFE\u0105\x05R*\x02\xFF\u0105\x07\x1A\x02\x02\u0100\u0105\x05" +
    "> \x02\u0101\u0105\x052\x1A\x02\u0102\u0105\x05D#\x02\u0103\u0105\x05" +
    ",\x17\x02\u0104\xFA\x03\x02\x02\x02\u0104\xFB\x03\x02\x02\x02\u0104\xFC" +
    "\x03\x02\x02\x02\u0104\xFD\x03\x02\x02\x02\u0104\xFE\x03\x02\x02\x02\u0104" +
    "\xFF\x03\x02\x02\x02\u0104\u0100\x03\x02\x02\x02\u0104\u0101\x03\x02\x02" +
    "\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105/\x03" +
    "\x02\x02\x02\u0106\u010D\x072\x02\x02\u0107\u0108\x07\x1B\x02\x02\u0108" +
    "\u0109\x05*\x16\x02\u0109\u010A\x07\x1C\x02\x02\u010A\u010B\x05:\x1E\x02" +
    "\u010B\u010D\x03\x02\x02\x02\u010C\u0106\x03\x02\x02\x02\u010C\u0107\x03" +
    "\x02\x02\x02\u010D\u0111\x03\x02\x02\x02\u010E\u0110\x05:\x1E\x02\u010F" +
    "\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03\x02" +
    "\x02\x02\u0111\u0112\x03\x02\x02\x02\u01121\x03\x02\x02\x02\u0113\u0111" +
    "\x03\x02\x02\x02\u0114\u0118\x056\x1C\x02\u0115\u0117\x058\x1D\x02\u0116" +
    "\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02" +
    "\x02\x02\u0118\u0119\x03\x02\x02\x02\u01193\x03\x02\x02\x02\u011A\u0118" +
    "\x03\x02\x02\x02\u011B\u011D\x056\x1C\x02\u011C\u011E\x058\x1D\x02\u011D" +
    "\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u011D\x03\x02" +
    "\x02\x02\u011F\u0120\x03\x02\x02\x02\u01205\x03\x02\x02\x02\u0121\u0127" +
    "\x050\x19\x02\u0122\u0123\x07\x1B\x02\x02\u0123\u0124\x05*\x16\x02\u0124" +
    "\u0125\x07\x1C\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0121\x03\x02" +
    "\x02\x02\u0126\u0122\x03\x02\x02\x02\u01277\x03\x02\x02\x02\u0128\u0129" +
    "\x07\x16\x02\x02\u0129\u012B\x072\x02\x02\u012A\u0128\x03\x02\x02\x02" +
    "\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x05" +
    "<\x1F\x02\u012D9\x03\x02\x02\x02\u012E\u0130\x058\x1D\x02\u012F\u012E" +
    "\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02" +
    "\u0131\u0132\x03\x02\x02\x02\u0132\u013A\x03\x02\x02\x02\u0133\u0131\x03" +
    "\x02\x02\x02\u0134\u0135\x07\x1D\x02\x02\u0135\u0136\x05*\x16\x02\u0136" +
    "\u0137\x07\x1E\x02\x02\u0137\u013B\x03\x02\x02\x02\u0138\u0139\x07\x15" +
    "\x02\x02\u0139\u013B\x072\x02\x02\u013A\u0134\x03\x02\x02\x02\u013A\u0138" +
    "\x03\x02\x02\x02\u013B;\x03\x02\x02\x02\u013C\u013E\x07\x1B\x02\x02\u013D" +
    "\u013F\x05(\x15\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02" +
    "\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0144\x07\x1C\x02\x02\u0141\u0144" +
    "\x05D#\x02\u0142\u0144\x05R*\x02\u0143\u013C\x03\x02\x02\x02\u0143\u0141" +
    "\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144=\x03\x02\x02\x02\u0145" +
    "\u0146\x07\x0F\x02\x02\u0146\u0147\x05@!\x02\u0147?\x03\x02\x02\x02\u0148" +
    "\u014A\x07\x1B\x02\x02\u0149\u014B\x05B\"\x02\u014A\u0149\x03\x02\x02" +
    "\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D" +
    "\x07\x1C\x02\x02\u014D\u014E\x05\x04\x03\x02\u014E\u014F\x07\x05\x02\x02" +
    "\u014FA\x03\x02\x02\x02\u0150\u0153\x05&\x14\x02\u0151\u0152\x07\r\x02" +
    "\x02\u0152\u0154\x07\x1A\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154" +
    "\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0157\x07\x1A\x02\x02" +
    "\u0156\u0150\x03\x02\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157C\x03\x02" +
    "\x02\x02\u0158\u015A\x07\x1F\x02\x02\u0159\u015B\x05F$\x02\u015A\u0159" +
    "\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02" +
    "\u015C\u015D\x07 \x02\x02\u015DE\x03\x02\x02\x02\u015E\u0164\x05H%\x02" +
    "\u015F\u0160\x05J&\x02\u0160\u0161\x05H%\x02\u0161\u0163\x03\x02\x02\x02" +
    "\u0162\u015F\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03" +
    "\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166" +
    "\u0164\x03\x02\x02\x02\u0167\u0169\x05J&\x02\u0168\u0167\x03\x02\x02\x02" +
    "\u0168\u0169\x03\x02\x02\x02\u0169G\x03\x02\x02\x02\u016A\u016B\x07\x1D" +
    "\x02\x02\u016B\u016C\x05*\x16\x02\u016C\u016D\x07\x1E\x02\x02\u016D\u016E" +
    "\x07\f\x02\x02\u016E\u016F\x05*\x16\x02\u016F\u0175\x03\x02\x02\x02\u0170" +
    "\u0171\x072\x02\x02\u0171\u0172\x07\f\x02\x02\u0172\u0175\x05*\x16\x02" +
    "\u0173\u0175\x05*\x16\x02\u0174\u016A\x03\x02\x02\x02\u0174\u0170\x03" +
    "\x02\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175I\x03\x02\x02\x02\u0176" +
    "\u0177\t\x02\x02\x02\u0177K\x03\x02\x02\x02\u0178\u0179\t\x03\x02\x02" +
    "\u0179M\x03\x02\x02\x02\u017A\u017B\t\x04\x02\x02\u017BO\x03\x02\x02\x02" +
    "\u017C\u017D\t\x05\x02\x02\u017DQ\x03\x02\x02\x02\u017E\u017F\t\x06\x02" +
    "\x02\u017FS\x03\x02\x02\x02%VZ_ap\x83\x87\x9B\xB6\xC3\xC6\xCD\xD2\xD9" +
    "\xE1\xE9\xF4\u0104\u010C\u0111\u0118\u011F\u0126\u012A\u0131\u013A\u013E" +
    "\u0143\u014A\u0153\u0156\u015A\u0164\u0168\u0174";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], LuaParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], LuaParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], LuaParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], LuaParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "chunk", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "block", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "stat", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "doblock", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "while", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "if", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "elseif", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "else", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "for", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "forin", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "functiondecl", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "localfunctiondecl", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "localvardecl", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "assignment", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "repeat", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "laststat", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "funcname", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "varlist1", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "namelist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "explist1", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "exp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "unopexp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "operand", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "var", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "prefixexp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "functioncall", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "varOrExp", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "nameAndArgs", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "varSuffix", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "args", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "function", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "funcbody", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "parlist1", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "tableconstructor", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "fieldlist", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "field", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "fieldsep", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "binop", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "unop", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "number", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], LuaParser.prototype, "string", null);
exports.LuaParser = LuaParser;
class ChunkContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    stat(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatContext);
        }
        else {
            return this.getRuleContext(i, StatContext);
        }
    }
    laststat() {
        return this.tryGetRuleContext(0, LaststatContext);
    }
    get ruleIndex() { return LuaParser.RULE_chunk; }
    enterRule(listener) {
        if (listener.enterChunk)
            listener.enterChunk(this);
    }
    exitRule(listener) {
        if (listener.exitChunk)
            listener.exitChunk(this);
    }
    accept(visitor) {
        if (visitor.visitChunk)
            return visitor.visitChunk(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ChunkContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ChunkContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ChunkContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ChunkContext.prototype, "accept", null);
exports.ChunkContext = ChunkContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    chunk() {
        return this.getRuleContext(0, ChunkContext);
    }
    get ruleIndex() { return LuaParser.RULE_block; }
    enterRule(listener) {
        if (listener.enterBlock)
            listener.enterBlock(this);
    }
    exitRule(listener) {
        if (listener.exitBlock)
            listener.exitBlock(this);
    }
    accept(visitor) {
        if (visitor.visitBlock)
            return visitor.visitBlock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BlockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BlockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BlockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BlockContext.prototype, "accept", null);
exports.BlockContext = BlockContext;
class StatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    functioncall() {
        return this.tryGetRuleContext(0, FunctioncallContext);
    }
    doblock() {
        return this.tryGetRuleContext(0, DoblockContext);
    }
    while() {
        return this.tryGetRuleContext(0, WhileContext);
    }
    repeat() {
        return this.tryGetRuleContext(0, RepeatContext);
    }
    if() {
        return this.tryGetRuleContext(0, IfContext);
    }
    for() {
        return this.tryGetRuleContext(0, ForContext);
    }
    forin() {
        return this.tryGetRuleContext(0, ForinContext);
    }
    functiondecl() {
        return this.tryGetRuleContext(0, FunctiondeclContext);
    }
    localfunctiondecl() {
        return this.tryGetRuleContext(0, LocalfunctiondeclContext);
    }
    localvardecl() {
        return this.tryGetRuleContext(0, LocalvardeclContext);
    }
    get ruleIndex() { return LuaParser.RULE_stat; }
    enterRule(listener) {
        if (listener.enterStat)
            listener.enterStat(this);
    }
    exitRule(listener) {
        if (listener.exitStat)
            listener.exitStat(this);
    }
    accept(visitor) {
        if (visitor.visitStat)
            return visitor.visitStat(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StatContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StatContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StatContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StatContext.prototype, "accept", null);
exports.StatContext = StatContext;
class DoblockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() { return LuaParser.RULE_doblock; }
    enterRule(listener) {
        if (listener.enterDoblock)
            listener.enterDoblock(this);
    }
    exitRule(listener) {
        if (listener.exitDoblock)
            listener.exitDoblock(this);
    }
    accept(visitor) {
        if (visitor.visitDoblock)
            return visitor.visitDoblock(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DoblockContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DoblockContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DoblockContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DoblockContext.prototype, "accept", null);
exports.DoblockContext = DoblockContext;
class WhileContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() { return LuaParser.RULE_while; }
    enterRule(listener) {
        if (listener.enterWhile)
            listener.enterWhile(this);
    }
    exitRule(listener) {
        if (listener.exitWhile)
            listener.exitWhile(this);
    }
    accept(visitor) {
        if (visitor.visitWhile)
            return visitor.visitWhile(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], WhileContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], WhileContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], WhileContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], WhileContext.prototype, "accept", null);
exports.WhileContext = WhileContext;
class IfContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    elseif(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElseifContext);
        }
        else {
            return this.getRuleContext(i, ElseifContext);
        }
    }
    else() {
        return this.tryGetRuleContext(0, ElseContext);
    }
    get ruleIndex() { return LuaParser.RULE_if; }
    enterRule(listener) {
        if (listener.enterIf)
            listener.enterIf(this);
    }
    exitRule(listener) {
        if (listener.exitIf)
            listener.exitIf(this);
    }
    accept(visitor) {
        if (visitor.visitIf)
            return visitor.visitIf(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IfContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IfContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IfContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IfContext.prototype, "accept", null);
exports.IfContext = IfContext;
class ElseifContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() { return LuaParser.RULE_elseif; }
    enterRule(listener) {
        if (listener.enterElseif)
            listener.enterElseif(this);
    }
    exitRule(listener) {
        if (listener.exitElseif)
            listener.exitElseif(this);
    }
    accept(visitor) {
        if (visitor.visitElseif)
            return visitor.visitElseif(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ElseifContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ElseifContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ElseifContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ElseifContext.prototype, "accept", null);
exports.ElseifContext = ElseifContext;
class ElseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() { return LuaParser.RULE_else; }
    enterRule(listener) {
        if (listener.enterElse)
            listener.enterElse(this);
    }
    exitRule(listener) {
        if (listener.exitElse)
            listener.exitElse(this);
    }
    accept(visitor) {
        if (visitor.visitElse)
            return visitor.visitElse(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ElseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ElseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ElseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ElseContext.prototype, "accept", null);
exports.ElseContext = ElseContext;
class ForContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.getToken(LuaParser.NAME, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() { return LuaParser.RULE_for; }
    enterRule(listener) {
        if (listener.enterFor)
            listener.enterFor(this);
    }
    exitRule(listener) {
        if (listener.exitFor)
            listener.exitFor(this);
    }
    accept(visitor) {
        if (visitor.visitFor)
            return visitor.visitFor(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ForContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ForContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ForContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ForContext.prototype, "accept", null);
exports.ForContext = ForContext;
class ForinContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namelist() {
        return this.getRuleContext(0, NamelistContext);
    }
    explist1() {
        return this.getRuleContext(0, Explist1Context);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() { return LuaParser.RULE_forin; }
    enterRule(listener) {
        if (listener.enterForin)
            listener.enterForin(this);
    }
    exitRule(listener) {
        if (listener.exitForin)
            listener.exitForin(this);
    }
    accept(visitor) {
        if (visitor.visitForin)
            return visitor.visitForin(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ForinContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ForinContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ForinContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ForinContext.prototype, "accept", null);
exports.ForinContext = ForinContext;
class FunctiondeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    funcname() {
        return this.getRuleContext(0, FuncnameContext);
    }
    funcbody() {
        return this.getRuleContext(0, FuncbodyContext);
    }
    get ruleIndex() { return LuaParser.RULE_functiondecl; }
    enterRule(listener) {
        if (listener.enterFunctiondecl)
            listener.enterFunctiondecl(this);
    }
    exitRule(listener) {
        if (listener.exitFunctiondecl)
            listener.exitFunctiondecl(this);
    }
    accept(visitor) {
        if (visitor.visitFunctiondecl)
            return visitor.visitFunctiondecl(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctiondeclContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctiondeclContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctiondeclContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctiondeclContext.prototype, "accept", null);
exports.FunctiondeclContext = FunctiondeclContext;
class LocalfunctiondeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.getToken(LuaParser.NAME, 0); }
    funcbody() {
        return this.getRuleContext(0, FuncbodyContext);
    }
    get ruleIndex() { return LuaParser.RULE_localfunctiondecl; }
    enterRule(listener) {
        if (listener.enterLocalfunctiondecl)
            listener.enterLocalfunctiondecl(this);
    }
    exitRule(listener) {
        if (listener.exitLocalfunctiondecl)
            listener.exitLocalfunctiondecl(this);
    }
    accept(visitor) {
        if (visitor.visitLocalfunctiondecl)
            return visitor.visitLocalfunctiondecl(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LocalfunctiondeclContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LocalfunctiondeclContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LocalfunctiondeclContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LocalfunctiondeclContext.prototype, "accept", null);
exports.LocalfunctiondeclContext = LocalfunctiondeclContext;
class LocalvardeclContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namelist() {
        return this.getRuleContext(0, NamelistContext);
    }
    explist1() {
        return this.tryGetRuleContext(0, Explist1Context);
    }
    get ruleIndex() { return LuaParser.RULE_localvardecl; }
    enterRule(listener) {
        if (listener.enterLocalvardecl)
            listener.enterLocalvardecl(this);
    }
    exitRule(listener) {
        if (listener.exitLocalvardecl)
            listener.exitLocalvardecl(this);
    }
    accept(visitor) {
        if (visitor.visitLocalvardecl)
            return visitor.visitLocalvardecl(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LocalvardeclContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LocalvardeclContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LocalvardeclContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LocalvardeclContext.prototype, "accept", null);
exports.LocalvardeclContext = LocalvardeclContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    varlist1() {
        return this.getRuleContext(0, Varlist1Context);
    }
    explist1() {
        return this.getRuleContext(0, Explist1Context);
    }
    get ruleIndex() { return LuaParser.RULE_assignment; }
    enterRule(listener) {
        if (listener.enterAssignment)
            listener.enterAssignment(this);
    }
    exitRule(listener) {
        if (listener.exitAssignment)
            listener.exitAssignment(this);
    }
    accept(visitor) {
        if (visitor.visitAssignment)
            return visitor.visitAssignment(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AssignmentContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AssignmentContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AssignmentContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AssignmentContext.prototype, "accept", null);
exports.AssignmentContext = AssignmentContext;
class RepeatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    get ruleIndex() { return LuaParser.RULE_repeat; }
    enterRule(listener) {
        if (listener.enterRepeat)
            listener.enterRepeat(this);
    }
    exitRule(listener) {
        if (listener.exitRepeat)
            listener.exitRepeat(this);
    }
    accept(visitor) {
        if (visitor.visitRepeat)
            return visitor.visitRepeat(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], RepeatContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], RepeatContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], RepeatContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], RepeatContext.prototype, "accept", null);
exports.RepeatContext = RepeatContext;
class LaststatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    explist1() {
        return this.tryGetRuleContext(0, Explist1Context);
    }
    get ruleIndex() { return LuaParser.RULE_laststat; }
    enterRule(listener) {
        if (listener.enterLaststat)
            listener.enterLaststat(this);
    }
    exitRule(listener) {
        if (listener.exitLaststat)
            listener.exitLaststat(this);
    }
    accept(visitor) {
        if (visitor.visitLaststat)
            return visitor.visitLaststat(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LaststatContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LaststatContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LaststatContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LaststatContext.prototype, "accept", null);
exports.LaststatContext = LaststatContext;
class FuncnameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME(i) {
        if (i === undefined) {
            return this.getTokens(LuaParser.NAME);
        }
        else {
            return this.getToken(LuaParser.NAME, i);
        }
    }
    get ruleIndex() { return LuaParser.RULE_funcname; }
    enterRule(listener) {
        if (listener.enterFuncname)
            listener.enterFuncname(this);
    }
    exitRule(listener) {
        if (listener.exitFuncname)
            listener.exitFuncname(this);
    }
    accept(visitor) {
        if (visitor.visitFuncname)
            return visitor.visitFuncname(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FuncnameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FuncnameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FuncnameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FuncnameContext.prototype, "accept", null);
exports.FuncnameContext = FuncnameContext;
class Varlist1Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    var(i) {
        if (i === undefined) {
            return this.getRuleContexts(VarContext);
        }
        else {
            return this.getRuleContext(i, VarContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_varlist1; }
    enterRule(listener) {
        if (listener.enterVarlist1)
            listener.enterVarlist1(this);
    }
    exitRule(listener) {
        if (listener.exitVarlist1)
            listener.exitVarlist1(this);
    }
    accept(visitor) {
        if (visitor.visitVarlist1)
            return visitor.visitVarlist1(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Varlist1Context.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Varlist1Context.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Varlist1Context.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Varlist1Context.prototype, "accept", null);
exports.Varlist1Context = Varlist1Context;
class NamelistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME(i) {
        if (i === undefined) {
            return this.getTokens(LuaParser.NAME);
        }
        else {
            return this.getToken(LuaParser.NAME, i);
        }
    }
    get ruleIndex() { return LuaParser.RULE_namelist; }
    enterRule(listener) {
        if (listener.enterNamelist)
            listener.enterNamelist(this);
    }
    exitRule(listener) {
        if (listener.exitNamelist)
            listener.exitNamelist(this);
    }
    accept(visitor) {
        if (visitor.visitNamelist)
            return visitor.visitNamelist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NamelistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NamelistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NamelistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NamelistContext.prototype, "accept", null);
exports.NamelistContext = NamelistContext;
class Explist1Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_explist1; }
    enterRule(listener) {
        if (listener.enterExplist1)
            listener.enterExplist1(this);
    }
    exitRule(listener) {
        if (listener.exitExplist1)
            listener.exitExplist1(this);
    }
    accept(visitor) {
        if (visitor.visitExplist1)
            return visitor.visitExplist1(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Explist1Context.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Explist1Context.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Explist1Context.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Explist1Context.prototype, "accept", null);
exports.Explist1Context = Explist1Context;
class ExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    operand() {
        return this.getRuleContext(0, OperandContext);
    }
    binop(i) {
        if (i === undefined) {
            return this.getRuleContexts(BinopContext);
        }
        else {
            return this.getRuleContext(i, BinopContext);
        }
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_exp; }
    enterRule(listener) {
        if (listener.enterExp)
            listener.enterExp(this);
    }
    exitRule(listener) {
        if (listener.exitExp)
            listener.exitExp(this);
    }
    accept(visitor) {
        if (visitor.visitExp)
            return visitor.visitExp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpContext.prototype, "accept", null);
exports.ExpContext = ExpContext;
class UnopexpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unop() {
        return this.getRuleContext(0, UnopContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    get ruleIndex() { return LuaParser.RULE_unopexp; }
    enterRule(listener) {
        if (listener.enterUnopexp)
            listener.enterUnopexp(this);
    }
    exitRule(listener) {
        if (listener.exitUnopexp)
            listener.exitUnopexp(this);
    }
    accept(visitor) {
        if (visitor.visitUnopexp)
            return visitor.visitUnopexp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnopexpContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnopexpContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnopexpContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnopexpContext.prototype, "accept", null);
exports.UnopexpContext = UnopexpContext;
class OperandContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    number() {
        return this.tryGetRuleContext(0, NumberContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    function() {
        return this.tryGetRuleContext(0, FunctionContext);
    }
    prefixexp() {
        return this.tryGetRuleContext(0, PrefixexpContext);
    }
    tableconstructor() {
        return this.tryGetRuleContext(0, TableconstructorContext);
    }
    unopexp() {
        return this.tryGetRuleContext(0, UnopexpContext);
    }
    get ruleIndex() { return LuaParser.RULE_operand; }
    enterRule(listener) {
        if (listener.enterOperand)
            listener.enterOperand(this);
    }
    exitRule(listener) {
        if (listener.exitOperand)
            listener.exitOperand(this);
    }
    accept(visitor) {
        if (visitor.visitOperand)
            return visitor.visitOperand(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], OperandContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], OperandContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], OperandContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], OperandContext.prototype, "accept", null);
exports.OperandContext = OperandContext;
class VarContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.tryGetToken(LuaParser.NAME, 0); }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    varSuffix(i) {
        if (i === undefined) {
            return this.getRuleContexts(VarSuffixContext);
        }
        else {
            return this.getRuleContext(i, VarSuffixContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_var; }
    enterRule(listener) {
        if (listener.enterVar)
            listener.enterVar(this);
    }
    exitRule(listener) {
        if (listener.exitVar)
            listener.exitVar(this);
    }
    accept(visitor) {
        if (visitor.visitVar)
            return visitor.visitVar(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VarContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VarContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VarContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VarContext.prototype, "accept", null);
exports.VarContext = VarContext;
class PrefixexpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    varOrExp() {
        return this.getRuleContext(0, VarOrExpContext);
    }
    nameAndArgs(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameAndArgsContext);
        }
        else {
            return this.getRuleContext(i, NameAndArgsContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_prefixexp; }
    enterRule(listener) {
        if (listener.enterPrefixexp)
            listener.enterPrefixexp(this);
    }
    exitRule(listener) {
        if (listener.exitPrefixexp)
            listener.exitPrefixexp(this);
    }
    accept(visitor) {
        if (visitor.visitPrefixexp)
            return visitor.visitPrefixexp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PrefixexpContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PrefixexpContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PrefixexpContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PrefixexpContext.prototype, "accept", null);
exports.PrefixexpContext = PrefixexpContext;
class FunctioncallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    varOrExp() {
        return this.getRuleContext(0, VarOrExpContext);
    }
    nameAndArgs(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameAndArgsContext);
        }
        else {
            return this.getRuleContext(i, NameAndArgsContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_functioncall; }
    enterRule(listener) {
        if (listener.enterFunctioncall)
            listener.enterFunctioncall(this);
    }
    exitRule(listener) {
        if (listener.exitFunctioncall)
            listener.exitFunctioncall(this);
    }
    accept(visitor) {
        if (visitor.visitFunctioncall)
            return visitor.visitFunctioncall(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctioncallContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctioncallContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctioncallContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctioncallContext.prototype, "accept", null);
exports.FunctioncallContext = FunctioncallContext;
class VarOrExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    var() {
        return this.tryGetRuleContext(0, VarContext);
    }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    get ruleIndex() { return LuaParser.RULE_varOrExp; }
    enterRule(listener) {
        if (listener.enterVarOrExp)
            listener.enterVarOrExp(this);
    }
    exitRule(listener) {
        if (listener.exitVarOrExp)
            listener.exitVarOrExp(this);
    }
    accept(visitor) {
        if (visitor.visitVarOrExp)
            return visitor.visitVarOrExp(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VarOrExpContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VarOrExpContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VarOrExpContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VarOrExpContext.prototype, "accept", null);
exports.VarOrExpContext = VarOrExpContext;
class NameAndArgsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    args() {
        return this.getRuleContext(0, ArgsContext);
    }
    NAME() { return this.tryGetToken(LuaParser.NAME, 0); }
    get ruleIndex() { return LuaParser.RULE_nameAndArgs; }
    enterRule(listener) {
        if (listener.enterNameAndArgs)
            listener.enterNameAndArgs(this);
    }
    exitRule(listener) {
        if (listener.exitNameAndArgs)
            listener.exitNameAndArgs(this);
    }
    accept(visitor) {
        if (visitor.visitNameAndArgs)
            return visitor.visitNameAndArgs(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NameAndArgsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NameAndArgsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NameAndArgsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NameAndArgsContext.prototype, "accept", null);
exports.NameAndArgsContext = NameAndArgsContext;
class VarSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    NAME() { return this.tryGetToken(LuaParser.NAME, 0); }
    nameAndArgs(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameAndArgsContext);
        }
        else {
            return this.getRuleContext(i, NameAndArgsContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_varSuffix; }
    enterRule(listener) {
        if (listener.enterVarSuffix)
            listener.enterVarSuffix(this);
    }
    exitRule(listener) {
        if (listener.exitVarSuffix)
            listener.exitVarSuffix(this);
    }
    accept(visitor) {
        if (visitor.visitVarSuffix)
            return visitor.visitVarSuffix(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VarSuffixContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VarSuffixContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VarSuffixContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VarSuffixContext.prototype, "accept", null);
exports.VarSuffixContext = VarSuffixContext;
class ArgsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    explist1() {
        return this.tryGetRuleContext(0, Explist1Context);
    }
    tableconstructor() {
        return this.tryGetRuleContext(0, TableconstructorContext);
    }
    string() {
        return this.tryGetRuleContext(0, StringContext);
    }
    get ruleIndex() { return LuaParser.RULE_args; }
    enterRule(listener) {
        if (listener.enterArgs)
            listener.enterArgs(this);
    }
    exitRule(listener) {
        if (listener.exitArgs)
            listener.exitArgs(this);
    }
    accept(visitor) {
        if (visitor.visitArgs)
            return visitor.visitArgs(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArgsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArgsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArgsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArgsContext.prototype, "accept", null);
exports.ArgsContext = ArgsContext;
class FunctionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    funcbody() {
        return this.getRuleContext(0, FuncbodyContext);
    }
    get ruleIndex() { return LuaParser.RULE_function; }
    enterRule(listener) {
        if (listener.enterFunction)
            listener.enterFunction(this);
    }
    exitRule(listener) {
        if (listener.exitFunction)
            listener.exitFunction(this);
    }
    accept(visitor) {
        if (visitor.visitFunction)
            return visitor.visitFunction(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FunctionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FunctionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FunctionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FunctionContext.prototype, "accept", null);
exports.FunctionContext = FunctionContext;
class FuncbodyContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    parlist1() {
        return this.tryGetRuleContext(0, Parlist1Context);
    }
    get ruleIndex() { return LuaParser.RULE_funcbody; }
    enterRule(listener) {
        if (listener.enterFuncbody)
            listener.enterFuncbody(this);
    }
    exitRule(listener) {
        if (listener.exitFuncbody)
            listener.exitFuncbody(this);
    }
    accept(visitor) {
        if (visitor.visitFuncbody)
            return visitor.visitFuncbody(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FuncbodyContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FuncbodyContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FuncbodyContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FuncbodyContext.prototype, "accept", null);
exports.FuncbodyContext = FuncbodyContext;
class Parlist1Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    namelist() {
        return this.tryGetRuleContext(0, NamelistContext);
    }
    get ruleIndex() { return LuaParser.RULE_parlist1; }
    enterRule(listener) {
        if (listener.enterParlist1)
            listener.enterParlist1(this);
    }
    exitRule(listener) {
        if (listener.exitParlist1)
            listener.exitParlist1(this);
    }
    accept(visitor) {
        if (visitor.visitParlist1)
            return visitor.visitParlist1(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], Parlist1Context.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], Parlist1Context.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], Parlist1Context.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], Parlist1Context.prototype, "accept", null);
exports.Parlist1Context = Parlist1Context;
class TableconstructorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fieldlist() {
        return this.tryGetRuleContext(0, FieldlistContext);
    }
    get ruleIndex() { return LuaParser.RULE_tableconstructor; }
    enterRule(listener) {
        if (listener.enterTableconstructor)
            listener.enterTableconstructor(this);
    }
    exitRule(listener) {
        if (listener.exitTableconstructor)
            listener.exitTableconstructor(this);
    }
    accept(visitor) {
        if (visitor.visitTableconstructor)
            return visitor.visitTableconstructor(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TableconstructorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TableconstructorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TableconstructorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TableconstructorContext.prototype, "accept", null);
exports.TableconstructorContext = TableconstructorContext;
class FieldlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    fieldsep(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldsepContext);
        }
        else {
            return this.getRuleContext(i, FieldsepContext);
        }
    }
    get ruleIndex() { return LuaParser.RULE_fieldlist; }
    enterRule(listener) {
        if (listener.enterFieldlist)
            listener.enterFieldlist(this);
    }
    exitRule(listener) {
        if (listener.exitFieldlist)
            listener.exitFieldlist(this);
    }
    accept(visitor) {
        if (visitor.visitFieldlist)
            return visitor.visitFieldlist(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FieldlistContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FieldlistContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FieldlistContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FieldlistContext.prototype, "accept", null);
exports.FieldlistContext = FieldlistContext;
class FieldContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    NAME() { return this.tryGetToken(LuaParser.NAME, 0); }
    get ruleIndex() { return LuaParser.RULE_field; }
    enterRule(listener) {
        if (listener.enterField)
            listener.enterField(this);
    }
    exitRule(listener) {
        if (listener.exitField)
            listener.exitField(this);
    }
    accept(visitor) {
        if (visitor.visitField)
            return visitor.visitField(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FieldContext.prototype, "accept", null);
exports.FieldContext = FieldContext;
class FieldsepContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return LuaParser.RULE_fieldsep; }
    enterRule(listener) {
        if (listener.enterFieldsep)
            listener.enterFieldsep(this);
    }
    exitRule(listener) {
        if (listener.exitFieldsep)
            listener.exitFieldsep(this);
    }
    accept(visitor) {
        if (visitor.visitFieldsep)
            return visitor.visitFieldsep(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FieldsepContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FieldsepContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FieldsepContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FieldsepContext.prototype, "accept", null);
exports.FieldsepContext = FieldsepContext;
class BinopContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return LuaParser.RULE_binop; }
    enterRule(listener) {
        if (listener.enterBinop)
            listener.enterBinop(this);
    }
    exitRule(listener) {
        if (listener.exitBinop)
            listener.exitBinop(this);
    }
    accept(visitor) {
        if (visitor.visitBinop)
            return visitor.visitBinop(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BinopContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BinopContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BinopContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BinopContext.prototype, "accept", null);
exports.BinopContext = BinopContext;
class UnopContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() { return LuaParser.RULE_unop; }
    enterRule(listener) {
        if (listener.enterUnop)
            listener.enterUnop(this);
    }
    exitRule(listener) {
        if (listener.exitUnop)
            listener.exitUnop(this);
    }
    accept(visitor) {
        if (visitor.visitUnop)
            return visitor.visitUnop(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnopContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnopContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnopContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnopContext.prototype, "accept", null);
exports.UnopContext = UnopContext;
class NumberContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INT() { return this.tryGetToken(LuaParser.INT, 0); }
    FLOAT() { return this.tryGetToken(LuaParser.FLOAT, 0); }
    EXP() { return this.tryGetToken(LuaParser.EXP, 0); }
    HEX() { return this.tryGetToken(LuaParser.HEX, 0); }
    get ruleIndex() { return LuaParser.RULE_number; }
    enterRule(listener) {
        if (listener.enterNumber)
            listener.enterNumber(this);
    }
    exitRule(listener) {
        if (listener.exitNumber)
            listener.exitNumber(this);
    }
    accept(visitor) {
        if (visitor.visitNumber)
            return visitor.visitNumber(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NumberContext.prototype, "accept", null);
exports.NumberContext = NumberContext;
class StringContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NORMALSTRING() { return this.tryGetToken(LuaParser.NORMALSTRING, 0); }
    CHARSTRING() { return this.tryGetToken(LuaParser.CHARSTRING, 0); }
    LONGSTRING() { return this.tryGetToken(LuaParser.LONGSTRING, 0); }
    get ruleIndex() { return LuaParser.RULE_string; }
    enterRule(listener) {
        if (listener.enterString)
            listener.enterString(this);
    }
    exitRule(listener) {
        if (listener.exitString)
            listener.exitString(this);
    }
    accept(visitor) {
        if (visitor.visitString)
            return visitor.visitString(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StringContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StringContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StringContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StringContext.prototype, "accept", null);
exports.StringContext = StringContext;
//# sourceMappingURL=LuaParser.js.map