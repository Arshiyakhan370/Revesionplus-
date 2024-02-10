import React, { useRef, useState, Suspense } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw ,convertFromRaw } from "draft-js";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useDropzone } from "react-dropzone";

const PdfComponent = React.lazy(() => import("./PdfComponent"));

const Text = () => {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [subEditorState, setSubEditorState] = useState(
    EditorState.createEmpty()
  );
  const [questions, setQuestions] = useState([]);
  const [answerKeyEditorState, setAnswerKeyEditorState] = useState(
    EditorState.createEmpty()
  );
  const [markSchemeEditorState, setMarkSchemeEditorState] = useState(
    EditorState.createEmpty()
  );
  const [savedAnswerKey, setSavedAnswerKey] = useState(null);
  const [savedMarkScheme, setSavedMarkScheme] = useState(null);
  const [subQuestionNumber, setSubQuestionNumber] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showSubEditor, setShowSubEditor] = useState(false);
  const [savedData, setSavedData] = useState(null);
  const [showAnswerKeyEditor, setShowAnswerKeyEditor] = useState(false);
  const [showMarkSchemeEditor, setShowMarkSchemeEditor] = useState(false);
  const [selectChecked, setSelectChecked] = useState(false);
  const [marksValue, setMarksValue] = useState(0);
  const [checkboxesState, setCheckboxesState] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
  });
  const [marks, setMarks] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
   const [pdfFile, setPdfFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [openAlert, setOpenAlert] = useState(false); 

  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const criteriaArray = ["A", "B", "C", "D"];

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setAlertMessage(null); 
  };

  const handleOpenAlert = (message) => {
    setAlertMessage(message);
    setOpenAlert(true);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ".pdf, image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          const fileType = file.type.split('/')[0];
          switch(fileType) {
            case 'image':
              if (file.size > 1024 * 1024) {
                handleOpenAlert("Image size should be less than 1MB.");
                return;
              }
              setImageSrc(reader.result);
              break;
            case 'application':
              if (file.type !== 'application/pdf') {
                handleOpenAlert("Unsupported file type.");
                return;
              }
              if (file.size > 1024 * 1024) {
                handleOpenAlert("PDF size should be less than 1MB.");
                return;
              }
              setPdfFile(URL.createObjectURL(file));
              break;
            default:
              console.log(`Unsupported file type: ${fileType}`);
          }
        };
  
        reader.readAsDataURL(file);
      });
    },
  });
  
  const handleSelectedCriteria = () => {
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
    const questionPrefix = showSubEditor ? `${questionNumber}.${subQuestionNumber}` : `${questionNumber}`;
    if (
      selectChecked &&
      Object.values(checkboxesState).every((val) => val === false)
    ) {
      handleOpenAlert("Please select at least one criterion!");
    } else {
      setAlertMessage(null);
         const newQuestion = {
        editorState: convertToRaw(editorState.getCurrentContent()),
        answerKey: convertToRaw(answerKeyEditorState.getCurrentContent()),
        markScheme: convertToRaw(markSchemeEditorState.getCurrentContent()),
        subEditorState: showSubEditor
          ? convertToRaw(subEditorState.getCurrentContent())
          : null,
        questionNumber: showSubEditor
          ? `${questionNumber}.${subQuestionNumber}`
          : questionNumber.toString(),
        criteria: selectChecked
          ? criteriaArray.filter((label) => checkboxesState[label])
          : null,
        marks: marks ? marksValue : null,
        pdfFile: pdfFile ? pdfFile : null,
        imageSrc: imageSrc ? imageSrc : null,
        videoSrc: videoSrc ? videoSrc : null,
      };
  
      
      if (selectedQuestionIndex !== null) {
        const updatedQuestions = [...questions];
        updatedQuestions[selectedQuestionIndex] = newQuestion;
        setQuestions(updatedQuestions);
        setSelectedQuestionIndex(null); 
      } else {

        setQuestions([...questions, newQuestion]);
        if (showSubEditor) {
          setSubQuestionNumber(subQuestionNumber + 1);
          setSubEditorState(EditorState.createEmpty());
        } else {
          setQuestionNumber(questionNumber + 1);
        }
      }

      setEditorState(EditorState.createEmpty());
      setAnswerKeyEditorState(EditorState.createEmpty());
      setMarkSchemeEditorState(EditorState.createEmpty());
      setSelectChecked(false);
      setMarks(false);
      setMarksValue(0);
      setPdfFile(null);
      setImageSrc(null);
      setVideoSrc(null);
    }
  };
  
  
  const handleSubEditorChange = (newEditorState) => {
    setSubEditorState(newEditorState);
  };

  const toggleSubEditor = () => {
    setShowSubEditor(!showSubEditor);
  };

  const handleCopy = (questionIndex) => {
    const questionToCopy = questions[questionIndex];
    navigator.clipboard.writeText(
      convertToText(questionToCopy.editorState)
    );
    console.log(`Copy button clicked for Question ${questionIndex + 1}`);
  };

  const handleCopyQuestionContent = (index, questionIndex) => {
    const questionToCopy = questions[questionIndex];

    const copiedQuestion = { ...questions[index] };
    setQuestions((prevQuestions) => [...prevQuestions, copiedQuestion]);
    console.log(`Copy button clicked for Question ${questionIndex + 1}`);
  };

  const handleDelete = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
    console.log(`Delete button clicked for Question ${questionIndex + 1}`);
  };

  const handleEditQuestion = (index) => {
    const questionToEdit = questions[index];
     
    setEditorState(EditorState.createWithContent(convertFromRaw(questionToEdit.editorState)));
    setAnswerKeyEditorState(EditorState.createWithContent(convertFromRaw(questionToEdit.answerKey)));
    setMarkSchemeEditorState(EditorState.createWithContent(convertFromRaw(questionToEdit.markScheme)));
    setPdfFile(questionToEdit.pdfFile);
    setImageSrc(questionToEdit.imageSrc);
    setVideoSrc(questionToEdit.videoSrc);
        
    if (questionToEdit.questionNumber.includes('.')) {
      const [questionNumber, subQuestionNumber] = questionToEdit.questionNumber.split('.');
      setQuestionNumber(parseInt(questionNumber));
      setSubQuestionNumber(parseFloat(subQuestionNumber));
      setShowSubEditor(true);
    } else {
      setQuestionNumber(parseInt(questionToEdit.questionNumber));
      setShowSubEditor(false);
    }
      setSelectedQuestionIndex(index);
  };

  const handleViewPage = (questionIndex) => {
    const questionToView = questions[questionIndex];
    const newWindow = window.open();
    newWindow.document.write(
      "<html><head><title>Question Page</title></head><body>"
    );
    newWindow.document.write(`<h2>Q${questionIndex + 1}</h2>`);
    newWindow.document.write(
      "<p>" + convertToText(questionToView.editorState) + "</p>"
    );
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
      <Card key={index} sx={{ marginLeft: '20px', marginTop: '10px', marginBottom:'20px', textAlign:'start' }}>

    <div className="mb-3 ml-4 ">
      <h5>Q{question.questionNumber}</h5>
      <p>{question.editorState && question.editorState.blocks[0].text}</p>
    </div>
    {showSubEditor && (
      <div className="mb-3 ml-4 ">
        <h5>Sub-Q{question.subQuestionNumber}</h5>
        <p>{question.subEditorState && question.subEditorState.blocks[0].text}</p>
      </div>
    )}
    {question.criteria && (
      <p>Criteria: {question.criteria.join(", ")}</p>
    )}
    {question.marks && <p>Marks: {question.marks}</p>}
    <div className="mb-3 ml-4">
      <h6> Answer Key:</h6>
      <span>{question.answerKey && convertToText(question.answerKey)}</span>
    </div>
    <div className="mb-3 ml-4">
      <h6>Mark Scheme:</h6>
      <span>{question.markScheme && convertToText(question.markScheme)}</span>
    </div>
    <div>
      <div>
        {question.pdfFile && (
          <Suspense fallback={<div>Loading PDF...</div>}>
            <PdfComponent pdfFile={question.pdfFile} />
          </Suspense>
        )}
      </div>
      <div>
        {question.imageSrc && (
          <img src={question.imageSrc} alt="Uploaded"
               className="img-fluid"
               style={{ maxWidth: "100%", height: "auto", width: '40%', marginTop: '20px' }} />
        )}
      </div>
      <div>
        {question.videoSrc && (
          <video controls src={question.videoSrc} className="video-fluid" />
        )}
      </div>
    </div>
          <Button
            onClick={() => handleCopyQuestionContent(index)}
            variant="outlined"
            sx={{ marginRight: 1 }}
          >
            Copy
          </Button>
          <Button
            onClick={() => handleDelete(index)}
            variant="outlined"
            sx={{ marginRight: 1 }}
          >
            Delete
          </Button>
          <Button
      onClick={() => handleEditQuestion(index)}
      variant="outlined"
      sx={{ marginRight: 1 }}
    >
      Edit
    </Button>
          <Button
            onClick={() => handleViewPage(index)}
            variant="outlined"
            sx={{ marginRight: 1 }}
          >
            View Page
          </Button>
        </Card>
      ))}
      <Container maxWidth="xxl" mt={44}>
        <div className="container mt-3 ">
          <h2 className="text-center mb-8">Text</h2>
          <Form onSubmit={handleSubmit}>
            <Dialog open={openAlert} onClose={handleCloseAlert}>
              <DialogTitle>Error</DialogTitle>
              <DialogContent>
                <Alert severity="error">{alertMessage}</Alert>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseAlert}>Close</Button>
              </DialogActions>
            </Dialog>
            <Grid container spacing={2}>
              <Grid item xs={12} className=" mt-4 mb-4">
                <div className="flex flex-row justify-between">
                  <FormControlLabel
                    sx={{ marginLeft: "10px", padding: "20px" }}
                    control={
                      <Switch
                        color="primary"
                        checked={selectChecked}
                        onChange={handleSelectedCriteria}
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
                  onEditorStateChange={(newEditorState) =>
                    setEditorState(newEditorState)
                  }
                  placeholder="Enter text content"
                />
              </Col>
              {showSubEditor && (
                <Col className="border border-gray-500 bg-white">
                  <Editor
                    editorState={subEditorState}
                    onEditorStateChange={handleSubEditorChange}
                    placeholder="Enter sub-question content"
                  />
                </Col>
              )}
            
              <Grid container spacing={2}>
              <Grid item xs={12} className=" mt-4 mb-4">
                <div className="flex flex-row justify-between">
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        onChange={toggleSubEditor}
                        checked={showSubEditor}
                      />
                    }
                    label="Show Sub-Question"
                  />
                </div>
              </Grid>
            </Grid>
              <Grid container spacing={2}>
                 <Grid item xs={24} className=" mt-4 mb-4">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showAnswerKeyEditor}
                        onChange={() =>
                          setShowAnswerKeyEditor(!showAnswerKeyEditor)
                        }
                      />
                    }
                    label="Show Answer Key Editor"
                  />
                  {showAnswerKeyEditor && (
                    <div className="border border-gray-500 bg-white">
                      <Editor
                        editorState={answerKeyEditorState}
                        onEditorStateChange={(newEditorState) =>
                          setAnswerKeyEditorState(newEditorState)
                        }
                        placeholder="Enter Answer Key content"
                      />
                    </div>
                  )}
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showMarkSchemeEditor}
                        onChange={() =>
                          setShowMarkSchemeEditor(!showMarkSchemeEditor)
                        }
                      />
                    }
                    label="Show Mark Scheme Editor"
                  />
                  {showMarkSchemeEditor && (
                    <div>
                      <div xs={12} className="border border-gray-500 bg-white mt-3">
                        <Editor
                          editorState={markSchemeEditorState}
                          onEditorStateChange={(newEditorState) =>
                            setMarkSchemeEditorState(newEditorState)
                          }
                          placeholder="Enter Mark Scheme content"
                        />
                      </div>
                      <div className="mt-4 cursor-pointer text-blue-600">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <p>Drag 'n' drop a PDF file here, or click to select a PDF file</p>
                        </div>
                        {pdfFile && <PdfComponent pdfFile={pdfFile} />}
                      </div>
                      <div className="mt-4 cursor-pointer text-blue-600">
                        {imageSrc && (
                          <img src={imageSrc} alt="Uploaded"  className="img-fluid"
      style={{ maxWidth: "100%", height: "auto",width:'40%' }} />
                        )}
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop an image here, or click to select an image
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 cursor-pointer text-blue-600">
                        {videoSrc && (
                          <video controls src={videoSrc} className="video-fluid" />
                        )}
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop a video here, or click to select a video
                          </p>
                        </div>
                      </div>
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
