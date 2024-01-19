import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../AdminDashboard/Header';
import { EditorState, convertToRaw } from 'draft-js';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const Audio = ({isSidebarClosed}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'audio/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
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

  const handleSave = () => {
   
    console.log('Form submitted:', { title, description, audioBlob });
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
       Audio
       </Typography>
        <Form
          id="segments_1"
          className="ant-form ant-form-vertical ant-form-middle css-14mf4t4"
          onSubmit={handleSave}
        >
          
          <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
            <Row className="css-14mf4t4" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
              <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
                {/* <ReactMic
                  record={false} // Set to true to start recording
                  className="sound-wave"
                  onStop={(blob) => setAudioBlob(blob)}
                  onData={(data) => console.log('chunk of real-time data', data)}
                /> */}
                <button onClick={() => {}}>Start Recording</button>
                <button onClick={() => {}}>Stop Recording</button>
              </Col>
            </Row>
          </Col>
          {/* Title */}
          <Col xs={24} className="css-14mf4t4" style={{paddingTop:'10px', paddingLeft: '12px', paddingRight: '12px' }}>
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
         
          <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
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
                            onChange={() => setDescription(description !== '' ? '' : 'Add description')}
                          />
                          <span className="ant-checkbox-inner"></span>
                        </span>
                        <span>{description !== '' ? 'Add description' : 'Description'}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* Description */}
          <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
            <div className="ant-form-item css-14mf4t4 border border-gray-500">
              <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-control css-14mf4t4">
                  <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        placeholder='Enter your content'
                        toolbar={{ image: { uploadCallback: handleImageUpload } }}
                        onEditorStateChange={(value) => setDescription(value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* Image URL */}
          <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
            <div className="ant-form-item css-14mf4t4">
              <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-control css-14mf4t4">
                  <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                      <input
                        placeholder="Audio URL"
                        id="segments_1_resource_segment_attributes_image_url"
                        className="ant-input css-14mf4t4"
                        type="text"
                        value={audioBlob} 
                        onChange={(e) => setAudioBlob(e.target.value)}
                      />
                      <Button onClick={handleAddFromUrl} className="ant-btn css-14mf4t4 ant-btn-primary">
                        Add from URL
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add from URL</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formImageUrl">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter URL"
                  value={audioBlob}  
                  onChange={(e) => setAudioBlob(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleUrlSubmit}>
                OK
              </Button>
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

export default Audio;
