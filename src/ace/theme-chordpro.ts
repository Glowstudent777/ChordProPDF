import ace from "ace-builds/src-noconflict/ace";

ace.define("ace/theme/chordpro", ["require", "exports", "module", "ace/lib/dom"], function (acequire: any, exports: any, module: any) {

    exports.isDark = true;
    exports.cssClass = "ace-cp";
    exports.cssText = `
    .ace-cp .ace_gutter {
        background: #f0f0f0;
        color: #333;
    }
    .ace-cp .ace_print-margin {
        width: 1px;
        background: #e8e8e8;
    }
    .ace-cp .ace_fold {
        background-color: #6B72E6;
    }
    .ace-cp {
        background-color: #FFFFFF;
        color: black;
    }
    .ace-cp .ace_cursor {
        color: black;
    }
    .ace-cp .ace_invisible {
        color: rgb(191, 191, 191);
    }
    .ace-cp .ace_storage .ace-cp .ace_keyword {
        color: rgb(197, 6, 11);
    }
    .ace_keyword {
        color: #0284c7;
    }
    .ace-cp .ace_constant {
        color: #0284c7;
    }

    .ace-cp .ace_constant.ace_buildin {
        color: rgb(88, 72, 246);
    }
    .ace-cp .ace_constant.ace_language {
        color: rgb(88, 92, 246);
    }
    .ace-cp .ace_constant.ace_library {
        color: rgb(6, 150, 14);
    }
    .ace-cp .ace_invalid {
        background-color: rgba(255, 0, 0, 0.1);
        color: red;
    }
    .ace-cp .ace_support.ace_function {
        color: rgb(60, 76, 114);
    }
    .ace-cp .ace_support.ace_constant {
        color: rgb(6, 150, 14);
    }
    .ace-cp .ace_support.ace_type .ace-cp .ace_support.ace_class {
        color: rgb(109, 121, 222);
    }
    .ace-cp .ace_keyword.ace_operator {
        color: rgb(197, 6, 11);
    }
    .ace-cp .ace_string {
        color: rgb(3, 106, 7);
    }
    .ace-cp .ace_comment {
        color: rgb(76, 136, 107);
    }
    .ace-cp .ace_comment.ace_doc {
        color: rgb(0, 102, 255);
    }
    .ace-cp .ace_comment.ace_doc.ace_tag {
        color: rgb(128, 159, 191);
    }
    .ace-cp .ace_constant.ace_numeric {
        color: rgb(0, 0, 205);
    }
    .ace-cp .ace_variable {
        color: rgb(49, 132, 149);
    }
    .ace-cp .ace_xml-pe {
        color: rgb(104, 104, 91);
    }
    .ace-cp .ace_entity.ace_name.ace_function {
        color: #0000A2;
    }
    .ace-cp .ace_heading {
        color: rgb(12, 7, 255);
    }
    .ace-cp .ace_list {
        color:rgb(185, 6, 144);
    }
    .ace-cp .ace_meta.ace_tag {
        color:rgb(0, 22, 142);
    }
    .ace-cp .ace_string.ace_regex {
        color: rgb(255, 0, 0)
    }
    .ace-cp .ace_marker-layer .ace_selection {
        background: rgb(181, 213, 255);
    }
    .ace-cp.ace_multiselect .ace_selection.ace_start {
        box-shadow: 0 0 3px 0px white;
    }
    .ace-cp .ace_marker-layer .ace_step {
        background: rgb(252, 255, 0);
    }
    .ace-cp .ace_marker-layer .ace_stack {
        background: rgb(164, 229, 101);
    }
    .ace-cp .ace_marker-layer .ace_bracket {
        margin: -1px 0 0 -1px;
        border: 1px solid rgb(192, 192, 192);
    }
    .ace-cp .ace_marker-layer .ace_active-line {
        background: rgba(0, 0, 0, 0.07);
    }
    .ace-cp .ace_gutter-active-line {
        background-color : #dcdcdc;
    }
    .ace-cp .ace_marker-layer .ace_selected-word {
        background: rgb(250, 250, 255);
        border: 1px solid rgb(200, 200, 250);
    }
    `;

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
