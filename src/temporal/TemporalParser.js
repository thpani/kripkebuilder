// Generated from Temporal.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('lib/antlr4/runtime/JavaScript/src/antlr4/index');
var grammarFileName = "Temporal.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\"\u0087\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\u000f\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u00033\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003G\n\u0003\f\u0003\u000e",
    "\u0003J\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004b\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u0082\n\u0004\f\u0004\u000e\u0004",
    "\u0085\u000b\u0004\u0003\u0004\u0002\u0004\u0004\u0006\u0005\u0002\u0004",
    "\u0006\u0002\u0002\u00a7\u0002\u000e\u0003\u0002\u0002\u0002\u00042",
    "\u0003\u0002\u0002\u0002\u0006a\u0003\u0002\u0002\u0002\b\t\u0005\u0004",
    "\u0003\u0002\t\n\b\u0002\u0001\u0002\n\u000f\u0003\u0002\u0002\u0002",
    "\u000b\f\u0005\u0006\u0004\u0002\f\r\b\u0002\u0001\u0002\r\u000f\u0003",
    "\u0002\u0002\u0002\u000e\b\u0003\u0002\u0002\u0002\u000e\u000b\u0003",
    "\u0002\u0002\u0002\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0011\b",
    "\u0003\u0001\u0002\u0011\u0012\u0007\u0005\u0002\u0002\u00123\u0005",
    "\u0004\u0003\u0011\u0013\u0014\u0007\f\u0002\u0002\u00143\u0005\u0004",
    "\u0003\n\u0015\u0016\u0007\r\u0002\u0002\u00163\u0005\u0004\u0003\t",
    "\u0017\u0018\u0007\u000e\u0002\u0002\u00183\u0005\u0004\u0003\b\u0019",
    "\u001a\u0007\u000f\u0002\u0002\u001a3\u0005\u0004\u0003\u0007\u001b",
    "\u001c\u0007\u0010\u0002\u0002\u001c3\u0005\u0004\u0003\u0006\u001d",
    "\u001e\u0007\u0011\u0002\u0002\u001e3\u0005\u0004\u0003\u0005\u001f",
    "3\u0007!\u0002\u0002 !\u0007\u0003\u0002\u0002!\"\u0005\u0004\u0003",
    "\u0002\"#\u0007\u0004\u0002\u0002#3\u0003\u0002\u0002\u0002$%\u0007",
    "\u0012\u0002\u0002%&\u0007\u0013\u0002\u0002&\'\u0005\u0004\u0003\u0002",
    "\'(\u0007\u0014\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0015",
    "\u0002\u0002*3\u0003\u0002\u0002\u0002+,\u0007\u0016\u0002\u0002,-\u0007",
    "\u0013\u0002\u0002-.\u0005\u0004\u0003\u0002./\u0007\u0014\u0002\u0002",
    "/0\u0005\u0004\u0003\u000201\u0007\u0015\u0002\u000213\u0003\u0002\u0002",
    "\u00022\u0010\u0003\u0002\u0002\u00022\u0013\u0003\u0002\u0002\u0002",
    "2\u0015\u0003\u0002\u0002\u00022\u0017\u0003\u0002\u0002\u00022\u0019",
    "\u0003\u0002\u0002\u00022\u001b\u0003\u0002\u0002\u00022\u001d\u0003",
    "\u0002\u0002\u00022\u001f\u0003\u0002\u0002\u00022 \u0003\u0002\u0002",
    "\u00022$\u0003\u0002\u0002\u00022+\u0003\u0002\u0002\u00023H\u0003\u0002",
    "\u0002\u000245\f\u0010\u0002\u000256\u0007\u0006\u0002\u00026G\u0005",
    "\u0004\u0003\u001178\f\u000f\u0002\u000289\u0007\u0007\u0002\u00029",
    "G\u0005\u0004\u0003\u0010:;\f\u000e\u0002\u0002;<\u0007\b\u0002\u0002",
    "<G\u0005\u0004\u0003\u000f=>\f\r\u0002\u0002>?\u0007\t\u0002\u0002?",
    "G\u0005\u0004\u0003\u000e@A\f\f\u0002\u0002AB\u0007\n\u0002\u0002BG",
    "\u0005\u0004\u0003\rCD\f\u000b\u0002\u0002DE\u0007\u000b\u0002\u0002",
    "EG\u0005\u0004\u0003\fF4\u0003\u0002\u0002\u0002F7\u0003\u0002\u0002",
    "\u0002F:\u0003\u0002\u0002\u0002F=\u0003\u0002\u0002\u0002F@\u0003\u0002",
    "\u0002\u0002FC\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002\u0002HF\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002I\u0005\u0003\u0002\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002KL\b\u0004\u0001\u0002LM\u0007\u0005",
    "\u0002\u0002Mb\u0005\u0006\u0004\u0014NO\u0007\u0017\u0002\u0002Ob\u0005",
    "\u0006\u0004\rPQ\u0007\u0018\u0002\u0002Qb\u0005\u0006\u0004\fRS\u0007",
    "\u0019\u0002\u0002Sb\u0005\u0006\u0004\u000bTU\u0007\u001b\u0002\u0002",
    "Ub\u0005\u0006\u0004\bVW\u0007\u001c\u0002\u0002Wb\u0005\u0006\u0004",
    "\u0007XY\u0007\u001d\u0002\u0002Yb\u0005\u0006\u0004\u0006Z[\u0007\u001e",
    "\u0002\u0002[b\u0005\u0006\u0004\u0005\\b\u0007!\u0002\u0002]^\u0007",
    "\u0003\u0002\u0002^_\u0005\u0006\u0004\u0002_`\u0007\u0004\u0002\u0002",
    "`b\u0003\u0002\u0002\u0002aK\u0003\u0002\u0002\u0002aN\u0003\u0002\u0002",
    "\u0002aP\u0003\u0002\u0002\u0002aR\u0003\u0002\u0002\u0002aT\u0003\u0002",
    "\u0002\u0002aV\u0003\u0002\u0002\u0002aX\u0003\u0002\u0002\u0002aZ\u0003",
    "\u0002\u0002\u0002a\\\u0003\u0002\u0002\u0002a]\u0003\u0002\u0002\u0002",
    "b\u0083\u0003\u0002\u0002\u0002cd\f\u0013\u0002\u0002de\u0007\u0006",
    "\u0002\u0002e\u0082\u0005\u0006\u0004\u0014fg\f\u0012\u0002\u0002gh",
    "\u0007\u0007\u0002\u0002h\u0082\u0005\u0006\u0004\u0013ij\f\u0011\u0002",
    "\u0002jk\u0007\b\u0002\u0002k\u0082\u0005\u0006\u0004\u0012lm\f\u0010",
    "\u0002\u0002mn\u0007\t\u0002\u0002n\u0082\u0005\u0006\u0004\u0011op",
    "\f\u000f\u0002\u0002pq\u0007\n\u0002\u0002q\u0082\u0005\u0006\u0004",
    "\u0010rs\f\u000e\u0002\u0002st\u0007\u000b\u0002\u0002t\u0082\u0005",
    "\u0006\u0004\u000fuv\f\n\u0002\u0002vw\u0007\u0014\u0002\u0002w\u0082",
    "\u0005\u0006\u0004\u000bxy\f\t\u0002\u0002yz\u0007\u001a\u0002\u0002",
    "z\u0082\u0005\u0006\u0004\n{|\f\u0004\u0002\u0002|}\u0007\u001f\u0002",
    "\u0002}\u0082\u0005\u0006\u0004\u0005~\u007f\f\u0003\u0002\u0002\u007f",
    "\u0080\u0007 \u0002\u0002\u0080\u0082\u0005\u0006\u0004\u0004\u0081",
    "c\u0003\u0002\u0002\u0002\u0081f\u0003\u0002\u0002\u0002\u0081i\u0003",
    "\u0002\u0002\u0002\u0081l\u0003\u0002\u0002\u0002\u0081o\u0003\u0002",
    "\u0002\u0002\u0081r\u0003\u0002\u0002\u0002\u0081u\u0003\u0002\u0002",
    "\u0002\u0081x\u0003\u0002\u0002\u0002\u0081{\u0003\u0002\u0002\u0002",
    "\u0081~\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002",
    "\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002",
    "\u0084\u0007\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002",
    "\t\u000e2FHa\u0081\u0083"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "')'", "'!'", "'&'", "'|'", "'xor'", 
                     "'xnor'", "'->'", "'<->'", "'EG'", "'EX'", "'EF'", 
                     "'AG'", "'AX'", "'AF'", "'E'", "'['", "'U'", "']'", 
                     "'A'", "'X'", "'G'", "'F'", "'V'", "'Y'", "'Z'", "'H'", 
                     "'O'", "'S'", "'T'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', "SIMPLE_EXPR", "WS" ];

var ruleNames =  [ "temporal", "ctl_expr", "ltl_expr" ];

function TemporalParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TemporalParser.prototype = Object.create(antlr4.Parser.prototype);
TemporalParser.prototype.constructor = TemporalParser;

Object.defineProperty(TemporalParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TemporalParser.EOF = antlr4.Token.EOF;
TemporalParser.T__0 = 1;
TemporalParser.T__1 = 2;
TemporalParser.T__2 = 3;
TemporalParser.T__3 = 4;
TemporalParser.T__4 = 5;
TemporalParser.T__5 = 6;
TemporalParser.T__6 = 7;
TemporalParser.T__7 = 8;
TemporalParser.T__8 = 9;
TemporalParser.T__9 = 10;
TemporalParser.T__10 = 11;
TemporalParser.T__11 = 12;
TemporalParser.T__12 = 13;
TemporalParser.T__13 = 14;
TemporalParser.T__14 = 15;
TemporalParser.T__15 = 16;
TemporalParser.T__16 = 17;
TemporalParser.T__17 = 18;
TemporalParser.T__18 = 19;
TemporalParser.T__19 = 20;
TemporalParser.T__20 = 21;
TemporalParser.T__21 = 22;
TemporalParser.T__22 = 23;
TemporalParser.T__23 = 24;
TemporalParser.T__24 = 25;
TemporalParser.T__25 = 26;
TemporalParser.T__26 = 27;
TemporalParser.T__27 = 28;
TemporalParser.T__28 = 29;
TemporalParser.T__29 = 30;
TemporalParser.SIMPLE_EXPR = 31;
TemporalParser.WS = 32;

TemporalParser.RULE_temporal = 0;
TemporalParser.RULE_ctl_expr = 1;
TemporalParser.RULE_ltl_expr = 2;

function TemporalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TemporalParser.RULE_temporal;
    this.logic = null
    return this;
}

TemporalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemporalContext.prototype.constructor = TemporalContext;

TemporalContext.prototype.ctl_expr = function() {
    return this.getTypedRuleContext(Ctl_exprContext,0);
};

TemporalContext.prototype.ltl_expr = function() {
    return this.getTypedRuleContext(Ltl_exprContext,0);
};




TemporalParser.TemporalContext = TemporalContext;

TemporalParser.prototype.temporal = function() {

    var localctx = new TemporalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TemporalParser.RULE_temporal);
    try {
        this.state = 12;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 6;
            this.ctl_expr(0);
             localctx.logic =  "CTL" 
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 9;
            this.ltl_expr(0);
             localctx.logic =  "LTL" 
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ctl_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TemporalParser.RULE_ctl_expr;
    return this;
}

Ctl_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ctl_exprContext.prototype.constructor = Ctl_exprContext;

Ctl_exprContext.prototype.ctl_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ctl_exprContext);
    } else {
        return this.getTypedRuleContext(Ctl_exprContext,i);
    }
};

Ctl_exprContext.prototype.SIMPLE_EXPR = function() {
    return this.getToken(TemporalParser.SIMPLE_EXPR, 0);
};



TemporalParser.prototype.ctl_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Ctl_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, TemporalParser.RULE_ctl_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        switch(this._input.LA(1)) {
        case TemporalParser.T__2:
            this.state = 15;
            this.match(TemporalParser.T__2);
            this.state = 16;
            this.ctl_expr(15);
            break;
        case TemporalParser.T__9:
            this.state = 17;
            this.match(TemporalParser.T__9);
            this.state = 18;
            this.ctl_expr(8);
            break;
        case TemporalParser.T__10:
            this.state = 19;
            this.match(TemporalParser.T__10);
            this.state = 20;
            this.ctl_expr(7);
            break;
        case TemporalParser.T__11:
            this.state = 21;
            this.match(TemporalParser.T__11);
            this.state = 22;
            this.ctl_expr(6);
            break;
        case TemporalParser.T__12:
            this.state = 23;
            this.match(TemporalParser.T__12);
            this.state = 24;
            this.ctl_expr(5);
            break;
        case TemporalParser.T__13:
            this.state = 25;
            this.match(TemporalParser.T__13);
            this.state = 26;
            this.ctl_expr(4);
            break;
        case TemporalParser.T__14:
            this.state = 27;
            this.match(TemporalParser.T__14);
            this.state = 28;
            this.ctl_expr(3);
            break;
        case TemporalParser.SIMPLE_EXPR:
            this.state = 29;
            this.match(TemporalParser.SIMPLE_EXPR);
            break;
        case TemporalParser.T__0:
            this.state = 30;
            this.match(TemporalParser.T__0);
            this.state = 31;
            this.ctl_expr(0);
            this.state = 32;
            this.match(TemporalParser.T__1);
            break;
        case TemporalParser.T__15:
            this.state = 34;
            this.match(TemporalParser.T__15);
            this.state = 35;
            this.match(TemporalParser.T__16);
            this.state = 36;
            this.ctl_expr(0);
            this.state = 37;
            this.match(TemporalParser.T__17);
            this.state = 38;
            this.ctl_expr(0);
            this.state = 39;
            this.match(TemporalParser.T__18);
            break;
        case TemporalParser.T__19:
            this.state = 41;
            this.match(TemporalParser.T__19);
            this.state = 42;
            this.match(TemporalParser.T__16);
            this.state = 43;
            this.ctl_expr(0);
            this.state = 44;
            this.match(TemporalParser.T__17);
            this.state = 45;
            this.ctl_expr(0);
            this.state = 46;
            this.match(TemporalParser.T__18);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 70;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 68;
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Ctl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ctl_expr);
                    this.state = 50;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 51;
                    this.match(TemporalParser.T__3);
                    this.state = 52;
                    this.ctl_expr(15);
                    break;

                case 2:
                    localctx = new Ctl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ctl_expr);
                    this.state = 53;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 54;
                    this.match(TemporalParser.T__4);
                    this.state = 55;
                    this.ctl_expr(14);
                    break;

                case 3:
                    localctx = new Ctl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ctl_expr);
                    this.state = 56;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 57;
                    this.match(TemporalParser.T__5);
                    this.state = 58;
                    this.ctl_expr(13);
                    break;

                case 4:
                    localctx = new Ctl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ctl_expr);
                    this.state = 59;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 60;
                    this.match(TemporalParser.T__6);
                    this.state = 61;
                    this.ctl_expr(12);
                    break;

                case 5:
                    localctx = new Ctl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ctl_expr);
                    this.state = 62;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 63;
                    this.match(TemporalParser.T__7);
                    this.state = 64;
                    this.ctl_expr(11);
                    break;

                case 6:
                    localctx = new Ctl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ctl_expr);
                    this.state = 65;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 66;
                    this.match(TemporalParser.T__8);
                    this.state = 67;
                    this.ctl_expr(10);
                    break;

                } 
            }
            this.state = 72;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Ltl_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TemporalParser.RULE_ltl_expr;
    return this;
}

Ltl_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ltl_exprContext.prototype.constructor = Ltl_exprContext;

Ltl_exprContext.prototype.ltl_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ltl_exprContext);
    } else {
        return this.getTypedRuleContext(Ltl_exprContext,i);
    }
};

Ltl_exprContext.prototype.SIMPLE_EXPR = function() {
    return this.getToken(TemporalParser.SIMPLE_EXPR, 0);
};



TemporalParser.prototype.ltl_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Ltl_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, TemporalParser.RULE_ltl_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        switch(this._input.LA(1)) {
        case TemporalParser.T__2:
            this.state = 74;
            this.match(TemporalParser.T__2);
            this.state = 75;
            this.ltl_expr(18);
            break;
        case TemporalParser.T__20:
            this.state = 76;
            this.match(TemporalParser.T__20);
            this.state = 77;
            this.ltl_expr(11);
            break;
        case TemporalParser.T__21:
            this.state = 78;
            this.match(TemporalParser.T__21);
            this.state = 79;
            this.ltl_expr(10);
            break;
        case TemporalParser.T__22:
            this.state = 80;
            this.match(TemporalParser.T__22);
            this.state = 81;
            this.ltl_expr(9);
            break;
        case TemporalParser.T__24:
            this.state = 82;
            this.match(TemporalParser.T__24);
            this.state = 83;
            this.ltl_expr(6);
            break;
        case TemporalParser.T__25:
            this.state = 84;
            this.match(TemporalParser.T__25);
            this.state = 85;
            this.ltl_expr(5);
            break;
        case TemporalParser.T__26:
            this.state = 86;
            this.match(TemporalParser.T__26);
            this.state = 87;
            this.ltl_expr(4);
            break;
        case TemporalParser.T__27:
            this.state = 88;
            this.match(TemporalParser.T__27);
            this.state = 89;
            this.ltl_expr(3);
            break;
        case TemporalParser.SIMPLE_EXPR:
            this.state = 90;
            this.match(TemporalParser.SIMPLE_EXPR);
            break;
        case TemporalParser.T__0:
            this.state = 91;
            this.match(TemporalParser.T__0);
            this.state = 92;
            this.ltl_expr(0);
            this.state = 93;
            this.match(TemporalParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 129;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 127;
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 98;
                    this.match(TemporalParser.T__3);
                    this.state = 99;
                    this.ltl_expr(18);
                    break;

                case 2:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 100;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 101;
                    this.match(TemporalParser.T__4);
                    this.state = 102;
                    this.ltl_expr(17);
                    break;

                case 3:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 103;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 104;
                    this.match(TemporalParser.T__5);
                    this.state = 105;
                    this.ltl_expr(16);
                    break;

                case 4:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 106;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 107;
                    this.match(TemporalParser.T__6);
                    this.state = 108;
                    this.ltl_expr(15);
                    break;

                case 5:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 110;
                    this.match(TemporalParser.T__7);
                    this.state = 111;
                    this.ltl_expr(14);
                    break;

                case 6:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 112;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 113;
                    this.match(TemporalParser.T__8);
                    this.state = 114;
                    this.ltl_expr(13);
                    break;

                case 7:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 115;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 116;
                    this.match(TemporalParser.T__17);
                    this.state = 117;
                    this.ltl_expr(9);
                    break;

                case 8:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 118;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 119;
                    this.match(TemporalParser.T__23);
                    this.state = 120;
                    this.ltl_expr(8);
                    break;

                case 9:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 121;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 122;
                    this.match(TemporalParser.T__28);
                    this.state = 123;
                    this.ltl_expr(3);
                    break;

                case 10:
                    localctx = new Ltl_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TemporalParser.RULE_ltl_expr);
                    this.state = 124;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 125;
                    this.match(TemporalParser.T__29);
                    this.state = 126;
                    this.ltl_expr(2);
                    break;

                } 
            }
            this.state = 131;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


TemporalParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.ctl_expr_sempred(localctx, predIndex);
	case 2:
			return this.ltl_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TemporalParser.prototype.ctl_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

TemporalParser.prototype.ltl_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 17);
		case 7:
			return this.precpred(this._ctx, 16);
		case 8:
			return this.precpred(this._ctx, 15);
		case 9:
			return this.precpred(this._ctx, 14);
		case 10:
			return this.precpred(this._ctx, 13);
		case 11:
			return this.precpred(this._ctx, 12);
		case 12:
			return this.precpred(this._ctx, 8);
		case 13:
			return this.precpred(this._ctx, 7);
		case 14:
			return this.precpred(this._ctx, 2);
		case 15:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TemporalParser = TemporalParser;
