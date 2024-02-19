import { FormControlLabel, Switch, TextField } from '@mui/material';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React from 'react';
import { XCircle } from 'react-feather';

const SubQuestion = ({
    subQuestionFiles,
    showSubQuestionSection , 
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
}) => {
  
  return (
    <div className="question-section">
     {showSubQuestionSection && (
        <div className="mt-8 mb-8">
          {subQuestions.map((subQuestion, index) => (
            <div key={index} className="sub-question">
              <h3 className="text-blue-600 mt-8">Sub Question {index + 1}</h3>
              <div className=" flex flex-row justify-between" >
              <FormControlLabel
            control={
              <Switch
                checked={subQuestion.enableCriteria}
                onChange={(e) => handleCriteriaSwitchChange(e, index)}
              />
            }
            label="Enable Criteria"
          />
   
          {subQuestion.enableCriteria && (
            {/* <FormGroup className="flex flex-row justify-between">
              <FormControlLabel control={<Checkbox name="A" onChange={(e) => handleCheckboxChange(e, index)} />} label="A" />
              <FormControlLabel control={<Checkbox name="B" onChange={(e) => handleCheckboxChange(e, index)} />} label="B" />
              <FormControlLabel control={<Checkbox name="C" onChange={(e) => handleCheckboxChange(e, index)} />} label="C" />
              <FormControlLabel control={<Checkbox name="D" onChange={(e) => handleCheckboxChange(e, index)} />} label="D" />
            </FormGroup> */}
          )}
          <FormControlLabel
            control={
              <Switch
                checked={subQuestion.enableMarks}
                onChange={(e) => handleMarksSwitchChange(e, index)}
              />
            }
            label="Enable Marks"
          />
          {subQuestion.enableMarks && (
            <TextField
              type="number"
              label="Marks"
              value={subQuestion.marks}
              sx={{width: "80px", height:'40px', marginTop:'10px'}}
              onChange={(e) => handleMarksChange(e, index)}
            />
          )}
          </div>
         <div className="border border-gray-500 bg-white mt-3">
              <Editor
                editorState={subQuestion.editorState}
                onEditorStateChange={(newEditorState) =>
                  handleSubQuestionEditorChange(newEditorState, index)
                }
                placeholder="Enter subquestion content"
              />
              </div>
           
 <div>
   
 <input type="file" onChange={(e) => handleSubQuestionFileUpload(e.target.files[0], index)} />

     
      
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
      <input type="file" onChange={(e) => handleSubQuestionFileUpload(e.target.files[0], index)} />
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
  <input type="file" onChange={(e) => handleSubQuestionFileUpload(e.target.files[0], index)} />
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
    <div className="flex justify-content-end text-red-500 text-xxl">
     <XCircle sx={{height:'40px',width:'40px'}} onClick={() => handleRemoveSubQuestion(index)}></XCircle>
     </div>
            </div>
          ))}
       
        </div>
      )}
    </div>
  );
};




export default SubQuestion