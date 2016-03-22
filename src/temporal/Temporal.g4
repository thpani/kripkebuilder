grammar Temporal;

temporal returns [string logic] : ctl_expr { $logic = "CTL"; }
                                | ltl_expr { $logic = "LTL"; }
                                ;

ctl_expr:   SIMPLE_EXPR
        | '(' ctl_expr ')'
        | '!' ctl_expr
        | ctl_expr '&' ctl_expr
        | ctl_expr '|' ctl_expr
        | ctl_expr 'xor' ctl_expr
        | ctl_expr 'xnor' ctl_expr
        | ctl_expr '->' ctl_expr
        | ctl_expr '<->' ctl_expr
        | 'EG' ctl_expr
        | 'EX' ctl_expr
        | 'EF' ctl_expr
        | 'AG' ctl_expr
        | 'AX' ctl_expr
        | 'AF' ctl_expr
        | 'E' '[' ctl_expr 'U' ctl_expr ']'
        | 'A' '[' ctl_expr 'U' ctl_expr ']'
        ;
        
ltl_expr: SIMPLE_EXPR
        | '(' ltl_expr ')'
        | '!' ltl_expr
        | ltl_expr '&' ltl_expr
        | ltl_expr '|' ltl_expr
        | ltl_expr 'xor' ltl_expr
        | ltl_expr 'xnor' ltl_expr
        | ltl_expr '->' ltl_expr
        | ltl_expr '<->' ltl_expr
        // -- FUTURE
        | 'X' ltl_expr
        | 'G' ltl_expr // -- globally
        | 'F' ltl_expr // -- finally
        | ltl_expr 'U' ltl_expr // -- until
        | ltl_expr 'V' ltl_expr // -- releases
        // -- PAST
        | 'Y' ltl_expr // -- previous state
        | 'Z' ltl_expr // -- not previous state not
        | 'H' ltl_expr // -- historically
        | 'O' ltl_expr // -- once
        | ltl_expr 'S' ltl_expr // -- since
        | ltl_expr 'T' ltl_expr // -- triggered
        ;

SIMPLE_EXPR: [a-z]+ ;
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
