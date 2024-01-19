import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../AdminDashboard/Header';
import { useDropzone } from 'react-dropzone';


const PdfComponent = ({ pdfFile }) => {
  return (
    <object
      data={pdfFile}
      type="application/pdf"
      width="100%"
      height="500px"
    >
      <p>PDF cannot be displayed. Please download it.</p>
    </object>
  );
};

const Pdf = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: '.pdf',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setPdfFile(URL.createObjectURL(file));
      }
    },
  });

  const handleAddPdf = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePdfSubmit = () => {
   
    handleModalClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
   
    window.history.back();
  };

  return (
    <div>
      <Header />
      <div className="w-[650px] ml-[500px] mt-16">
      <h2 className='text-center mb-8'>Pdf</h2>
        <Form
          id="segments_1"
          className="ant-form ant-form-vertical ant-form-middle css-14mf4t4"
        >
          {/* Title */}
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

          {/* Description */}
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

          {/* Rich Text Editor for Description */}
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

          {/* Add PDF Button */}
          <Col
            xs={24}
            className="css-14mf4t4"
            style={{ paddingLeft: '12px', paddingRight: '12px' }}
          >
            <Button
              onClick={handleAddPdf}
              className="ant-btn css-14mf4t4 ant-btn-primary  mb-8"
            >
              Add PDF
            </Button>
          </Col>

          {/* Add PDF Modal */}
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add PDF</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop a PDF file here, or click to select a PDF file</p>
              </div>
              {pdfFile && <PdfComponent pdfFile={pdfFile} />}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handlePdfSubmit}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>

         
          <div className="ant-form-item css-14mf4t4">
            <Row className="ant-form-item-row css-14mf4t4">
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
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Pdf;
