import React, { useState } from 'react';
import { Form,  Col, Row, Modal } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDropzone } from 'react-dropzone';
import { Button, Card, Container } from '@mui/material';
import { useMediaQuery } from 'react-responsive';


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

const Pdf = ({handleCloseModal}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
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

  const handleModalClose1 = () => {
    setShowModal(false);
  };

  const handlePdfSubmit = () => {
   
    handleModalClose1();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
   
    window.history.back();
  };

  return (
    <Container maxWidth="xxl" mt={16} >
    <Card  mt={16}>
     
      
      <h2 className='text-center mb-8 mt-4'>Pdf</h2>
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

        
          {/* <Col
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
          </Col> */}

          
         <Button>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop a PDF file here, or click to select a PDF file</p>
              </div>
              {pdfFile && <PdfComponent pdfFile={pdfFile} />}
              </Button>

         
          <div className="ant-form-item css-14mf4t4">
            <Row className="ant-form-item-row css-14mf4t4">
              <Col xs={12} className="mt-3 ml-2 mr-2">
                <div className="d-flex justify-content-between">
                <Button type="button" onClick={ handleCloseModal } variant="contained"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
           
                   Close
                  </Button>
                  <Button type="submit" variant="contained"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
          
                    Save
                  </Button>
                
                </div>
              </Col>
            </Row>
          </div>
        </Form>
    

      </Card>
     
    </Container>
  );
};

export default Pdf;
