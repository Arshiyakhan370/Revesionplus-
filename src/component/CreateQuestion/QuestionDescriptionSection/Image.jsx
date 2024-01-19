import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Modal,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../../AdminDashboard/Header';
import { useMediaQuery } from 'react-responsive';

const Image = ({isSidebarClosed}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const imageUrl = 'https://example.com/placeholder.jpg';
      resolve({ data: { link: imageUrl } });
    });
  };

  const handleAddFromUrl = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleUrlSubmit = () => {
    handleModalClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    window.history.back();
  };
  const styles = {
    width: isSidebarClosed ?  (isSmallScreen ? '100%' : '94%') : (isSmallScreen ? '100%' : '79%'),
    marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '6%') : (isSmallScreen ? '0%' : '21%'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  return (
    <Container maxWidth="xl" mt={16}>
   
      <Card style={styles} mt={16}>
        <CardContent>
        <Typography variant="h5" align="center" mb={4} mt={4}>
               Image
              </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
             
              <Grid item xs={12}>
                <div>
                  {imageSrc && <img src={imageSrc} alt="Uploaded" className="img-fluid" />}
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop an image here, or click to select an image</p>
                  </div>
                </div>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
           
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={description !== ''}
                      onChange={() => setDescription(description !== '' ? '' : 'Add description')}
                    />
                  }
                  label={description !== '' ? 'Add description' : 'Description'}
                />
              </Grid>
              {description !== '' && (
                <Grid item xs={12}>
                
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="Enter your content"
                    toolbar={{ image: { uploadCallback: handleImageUpload } }}
                    onEditorStateChange={(value) => setDescription(value)}
                  />
                </Grid>
              )}
            
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Image URL"
                  variant="outlined"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <Button onClick={handleAddFromUrl} variant="contained" color="primary">
                  Add from URL
                </Button>
              </Grid>
            </Grid>

         
            <Modal open={showModal} onClose={handleModalClose} className='mt-10 w-80'>
              <div>
                <TextField
                  label="Image URL"
                  type="text"
                  placeholder="Enter URL"
                  fullWidth
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleUrlSubmit}>
                  OK
                </Button>
              </div>
            </Modal>

            <Grid item xs={12} mt={3}>
              <Grid container justifyContent="space-between">
                <Button variant="contained" onClick={handleCancel}>
                  Back
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Image;
