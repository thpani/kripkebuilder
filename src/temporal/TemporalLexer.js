// Generated from Temporal.g4 by ANTLR 4.5.1
// jshint ignore: start
var require = requirejs;
var antlr4 = require('lib/antlr4/runtime/JavaScript/src/antlr4/index');

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\"\u0099\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003 \u0006 \u008f\n \r \u000e \u0090\u0003!\u0006!\u0094\n",
    "!\r!\u000e!\u0095\u0003!\u0003!\u0002\u0002\"\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d",
    "9\u001e;\u001f= ?!A\"\u0003\u0002\u0004\u0003\u0002c|\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u009a\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003",
    "\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002",
    "\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0003C\u0003\u0002\u0002",
    "\u0002\u0005E\u0003\u0002\u0002\u0002\u0007G\u0003\u0002\u0002\u0002",
    "\tI\u0003\u0002\u0002\u0002\u000bK\u0003\u0002\u0002\u0002\rM\u0003",
    "\u0002\u0002\u0002\u000fQ\u0003\u0002\u0002\u0002\u0011V\u0003\u0002",
    "\u0002\u0002\u0013Y\u0003\u0002\u0002\u0002\u0015]\u0003\u0002\u0002",
    "\u0002\u0017`\u0003\u0002\u0002\u0002\u0019c\u0003\u0002\u0002\u0002",
    "\u001bf\u0003\u0002\u0002\u0002\u001di\u0003\u0002\u0002\u0002\u001f",
    "l\u0003\u0002\u0002\u0002!o\u0003\u0002\u0002\u0002#q\u0003\u0002\u0002",
    "\u0002%s\u0003\u0002\u0002\u0002\'u\u0003\u0002\u0002\u0002)w\u0003",
    "\u0002\u0002\u0002+y\u0003\u0002\u0002\u0002-{\u0003\u0002\u0002\u0002",
    "/}\u0003\u0002\u0002\u00021\u007f\u0003\u0002\u0002\u00023\u0081\u0003",
    "\u0002\u0002\u00025\u0083\u0003\u0002\u0002\u00027\u0085\u0003\u0002",
    "\u0002\u00029\u0087\u0003\u0002\u0002\u0002;\u0089\u0003\u0002\u0002",
    "\u0002=\u008b\u0003\u0002\u0002\u0002?\u008e\u0003\u0002\u0002\u0002",
    "A\u0093\u0003\u0002\u0002\u0002CD\u0007*\u0002\u0002D\u0004\u0003\u0002",
    "\u0002\u0002EF\u0007+\u0002\u0002F\u0006\u0003\u0002\u0002\u0002GH\u0007",
    "#\u0002\u0002H\b\u0003\u0002\u0002\u0002IJ\u0007(\u0002\u0002J\n\u0003",
    "\u0002\u0002\u0002KL\u0007~\u0002\u0002L\f\u0003\u0002\u0002\u0002M",
    "N\u0007z\u0002\u0002NO\u0007q\u0002\u0002OP\u0007t\u0002\u0002P\u000e",
    "\u0003\u0002\u0002\u0002QR\u0007z\u0002\u0002RS\u0007p\u0002\u0002S",
    "T\u0007q\u0002\u0002TU\u0007t\u0002\u0002U\u0010\u0003\u0002\u0002\u0002",
    "VW\u0007/\u0002\u0002WX\u0007@\u0002\u0002X\u0012\u0003\u0002\u0002",
    "\u0002YZ\u0007>\u0002\u0002Z[\u0007/\u0002\u0002[\\\u0007@\u0002\u0002",
    "\\\u0014\u0003\u0002\u0002\u0002]^\u0007G\u0002\u0002^_\u0007I\u0002",
    "\u0002_\u0016\u0003\u0002\u0002\u0002`a\u0007G\u0002\u0002ab\u0007Z",
    "\u0002\u0002b\u0018\u0003\u0002\u0002\u0002cd\u0007G\u0002\u0002de\u0007",
    "H\u0002\u0002e\u001a\u0003\u0002\u0002\u0002fg\u0007C\u0002\u0002gh",
    "\u0007I\u0002\u0002h\u001c\u0003\u0002\u0002\u0002ij\u0007C\u0002\u0002",
    "jk\u0007Z\u0002\u0002k\u001e\u0003\u0002\u0002\u0002lm\u0007C\u0002",
    "\u0002mn\u0007H\u0002\u0002n \u0003\u0002\u0002\u0002op\u0007G\u0002",
    "\u0002p\"\u0003\u0002\u0002\u0002qr\u0007]\u0002\u0002r$\u0003\u0002",
    "\u0002\u0002st\u0007W\u0002\u0002t&\u0003\u0002\u0002\u0002uv\u0007",
    "_\u0002\u0002v(\u0003\u0002\u0002\u0002wx\u0007C\u0002\u0002x*\u0003",
    "\u0002\u0002\u0002yz\u0007Z\u0002\u0002z,\u0003\u0002\u0002\u0002{|",
    "\u0007I\u0002\u0002|.\u0003\u0002\u0002\u0002}~\u0007H\u0002\u0002~",
    "0\u0003\u0002\u0002\u0002\u007f\u0080\u0007X\u0002\u0002\u00802\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0007[\u0002\u0002\u00824\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\\\u0002\u0002\u00846\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0007J\u0002\u0002\u00868\u0003\u0002\u0002\u0002",
    "\u0087\u0088\u0007Q\u0002\u0002\u0088:\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0007U\u0002\u0002\u008a<\u0003\u0002\u0002\u0002\u008b\u008c",
    "\u0007V\u0002\u0002\u008c>\u0003\u0002\u0002\u0002\u008d\u008f\t\u0002",
    "\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002",
    "\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091@\u0003\u0002\u0002\u0002\u0092\u0094\t\u0003\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0098\b!\u0002\u0002",
    "\u0098B\u0003\u0002\u0002\u0002\u0005\u0002\u0090\u0095\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TemporalLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TemporalLexer.prototype = Object.create(antlr4.Lexer.prototype);
TemporalLexer.prototype.constructor = TemporalLexer;

TemporalLexer.EOF = antlr4.Token.EOF;
TemporalLexer.T__0 = 1;
TemporalLexer.T__1 = 2;
TemporalLexer.T__2 = 3;
TemporalLexer.T__3 = 4;
TemporalLexer.T__4 = 5;
TemporalLexer.T__5 = 6;
TemporalLexer.T__6 = 7;
TemporalLexer.T__7 = 8;
TemporalLexer.T__8 = 9;
TemporalLexer.T__9 = 10;
TemporalLexer.T__10 = 11;
TemporalLexer.T__11 = 12;
TemporalLexer.T__12 = 13;
TemporalLexer.T__13 = 14;
TemporalLexer.T__14 = 15;
TemporalLexer.T__15 = 16;
TemporalLexer.T__16 = 17;
TemporalLexer.T__17 = 18;
TemporalLexer.T__18 = 19;
TemporalLexer.T__19 = 20;
TemporalLexer.T__20 = 21;
TemporalLexer.T__21 = 22;
TemporalLexer.T__22 = 23;
TemporalLexer.T__23 = 24;
TemporalLexer.T__24 = 25;
TemporalLexer.T__25 = 26;
TemporalLexer.T__26 = 27;
TemporalLexer.T__27 = 28;
TemporalLexer.T__28 = 29;
TemporalLexer.T__29 = 30;
TemporalLexer.SIMPLE_EXPR = 31;
TemporalLexer.WS = 32;


TemporalLexer.modeNames = [ "DEFAULT_MODE" ];

TemporalLexer.literalNames = [ 'null', "'('", "')'", "'!'", "'&'", "'|'", 
                               "'xor'", "'xnor'", "'->'", "'<->'", "'EG'", 
                               "'EX'", "'EF'", "'AG'", "'AX'", "'AF'", "'E'", 
                               "'['", "'U'", "']'", "'A'", "'X'", "'G'", 
                               "'F'", "'V'", "'Y'", "'Z'", "'H'", "'O'", 
                               "'S'", "'T'" ];

TemporalLexer.symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 
                                'null', 'null', 'null', 'null', 'null', 
                                'null', 'null', 'null', 'null', 'null', 
                                'null', 'null', 'null', 'null', 'null', 
                                'null', 'null', 'null', 'null', 'null', 
                                'null', 'null', 'null', 'null', 'null', 
                                'null', "SIMPLE_EXPR", "WS" ];

TemporalLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                            "T__6", "T__7", "T__8", "T__9", "T__10", "T__11", 
                            "T__12", "T__13", "T__14", "T__15", "T__16", 
                            "T__17", "T__18", "T__19", "T__20", "T__21", 
                            "T__22", "T__23", "T__24", "T__25", "T__26", 
                            "T__27", "T__28", "T__29", "SIMPLE_EXPR", "WS" ];

TemporalLexer.grammarFileName = "Temporal.g4";



exports.TemporalLexer = TemporalLexer;

