import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import Header from '../AdminDashboard/Header';

const Text = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log('Form submitted:', rawContentState);
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    // Navigate back to the previous page using the browser's history
    window.history.back();
  };

  return (
    <div>
      <Header/>
    
    <div className='w-[650px] ml-[500px] mt-44 '>
      {/* Assuming Header is just a component rendering some UI */}
      {/* You may need to adjust this part based on your Header component */}
      

      <div className="container mt-3">
        <h2 className='text-center mb-8'>Text</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12}  className='  border border-gray-500'>
              <Editor
                editorState={editorState}
                onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
                placeholder="Enter text content"
                className='w-[650px] '
              />
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
          </Row>
        </Form>
      </div>
    </div>
    </div>
  ) 
};

export default Text;
