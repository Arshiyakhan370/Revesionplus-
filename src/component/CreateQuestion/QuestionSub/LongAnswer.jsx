import React, { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Checkbox,
  Button,
  Switch,
  Typography,
  FormControlLabel,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { gsap } from "gsap";

const LongAnswer = () => {
  const [content, setContent] = useState("");
  const [editing, setEditing] = useState(false);
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [selectedStrands, setSelectedStrands] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [selectChecked, setSelectChecked] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [marks, setMarks] = useState(false);
  const [items, setItems] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [criteria, setCriteria] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  const [markScheme, setMarkScheme] = useState("");
  const [studentEditor, setStudentEditor] = useState(EditorState.createEmpty());
  const [teacherEditor, setTeacherEditor] = useState(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (savedQuestions.length > 0) {
      gsap.fromTo(
        `.question-card-${savedQuestions.length - 1}`,
        { x: '100%' },
        { x: '0%', duration: 3, ease: 'power3.out' }
      );
    }
  }, [savedQuestions]);

  const handleChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleTeacherEditorChange = (editorState) => {
    setTeacherEditor(editorState);
  };

  const handleStudentEditorChange = (editorState) => {
    setStudentEditor(editorState);
  };

  const handleSelectedCriteria = () => {
    setSelectChecked(!selectChecked);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleMarks = () => {
    setMarks(!marks);
  };

  const [checkboxesState, setCheckboxesState] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
  });

  const handleCheckboxChange = (label) => {
    setCheckboxesState((prevState) => {
      const newState = { ...prevState };
      newState[label] = !newState[label];
      return newState;
    });
  };

  const handleStrandsChange = (value) => {
    setSelectedStrands(value);
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isVisible = !updatedItems[index].isVisible;
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      title,
      description,
      content: editorState.getCurrentContent().hasText()
        ? editorState.getCurrentContent().getPlainText()
        : "",
      selectedStrands,
      selectedValue,
      teacherEditor: teacherEditor.getCurrentContent().hasText()
        ? teacherEditor.getCurrentContent().getPlainText()
        : "",
      studentEditor: studentEditor.getCurrentContent().hasText()
        ? studentEditor.getCurrentContent().getPlainText()
        : "",
      selectChecked,
      isChecked,
      marks,
      markScheme,
      answerKey,
      criteria,
    };

    setSavedQuestions([...savedQuestions, newQuestion]);

    setTitle("");
    setDescription("");
    setSelectedStrands([]);
    setSelectedValue("");
    setTeacherEditor(EditorState.createEmpty());
    setStudentEditor(EditorState.createEmpty());
    setSelectChecked(false);
    setIsChecked(false);
    setEditing(false);
    setCriteria("");
    setAnswerKey("");
    setMarkScheme("");
    setEditorState(EditorState.createEmpty());
  };

  const toggleHandle = () => {
    setTeacherEditor((prevState) => 
      prevState.getCurrentContent().hasText()
        ? EditorState.createEmpty()
        : prevState
    );
  };

  const toggleHandleStudent = () => {
    setStudentEditor((prevState) => 
      prevState.getCurrentContent().hasText()
        ? EditorState.createEmpty()
        : prevState
    );
  };

  const handleCopyQuestionContent = (index) => {
    const copiedQuestion = { ...savedQuestions[index] };
    setSavedQuestions((prevQuestions) => [...prevQuestions, copiedQuestion]);
    showSnackbar("Question copied successfully", "success");
  };

  const handleDeleteQuestion = (index) => {
    setSavedQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
    showSnackbar("Question deleted successfully", "success");
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Fragment>
      {savedQuestions.map((savedQuestion, index) => (
        <div key={index} className={`question-card-${index}`}>
          <Card>
            <CardContent>
              <Typography variant="h6">Title: {savedQuestion.title}</Typography>
              <Typography variant="body1">Description: {savedQuestion.description}</Typography>
              <Typography variant="body1">Marks: {savedQuestion.marks}</Typography>
              <Typography variant="body1">Mark Scheme: {savedQuestion.markScheme}</Typography>
              <Typography variant="body1">Answer Key: {savedQuestion.answerKey}</Typography>
              <Typography variant="body1">Criteria: {savedQuestion.criteria}</Typography>
              <Typography variant="body1">Content: {savedQuestion.content}</Typography>
              <Typography variant="body1">Selected Strands: {savedQuestion.selectedStrands.join(', ')}</Typography>
              <div className="flex flex-row justify-end">
                <Button onClick={() => handleCopyQuestionContent(index)}>
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="copy"
                    width="1.5em"
                    height="1.5em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                  </svg>
                </Button>
                <Button onClick={() => handleDeleteQuestion(index)}>
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="delete"
                    width="1.5em"
                    height="1.5em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
      </Snackbar>

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
              control={
                <Switch
                  color="primary"
                  checked={marks}
                  onChange={handleMarks}
                />
              }
              label="Marks"
            />
            {marks && (
              <TextField
                size="small"
                sx={{ width: "80px", marginTop: "25px" }}
                label="Marks"
              />
            )}
          </div>
        </Grid>
      </Grid>

      <div className="border border-gray-500 mb-4 bg-white">
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          className="border border-gray-500 bg-gray-400"
          onEditorStateChange={handleChange}
        />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={24} className=" mt-4 mb-4">
          <div className="">
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={!!teacherEditor.getCurrentContent().hasText()}
                  onChange={toggleHandle}
                />
              }
              label="Answer Key"
            />
            {teacherEditor.getCurrentContent().hasText() && (
              <div className="border border-gray-500 mb-4 bg-white">
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  className="border border-gray-500 bg-gray-400"
                  editorState={teacherEditor}
                  onEditorStateChange={handleTeacherEditorChange}
                />
              </div>
            )}
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={!!studentEditor.getCurrentContent().hasText()}
                  onChange={toggleHandleStudent}
                />
              }
              label="Markscheme"
            />
            {studentEditor.getCurrentContent().hasText() && (
              <div className="border border-gray-500 mb-4 bg-white">
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  editorState={studentEditor}
                  onEditorStateChange={handleStudentEditorChange}
                />
              </div>
            )}
          </div>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}></Grid>
      </form>

      <Grid item xs={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
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
            variant="contained"
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
      </Grid>
    </Fragment>
  );
};

export default LongAnswer;
