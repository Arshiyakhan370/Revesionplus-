import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../AdminDashboard/Header';
import { EditorState, convertToRaw } from 'draft-js';
const Image = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

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
      // Add your logic for handling image upload here
      // You might want to use a library or send a request to your server
      // For now, let's resolve with a placeholder URL
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
    // Add your logic to handle URL submission
    handleModalClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const contentState = editorState.getCurrentContent();
    // const rawContentState = convertToRaw(contentState);
    // console.log('Form submitted:', rawContentState);
  };
  const handleCancel = () => {
    console.log('Cancel button clicked');
    // Navigate back to the previous page using the browser's history
    window.history.back();
  };

  return (
    <div>
    <Header/>
    <div className="w-[650px] ml-[500px] mt-16">
      <Form id="segments_1" className="ant-form ant-form-vertical ant-form-middle css-14mf4t4" onSubmit={handleSubmit}>
        {/* ... Other form components */}
        <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
          <Row className="css-14mf4t4" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
            <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
              <div className="ant-form-item css-14mf4t4">
                <div className="ant-row ant-form-item-row css-14mf4t4">
                  <div className="ant-col ant-form-item-control css-14mf4t4">
                    <div className="ant-form-item-control-input">
                      <div className="ant-form-item-control-input-content">
                        {/* Image component */}
                        {imageSrc && <img src={imageSrc} alt="Uploaded" className="img-fluid" />}
                        {/* Dropzone */}
                        <div {...getRootProps({ className: 'dropzone' })}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop an image here, or click to select an image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        {/* Title */}
        <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
          <div className="ant-form-item css-14mf4t4 border">
            <div className="ant-row ant-form-item-row css-14mf4t4">
              <div className="ant-col ant-form-item-control css-14mf4t4">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
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
        {/* Description */}
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
        {/* Rich Text Editor for Description */}
        <Col xs={24} className="css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
          <div className="ant-form-item css-14mf4t4  border-gray-900">
            <div className="ant-row ant-form-item-row css-14mf4t4">
              <div className="ant-col ant-form-item-control css-14mf4t4">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      placeholder='enter your content'
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
                      placeholder="Image URL"
                      id="segments_1_resource_segment_attributes_image_url"
                      className="ant-input css-14mf4t4"
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
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
        {/* Add from URL Modal */}
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
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
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
                     
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </Col>
          {/* </Row> */}
        {/* </div> */}
      </Form>
    </div>
    </div>
  );
};

export default Image;
