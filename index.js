var Parser = require("jison").Parser;

var arr = [];

// a grammar in JSON
var grammar = {
    "lex": {
        "rules": [
           ["\\s+", "/* skip whitespace */"],
           ["[a-f0-9]+", "return 'HEX';"]
        ]
    },

    "bnf": {
        "hex_strings" :[["hex_strings HEX", "yy.arr.push($2)"], 
                         ["HEX", "yy.arr.push($1)"] ]
    }
};


// `grammar` can also be a string that uses jison's grammar format
var parser = new Parser(grammar);
parser.yy.arr = [];

parser.parse("adfe34bc e82a");

console.log(parser.yy.arr);