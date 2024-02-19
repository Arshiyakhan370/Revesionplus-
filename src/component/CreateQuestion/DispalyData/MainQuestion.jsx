import React from 'react';
import { Grid, FormControlLabel, Switch, TextField, Button, Checkbox } from '@mui/material';
import SubQuestion from './SubQuestion';
import { Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from 'react-dropzone';
const PdfComponent = React.lazy(() => import("../QuestionDescriptionSection/PdfComponent"));
const MainQuestion = ({
     editorState,
  setEditorState,
  getRootProps,
  dropzoneStyle,
 
  pdfFile,
  imageSrc,
  imageSize,
  handleImageLoaded,
  handleImageResize,
  videoSrc,
  file,
  error,
  getInputProps,
  subQuestions,
  handleAddSubQuestion,
  handleRemoveSubQuestion,
  showSubQuestionSection,
  subQuestionFiles,
  selectChecked,
  handleSelectedCriteria,
  checkboxesState,
  handleCheckboxChange,
  marks,
  handleMarks,
  marksValue,
  setMarksValue,
  showAnswerKeyEditor,
  setShowAnswerKeyEditor,
  answerKeyEditorState,
  setAnswerKeyEditorState,
  showMarkSchemeEditor,
  setShowMarkSchemeEditor,
  markSchemeEditorState,
  setMarkSchemeEditorState,
  handleCriteriaSwitchChange,
  handleMarksSwitchChange,
  handleMarksChange,
  handleSubQuestionEditorChange,
  handleAnswerKeyEditorToggle,
  handleAnswerKeyEditorChange,
  handleMarkSchemeEditorToggle,
  handleMarkSchemeEditorChange,
  handleSubQuestionFileUpload,
  acceptedAnswerKeyFiles, setAcceptedAnswerKeyFiles, answerKeyDropzoneProps 
}) => {
   
  return (
    <div>
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
            {/* {window.innerWidth > 1024 && ( */}
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
            {/* )} */}
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
  <Grid>
    <div className="border border-gray-500 bg-white">
      <Editor
        editorState={editorState}
        onEditorStateChange={(newEditorState) =>
          setEditorState(newEditorState)
        }
        placeholder="Enter text content"
      />
    </div>
    
            <div className="mt-4 cursor-pointer text-blue-600 ">
              <div
                {...getRootProps({ className: "dropzone" })}
                style={dropzoneStyle}
              >
                <input {...getInputProps()} />
                <p className="mb-[-1px] text-center">
                  Upload PDF, Images and Videos
                </p>
              </div>
              
              <div className='flex flex-row justify-between'>
              <div>
              {pdfFile && <PdfComponent pdfFile={pdfFile} />}
              </div>
            
            <div>
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
              
              </div>
              <div>
                {videoSrc && (
                  <video
                    controls
                    src={videoSrc}
                    className="video-fluid"
                  />
                )}
               
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
        <FormControlLabel
          control={
            <Switch
              checked={showAnswerKeyEditor}
              onChange={() =>
                setShowAnswerKeyEditor(!showAnswerKeyEditor)
              }
            />
          }
          label="Add Answer Key"
        />
       
        {showAnswerKeyEditor && (
            <div>
          <div className="border border-gray-500 bg-white">
            <Editor
              editorState={answerKeyEditorState}
              onEditorStateChange={(newEditorState) =>
                setAnswerKeyEditorState(newEditorState)
              }
              placeholder="Enter Answer Key content"
            />
          </div>
          <div className="mt-4 cursor-pointer text-blue-600 ">
              <div
                {...getRootProps({ className: "dropzone" })}
                style={dropzoneStyle}
              >
                <input {...getInputProps()} />
                <p className="mb-[-1px] text-center">
                  Upload PDF, Images and Videos
                </p>
              </div>
              
              <div className='flex flex-row justify-between'>
              <div>
              {pdfFile && <PdfComponent pdfFile={pdfFile} />}
              </div>
            
            <div>
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
              
              </div>
              <div>
                {videoSrc && (
                  <video
                    controls
                    src={videoSrc}
                    className="video-fluid"
                  />
                )}
               
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
          label="Add Mark Scheme "
        />
        {showMarkSchemeEditor && (
          <div>
          <div className="border border-gray-500 bg-white mt-3"
            >
              <Editor
                editorState={markSchemeEditorState}
                onEditorStateChange={(newEditorState) =>
                  setMarkSchemeEditorState(newEditorState)
                }
                placeholder="Enter Mark Scheme content"
              />
            </div>
            
            <div className="mt-4 mb-4 cursor-pointer text-blue-600 ">
              <div
                {...getRootProps({ className: "dropzone" })}
                style={dropzoneStyle}
              >
                <input {...getInputProps()} />
                <p className="mb-[-1px] text-center">
                  Upload PDF, Images and Videos
                </p>
              </div>
              
              <div className='flex flex-row justify-between'>
              <div>
              {pdfFile && <PdfComponent pdfFile={pdfFile} />}
              </div>
            
            <div>
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
              
              </div>
              <div>
                {videoSrc && (
                  <video
                    controls
                    src={videoSrc}
                    className="video-fluid"
                  />
                )}
               
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
            
              </div>
        )}
    
        <SubQuestion/>

  </Grid>
  </div>
  )
}

export default MainQuestion