import React, { Fragment, useState } from 'react'
// import 'antd/dist/antd.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './CreateQuestion.css'
import { Checkbox, Button, Select, Input } from 'antd';

const { Option } = Select;
const CreateQuestion = () => {
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(false);
  const [contentOpen, setContentOpen] = useState(true);
  const [includeExplanation, setIncludeExplanation] = useState(true);
  const [includeMarkscheme, setIncludeMarkscheme] = useState(true);
  const [selectedStrands, setSelectedStrands] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const[teacherEditor,setTeacherEditor]=useState(false)
    const [studentEditor,setStudentEditor]=useState(false)
    const [isChecked, setIsChecked] = useState(false);

   const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
   }

   const toggleHandle=()=>{
    setTeacherEditor(!teacherEditor)
   }
   const toggleHandleStudent=()=>{
    setStudentEditor(!studentEditor)
   }
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleEditClick = () => {
    setEditing(!editing);
  };
  const handleContentClick = () => {
    setContentOpen(!contentOpen);
  };
  const checkboxes = [
    { label: 'A', checked: true },
    { label: 'B', checked: false },
    { label: 'C', checked: true },
    { label: 'D', checked: false },
  ];
 

  
    
  
    const handleExplanationToggle = () => {
      setIncludeExplanation(!includeExplanation);
    };
  
    const handleMarkschemeToggle = () => {
      setIncludeMarkscheme(!includeMarkscheme);
    };
  
    const handleStrandsChange = (value) => {
      setSelectedStrands(value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
    };
  
    const handleCancel = () => {
    };
  const handleChange = (value) => {
    setContent(value);
  };
  return (
    <Fragment>
    {/* <div className="ant-row css-14mf4t4 mt-24">
    <div className="ant-col ant-col-24 css-14mf4t4 card"> */}
      <div className="ant-row css-14mf4t4 ml-[400px]">
        <div className="segment-list-droppable nesting-level-1 p-20 p-b-400  ">
          <h3 id="topic-4505557" style={{ paddingLeft: '20px' }}>
            <div className="undefined show-html">Questions</div>
          </h3>
          <li className="ant-list-item" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
          {/* {contentOpen ?    <button type="button" className=" ml-[-25%] ant-btn css-14mf4t4 ant-btn-circle ant-btn-primary ant-btn-lg ant-btn-icon-only ant-btn-icon-m-t-4 bg-[#262525]" onClick={handleContentClick}>
              <span className="ant-btn-icon ">
                <span role="img" aria-label="plus" className="anticon anticon-plus ">Add 
                  {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                  </svg> */}
                  {/* </span>
                  </span> 
                  
            </button>:<span>cancel</span> }
            
            {contentOpen && (
            <QuestionDescreption/>
            )} */} 
          </li>
          <li id="item-4591998" className="ant-list-item segment-list-item" style={{ display: 'inline-block' }}>
            <div className="segment-draggable" data-rbd-draggable-context-id="1" data-rbd-draggable-id="draggable-4591998">
              <div className="ant-card ant-card-bordered ant-card-type-inner css-14mf4t4">
                <div className="ant-card-head">
                  <div className="ant-card-head-wrapper">
                    <div className="ant-card-extra"   style={{ paddingLeft: '480px' }} >
                    <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle ant-btn-text ant-btn-icon-only"  onClick={handleEditClick}>
                    
    
                      
                    <span className="ant-btn-icon ">
                        
                          <span role="img" aria-label="edit" className="anticon anticon-edit">
                          {editing ? 
                          <svg viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                            </svg>: <svg viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                            </svg>}
                          </span>

                        </span>
                      
                      </button>
                      
                      <button type="button" className="ant-btn css-14mf4t4 ant-btn-text ant-btn-icon-only">
                        <span className="ant-btn-icon">
                          <span role="img" aria-label="copy" className="anticon anticon-copy">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle ant-btn-text ant-btn-icon-only">
                        <span className="ant-btn-icon">
                          <span role="img" aria-label="delete" className="anticon anticon-delete">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                              <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {editing && (
                
   
                  <div>
  <li className="ant-list-item" style={{ listStyle: 'none' }}>
  <div className="ant-card ant-card-bordered ant-card-type-inner css-14mf4t4 flex-flex-row justify-between">
    <div className="ant-card-head border justify-between ">
      <div className="ant-card-head-wrapper">
        <div className="ant-card-extra  " ></div>
      <div className="ant-select-selector">
        <span className="ant-select-selection-search"> 
          <input type="search" id="segments_1_question_segment_attributes_question_type" autoComplete="off" className="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="segments_1_question_segment_attributes_question_type_list" aria-autocomplete="list" aria-controls="segments_1_question_segment_attributes_question_type_list" />
        </span>
        <select className="ant-select-selection-item form-select1   mb-4 taxt-black" title="Long answer" value={selectedValue} onChange={handleSelectChange}>
        {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
          </svg> */}
        <option value="option1">Long answer</option>
        <option value="option2">Long answer</option>
        <option value="option3">Option 3</option>
        <option value="option1">Long answer</option>
        <option value="option2">Long answer</option>
        <option value="option3">Option 3</option></select>
      </div>
      <span className="ant-select-arrow" aria-hidden="true">
        <span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
         
        </span>
      </span>
    <div className="ant-form-item-control-input ml-24">
          <div className="ant-form-item-control-input-content"> 
            <div className="ant-space css-14mf4t4 ant-space-horizontal ant-space-align-center" style={{ gap: '5px' }}>
            <Checkbox.Group defaultValue={['A']}>
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="B">B</Checkbox>
          <Checkbox value="C">C</Checkbox>
          <Checkbox value="D">D</Checkbox>
        </Checkbox.Group>

        
               
            </div>

           </div>
      <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle ant-btn-default 
        ant-btn-icon-only ant-btn-background-ghost ant-btn-dangerous ml-24">
        <span className="ant-btn-icon">
        <span role="img" aria-label="close" className="anticon anticon-close"  onClick={handleEditClick}>
        <svg viewBox="64 64 896 896" focusable="false"
         data-icon="close" width="1em" height="1em" fill="currentColor"
          aria-hidden="true">
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></span></button>
      <div className="ant-card-body">
  <div>
    <div className="segments_mrform_wrapper">
      <div className="ant-row css-14mf4t4">
        <div id="segments_1" className="ant-form ant-form-vertical ant-form-middle css-14mf4t4">
          <div className="ant-row css-14mf4t4" style={{ marginLeft: '-12px', marginRight: '-12px' }}>
            <div className="ant-col ant-col-24 css-14mf4t4" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
              <div className="ant-form-item hidden css-14mf4t4">
                <div className="ant-row ant-form-item-row css-14mf4t4">
                  <div className="ant-col ant-form-item-control css-14mf4t4">
                    <div className="ant-form-item-control-input">
                      <div className="ant-form-item-control-input-content">
                        <div className="ant-radio-group ant-radio-group-outline ant-radio-group-middle css-14mf4t4" id="segments_1_segment_type">
                        
                          <label className="ant-radio-wrapper">
                            <span className="ant-radio">
                              <input type="radio" className="ant-radio-input" value="radio1" />
                              <span className="ant-radio-inner"></span>
                            </span>
                            <span>Option 1</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
 
</li>

<div className="ant-col ant-form-item-label css-14mf4t4 tag">
  <label for="segments_1_question_segment_attributes_content"
   className="ml-12" title="Question content">Question content</label></div>
<div className='ml-88'>
<div className="ant-col ant-form-item-control css-14mf4t4">
<div className="ant-form-item-control-input">
<div className="ant-form-item-control-input-content">
<div className="sc-ckVGcZ jvIYYi">
<div className="sc-jKJlTe hHLXRu">
<div className="sc-gPEVay cAGkIj">
<div className="sc-kEYyzF cmwoAr multiline-input-area custom-error">
{/* <div className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
 lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor, main" 
 contenteditable="true">
 <p data-placeholder="Write here" className="ck-placeholder">
 <br data-cke-filler="true"/> */}
 {/* </p> */}
 <ReactQuill value={content} onChange={handleChange} style={{ width:"630px",marginLeft:'40px' }}/>
 {/* </div> */}

 
 
 <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle ant-btn-text ml-[90%]">
 <span role="img" aria-label="link" className="anticon anticon-link">
 <svg viewBox="64 64 896 896" focusable="false" data-icon="link" 
 width="1em" height="1em" fill="currentColor" aria-hidden="true">
 <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6
  59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2
   0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0
    306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574
     665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000
      11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204
       0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 
       8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 
       0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path></svg></span></button></div></div><div className="ant-row css-14mf4t4">
       <div className="ant-col ant-col-24 css-14mf4t4">

       </div>
       </div>
       <div className="ant-row css-14mf4t4">
       <div className="ant-col ant-col-24 css-14mf4t4">
       <div className="error-message">

</div>
       </div></div></div></div></div></div></div>
       {teacherEditor &&(
        <div>
       <div className='tag mb-4 ml-12'><span className='tag ' >Teacher explanation</span>
       <span className='ml-8 bg-gray-100 border-border-white tag'>Visible to students after grading</span></div>
       <ReactQuill value={content} onChange={handleChange} style={{ width:"630px",marginLeft:'40px' }}/>
       </div>
       )}

       {studentEditor &&(
        <div>
       <div style={{gap: "8px",marginTop:"20px",marginLeft:'40px'}}><span className='tag mb-8'>Markscheme</span><span className='ml-8 mb-8 bg-gray-100 tag'>Only visible to teachers</span></div>
       <ReactQuill value={content} onChange={handleChange} style={{ width:"630px",marginLeft:'40px' }}/>
</div>
                )}

<div className='flex flex-row mt-16 gap-16 tag '>
      <div className=' flex flex-col justify-start gap-4 w-36 tag ml-12'>
        <label htmlFor="segments_1_settings_include_explanation" className="cursor-pointer tag" title="Include teacher explanation">
          Include teacher explanation
        </label>
        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            id="segments_1_settings_include_explanation"
            onClick={toggleHandle}
            // checked={includeExplanation}
            // onChange={() => setIncludeExplanation(!includeExplanation)}
            className="toggle-checkbox absolute block w-6 h-6 rounded-full   border-4 appearance-none cursor-pointer"
          />
          <label htmlFor="segments_1_settings_include_explanation" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#002B4F] cursor-pointer"></label>
        </div>
      </div>

      <div className='flex flex-col justify-start gap-4 w-28 tag'>
        <label htmlFor="segments_1_settings_include_markscheme" className="cursor-pointer" title="Include markscheme">
          Include markscheme
        </label>
        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
        <input
        type="checkbox"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"
        onClick={toggleHandleStudent}
      />
            {/* className="toggle-checkbox absolute block w-6 h-6 rounded-full  border-4 appearance-none cursor-pointer"
          /> */}
          <label htmlFor="segments_1_settings_include_markscheme" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#002B4F]  cursor-pointer"></label>
        </div>
      </div>
    </div>
 {/* <div className="w-[80%] text-gray-900, text-100 ml-12"> */}
 <select className=" border border-gray-300  w-[80%] form-select3 ml-12 mt-12 mr-12">
        <option value="option1"> strands</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
        
      {/* </div/> */}
         
     
   
        <Button type="primary" htmlType="submit " className=' mr-4 mt-16 ml-12'>
          Save
        </Button>
        <Button type="default" onClick={handleCancel} className='ml-88 mt-16 '>
          Cancel
        </Button>
</div>
 </div>
 
      )}
      {/* */}
              
     <div className="ant-card-body">
                  <span>
                    <div className="ant-row false css-14mf4t4 mt-24">
                      <div className="ant-col ant-col-24 segment-item image-zoom-enabled css-14mf4t4">
                        <div className="ant-row segment-item-inner css-14mf4t4">
                          <div className="ant-col ant-col-24 segment-content undefined false css-14mf4t4">
                            <div className="ant-row css-14mf4t4 ">
                              <div className="ant-col ant-col-1 css-14mf4t4" style={{ minWidth: '50px' }}>
                                <span className="question-number ">Q 1.1</span>
                              </div>
                              <div className="ant-col ant-col-20 css-14mf4t4">
                                <span className="question-text ">
                                  <div className="undefined show-html">
                                    <p>
                                      <span className="math-input" equation="\sqrt{2}" pamojamaths="false">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="3.061ex" height="2.398ex" role="img" focusable="false" viewBox="0 -960.5 1353 1060"> */}
                                          <g stroke="currentColor" fill="currentColor" strokeWidth="0" transform="matrix(1 0 0 -1 0 0)">
                                            <g data-mml-node="math">
                                              <g data-mml-node="msqrt">
                                                <g transform="translate(853, 0)">
                                                  <g data-mml-node="mn">
                                                    <use xlinkHref="#MJX-TEX-N-32"></use>
                                                  </g>
                                                </g>
                                                <g data-mml-node="mo" transform="translate(0, 100.5)">
                                                  <use xlinkHref="#MJX-TEX-N-221A"></use>
                                                </g>
                                                <rect width="500" height="60" x="853" y="840.5"></rect>
                                              </g>
                                            </g>
                                          </g>
                                        {/* </svg> */}
                                      </span>
                                    </p>
                                  </div>
                                </span>
                              </div>
                              <div className="ant-col ant-col-2 css-14mf4t4" style={{ textAlign: 'right', minWidth: '33px' }}>
                                <span className="ant-tag css-14mf4t4"> </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </li>
          {/* <li className="ant-list-item " style={{ width: '100%', display: 'block', textAlign: 'center'}}>
            <button type="button" className="ml-[-25%] bg-[#262525] ant-btn css-14mf4t4 ant-btn-circle ant-btn-primary ant-btn-lg ant-btn-icon-only ant-btn-icon-m-t-4 ant-tooltip-open">
              <span className="ant-btn-icon">
                <span role="img" aria-label="plus" className="anticon anticon-plus">Add
                  {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                  </svg> */}
                {/* </span>
              </span>
            </button>
          </li> */} 
        </div>
      </div>
   
  </Fragment>
  );
};

export default CreateQuestion