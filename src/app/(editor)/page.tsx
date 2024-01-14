"use client"

import { ChordProEditor } from "@/components/chordProEditor";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChordProRenderer } from "@/components/chordProRenderer";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function HomePage() {
  const [output, setOutput] = useState('');

  const handleInputChange = (value: any) => {
    setOutput(value);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-2xl font-bold">Text Editor</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">Cut</Button>
          <Button variant="outline">Copy</Button>
          <Button variant="outline">Paste</Button>
          <Button variant="outline">Undo</Button>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <div className="border-r p-4">
          <div>
            <ChordProEditor onChange={handleInputChange} />
          </div>
        </div>
        <div className="flex-1 p-4">
          <h2 className="mb-4 text-lg font-semibold">Text Editor</h2>
          <ScrollArea className="h-full w-full rounded-md border">
            <div className="p-4 text-sm">
              <ChordProRenderer content={output} />
            </div>
          </ScrollArea>
        </div>
      </main >
    </div >
  );
}
