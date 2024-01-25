import ace from "ace-builds/src-noconflict/ace"

ace.define('ace/mode/custom',
    ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules'],
    // @ts-ignore
    function (acequire, exports, module) {

        const oop = acequire('ace/lib/oop');
        const TextMode = acequire('ace/mode/text').Mode;
        var ExampleHighlightRules = require("ace/mode/example_highlight_rules").ExampleHighlightRules;

        var Mode = function () {
            this.HighlightRules = ExampleHighlightRules;
        };

        oop.inherits(Mode, TextMode);

        (function () {
            // Extra logic goes here. (see below)
        }).call(Mode.prototype);

        exports.Mode = Mode;
    });

// @ts-ignore
ace.define('ace/mode/custom_highlight_rules', ['require', 'exports', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], (require, exports, module) => {

    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var ExampleHighlightRules = function () {
        this.$rules = new TextHighlightRules().getRules();
    }

    oop.inherits(ExampleHighlightRules, TextHighlightRules);

    exports.ExampleHighlightRules = ExampleHighlightRules;
});