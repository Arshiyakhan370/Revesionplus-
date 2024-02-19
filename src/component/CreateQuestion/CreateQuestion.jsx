import React, { useRef, useState, Suspense, Fragment } from "react";
import { Form, Col,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import AlertDialog from "../CreateQuestion/QuestionComponnet/AlertDailog";
import {
  Container,
  Card,
  Button,
    Grid,
    CardContent,
} from "@mui/material";

import { useDropzone } from "react-dropzone";

import { useMediaQuery } from "react-responsive";
import FilterForm from "../createAssignment/FilterForm";
import AlertMessage from "./QuestionComponnet/AlertMessage";
import CopyQuestionAlert from "./QuestionComponnet/CopyQuestionAlert";
import EditDailog from "./QuestionComponnet/EditDailog";
import SaveDailog from "./QuestionComponnet/SaveDailog";
import SubQuestion from "./DispalyData/SubQuestion";
import MainQuestion from "./DispalyData/MainQuestion";

const PdfComponent = React.lazy(() => import("./QuestionDescriptionSection/PdfComponent"));
const CreateQuestion = ({ isSidebarClosed }) => {
  const [content, setContent] = useState("");
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [items, setItems] = useState([]);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [textData, setTextData] = useState('');
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [subEditorState, setSubEditorState] = useState(EditorState.createEmpty());
  const [questions, setQuestions] = useState([]);
  const [answerKeyEditorState, setAnswerKeyEditorState] = useState(EditorState.createEmpty());
  const [markSchemeEditorState, setMarkSchemeEditorState] = useState(EditorState.createEmpty());
  const [savedAnswerKey, setSavedAnswerKey] = useState(null);
  const [savedMarkScheme, setSavedMarkScheme] = useState(null);
  const [subQuestionNumber, setSubQuestionNumber] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [savedData, setSavedData] = useState(null);
  const [showAnswerKeyEditor, setShowAnswerKeyEditor] = useState(false);
  const [showMarkSchemeEditor, setShowMarkSchemeEditor] = useState(false);
  const [selectChecked, setSelectChecked] = useState(false);
  const [marksValue, setMarksValue] = useState(0);
  const [checkboxesState, setCheckboxesState] = useState({ A: false, B: false, C: false, D: false });
  const [marks, setMarks] = useState(false);
  const [nextQuestionNumber, setNextQuestionNumber] = useState(1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
  const [selectedSubQuestionIndex, setSelectedSubQuestionIndex] = useState(null); 
  const [alertMessage, setAlertMessage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [copyingQuestion, setCopyingQuestion] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openCopyDialog, setOpenCopyDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [acceptedAnswerKeyFiles, setAcceptedAnswerKeyFiles] = useState([]);
  const [answerKeyDropzoneProps, setAnswerKeyDropzoneProps] = useState(null);
  const [subQuestions, setSubQuestions] = useState([
    {
      content: "",
      markScheme: "",
      markSchemeEditorState: EditorState.createEmpty(),
      answerKey: "",
      answerKeyEditorState: EditorState.createEmpty(),
    },
  ]);
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [pdfFiles, setPdfFiles] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [showSubQuestionSection, setShowSubQuestionSection] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [subQuestionFiles, setSubQuestionFiles] = useState(Array.from({ length: subQuestions.length }, () => null));
  const handleSubQuestionFileUpload = (file, subQuestionIndex) => {
      const updatedFiles = [...subQuestionFiles];
    updatedFiles[subQuestionIndex] = file;
    setSubQuestionFiles(updatedFiles);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleCloseCopyDialog = () => {
    setOpenCopyDialog(false);
  };
  const handleConfirmCopy = () => {
    handleCloseCopyDialog();
  };
  
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleConfirmDelete = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
    console.log(`Delete button clicked for Question ${questionIndex + 1}`);
       handleCloseDeleteDialog();
  };
  const handleDelete = () => {
    setOpenDeleteDialog(true);
   
  };
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

  const goBack = () => {
    window.history.back();
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
              handleImageDrop(file, reader.result);
              break;
            case "application":
              if (file.type === "application/pdf") {
                handlePdfDrop(file, reader.result);
              } else {
                handleUnsupportedFileDrop();
              }
              break;
            case "video":
              handleVideoDrop(file, reader.result);
              break;
            default:
              console.log(`Unsupported file type: ${fileType}`);
          }
        };
  
        reader.readAsDataURL(file);
      });
    },
  });
  
  const handleImageDrop = (file, result) => {
    if (file.size > 1024 * 1024) {
      handleOpenAlert("Image size should be less than 1MB.");
      return;
    }
    setImageSrc(result);
  };
  
  const handlePdfDrop = (file, result) => {
    if (file.size > 1024 * 1024) {
      handleOpenAlert("PDF size should be less than 1MB.");
      return;
    }
    setPdfFile(URL.createObjectURL(file));
  };
  
  const handleVideoDrop = (file, result) => {
    if (file.size > 1024 * 1024 * 100) { 
      handleOpenAlert("Video size should be less than 100MB.");
      return;
    }
    setVideoSrc(URL.createObjectURL(file));
  };
  
  const handleUnsupportedFileDrop = () => {
    handleOpenAlert("Unsupported file type.");
  };
  const configureAnswerKeyDropzone = () => {
    const props = {
      accept: "video/*, .pdf, image/*",
      onDrop: (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();
    
          reader.onload = () => {
            const fileType = file.type.split("/")[0];
            switch (fileType) {
              case "image":
                handleImageDropKey(file, reader.result);
                break;
              case "application":
                if (file.type === "application/pdf") {
                  handlePdfDropKey(file, reader.result);
                } else {
                  handleUnsupportedFileDropKey();
                }
                break;
              case "video":
                handleVideoDrop(file, reader.result);
                break;
              default:
                console.log(`Unsupported file type: ${fileType}`);
            }
          };
    
          reader.readAsDataURL(file);
        });
      },
    }
  }
    
    const handleImageDropKey = (imageFile, imageResult) => {
      if (imageFile.size > 1024 * 1024) {
        handleOpenAlert("Image size should be less than 1MB.");
        return;
      }
      setImageFile(imageResult);
    };
    
    const handlePdfDropKey = (pdfFile, pdfResult) => {
      if (pdfFile.size > 1024 * 1024) {
        handleOpenAlert("PDF size should be less than 1MB.");
        return;
      }
      setPdfFiles(pdfResult);
    };
    
    const handleVideoDropKey = (videoFile, videoResult) => {
      if (videoFile.size > 1024 * 1024 * 100) {
        handleOpenAlert("Video size should be less than 100MB.");
        return;
      }
      setVideoFile(videoResult);
    };
    
    const handleUnsupportedFileDropKey = () => {
      handleOpenAlert("Unsupported file type.");
    };
  const handleRemoveSubQuestion = (indexToRemove) => {
    setSubQuestions((prevSubQuestions) =>
      prevSubQuestions.filter((_, index) => index !== indexToRemove)
    );
  };  

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
    setOpenCopyDialog(true);
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
          : `${questionNumberParts[0]}.${parseInt(questionNumberParts[1], 10) + 1}`,
    };

    setQuestions([...questions, newQuestion]);
    if (questionNumberParts.length === 1) {
      setQuestionNumber(newQuestionNumber);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAdditionalButtons(false)
    setOpenDialog(true);
    if (
      !editorState ||
      !editorState.getCurrentContent() ||
      !answerKeyEditorState ||
      !answerKeyEditorState.getCurrentContent() ||
      !markSchemeEditorState ||
      !markSchemeEditorState.getCurrentContent()
    ) {
      console.error("One or more editor states are null or invalid.");
      return;
    }
  
    if (selectChecked && !Object.values(checkboxesState).some((val) => val)) {
      handleOpenAlert("Please select at least one criterion!");
      return;
    }
  
    if (selectedQuestionIndex !== null) {
      const updatedQuestions = [...questions];
      const editedQuestion = {
        editorState: convertToRaw(editorState.getCurrentContent()),
        answerKey: convertToRaw(answerKeyEditorState.getCurrentContent()),
        markScheme: convertToRaw(markSchemeEditorState.getCurrentContent()),
        questionNumber: questionNumber.toString(), 
        criteria: selectChecked ? criteriaArray.filter((label) => checkboxesState[label]) : null,
        marks: marks ? marksValue : null,
        pdfFile: pdfFile || null,
        imageSrc: imageSrc || null,
        videoSrc: videoSrc || null,
        imageSize: imageSize,
        subQuestions: subQuestions.map((subQuestion, index) => ({
          editorState: subQuestion.editorState ? convertToRaw(subQuestion.editorState.getCurrentContent()) : null,
          answerKey: subQuestion.answerKeyEditorState ? convertToRaw(subQuestion.answerKeyEditorState.getCurrentContent()) : null,
          markScheme: subQuestion.markSchemeEditorState ? convertToRaw(subQuestion.markSchemeEditorState.getCurrentContent()) : null,
          criteria: subQuestion.enableCriteria ? criteriaArray.filter((label) => subQuestion.criteria[label]) : null,
          marks: subQuestion.enableMarks ? subQuestion.marks : null,
          pdfFile: subQuestion.pdfFile || null,
          imageSrc: subQuestion.imageSrc || null,
          videoSrc: subQuestion.videoSrc || null,
          imageSize: subQuestion.imageSize,
          questionNumber: subQuestion.questionNumber,
          typedContent: subQuestion.typedContent,
          enableCriteria: subQuestion.enableCriteria,
          enableMarks: subQuestion.enableMarks,
        })),
      };
      updatedQuestions[selectedQuestionIndex] = editedQuestion;
      setQuestions(updatedQuestions);
      setSelectedQuestionIndex(null); 
    } else if (selectedSubQuestionIndex !== null) {
      const updatedSubQuestions = [...subQuestions];
      const editedSubQuestion = {
        editorState: convertToRaw(editorState.getCurrentContent()),
        answerKey: convertToRaw(answerKeyEditorState.getCurrentContent()),
        markScheme: convertToRaw(markSchemeEditorState.getCurrentContent()),
        criteria: selectChecked ? criteriaArray.filter((label) => checkboxesState[label]) : null,
        marks: marks ? marksValue : null,
        pdfFile: pdfFile || null,
        imageSrc: imageSrc || null,
        videoSrc: videoSrc || null,
        imageSize: imageSize,
      };
      updatedSubQuestions[selectedSubQuestionIndex] = editedSubQuestion;
      setSubQuestions(updatedSubQuestions);
      setSelectedSubQuestionIndex(null); 
    } else { 
      const newQuestionNumber = questions.length + 1;
      const newQuestions = [
        ...questions,
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
          answerKey: convertToRaw(answerKeyEditorState.getCurrentContent()),
          markScheme: convertToRaw(markSchemeEditorState.getCurrentContent()),
          questionNumber: newQuestionNumber.toString(),
          criteria: selectChecked ? criteriaArray.filter((label) => checkboxesState[label]) : null,
          marks: marks ? marksValue : null,
          pdfFile: pdfFile || null,
          imageSrc: imageSrc || null,
          videoSrc: videoSrc || null,
          imageSize: imageSize,
          subQuestions: subQuestions.map((subQuestion, index) => ({
            editorState: subQuestion.editorState ? convertToRaw(subQuestion.editorState.getCurrentContent()) : null,
            answerKey: subQuestion.answerKeyEditorState ? convertToRaw(subQuestion.answerKeyEditorState.getCurrentContent()) : null,
            markScheme: subQuestion.markSchemeEditorState ? convertToRaw(subQuestion.markSchemeEditorState.getCurrentContent()) : null,
            criteria: subQuestion.enableCriteria ? criteriaArray.filter((label) => subQuestion.criteria[label]) : null,
            marks: subQuestion.enableMarks ? subQuestion.marks : null,
            pdfFile: subQuestion.pdfFile || null,
            imageSrc: subQuestion.imageSrc || null,
            videoSrc: subQuestion.videoSrc || null,
            imageSize: subQuestion.imageSize,
            questionNumber: subQuestion.questionNumber,
            typedContent: subQuestion.typedContent,
            enableCriteria: subQuestion.enableCriteria,
            enableMarks: subQuestion.enableMarks,
          })),
        },
      ];
      setQuestions(newQuestions);
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
    setSubQuestions([]);
  };
  

  const handleAnswerKeyEditorToggle = (e, index) => {
    const updatedSubQuestions = [...subQuestions];
    updatedSubQuestions[index].enableAnswerKeyEditor = e.target.checked;
    setSubQuestions(updatedSubQuestions);
  };

  const handleAnswerKeyEditorChange = (newEditorState, index) => {
    const updatedSubQuestions = [...subQuestions];
    updatedSubQuestions[index].answerKeyEditorState = newEditorState;
    setSubQuestions(updatedSubQuestions);
  };

  const handleMarkSchemeEditorToggle = (e, index) => {
    const updatedSubQuestions = [...subQuestions];
    updatedSubQuestions[index].enableMarkSchemeEditor = e.target.checked;
    setSubQuestions(updatedSubQuestions);
  };

  const handleMarkSchemeEditorChange = (newEditorState, index) => {
    const updatedSubQuestions = [...subQuestions];
    updatedSubQuestions[index].markSchemeEditorState = newEditorState;
    setSubQuestions(updatedSubQuestions);
  };
const handleConfirmEdit = () => {
      handleCloseEditDialog();
  };

const handleEditQuestion = (index) => {
  const questionToEdit = questions[index];
  setShowAdditionalButtons(true)
  setOpenEditDialog(true);
  setEditorState(
    EditorState.createWithContent(convertFromRaw(questionToEdit.editorState))
  );
  setAnswerKeyEditorState(
    EditorState.createWithContent(convertFromRaw(questionToEdit.answerKey))
  );
  setMarkSchemeEditorState(
    EditorState.createWithContent(convertFromRaw(questionToEdit.markScheme))
  );
  setPdfFile(questionToEdit.pdfFile || null);
  setImageSrc(questionToEdit.imageSrc || null);
  setVideoSrc(questionToEdit.videoSrc || null);
  setQuestionNumber(parseInt(questionToEdit.questionNumber));
  setSelectedQuestionIndex(index);

  
  setSubQuestions(
    questionToEdit.subQuestions.map((subQuestion) => ({
      editorState: EditorState.createWithContent(
        convertFromRaw(subQuestion.editorState)
      ),
      answerKeyEditorState: EditorState.createWithContent(
        convertFromRaw(subQuestion.answerKey)
      ),
      markSchemeEditorState: EditorState.createWithContent(
        convertFromRaw(subQuestion.markScheme)
      ),
      pdfFile: subQuestion.pdfFile || null,
      imageSrc: subQuestion.imageSrc || null,
      videoSrc: subQuestion.videoSrc || null,
    }))
  );
};

  
  const handleImageResize = (e) => {
    const { name, value } = e.target;
    setImageSize((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleAddSubQuestion = () => {
    setShowSubQuestionSection(true);
    setSubQuestions([
      ...subQuestions,
      {
        editorState: EditorState.createEmpty(),
        answerKeyEditorState: EditorState.createEmpty(),
        markSchemeEditorState: EditorState.createEmpty(),
        enableCriteria: false,
        enableMarks: "",
        pdfFile: null,
        imageSrc: null,
        videoSrc: null,
        imageSize: { width: 0, height: 0 },
        questionNumber: `Subquestion ${subQuestionNumber}`,
        typedContent: "" 
      }
    ]);
    setSubQuestionNumber(subQuestionNumber + 1); 
  };
  
 
  const handleSubQuestionEditorChange = (newEditorState, index) => {
    setSubQuestions((prevSubQuestions) => {
      const updatedSubQuestions = [...prevSubQuestions];
      updatedSubQuestions[index].editorState = newEditorState;
      return updatedSubQuestions;
    });
  };

  const handleCriteriaChange = (event, index) => {
    const { value } = event.target;
    setSubQuestions((prevSubQuestions) => {
      const updatedSubQuestions = [...prevSubQuestions];
      updatedSubQuestions[index].criteria = value;
      return updatedSubQuestions;
    });
  };

  const handleMarksChange = (event, index) => {
    const { value } = event.target;
    setSubQuestions((prevSubQuestions) => {
      const updatedSubQuestions = [...prevSubQuestions];
      updatedSubQuestions[index].marks = parseInt(value);
      return updatedSubQuestions;
    });
  };

  const handleCriteriaSwitchChange = (event, index) => {
    const { checked } = event.target;
    setSubQuestions((prevSubQuestions) => {
      const updatedSubQuestions = [...prevSubQuestions];
      updatedSubQuestions[index].enableCriteria = checked;
      return updatedSubQuestions;
    });
  };

  const handleMarksSwitchChange = (event, index) => {
    const { checked } = event.target;
    setSubQuestions((prevSubQuestions) => {
      const updatedSubQuestions = [...prevSubQuestions];
      updatedSubQuestions[index].enableMarks = checked;
      return updatedSubQuestions;
    });
  };
  const convertToText = (editorState) => {
    if (!editorState || !editorState.blocks) {
      return ""; 
    }
    return editorState.blocks.map((block) => block.text).join("\n");
  };


  const handleSaveTextContent = (rawContentState) => {
    setTextData(rawContentState);
    setShowAdditionalButtons(false); 
  };

  const handleToggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
    setShowQuestion(false);
  };

  const handleQuestion = () => {
    setShowQuestion(!showQuestion);
    setShowAdditionalButtons(false);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setShowAdditionalButtons(!showAdditionalButtons); 
    setShowQuestion(false);
    setItems([...items, { isVisible: true }]);
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isVisible = !updatedItems[index].isVisible;
    setItems(updatedItems);
  };


  const sidebarWidth = isSidebarClosed ? "70px" : "270px";
  const mainComponentWidth = isSmallScreen
    ? "100%"
    : `calc(100% - ${sidebarWidth})`;

  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? "79px" : isSmallScreen ? "0" : "270px",
    transition: "width 0.3s, margin-left 0.3s",
  };

  return (
    <Fragment>
      <Container
        maxWidth="xxl"
        style={styles}
        className="bg-gray-100 lg:mt-[-40px] md:mt-[-20px] sm:mt-[-20px]"
      >
        <FilterForm />

        <CardContent>
          {currentContent && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: currentContent }} />
            </div>
          )}
          <Grid item xs={12}>
            <div className="lg:flex flex-row md:flex-col sm:flex-col justify-between ">
              <div className="flex-1">
                <Button
                  onClick={handleAddItem}
                  variant="outlined"
                  sx={{
                    width: "13em",
                    height: "3em",
                    background:
                      "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                    color: "white",
                  }}
                >
                  Add Question
                </Button>
              </div>
            </div>
          </Grid>
          {questions.map((question, index) => (
        <Card key={index} className="text-start ml-4 mt-4 mb-4">
          <div className="mb-3 ml-4">
            <h5>
              Q{question.questionNumber} {copyingQuestion && nextQuestionNumber}
            </h5>{" "}
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
          
             <p>{question.editorState && question.editorState.blocks[0].text}</p>
             {imageSrc && <img src={imageSrc} alt="Dropped Image" />}
   
             {question.pdfFile && ( <embed src={pdfFile} type="application/pdf" width="600" height="400" />)}
           {videoSrc && (
        <video width="600" height="400" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
          </div>
          {question.criteria && <p>Criteria: {question.criteria.join(", ")}</p>}
          {question.marks && <p>Marks: {question.marks}</p>}
          <div className="mb-3 ml-4">
            <h6> Answer Key:</h6>
            <span>
              {question.answerKey && convertToText(question.answerKey)}
            </span>
            
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
          
          {question.subQuestions.map((subQuestion, subIndex) => (
  <Card key={subIndex} className="sub-question-card">
    <h5>Q{question.questionNumber}.{subIndex + 1}: {convertToText(subQuestion.editorState)}</h5>
    {subQuestionFiles[index] && (
  <div>
    
    {subQuestionFiles[index].type.startsWith('image/') && (
      <div>
        <img src={URL.createObjectURL(subQuestionFiles[index])} alt="Uploaded" />
        <p>{subQuestionFiles[index].name}</p>
      </div>
    )}
   
    {subQuestionFiles[index].type.startsWith('video/') && (
      <video controls>
        <source src={URL.createObjectURL(subQuestionFiles[index])} type={subQuestionFiles[index].type} />
        Your browser does not support the video tag.
      </video>
    )}
   
    {subQuestionFiles[index].type === 'application/pdf' && (
      <embed src={URL.createObjectURL(subQuestionFiles[index])} type="application/pdf" width="200" height="200" />
    )}

    {!subQuestionFiles[index].type.startsWith('image/') &&
      !subQuestionFiles[index].type.startsWith('video/') &&
      subQuestionFiles[index].type !== 'application/pdf' && (
        <p>{subQuestionFiles[index].name}</p>
      )}
  </div>
)}
    {subQuestion.enableCriteria && subQuestion.criteria && (
      <p>Criteria: {subQuestion.criteria.join(", ")}</p>
    )}
    {subQuestion.enableMarks && (
      <h6>Marks: {subQuestion.marks}</h6>
    )}
    {subQuestion.markScheme && (
      <div>
        <h6>Mark Scheme:</h6>
        {subQuestion.markScheme && convertToText(subQuestion.markScheme)}
        
       
      </div>
    )}
    {subQuestion.answerKey && (
      <div>
        <h6>Answer Key:</h6>
        {subQuestion.answerKey && convertToText(subQuestion.answerKey)}
        
      </div>
    )}
   
  </Card>
))}
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
          <div className="text-center">
            {showAdditionalButtons && (
            <Fragment>
     
      
      <Container maxWidth="xxl" mt={44}>
        <div className="container mt-3 ">
          {/* <h2 className="text-center mb-8">Text</h2> */}
          <Form onSubmit={handleSubmit}>
            <AlertDialog
              open={openAlert}
              handleCloseAlert={handleCloseAlert}
              alertMessage={alertMessage}
            />
           <MainQuestion
             handleSubQuestionEditorChange={handleSubQuestionEditorChange}
           editorState={editorState} 
           onEditorStateChange={setEditorState}
        selectChecked={selectChecked}
        handleSelectedCriteria={handleSelectedCriteria}
        checkboxesState={checkboxesState}
        handleCheckboxChange={handleCheckboxChange}
        marks={marks}
        handleMarks={handleMarks}
        marksValue={marksValue}
        setMarksValue={setMarksValue}
        showAnswerKeyEditor={showAnswerKeyEditor}
        setShowAnswerKeyEditor={setShowAnswerKeyEditor}
        answerKeyEditorState={answerKeyEditorState}
        setAnswerKeyEditorState={setAnswerKeyEditorState}
        showMarkSchemeEditor={showMarkSchemeEditor}
        setShowMarkSchemeEditor={setShowMarkSchemeEditor}
        markSchemeEditorState={markSchemeEditorState}
        setMarkSchemeEditorState={setMarkSchemeEditorState}
        setEditorState={setEditorState}
  getRootProps={getRootProps}
  dropzoneStyle={dropzoneStyle}
  getInputProps={getInputProps}
  pdfFile={pdfFile}
  imageSrc={imageSrc}
  imageSize={imageSize}
  handleImageLoaded={handleImageLoaded}
  handleImageResize={handleImageResize}
  videoSrc={videoSrc}
  file={file}
  error={error}
  subQuestions={subQuestions}
  handleAddSubQuestion={handleAddSubQuestion}
  handleRemoveSubQuestion={handleRemoveSubQuestion}
  showSubQuestionSection={showSubQuestionSection}
  subQuestionFiles={subQuestionFiles}
  acceptedAnswerKeyFiles={acceptedAnswerKeyFiles}
        setAcceptedAnswerKeyFiles={setAcceptedAnswerKeyFiles}
        answerKeyDropzoneProps={answerKeyDropzoneProps}
          />
                 <SubQuestion
subQuestions={subQuestions}
handleAddSubQuestion={handleAddSubQuestion}
handleRemoveSubQuestion={handleRemoveSubQuestion}
handleCriteriaSwitchChange={handleCriteriaSwitchChange}
handleMarksSwitchChange={ handleMarksSwitchChange}
handleMarksChange={handleMarksChange}
handleSubQuestionEditorChange={handleSubQuestionEditorChange}
handleAnswerKeyEditorToggle={handleAnswerKeyEditorToggle}
handleAnswerKeyEditorChange={ handleAnswerKeyEditorChange}
handleMarkSchemeEditorToggle={handleMarkSchemeEditorToggle}
handleMarkSchemeEditorChange={handleMarkSchemeEditorChange}
handleSubQuestionFileUpload={handleSubQuestionFileUpload}
showSubQuestionSection={showSubQuestionSection}
subQuestionFiles={subQuestionFiles} 
/>

          <div className="text-center">
<Button color="primary" onClick={handleAddSubQuestion} sx={{
       width:'180px',
        color: "white",
        background:
          "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
      }}>
Add Subquestion
</Button>
</div>
    <Col xs={12} className="mt-3">
      <div className="d-flex justify-content-between">
      <Button
      variant="outlined"
      onClick={goBack}
      sx={{
        color: "white",
        background:
          "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
      }}
    >
      Back
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
          </Form>
        </div>
      </Container>
     
    </Fragment>
            )}
            </div>
               </CardContent>
      </Container>
     <SaveDailog open={openDialog} onClose={handleCloseDialog} />
      <AlertMessage
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirmDelete={handleConfirmDelete}
      />
      <CopyQuestionAlert
  open={openCopyDialog}
  onClose={handleCloseCopyDialog}
 
/>
<EditDailog
  open={openEditDialog}
  onClose={handleCloseEditDialog}
  onConfirmEdit={handleConfirmEdit}
/>
    
    </Fragment>
  );
};
const dropzoneStyle = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "5px",
  textAlign: "center",
  cursor: "pointer",

};
export default CreateQuestion;
