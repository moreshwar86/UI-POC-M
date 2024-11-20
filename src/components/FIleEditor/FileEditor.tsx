import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from "draft-js";
import { SketchPicker } from "react-color";
import mammoth from "mammoth";
import { saveAs } from "file-saver";
import { DocumentCreator } from "./DocumentCreator"; // docx.js helper for exporting
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";
import "draft-js/dist/Draft.css";

const FileEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [fileName, setFileName] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");

  // File upload handling
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const arrayBuffer = await file.arrayBuffer();
      mammoth
        .extractRawText({ arrayBuffer })
        .then((result) => {
          const blocksFromHTML = convertFromHTML(result.value);
          const contentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks
          );
          setEditorState(EditorState.createWithContent(contentState));
        })
        .catch((err) => console.error("Error reading file:", err));
    }
  };

  // Save content as Word document
  const handleSave = () => {
    const content = convertToRaw(editorState.getCurrentContent());
    DocumentCreator.create(content).then((blob) => {
      saveAs(blob, fileName || "edited_document.docx");
    });
  };

  // Toggle editing mode
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  // Apply text formatting
  const applyInlineStyle = (style: any) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const applyBlockStyle = (style: any) => {
    setEditorState(RichUtils.toggleBlockType(editorState, style));
  };

  // Apply custom color
  const applyTextColor = (color: any) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, `COLOR_${color}`));
    setCurrentColor(color);
    setShowColorPicker(false);
  };

  return (
    <div>
      <h1>Full Word-Like Editor</h1>
      <input
        type="file"
        accept=".docx"
        onChange={handleFileUpload}
        style={{ marginBottom: "10px" }}
      />
      <div
        className="toolbar"
        style={{ marginBottom: "10px", display: "flex", gap: "5px" }}
      >
        <button onClick={() => applyInlineStyle("BOLD")}>
          <FaBold />
        </button>
        <button onClick={() => applyInlineStyle("ITALIC")}>
          <FaItalic />
        </button>
        <button onClick={() => applyInlineStyle("UNDERLINE")}>
          <FaUnderline />
        </button>
        <button onClick={() => applyBlockStyle("left")}>
          <FaAlignLeft />
        </button>
        <button onClick={() => applyBlockStyle("center")}>
          <FaAlignCenter />
        </button>
        <button onClick={() => applyBlockStyle("right")}>
          <FaAlignRight />
        </button>
        <button onClick={() => setShowColorPicker(!showColorPicker)}>
          Text Color
        </button>
        {showColorPicker && (
          <SketchPicker
            color={currentColor}
            onChangeComplete={(color: any) => applyTextColor(color.hex)}
          />
        )}
      </div>
      <div
        className="editor"
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          minHeight: "300px",
          background: isEditable ? "#fff" : "#f9f9f9",
          pointerEvents: isEditable ? "auto" : "none",
        }}
      >
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={toggleEditable}>
          {isEditable ? "Disable Editing" : "Enable Editing"}
        </button>
        {isEditable && (
          <button onClick={handleSave} style={{ marginLeft: "10px" }}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default FileEditor;
