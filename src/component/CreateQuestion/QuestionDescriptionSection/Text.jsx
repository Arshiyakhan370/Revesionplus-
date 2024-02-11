import React, { useRef, useState, Suspense, Fragment } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import AlertDialog from "./TextContain/AlertDailog";
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
import QuestionCard from "./TextContain/QuestionCard";

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
  const [nextQuestionNumber, setNextQuestionNumber] = useState(1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [copyingQuestion, setCopyingQuestion] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleImageLoaded = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };
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
    accept: "video/*, .pdf, image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          const fileType = file.type.split("/")[0];
          switch (fileType) {
            case "image":
              if (file.size > 1024 * 1024) {
                handleOpenAlert("Image size should be less than 1MB.");
                return;
              }
              setImageSrc(reader.result);
              break;
            case "application":
              if (file.type === "application/pdf") {
                if (file.size > 1024 * 1024) {
                  handleOpenAlert("PDF size should be less than 1MB.");
                  return;
                }
                setPdfFile(URL.createObjectURL(file));
              } else {
                handleOpenAlert("Unsupported file type.");
              }
              break;
            case "video":
              if (file.size > 1024 * 1024 * 100) { 
                handleOpenAlert("Video size should be less than 100MB.");
                return;
              }
              setVideoSrc(URL.createObjectURL(file));
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

  const handleCopy = (questionIndex) => {
    const questionToCopy = questions[questionIndex];
    const questionNumberParts = questionToCopy.questionNumber.split(".");
    let newQuestionNumber;

    if (questionNumberParts.length === 1) {
      newQuestionNumber = parseInt(questionNumberParts[0], 10) + 1;
    } else {
      newQuestionNumber = parseInt(questionNumberParts[0], 10);
      setSubQuestionNumber(subQuestionNumber + 1);
    }

    const newQuestion = {
      ...questionToCopy,
      questionNumber:
        questionNumberParts.length === 1
          ? `${newQuestionNumber}`
          : `${questionNumberParts[0]}.${
              parseInt(questionNumberParts[1], 10) + 1
            }`,
    };

    setQuestions([...questions, newQuestion]);
    if (questionNumberParts.length === 1) {
      setQuestionNumber(newQuestionNumber);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectChecked && !Object.values(checkboxesState).some((val) => val)) {
      handleOpenAlert("Please select at least one criterion!");
      return;
    }

    let newQuestionNumber;
    if (showSubEditor) {
      if (
        questions.length > 0 &&
        questions[questions.length - 1].questionNumber.includes(".")
      ) {
        const lastSubQuestionNumber = parseFloat(
          questions[questions.length - 1].questionNumber.split(".")[1]
        );
        newQuestionNumber = `${questionNumber}.${lastSubQuestionNumber + 1}`;
      } else {
        newQuestionNumber = `${questionNumber}.1`;
      }
    } else {
      if (questions.length === 0) {
        newQuestionNumber = "1";
      } else {
        newQuestionNumber = `${
          parseInt(questions[questions.length - 1].questionNumber) + 1
        }`;
      }
      setSubQuestionNumber(1);
    }
    const newQuestion = {
      editorState: convertToRaw(editorState.getCurrentContent()),
      answerKey: convertToRaw(answerKeyEditorState.getCurrentContent()),
      markScheme: convertToRaw(markSchemeEditorState.getCurrentContent()),
      subEditorState: showSubEditor
        ? convertToRaw(subEditorState.getCurrentContent())
        : null,
      questionNumber: newQuestionNumber,
      criteria: selectChecked
        ? criteriaArray.filter((label) => checkboxesState[label])
        : null,
      marks: marks ? marksValue : null,
      pdfFile: pdfFile ? pdfFile : null,
      imageSrc: imageSrc ? imageSrc : null,
      videoSrc: videoSrc ? videoSrc : null,
      imageSize: imageSize,
    };
    setQuestions([...questions, newQuestion]);

    if (!showSubEditor) {
      const nextQuestionNumber = showSubEditor
        ? questionNumber
        : parseInt(questionNumber) + 1;
      setQuestionNumber(nextQuestionNumber);
    
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
  };
  const handleImageResize = (e) => {
    const { name, value } = e.target;
    setImageSize((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubEditorChange = (newEditorState) => {
    setSubEditorState(newEditorState);
  };

  const toggleSubEditor = () => {
    setShowSubEditor(!showSubEditor);
  };
  const handleDelete = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
    console.log(`Delete button clicked for Question ${questionIndex + 1}`);
  };

  const handleEditQuestion = (index) => {
    const questionToEdit = questions[index];

    setEditorState(
      EditorState.createWithContent(convertFromRaw(questionToEdit.editorState))
    );
    setAnswerKeyEditorState(
      EditorState.createWithContent(convertFromRaw(questionToEdit.answerKey))
    );
    setMarkSchemeEditorState(
      EditorState.createWithContent(convertFromRaw(questionToEdit.markScheme))
    );
    setPdfFile(questionToEdit.pdfFile);
    setImageSrc(questionToEdit.imageSrc);
    setVideoSrc(questionToEdit.videoSrc);

    if (questionToEdit.questionNumber.includes(".")) {
      const [questionNumber, subQuestionNumber] =
        questionToEdit.questionNumber.split(".");
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
    <Fragment>
      {questions.map((question, index) => (
        <Card key={index} className="text-start ml-4 mt-4 mb-4">
          <div className="mb-3 ml-4">
            <h5>
              Q{question.questionNumber} {copyingQuestion && nextQuestionNumber}
            </h5>{" "}
             <p>{question.editorState && question.editorState.blocks[0].text}</p>
          </div>
          {question.criteria && <p>Criteria: {question.criteria.join(", ")}</p>}
          {question.marks && <p>Marks: {question.marks}</p>}
          <div className="mb-3 ml-4">
            <h6> Answer Key:</h6>
            <span>
              {question.answerKey && convertToText(question.answerKey)}
            </span>
          </div>
          <div className="mb-3 ml-4">
            <h6>Mark Scheme:</h6>
            <span>
              {question.markScheme && convertToText(question.markScheme)}
            </span>
          </div>
          {question.imageSrc && (
  <img
    src={question.imageSrc}
    alt="Image"
    className="img-fluid"
    style={{ width: `${question.imageSize.width}px`, height: `${question.imageSize.height}px` }}
  />
)}
          {question.pdfFile && (
            <embed
              src={question.pdfFile}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          )}

          {question.videoSrc && (
            <video controls width="100%">
              <source src={question.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div>
            <Button
              onClick={() => handleCopy(index)}
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
          </div>
        </Card>
      ))}

      <Container maxWidth="xxl" mt={44}>
        <div className="container mt-3 ">
          <h2 className="text-center mb-8">Text</h2>
          <Form onSubmit={handleSubmit}>
            <AlertDialog
              open={openAlert}
              handleCloseAlert={handleCloseAlert}
              alertMessage={alertMessage}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} className=" mt-4 mb-4">
                <div className="flex flex-row justify-between">
                  <FormControlLabel
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
                      onChange={(e) =>
                        setMarksValue(parseInt(e.target.value, 10))
                      }
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
                      <div
                        xs={12}
                        className="border border-gray-500 bg-white mt-3"
                      >
                        <Editor
                          editorState={markSchemeEditorState}
                          onEditorStateChange={(newEditorState) =>
                            setMarkSchemeEditorState(newEditorState)
                          }
                          placeholder="Enter Mark Scheme content"
                        />
                      </div>
                      <div className="mt-4 cursor-pointer text-blue-600">
                        <div
                          {...getRootProps({ className: "dropzone" })}
                          style={dropzoneStyle}
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop a PDF file here, or click to select a
                            PDF file
                          </p>
                        </div>
                        {pdfFile && <PdfComponent pdfFile={pdfFile} />}
                      </div>
                      <div className="mt-4 cursor-pointer text-blue-600">
                        {imageSrc && (
                          <div className="mt-2 mb-4">
                            <img
                              src={imageSrc}
                              alt="Uploaded"
                              className="img-fluid"
                              style={{
                                width: `${imageSize.width}px`,
                                height: `${imageSize.height}px`,
                              }}
                              onLoad={handleImageLoaded}
                            />
                            <div className="mb-2">
                              <label>Width: </label>
                              <input
                                className="border border-gray-500"
                                type="number"
                                name="width"
                                value={imageSize.width}
                                onChange={handleImageResize}
                              />
                            </div>
                            <div className="mb-2">
                              <label>Height: </label>
                              <input
                                className="border border-gray-500"
                                type="number"
                                name="height"
                                value={imageSize.height}
                                onChange={handleImageResize}
                              />
                            </div>
                          </div>
                        )}
                        <div
                          {...getRootProps({ className: "dropzone" })}
                          style={dropzoneStyle}
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop an image here, or click to select an
                            image
                          </p>
                        </div>
                        <div className="mt-4 cursor-pointer text-blue-600">
                          {videoSrc && (
                            <video
                              controls
                              src={videoSrc}
                              className="video-fluid"
                            />
                          )}
                          <div
                            {...getRootProps({ className: "dropzone" })}
                            style={dropzoneStyle}
                          >
                            <input {...getInputProps()} />
                            <p>
                              Drag 'n' drop a video file here, or click to
                              select a video file
                            </p>
                          </div>
                          {file && (
                            <div>
                              <h4>File Details:</h4>
                              <p>Name: {file.name}</p>
                              <p>Size: {file.size} bytes</p>
                              <p>Type: {file.type}</p>
                            </div>
                          )}
                          {error && <p style={{ color: "red" }}>{error}</p>}
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
    </Fragment>
  );
};
const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default Text;
