import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-text";

export class ChordProHighlightRules extends ace.require("ace/mode/text_highlight_rules").TextHighlightRules {
    constructor() {
        super();

        var reOpenBrace = "(^\\s*{)";
        var reCloseBrace = "(\\s*}\\s*$)";
        var reColon = "(\\s*:)";

        // stand alone
        var reNumber = "\\b[0-9]+\\b";

        // token (CSS classes names)
        var tkBrace = 'meta.tag';
        var tkCommand = 'meta';
        var tkSingleTag = 'entity.name';

        this.$rules = {
            "start": [{
                token: "comment",
                regex: "^#.*$" // debated this, for now MUST be first character (otherwise allow \\s*)
            }, {
                token: [tkBrace, tkSingleTag, tkBrace],
                regex: reOpenBrace + "(column_break|new_page|np|colb|start_of_chorus|soc|end_of_chorus|eoc)" + reCloseBrace,
                caseInsensitive: true
            }, {
                token: [tkBrace, tkSingleTag, tkBrace],
                regex: reOpenBrace + "(start_of_tab|sot)" + reCloseBrace,
                caseInsensitive: true,
                next: "tabBlockTag"
            }, {
                token: [tkBrace, tkCommand, tkBrace],
                regex: reOpenBrace + "(define)" + reColon,
                caseInsensitive: true,
                next: "defineTag"
            }, {
                // tkCommand?
                token: [tkBrace, "meta", tkBrace, "text", tkBrace],
                regex: reOpenBrace + "(c|comment)" + reColon + "(.*)" + reCloseBrace,
                caseInsensitive: true
            }, {
                token: [tkBrace, tkCommand, tkBrace, "string", tkBrace],
                regex: reOpenBrace + "(title|t|subtitle|st|artist|album|instrument|tuning|key|k)" + reColon + "(.*)" + reCloseBrace,
                caseInsensitive: true
            }, {
                token: [tkBrace, 'invalid', tkBrace, "string", tkBrace],
                regex: reOpenBrace + "([-\\S]+)" + reColon + "(.*)" + reCloseBrace,
                caseInsensitive: true
            }, {
                token: [tkBrace, 'invalid', tkBrace],
                regex: reOpenBrace + "(.+)" + reCloseBrace,
                caseInsensitive: true
            }, {
                token: "constant.numeric",
                regex: reNumber
            }, {
                token: ["constant.character.escape", "keyword", "constant.character.escape"],
                regex: "(\\[)(.*?)(\\])"
            }, {
                token: "text",
                regex: "\\s+"
            }],

            "defineTag": [{
                token: tkBrace,
                regex: reCloseBrace,
                next: "start"
            }, {
                token: "constant.mumeric",
                regex: reNumber
            }, {
                token: "keyword.control",
                regex: "\\b(fingers|frets|finger|fret|string)\b",
                caseInsensitive: true
            }, {
                token: [tkCommand, tkBrace],
                regex: "\\b(add)" + reColon,
                caseInsensitive: true
            }, {
                defaultToken: "string"
            }],

            "tabBlockTag": [{
                token: [tkBrace, tkSingleTag, tkBrace],
                regex: reOpenBrace + "(end_of_tab|eot)" + reCloseBrace,
                caseInsensitive: true,
                next: "start"
            }, {
                token: "comment.line",
                regex: "-+"
            }, {
                token: "constant.character",
                regex: "\\|+"
            }, {
                token: "string",
                regex: "[a-gA-G][b#]?"
            }, {
                token: "constant.mumeric",
                regex: reNumber
            }, {
                defaultToken: "comment"
            }]
        };

        // this.normalizeRules();
    };
}

export default class ChordProMode extends ace.require("ace/mode/text").Mode {
    constructor() {
        super();

        this.HighlightRules = ChordProHighlightRules;
    }
}