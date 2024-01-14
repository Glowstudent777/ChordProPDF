import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from 'react';


export function ChordProEditor({ onChange }: any) {
    const [editorValue, setEditorValue] = useState('');

    const handleEditorChange = (value: any) => {
        setEditorValue(value);
        onChange(value);
    };
    return (
        <>
            <AceEditor
                mode="text"
                theme="github"
                onChange={handleEditorChange}
                name="chordpro-editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{ useWorker: false }}
                value={editorValue}
            />
        </>
    )
}