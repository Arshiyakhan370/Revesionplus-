import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import Header from '../../AdminDashboard/Header';
import { Container, Card, CardContent } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const Text = ({ isSidebarClosed }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log('Form submitted:', rawContentState);
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
    <div>
    
      <Container  maxWidth="xl" mt={44}>
        <div className='  '>
          <Card style={styles}>
            <CardContent>
              <div className="container mt-3 ">
                <h2 className='text-center mb-8'>Text</h2>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} className='border border-gray-500'>
                      <Editor
                        editorState={editorState}
                        onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
                        placeholder="Enter text content"
                        
                      />
                    </Col>
                    <Col xs={12} className="mt-3">
                      <div className="d-flex justify-content-between">
                        <Button type="button"  onClick={handleCancel}  style={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                          Back
                        </Button>
                        <Button type="submit"   style={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                          Save
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Text;
