import React, { useRef, useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import {
  Container,
  Card,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Checkbox,
  Alert,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Text = () => {

  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [questions, setQuestions] = useState([]);

  const [answerKeyEditorState, setAnswerKeyEditorState] = useState(EditorState.createEmpty());
  const [markSchemeEditorState, setMarkSchemeEditorState] = useState(EditorState.createEmpty());
  const [savedAnswerKey, setSavedAnswerKey] = useState(null);
  const [savedMarkScheme, setSavedMarkScheme] = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [showAnswerKeyEditor, setShowAnswerKeyEditor] = useState(false);
  const [showMarkSchemeEditor, setShowMarkSchemeEditor] = useState(false);
  const [selectChecked, setSelectChecked] = useState(false);
  const [marksValue, setMarksValue] = useState(0);
  const [checkboxesState, setCheckboxesState] = useState({
    A: false,
    B: false,
    C: false,
    D: false
  });
  const [marks, setMarks] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);

 

  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const criteriaArray = ['A', 'B', 'C', 'D'];

  const handkeSelectedCriteria = () => {
    setSelectChecked(!selectChecked);
  };

  const handleCheckboxChange = (label) => {
    setCheckboxesState({
      ...checkboxesState,
      [label]: !checkboxesState[label],
    });
  };

  const handleMarks = () => {
    setMarks(!marks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectChecked && Object.values(checkboxesState).every((val) => val === false)) {
      setAlertMessage("Please select at least one criterion!");
    } else {
      setAlertMessage(null);

      const newQuestion = {
        editorState: convertToRaw(editorState.getCurrentContent()),
        answerKey: convertToRaw(answerKeyEditorState.getCurrentContent()),
        markScheme: convertToRaw(markSchemeEditorState.getCurrentContent()),
        criteria: selectChecked ? criteriaArray.filter(label => checkboxesState[label]) : null,
        marks: marks ? marksValue : null
      };

      setQuestions([...questions, newQuestion]);

      setEditorState(EditorState.createEmpty());
      setAnswerKeyEditorState(EditorState.createEmpty());
      setMarkSchemeEditorState(EditorState.createEmpty());
      setSelectChecked(false);
      setMarks(false);
      setMarksValue(0);
    }
  };

  const handleCopy = (questionIndex) => {
    const questionToCopy = questions[questionIndex];
    navigator.clipboard.writeText(convertToText(questionToCopy.editorState));
    console.log(`Copy button clicked for Question ${questionIndex + 1}`);
  };
  const handleCopyQuestionContent = (index,questionIndex) => {
    const questionToCopy = questions[questionIndex];
   
    const copiedQuestion = { ...questions[index] };
    setQuestions((prevQuestions) => [...prevQuestions, copiedQuestion]);
    console.log(`Copy button clicked for Question ${questionIndex + 1}`)
    
  };

  const handleDelete = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
    console.log(`Delete button clicked for Question ${questionIndex + 1}`);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    const printContent = editorRef.current?.editor.innerHTML; // Access editor content using the ref
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write("<pre>" + printContent + "</pre>");
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
    console.log("Print button clicked");
  };
  
  
  
  

  const handleViewPage = (questionIndex) => {
    const questionToView = questions[questionIndex];
    const newWindow = window.open();
    newWindow.document.write("<html><head><title>Question Page</title></head><body>");
    newWindow.document.write(`<h2>Q${questionIndex + 1}</h2>`);
    newWindow.document.write("<p>" + convertToText(questionToView.editorState) + "</p>");
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    console.log(`View Page button clicked for Question ${questionIndex + 1}`);
  };

  const convertToText = (contentState) => {
    const contentBlocks = contentState.blocks;
    const text = contentBlocks.map((block) => block.text).join("\n");
    return text;
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} className="text-start ml-4 mb-3">
          <div className="mb-3 ml-4 ">
            <h5>Q{index + 1}</h5>
            <p>{convertToText(question.editorState)}</p>
            {question.criteria && (
              <p>Criteria: {question.criteria.join(', ')}</p>
            )}
            {question.marks && (
              <p>Marks: {question.marks}</p>
            )}
          </div>
          <div className="mb-3 ml-4">
            <h6> Answer Key:</h6>
            <span>{convertToText(question.answerKey)}</span>
          </div>
          <div className="mb-3 ml-4">
            <h6>Mark Scheme:</h6>
            <span>{convertToText(question.markScheme)}</span>
          </div>
          <Button onClick={() => handleCopyQuestionContent(index)} variant="outlined" sx={{ marginRight: 1 }}>
            Copy
          </Button>
          <Button onClick={() => handleDelete(index)} variant="outlined" sx={{ marginRight: 1 }}>
            Delete
          </Button>
          <Button onClick={handlePrint} variant="outlined" sx={{ marginRight: 1 }}>
            Print
          </Button>
          <Button onClick={() => handleViewPage(index)} variant="outlined" sx={{ marginRight: 1 }}>
            View Page
          </Button>
        </Card>
      ))}
      <Container maxWidth="xxl" mt={44}>
        <div className="container mt-3 ">
          <h2 className="text-center mb-8">Text</h2>
          <Form onSubmit={handleSubmit}>
            {alertMessage && <Alert severity="error">{alertMessage}</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12} className=" mt-4 mb-4">
                <div className="flex flex-row justify-between">
                  <FormControlLabel
                    sx={{ marginLeft: "10px", padding: "20px" }}
                    control={
                      <Switch
                        color="primary"
                        checked={selectChecked}
                        onChange={handkeSelectedCriteria}
                      />
                    }
                    label="Select Criteria"
                  />
                  {selectChecked && (
                    <div>
                      {window.innerWidth > 1024 && (
                        <Grid item xs={12} className="mt-4">
                          {Object.keys(checkboxesState).map((label) => (
                            <React.Fragment key={label}>
                              <Checkbox
                                checked={checkboxesState[label]}
                                onChange={() => handleCheckboxChange(label)}
                              />
                              {label}
                            </React.Fragment>
                          ))}
                        </Grid>
                      )}
                    </div>
                  )}
                  <FormControlLabel
                    sx={{ marginLeft: "10px", padding: "20px" }}
                    control={<Switch color="primary" onChange={handleMarks} />}
                    label="Marks"
                  />
                  {marks && (
                    <TextField
                      size="small"
                      sx={{ width: "80px", marginTop: "25px" }}
                      label="Marks"
                      type="number"
                      value={marksValue}
                      onChange={(e) => setMarksValue(parseInt(e.target.value, 10))}
                    />
                  )}
                </div>
              </Grid>
            </Grid>
            <Row>
              <Col className="border border-gray-500 bg-white">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
                  placeholder="Enter text content"
                />
              </Col>
              <Grid container spacing={2}>
                <Grid item xs={24} className=" mt-4 mb-4">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showAnswerKeyEditor}
                        onChange={() => setShowAnswerKeyEditor(!showAnswerKeyEditor)}
                      />
                    }
                    label="Show Answer Key Editor"
                  />
                  {showAnswerKeyEditor && (
                    <div className="border border-gray-500 bg-white">
                      <Editor
                        editorState={answerKeyEditorState}
                        onEditorStateChange={(newEditorState) => setAnswerKeyEditorState(newEditorState)}
                        placeholder="Enter Answer Key content"
                      />
                    </div>
                  )}
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showMarkSchemeEditor}
                        onChange={() => setShowMarkSchemeEditor(!showMarkSchemeEditor)}
                      />
                    }
                    label="Show Mark Scheme Editor"
                  />
                  {showMarkSchemeEditor && (
                    <div xs={12} className="border border-gray-500 bg-white mt-3">
                      <Editor
                        editorState={markSchemeEditorState}
                        onEditorStateChange={(newEditorState) => setMarkSchemeEditorState(newEditorState)}
                        placeholder="Enter Mark Scheme content"
                      />
                    </div>
                  )}
                </Grid>
              </Grid>
              <Col xs={12} className="mt-3">
                <div className="d-flex justify-content-between">
                  <Button
                    type="button"
                    onClick={() => setQuestions([])}
                    sx={{
                      color: "white",
                      background:
                        "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                    }}
                  >
                    Clear All
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    sx={{
                      color: "white",
                      background:
                        "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                    }}
                  >
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Text;
