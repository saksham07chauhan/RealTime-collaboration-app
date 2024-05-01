import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css"; // Import styles

// Assuming you have a custom `useEdgeStore` hook
import { useEdgeStore } from "@/lib/edgestore";

// Assuming you're using Next.js
import { useTheme } from "next-themes";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  // Context access and state management
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  // Upload handler with error handling
  const handleUpload = async (file: File) => {
    try {
      const response = await edgestore.publicFiles.upload({
        file,
      });
      return response.url;
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle upload errors gracefully (e.g., display a user-friendly message)
      return null; // Or provide a default fallback URL if appropriate
    }
  };

  // Parse initial content and handle errors
  let initialBlocks: PartialBlock[] | undefined;
  try {
    if (initialContent) {
      initialBlocks = JSON.parse(initialContent) as PartialBlock[];
    }
  } catch (error) {
    console.error("Error parsing initial content:", error);
    // Handle parsing errors (e.g., display an error message or use default content)
  }

  // Create BlockNote editor with upload function and error handling
  const editor: BlockNoteEditor | undefined = useBlockNote({
    editable,
    initialContent: initialBlocks,
    uploadFile: handleUpload,
  });

  if (editor) {
    return (
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={onChange}
      />
    );
  } else {
    console.error("Error creating BlockNote editor");
    return <div>Editor initialization failed.</div>; // Informative fallback
  }
};

export default Editor;
