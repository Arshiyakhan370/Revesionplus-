import React, { Fragment, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Checkbox,
  Button,
  Select,
  Input,
  Switch,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useMediaQuery } from "react-responsive";
import "react-quill/dist/quill.snow.css";
import FilterForm from "../createAssignment/FilterForm";

const CreateQuestion = ({ isSidebarClosed }) => {
  const [content, setContent] = useState("");
  const [editing, setEditing] = useState(false);
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [selectedStrands, setSelectedStrands] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [teacherEditor, setTeacherEditor] = useState(false);
  const [studentEditor, setStudentEditor] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectChecked, setSelectChecked] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
 ;
  const handkeSelectedCriteria = () => {
    setSelectChecked(!selectChecked);
  };
  const toggleHandle = () => {
    setTeacherEditor(!teacherEditor);
  };
  const toggleHandleStudent = () => {
    setStudentEditor(!studentEditor);
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleEditClick = () => {
    setEditing(!editing);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      content,
      selectedStrands,
      selectedValue,
      teacherEditor,
      studentEditor,
      selectChecked,
      isChecked,
    };
    setSavedQuestions([...savedQuestions, newQuestion]);
    setContent("");
    setSelectedStrands([]);
    setSelectedValue("");
    setTeacherEditor(false);
    setStudentEditor(false);
    setSelectChecked(false);
    setIsChecked(false);
    setEditing(false);
  };

  const handleChange = (value) => {
    setContent(value);
  };
  const sidebarWidth = isSidebarClosed ? "100px" : "320px";
  const mainComponentWidth = isSmallScreen
    ? "100%"
    : `calc(100% - ${sidebarWidth})`;

  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? "100px" : isSmallScreen ? "0" : "320px",
    transition: "width 0.3s, margin-left 0.3s",
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Fragment>
     <Card style={styles}>
    <FilterForm/>
     
        <CardContent>
          <Typography variant="h5" gutterBottom className="mt-4 mb-4">
            Create a Question
          </Typography>
          <Card className="h-14 mt-4 mb-4">
            <Grid container justifyContent="flex-end" alignItems="center" className="text-center" >
              <Grid item>
                <Button onClick={handleEditClick}>
                  {editing ? (
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="edit"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                      className="mt-4 mr-2"
                    >
                      <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                    </svg>
                  ) : (
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="edit"
                      width="1.5em"
                      height="1.5em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                    </svg>
                  )}
                </Button>
              </Grid>

              <Grid item>
                <Button>
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
              </Grid>
              <Grid item>
                <Button>
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
              </Grid>
            </Grid>
          </Card>
          {editing && (
            <Grid>
              <Typography variant="h5" gutterBottom>
                Long Answer
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        className=" flex flex-row justify-between"
                      >
                       <FormControlLabel
                    className="ml-8"
                    control={
                      <Switch
                        color="primary"
                        checked={selectChecked}
                        onChange={handkeSelectedCriteria}
                      />
                    }
                    label="select criteria "
                  />
                   {selectChecked && (
  <div>
    {window.innerWidth > 1024 && (
      <Grid item xs={12}>
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
                        <Grid item xs={2}>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleEditClick}
                          >
                            Close
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={24} className=" mt-4 mb-4">
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        checked={teacherEditor}
                        onChange={toggleHandle}
                      />
                    }
                    label=" Include Teacher Explanation"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        checked={studentEditor}
                        onChange={toggleHandleStudent}
                      />
                    }
                    label="Include Markscheme"
                  />
                 
                </Grid>
              <div className="border border-gray-500 mb-4">
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  className="border border-gray-500"
                  onEditorStateChange={(editorState) =>
                    handleChange(editorState)
                  }
                />
                </div>
                {teacherEditor && (
                  <div className="border border-gray-500 mb-4">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      className="border border-gray-500"
                      onEditorStateChange={(editorState) =>
                        handleChange(editorState)
                      }
                    />
                  </div>
                )}

                {studentEditor && (
                  <div className="border border-gray-500 mb-4">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      className="border border-gray-500 pl-5 pr-5"
                      onEditorStateChange={(editorState) =>
                        handleChange(editorState)
                      }
                    />
                  </div>
                )}
              </Grid>
             <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
            </Grid>
             </form>
            </Grid>
          )}

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
                sx={{
                  color: "white",
                  background:
                    "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                }}
              >
                Add
              </Button>
            </div>
          </Grid>

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
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CreateQuestion;
