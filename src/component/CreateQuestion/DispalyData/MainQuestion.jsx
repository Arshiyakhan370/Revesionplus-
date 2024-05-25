import React, { useState, Suspense } from 'react';
import { Grid, FormControlLabel, Switch, TextField, Checkbox, Paper, IconButton, Tooltip } from '@mui/material';
import { Image as ImageIcon, VideoLibrary as VideoIcon, PictureAsPdf as PdfIcon } from '@mui/icons-material';
import SubQuestion from './SubQuestion';
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Editor } from '@tinymce/tinymce-react';
import PreviewIcon from '@mui/icons-material/Preview';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Link } from 'react-router-dom';
import Previwe from './Previwe';
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
  acceptedAnswerKeyFiles,
  setAcceptedAnswerKeyFiles,
  answerKeyDropzoneProps
}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedPdf, setUploadedPdf] = useState(null);
  const [points, setPoints] = useState({});
  const [open, setOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleClickOpen = () => {
    console.log('Opening modal');
    setIsPreviewOpen(true);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setIsPreviewOpen(false);
  };

  const handleSave = () => {
    console.log('Saving...');
    setIsPreviewOpen(false);
  };

  const handleIconClick = (type) => {
    document.getElementById(type).click();
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

  const handlePointsChange = (label, value) => {
    setPoints(prevPoints => ({
      ...prevPoints,
      [label]: value.replace(/\D/, '') 
    }));
  };

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <div>
      <Paper variant="outlined" className="p-4 mb-4">
      <Grid container spacing={2}>
        <Grid item xs={12} className="mt-4 mb-4">
          <div className="flex flex-row justify-between text-left">
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
          </div>
        </Grid>

        <Grid container>
          <Grid item xs={12} md={2} lg={1.8} style={{ flexBasis: '15%', maxWidth: '15%', marginTop: '20px' }}>
            {selectChecked && (
              <Grid container direction="column">
                {Object.keys(checkboxesState).map((label) => (
                  <Grid item key={label} style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxesState[label]}
                            onChange={() => handleCheckboxChange(label)}
                          />
                        }
                        label={label}
                      />
                      <TextField
                        placeholder="pts"
                        variant="outlined"
                        size="small"
                        value={points[label] || ''}
                        onChange={(e) => handlePointsChange(label, e.target.value)}
                        disabled={!checkboxesState[label]}
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
              editorState={editorState}
              onEditorStateChange={(newEditorState) =>
                setEditorState(newEditorState)
              }
            />
          </Grid>
        </Grid>
      {/* )} */}
    </Grid>
        <Grid>
          {/* <Paper variant="outlined" className="p-4 mb-4">
            <Editor
              editorState={editorState}
              onEditorStateChange={(newEditorState) =>
                setEditorState(newEditorState)
              }
              placeholder="Enter text content"
            />
          </Paper> */}
          {/* <Paper variant="outlined" className="p-4 mb-4"> */}
         
  
          {/* </Paper> */}
          <div className="mt-4 cursor-pointer text-blue-600 ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start items-left">
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
      <Tooltip title="Preview" arrow>
        <IconButton
          onClick={handleClickOpen}
          sx={{
            color: 'white',
            background:
              'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
            width: '2em',
            height: '2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: '1px solid black',
            marginRight: '3px',
            '&:hover': {
              background:
                'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
            },
          }}
        >
          <PreviewIcon sx={{ fontSize: '1em' }} />
        </IconButton>
      </Tooltip>
      <Previwe open={isPreviewOpen} onClose={handleClose} onSave={handleSave} />

</div>
            <div className="flex flex-col">
              {uploadedPdf && (
                <div>
                  <Suspense fallback={<div>Loading PDF...</div>}>
                    <PdfComponent pdfFile={uploadedPdf} />
                  </Suspense>
                </div>
              )}
              {uploadedImage && (
                <div className="mt-2 mb-4">
                  <img
                    src={uploadedImage}
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
              {uploadedVideo && (
                <video
                  controls
                  src={uploadedVideo}
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
          {/* <div className='flex justify-start'> */}
          {/* <div className='text-left'> */}
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
          {/* </div> */}
          {/* <div className='text-left'> */}
          {showAnswerKeyEditor && (
            <div>
              {/* <Paper variant="outlined" className="p-4 mb-4">
                <Editor
                  editorState={answerKeyEditorState}
                  onEditorStateChange={(newEditorState) =>
                    setAnswerKeyEditorState(newEditorState)
                  }
                  placeholder="Enter Answer Key content"
                />
              </Paper> */}
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
              editorState={editorState}
              onEditorStateChange={(newEditorState) =>
                setEditorState(newEditorState)
              }
            />
              <div className="mt-4 cursor-pointer text-blue-600 ">
            <div className="flex flex-row justify-start items-center">
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

            <div className="flex flex-col">
              {uploadedPdf && (
                <div>
                  <Suspense fallback={<div>Loading PDF...</div>}>
                    <PdfComponent pdfFile={uploadedPdf} />
                  </Suspense>
                </div>
              )}
              {uploadedImage && (
                <div className="mt-2 mb-4">
                  <img
                    src={uploadedImage}
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
              {uploadedVideo && (
                <video
                  controls
                  src={uploadedVideo}
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
            label="Add Mark Scheme"
          />
          {showMarkSchemeEditor && (
            <div>
              {/* <Paper variant="outlined" className="p-4 mb-4">
                <Editor
                  editorState={markSchemeEditorState}
                  onEditorStateChange={(newEditorState) =>
                    setMarkSchemeEditorState(newEditorState)
                  }
                  placeholder="Enter Mark Scheme content"
                />
              </Paper> */}
              <Editor
      apiKey='sxjoo3xgjqdbipeju9chepopxxf7467it66w6puv0sv5ysse'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown tiny_mce_wiris',
        toolbar: 'undo redo | blocks fontfamily fontsize | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        external_plugins: {
          'tiny_mce_wiris': `asset{{('node_modules/@wiris/mathtype-tinymce5/plugin.min.js')}}`,
        },
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue=""
      placeholder="write here"
      editorState={editorState}
      onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
    />
              <div className="mt-4 cursor-pointer text-blue-600 ">
            <div className="flex flex-row justify-start items-center">
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

            <div className="flex flex-col">
              {uploadedPdf && (
                <div>
                  <Suspense fallback={<div>Loading PDF...</div>}>
                    <PdfComponent pdfFile={uploadedPdf} />
                  </Suspense>
                </div>
              )}
              {uploadedImage && (
                <div className="mt-2 mb-4">
                  <img
                    src={uploadedImage}
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
              {uploadedVideo && (
                <video
                  controls
                  src={uploadedVideo}
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
          <SubQuestion />
        </Grid>
      </Paper>
    </div>
  );
}

export default MainQuestion;
