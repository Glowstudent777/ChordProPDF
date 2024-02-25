"use client"

import React, { useState } from 'react';
import AceEditor from 'react-ace'

import "ace-builds/esm-resolver";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-noconflict/ext-settings_menu";
import "ace-builds/src-noconflict/ext-keybinding_menu";
import "ace-builds/src-noconflict/ext-error_marker";


import { cn } from "@/lib/utils"
import ChordProMode from '@/ace/mode-chordpro';
import '@/ace/theme-chordpro';

export function ChordProEditor({ onChange, className }: any) {
    const [editorValue, setEditorValue] = useState('');

    const handleEditorChange = (value: any) => {
        setEditorValue(value);
        onChange(value);
    };
    const customMode = new ChordProMode();


    return (
        <AceEditor
            mode={customMode}
            theme="chordpro"
            onChange={handleEditorChange}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false }}
            value={editorValue}
            className={cn(className)}
            height='100%'
        />
    )
}