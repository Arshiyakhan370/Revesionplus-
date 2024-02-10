import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useDropzone } from "react-dropzone";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [file, setFile] = useState(null);
  const editorRef = useRef(null);

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf, image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((acceptedFile) => {
        setFile(acceptedFile);
      });
    },
  });

  return (
    <div>
      <h2>Text Editor</h2>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        placeholder="Enter text content"
        ref={editorRef}
      />
      <h2>File Upload</h2>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </div>
      {file && (
        <div>
          <h3>Uploaded File:</h3>
          <p>{file.name}</p>
          <p>File size: {file.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default TextEditor