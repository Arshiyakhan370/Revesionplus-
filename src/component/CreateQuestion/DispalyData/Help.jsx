// src/App.js
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function Help() {
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (content, editor) => {
      setEditorContent(content);
    };
  
    return (
      <div className="App">
        <h1>React TinyMCE with MathType</h1>
        <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount tiny_mce_wiris',
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry',
            external_plugins: {
              'tiny_mce_wiris': `${process.env.PUBLIC_URL}/plugins/tiny_mce_wiris/plugin.min.js`,
            },
            draggable_modal: true,
          }}
          onEditorChange={handleEditorChange}
        />
        <div>
          <h2>Editor Content:</h2>
          <div>{editorContent}</div>
        </div>
      </div>
    );
  }

export default Help;
