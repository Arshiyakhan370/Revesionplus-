import { Checkbox, FormControlLabel, Grid, IconButton, Paper, Switch, TextField, Tooltip } from '@mui/material';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from 'react';
import { XCircle } from 'react-feather';
import { Editor } from '@tinymce/tinymce-react';
import { CheckBox } from '@mui/icons-material';
// import { IconButton } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import { Image as ImageIcon, VideoLibrary as VideoIcon, PictureAsPdf as PdfIcon } from '@mui/icons-material';
const SubQuestion = ({
  subQuestionFiles,
  showSubQuestionSection,
  subQuestions,
  handleAddSubQuestion,
  handleRemoveSubQuestion,
  handleCriteriaSwitchChange,
  handleMarksSwitchChange,
  handleMarksChange,
  handleSubQuestionEditorChange,
  handleAnswerKeyEditorToggle,
  handleAnswerKeyEditorChange,
  handleMarkSchemeEditorToggle,
  handleMarkSchemeEditorChange,
  handleSubQuestionFileUpload,
  checkboxesState,
  handleCheckboxChange,
}) => {
  const [points, setPoints] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedPdf, setUploadedPdf] = useState(null);
  // const [points, setPoints] = useState({});
  const handleIconClick = (type) => {
    document.getElementById(type).click();
  };
  const handlePointsChange = (index, label, value) => {
    setPoints(prevPoints => ({
      ...prevPoints,
      [index]: {
        ...prevPoints[index],
        [label]: value.replace(/\D/, '')
      }
    }));
  };
  const handleFileChange = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      if (type === 'image') {
        const reader = new FileReader();
        reader.onload = (e) => setUploadedImage(e.target.result);
        reader.readAsDataURL(file);
      } else if (type === 'video') {
        const reader = new FileReader();
        reader.onload = (e) => setUploadedVideo(e.target.result);
        reader.readAsDataURL(file);
      } else if (type === 'pdf') {
        const fileURL = URL.createObjectURL(file);
        setUploadedPdf(fileURL);
      }
    }
  };
  return (
    <div className="question-section">
      {showSubQuestionSection && (
        <Paper className="mt-8 mb-8">
          {subQuestions.map((subQuestion, index) => (
            <div key={index} className="sub-question">
              <h3 className="text-blue-600 mt-8">Sub Question {index + 1}</h3>

              <Grid container>
           <Grid item xs={12} md={2} lg={1.8} style={{ flexBasis: '15%', maxWidth: '15%'}}>
  <FormControlLabel style={{ marginLeft: '20px' }}
    control={
      <Switch
        checked={subQuestion.enableCriteria}
        onChange={(e) => handleCriteriaSwitchChange(e, index)}
      />
    }
    label="Enable Criteria"
  />
  {subQuestion.enableCriteria && (
    <Grid container direction="column">
      {checkboxesState[index] && Object.keys(checkboxesState[index]).map((label) => (
        <Grid item key={label} style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxesState[index][label]}
                  onChange={() => handleCheckboxChange(index, label)}
                />
              }
              label={label}
            />
            <TextField
              placeholder="pts"
              variant="outlined"
              size="small"
              value={points[index]?.[label] || ''}
              onChange={(e) => handlePointsChange(index, label, e.target.value)}
              disabled={!checkboxesState[index][label]}
              InputProps={{ inputProps: { min: 0 } }}
              style={{ marginLeft: '8px', width: '50px' }}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  )}
</Grid>

                <Grid item xs={12} md={10} lg={10.2} style={{ flexBasis: '85%', maxWidth: '85%' }}>
                  <Editor
                    apiKey='sxjoo3xgjqdbipeju9chepopxxf7467it66w6puv0sv5ysse'
                    init={{
                      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                      toolbar: 'undo redo | blocks fontfamily fontsize | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                      tinycomments_mode: 'embedded',
                      tinycomments_author: 'Author name',
                      mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                      ],
                      ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue=""
                    placeholder="write here"
                    editorState={subQuestion.editorState}
                    onEditorStateChange={(newEditorState) =>
                      handleSubQuestionEditorChange(newEditorState, index)
                    }
                  />
                </Grid>
              </Grid>
              <div> 
               <div className="flex flex-row justify-start items-center ml-4">
            <Tooltip title="Insert Image" arrow>
          <IconButton
            onClick={() => handleIconClick('image')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <ImageIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="image"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={(e) => handleFileChange('image', e)}
        />

        <Tooltip title="Insert Video" arrow>
          <IconButton
            onClick={() => handleIconClick('video')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <VideoIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="video"
          style={{ display: 'none' }}
          accept="video/*"
          onChange={(e) => handleFileChange('video', e)}
        />

        <Tooltip title="Insert PDF" arrow>
          <IconButton
            onClick={() => handleIconClick('pdf')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <PdfIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="pdf"
          style={{ display: 'none' }}
          accept="application/pdf"
          onChange={(e) => handleFileChange('pdf', e)}
        />
      </div>
                {/* <input type="file" onChange={(e) => handleSubQuestionFileUpload(e.target.files[0], index)} /> */}
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
                      <embed src={URL.createObjectURL(subQuestionFiles[index])} type="application/pdf" width="400" height="400" />
                    )}
                    {!subQuestionFiles[index].type.startsWith('image/') &&
                      !subQuestionFiles[index].type.startsWith('video/') &&
                      subQuestionFiles[index].type !== 'application/pdf' && (
                        <p>{subQuestionFiles[index].name}</p>
                      )}
                  </div>
                )}
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={subQuestion.enableAnswerKeyEditor}
                    onChange={(e) => handleAnswerKeyEditorToggle(e, index)}
                  />
                }
                label="Add Answer Key"
              />
              {subQuestion.enableAnswerKeyEditor && (
                <div>
                  <div className="answer-key-editor border border-gray-500 bg-white mt-3">
                    <Editor
                      editorState={subQuestion.answerKeyEditorState}
                      onEditorStateChange={(newEditorState) =>
                        handleAnswerKeyEditorChange(newEditorState, index)
                      }
                      placeholder="Enter answer key content"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center ml-4 mt-4 mb-4">
            <Tooltip title="Insert Image" arrow>
          <IconButton
            onClick={() => handleIconClick('image')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <ImageIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="image"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={(e) => handleFileChange('image', e)}
        />

        <Tooltip title="Insert Video" arrow>
          <IconButton
            onClick={() => handleIconClick('video')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <VideoIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="video"
          style={{ display: 'none' }}
          accept="video/*"
          onChange={(e) => handleFileChange('video', e)}
        />

        <Tooltip title="Insert PDF" arrow>
          <IconButton
            onClick={() => handleIconClick('pdf')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <PdfIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="pdf"
          style={{ display: 'none' }}
          accept="application/pdf"
          onChange={(e) => handleFileChange('pdf', e)}
        />
      </div>
                  {/* <input type="file" onChange={(e) => handleSubQuestionFileUpload(e.target.files[0], index)} /> */}
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
                        <embed src={URL.createObjectURL(subQuestionFiles[index])} type="application/pdf" width="400" height="400" />
                      )}
                      {!subQuestionFiles[index].type.startsWith('image/') &&
                        !subQuestionFiles[index].type.startsWith('video/') &&
                        subQuestionFiles[index].type !== 'application/pdf' && (
                          <p>{subQuestionFiles[index].name}</p>
                        )}
                    </div>
                  )}
                </div>
              )}
              <FormControlLabel
                control={
                  <Switch
                    checked={subQuestion.enableMarkSchemeEditor}
                    onChange={(e) => handleMarkSchemeEditorToggle(e, index)}
                  />
                }
                label="Add Mark Scheme"
              />
              {subQuestion.enableMarkSchemeEditor && (
                <div>
                  <div className="mark-scheme-editor border border-gray-500 bg-white mt-3">
                    <Editor
                      editorState={subQuestion.markSchemeEditorState}
                      onEditorStateChange={(newEditorState) =>
                        handleMarkSchemeEditorChange(newEditorState, index)
                      }
                      placeholder="Enter mark scheme content"
                    />
                  </div>
                  <div className="flex flex-row justify-start items-center ml-4 mt-4 mb-4">
            <Tooltip title="Insert Image" arrow>
          <IconButton
            onClick={() => handleIconClick('image')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <ImageIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="image"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={(e) => handleFileChange('image', e)}
        />

        <Tooltip title="Insert Video" arrow>
          <IconButton
            onClick={() => handleIconClick('video')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <VideoIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="video"
          style={{ display: 'none' }}
          accept="video/*"
          onChange={(e) => handleFileChange('video', e)}
        />

        <Tooltip title="Insert PDF" arrow>
          <IconButton
            onClick={() => handleIconClick('pdf')}
            sx={{
              color: 'white',
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              width: '2em',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              marginRight: '3px',
              '&:hover': {
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              },
            }}
          >
            <PdfIcon sx={{ fontSize: '1em' }} />
          </IconButton>
        </Tooltip>
        <input
          type="file"
          id="pdf"
          style={{ display: 'none' }}
          accept="application/pdf"
          onChange={(e) => handleFileChange('pdf', e)}
        />
      </div>
                  {/* <input type="file" onChange={(e) => handleSubQuestionFileUpload(e.target.files[0], index)} /> */}
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
                        <embed src={URL.createObjectURL(subQuestionFiles[index])} type="application/pdf" width="400" height="400" />
                      )}
                      {!subQuestionFiles[index].type.startsWith('image/') &&
                        !subQuestionFiles[index].type.startsWith('video/') &&
                        subQuestionFiles[index].type !== 'application/pdf' && (
                          <p>{subQuestionFiles[index].name}</p>
                        )}
                    </div>
                  )}
                </div>
              )}
              {/* <div className="flex justify-content-end text-red-500 text-xxl mr-4 mb-4">
  <XCircle 
    sx={{ fontSize: '40px', cursor: 'pointer', marginBottom:'20px' }} 
    onClick={() => handleRemoveSubQuestion(index)}
  />
</div> */}
<div className="flex justify-content-end text-red-500 text-xxl ">
      <button 
        type="button" 
        className=" mr-4 mb-4 mt-[-20px] ant-btn css-lbx8ul ant-btn-circle ant-btn-default ant-btn-icon-only ant-btn-background-ghost ant-btn-dangerous" 
        onClick={() => handleRemoveSubQuestion(index)}
      >
        <span className="ant-btn-icon">
          <span role="img" aria-label="close" className="anticon anticon-close">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </span>
        </span>
      </button>
    </div>

            </div>
          ))}
        </Paper>
      )}
    </div>
  );
};

export default SubQuestion;
