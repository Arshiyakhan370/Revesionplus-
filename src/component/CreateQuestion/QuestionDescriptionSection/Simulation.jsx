import React, { useState } from 'react';
import { Form, Button, Col, Modal } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import Dropzone from 'react-dropzone';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../AdminDashboard/Header';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const SimulationComponent = ({isSidebarClosed}) => {
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleEditorChange = (editorState) => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    setDescription(JSON.stringify(rawContentState));
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFiles([file]);
    setShowModal(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { title, description, files });
  };

  const handleCancel = () => {
    window.history.back();
  };

  const styles = {
    width: isSidebarClosed ?  (isSmallScreen ? '100%' : '94%') : (isSmallScreen ? '100%' : '79%'),
    marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '6%') : (isSmallScreen ? '0%' : '21%'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  return (
    <Container  maxWidth="xl" mt={16}>
      
    <Grid container justifyContent="center" spacing={3} style={styles}>
      <Grid item xs={12}>
        <Card >
          <CardContent>
            <Typography variant="h5" align="center" mb={4}>
        Simulation</Typography>
        <Form
          id="segments_1"
          className="ant-form ant-form-vertical ant-form-middle css-14mf4t4"
          onSubmit={handleSubmit}
        >
          <Col xs={24} className="css-14mf4t4" style={{ paddingTop: '10px', paddingLeft: '12px', paddingRight: '12px' }}>
            {/* Title */}
            <label>Title</label>
            <div className="ant-form-item css-14mf4t4">
              <input
                placeholder="Title"
                id="segments_1_resource_segment_attributes_title"
                className="ant-input css-14mf4t4"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </Col>

          <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
            {/* HTML Editor */}
            <label>Description</label>
            <div className="ant-form-item css-14mf4t4 border border-gray-500">
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={handleEditorChange}
                placeholder='enter your description'
                
              />
            </div>
          </Col>

          <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
            {/* Dropzone */}
            <Button onClick={() => setShowModal(true)}>Open Dropzone Modal</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Dropzone Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Dropzone onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="dropzone">
                      <input {...getInputProps()} />
                      <p>Drag 'n' drop an HTML file here, or click to select an HTML file</p>
                      {files.length > 0 && <p>Selected file: {files[0].name}</p>}
                    </div>
                  )}
                </Dropzone>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>

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

export default SimulationComponent;
