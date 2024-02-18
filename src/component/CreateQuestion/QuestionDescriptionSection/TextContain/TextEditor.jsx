import React, { useState } from 'react';

const TextEditor = ({ title }) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles(newFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      onDrop={handleDrop} 
      onDragOver={handleDragOver}
      style={{ border: '2px dashed #cccccc', borderRadius: '4px', padding: '10px' }}
    >
      <p>Drag and drop {title} files here</p>
      {files.map((file, index) => (
        <div key={index}>
          <FilePreview file={file} />
        </div>
      ))}
    </div>
  );
};

const FilePreview = ({ file }) => {
  const fileType = file.type.split('/')[0];

  if (fileType === 'image') {
    return <img src={URL.createObjectURL(file)} alt="Preview" />;
  } else if (fileType === 'application' && file.type === 'application/pdf') {
    return <embed src={URL.createObjectURL(file)} type="application/pdf" />;
  } else if (fileType === 'video') {
    return <video controls src={URL.createObjectURL(file)} />;
  } else {
    return <p>Unsupported file type</p>;
  }
};



export default TextEditor