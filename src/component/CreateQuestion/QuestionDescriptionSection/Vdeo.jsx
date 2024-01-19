import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../../AdminDashboard/Header';
import { useDropzone } from 'react-dropzone';
import { useMediaQuery } from 'react-responsive';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';


const VideoComponent = ({ videoUrl }) => {
 
  return (
    <div>
      
      <p>Video Component</p>
      <iframe
        title="Video Player"
        width="100%"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Vdeo = ({isSidebarClosed}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'video/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setVideoUrl(URL.createObjectURL(file));
      }
    },
  });

  const handleAddVideoUrl = () => {
    setShowUrlInput(true);
    setShowModal(true);
  };

  const handleAddVideoDrop = () => {
    setShowUrlInput(false);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleVideoSubmit = () => {
   
    handleModalClose();
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
      
    <Grid container justifyContent="center" spacing={3} style={styles}>
      <Grid item xs={12}>
        <Card >
          <CardContent>
            <Typography variant="h5" align="center" mb={4}>
                           Video</Typography>
        <Form
          id="segments_1"
          className="ant-form ant-form-vertical ant-form-middle css-14mf4t4"
        >
        
          <Col
            xs={24}
            className="css-14mf4t4"
            style={{ paddingLeft: '12px', paddingRight: '12px' }}
          >
            <div className="ant-form-item css-14mf4t4">
              <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-control css-14mf4t4">
                  <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                    <lebal>Title</lebal>
                      <input
                        placeholder="Title"
                        id="segments_1_resource_segment_attributes_title"
                        className="ant-input css-14mf4t4"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

        
          <Col
            xs={24}
            className="css-14mf4t4"
            style={{ paddingLeft: '12px', paddingRight: '12px' }}
          >
            <div className="ant-form-item css-14mf4t4">
              <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-control css-14mf4t4">
                  <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                      <label className="ant-checkbox-wrapper ant-checkbox-wrapper-in-form-item css-14mf4t4">
                        <span className="ant-checkbox css-14mf4t4">
                          <input
                            id="segments_1_resource_segment_attributes_include_caption"
                            className="ant-checkbox-input"
                            type="checkbox"
                            checked={description !== ''}
                            onChange={() =>
                              setDescription(
                                description !== '' ? '' : 'Add description'
                              )
                            }
                          />
                          <span className="ant-checkbox-inner"></span>
                        </span>
                        <span>
                          {description !== ''
                            ? 'Add description'
                            : 'Description'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

        
          <Col
            xs={24}
            className="css-14mf4t4"
            style={{ paddingLeft: '12px', paddingRight: '12px' }}
          >
            <div className="ant-form-item css-14mf4t4 border border-gray-500">
              <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-control css-14mf4t4">
                  <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        placeholder='enter your content'
                        onEditorStateChange={(value) => setDescription(value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            className="css-14mf4t4"
            style={{ paddingLeft: '12px', paddingRight: '12px' }}
          >
            <Form.Group controlId="formVideoUrl">
              <Form.Label>Video URL:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </Form.Group>
          </Col>
         
          <Col
            xs={24}
            className="css-14mf4t4"
            style={{ paddingLeft: '12px', paddingRight: '12px', }}
          >
            <Button
              onClick={handleAddVideoUrl}
              className="ant-btn css-14mf4t4 ant-btn-primary mb-8"
            >
              Add Video URL
            </Button>
           
          
            <Button
              onClick={handleAddVideoDrop}
              className="ant-btn css-14mf4t4 ant-btn-primary mb-8 ml-[378px]"
            >
              Add Video Drop
            </Button>
          

          </Col>

         
          
    
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {showUrlInput && (
                <Form.Group controlId="formVideoUrl">
                  <Form.Label>Video URL:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                  />
                </Form.Group>
              )}
              {!showUrlInput && (
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <p>
                    Drag 'n' drop a video file here, or click to select a video
                    file
                  </p>
                </div>
              )}
              {videoUrl && <VideoComponent videoUrl={videoUrl} />}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Cancel
              </Button>
              {showUrlInput ? (
                <Button variant="primary" onClick={handleUrlSubmit}>
                  OK
                </Button>
              ) : (
                <Button variant="primary" onClick={handleVideoSubmit}>
                  OK
                </Button>
              )}
            </Modal.Footer>
          </Modal>

         
          <Col xs={12} className="mt-3">
              <div className="d-flex justify-content-between">
              <Button type="button" variant="primary" onClick={handleCancel}>
                  Back
                </Button>
                <Button type="submit" variant="primary">
                  Save
                </Button>
                
              </div>
            </Col>
        </Form>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Container>
   
  );
};

export default Vdeo;
