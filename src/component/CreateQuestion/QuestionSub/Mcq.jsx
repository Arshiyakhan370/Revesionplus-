import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, ListGroup } from 'react-bootstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../../AdminDashboard/Header';

const Mcq = () => {
  const [showModal, setShowModal] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [answerOptions, setAnswerOptions] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (event, editor) => {
    const content = editor.getData();
    setEditorContent(content);
  };

  const handleLinkButtonClick = () => {
   
  };

  const handleAlignLeftButtonClick = () => {
    
  };

  const handleDeleteButtonClick = () => {
   
  };

  const handleToggleButtonClick = () => {
    
    setAnswerOptions([...answerOptions, 'New Option']);
  };

  const handleCheckboxChange = (index) => {
  
    const updatedOptions = [...answerOptions];
    updatedOptions[index] = !updatedOptions[index];
    setAnswerOptions(updatedOptions);
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
   
    window.history.back();
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      setAnswerOptions([...answerOptions, { option: newOption.trim(), isChecked: false }]);
      setNewOption('');
    }
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...answerOptions];
    updatedOptions.splice(index, 1);
    setAnswerOptions(updatedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Question Description:', convertToRaw(editorState.getCurrentContent()));
    console.log('Answer Options:', answerOptions);
  };

  const handleCancelClick = () => {
  
    setShowModal(false);
  };

  const handleOkClick = () => {
  
    setShowModal(false);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Header />
      <Form onSubmit={handleSubmit} className='ml-[500px] w-[50%] mt-8'>
        {/*  description */}
        <Form.Group controlId="formQuestionDescription">
          <Form.Label>Question Description:</Form.Label>
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            placeholder='enter your content'
            className='w-[650px]'
            editorState={editorState}
            onEditorStateChange={(state) => setEditorState(state)}
          />
        </Form.Group>

        {/* List of answer options with delete links */}
        <Form.Group controlId="formAnswerOptions">
          <Row>
            <Col>
              <ListGroup>
                {answerOptions.map((option, index) => (
                  <ListGroup.Item key={index}>
                    <Form.Check
                      type="checkbox"
                      label={option.option}
                      checked={option.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <Button
                      variant="link"
                      onClick={() => handleDeleteOption(index)}
                      className="text-danger"
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Form.Group>

        
        <div className="container mt-4">
          {answerOptions.map((option, index) => (
            <div className="card mt-3" key={index}>
              <div className="card-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={selectedOption === option.option}
                    onChange={() => handleOptionChange(option.option)}
                  />
                  <label className="form-check-label">
                    {option.option}
                  </label>
                </div>
                <div className="input-group mt-3">
                  <Editor
                    editorState={option.editorContent}
                    onEditorStateChange={(state) => handleEditorChange(state, index)}
                  />

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleLinkButtonClick}
                  >
                    {/* Link icon */}
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="link" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

         
          <button className="btn btn-primary mt-3" type="button" onClick={handleToggleButtonClick}>
            {/* Plus icon */}
            Add Option
          </button>
        </div>
        {/* option */}
        <Form.Group controlId="formNewOption">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="New Answer Option"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
              />
            </Col>
            <Col>
              <Button variant="primary" onClick={handleAddOption}>
                Add Option
              </Button>
            </Col>
          </Row>
        </Form.Group>

        {/* Button to show/hide the modal */}
        <Button variant="secondary" onClick={handleShowModal}>
          Show Modal
        </Button>

        {/* Modal for answer choices with delete links/icons */}
        <Modal show={showModal} onHide={handleCancelClick}>
          <Modal.Header closeButton>
            <Modal.Title>Your Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formQuestionDescription">
              <Form.Label>Question Description:</Form.Label>
              <Editor
                editorState={editorState}
                onEditorStateChange={(state) => setEditorState(state)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleOkClick}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <Col xs={12} className="mt-3">
          <div className="d-flex justify-content-between">
            <Button type="submit" variant="primary">
              Save
            </Button>
            <Button type="button" variant="primary" onClick={handleCancel}>
              Back
            </Button>
          </div>
        </Col>
      </Form>
    </div>
  );
};

export default Mcq;
