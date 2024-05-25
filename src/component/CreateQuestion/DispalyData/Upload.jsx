import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddIcon from '@mui/icons-material/Add';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import PrintIcon from '@mui/icons-material/Print';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  height: '99%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
};

const containerStyle = {
  display: 'flex',
  flex: 1,
  overflow: 'auto',
};

const viewerStyle = {
  flex: 2,
  padding: '20px',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRight: '1px solid #ccc',
};

const dropzoneContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '20px',
};

const dropzoneStyle = {
  width: '100%',
  margin: '10px 0',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed gray',
  borderRadius: '5px',
  padding: '20px',
};

const thumbnailContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
  overflowY: 'auto',
  width: '100%',
  padding: '10px',
};

const thumbnailStyle = {
  width: '100px',
  height: '140px',
  objectFit: 'cover',
  border: '1px solid #ccc',
  cursor: 'pointer',
  display: 'flex',
  borderRadius: '10%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  flexDirection: 'column',
};

const iframeStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
};

const printButtonStyle = {
  marginTop: '40px',
};

const Upload = ({ open, onClose }) => {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpeg', '.png', '.jpg']
    },
    multiple: true,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (acceptedFiles.length > 0 && !selectedFile) {
      const fileURL = URL.createObjectURL(acceptedFiles[0]);
      setSelectedFile(fileURL);
      setSelectedFileType(acceptedFiles[0].type);
    }
  }, [acceptedFiles, selectedFile]);

  const handleThumbnailClick = (fileURL, fileType) => {
    setSelectedFile(fileURL);
    setSelectedFileType(fileType);
  };

  const handleFileUpload = () => {
    const newFiles = acceptedFiles.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type || 'unknown'
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const handleCancel = () => {
    setFiles([]);
    setSelectedFile(null);
    setSelectedFileType(null);
    onClose();
  };

  const handleSave = () => {
    console.log('Files saved:', files);
    onClose();
  };

  const handlePrint = () => {
    if (selectedFile) {
      const printWindow = window.open(selectedFile, '_blank');
      printWindow.print();
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="upload-modal-title">
      <Box sx={modalStyle}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="upload-modal-title" variant="h6" component="h2">
            Uploaded Files
          </Typography>
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={containerStyle}>
          <Box sx={viewerStyle}>
            {selectedFile && (
              <>
                {selectedFileType.startsWith('image/') ? (
                  <img src={selectedFile} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                  <iframe src={selectedFile} title="File Viewer" style={iframeStyle} />
                )}
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PrintIcon />}
                  onClick={handlePrint}
                  sx={{printButtonStyle ,
                    marginTop: '30px',
        color: "white",
        background:
          "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
     }}
                >
                  Print
                </Button>
              </>
            )}
          </Box>
          <Box sx={dropzoneContainerStyle}>
            <Box {...getRootProps()} sx={dropzoneStyle}>
              <input {...getInputProps()} />
              <div>
                <InboxIcon style={{ fontSize: 48, color: isDragActive ? 'green' : '#ccc' }} />
              </div>
              <Typography>Drag and drop files here or click to browse</Typography>
              <Typography variant="body2" color="textSecondary">
                Supported Types: pdf, jpeg, png, jpg<br />
                Max Allowed Size: 20 MB
              </Typography>
            </Box>
            <Box sx={thumbnailContainerStyle}>
              {files.map((file, index) => (
                <div
                  key={index}
                  style={thumbnailStyle}
                  onClick={() => handleThumbnailClick(file.url, file.type)}
                >
                  {file.type.startsWith('image/') ? (
                    <ImageIcon style={{ fontSize: 38 }} />
                  ) : (
                    <DescriptionIcon style={{ fontSize: 38 }} />
                  )}
                  <Typography variant="caption">{file.name}</Typography>
                </div>
              ))}
              <div style={thumbnailStyle} onClick={handleFileUpload}>
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <AddIcon style={{ fontSize: 48 }} />
                </IconButton>
              </div>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={handleCancel} color="secondary" variant="contained" sx={{ mr: 2 , 
        color: "white",
        background:
          "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
      }}>
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained"  sx={{
        color: "white",
        background:
          "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
      }}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Upload;
