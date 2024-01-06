import React, { useState } from 'react';
import './SweetAlert.css'



// The main component
const SweetAlert = () => {
  const [minimized, setMinimized] = useState(false);

  const toggleDashboard = () => {
    setMinimized(!minimized);
  };
  return (
  <div>
    <div className={`dashboard ${minimized ? 'minimized' : ''}`}>
      <div className="toggle-btn" onClick={toggleDashboard}>
        &#9654;
      </div>
      <div className="avatar"></div>
      <div className="content">
        {/* Dashboard content goes here */}
        <p>Dashboard Content</p>
      </div>
    </div>
    {/* <div data-rbd-droppable-id="droppable-segments" data-rbd-droppable-context-id="3"
     className="segment-list-droppable nesting-level-1 p-20 p-b-400">
     <h3 id="topic-4505557" style="padding-left: 20px;">
     <div className="undefined show-html">Section 1</div></h3>
     <li className="ant-list-item"
      style="width: 100%; display: block; text-align: center;">
      <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle ant-btn-primary 
      ant-btn-lg ant-btn-icon-only ant-btn-icon-m-t-4"><span className="ant-btn-icon">
      <span role="img" aria-label="plus" className="anticon anticon-plus">
      <svg viewBox="64 64 896 896" focusable="false" data-icon="plus"
       width="1em" height="1em" fill="currentColor" aria-hidden="true">
       <defs>
       </defs>
      
       <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z">
       </path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z">
       </path></svg></span></span></button>
       </li>
       <li className="ant-list-item" style="list-style: none;">
       <div className="ant-card ant-card-bordered ant-card-type-inner css-14mf4t4">
       <div className="ant-card-head"><div className="ant-card-head-wrapper">
       <div className="ant-card-extra">
       <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle
       ant-btn-default ant-btn-icon-only ant-btn-background-ghost ant-btn-dangerous">
       <span className="ant-btn-icon"><span role="img" aria-label="close"
        className="anticon anticon-close"><svg viewBox="64 64 896 896"
         focusable="false" data-icon="close" width="1em" height="1em"
          fill="currentColor" aria-hidden="true">
          <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">

          </path>
          </svg></span>
          </span>
          </button>
          </div>
          </div>
          </div>
          <div className="ant-card-body">
          <div>
          <div className="segments_mrform_wrapper">
          <div className="ant-row css-14mf4t4">
          <div id="segments_1" className="ant-form ant-form-vertical ant-form-middle css-14mf4t4">
          <div className="ant-row css-14mf4t4" style="margin-left: -12px; margin-right: -12px;">
          <div className="ant-col ant-col-24 css-14mf4t4" style="padding-left: 12px;
           padding-right: 12px;"><div className="ant-form-item hidden css-14mf4t4">
           <div className="ant-row ant-form-item-row css-14mf4t4">
           <div className="ant-col ant-form-item-control css-14mf4t4">
           <div className="ant-form-item-control-input">
           <div className="ant-form-item-control-input-content">
           <div className="ant-radio-group ant-radio-group-outline 
           ant-radio-group-middle css-14mf4t4" id="segments_1_segment_type">

           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
           <div className="ant-col ant-col-16 wrap-segment-form-points css-14mf4t4"
            style="padding-left: 12px; padding-right: 12px;">
            <div className="ant-row css-14mf4t4"
             style="margin-left: -12px; margin-right: -12px;">
             <div className="ant-col ant-col-24 css-14mf4t4"
              style="padding-left: 12px; padding-right: 12px;">
              <div className="ant-form-item css-14mf4t4 ant-form-item-has-success">
              <div className="ant-row ant-form-item-row css-14mf4t4">
              <div className="ant-col ant-form-item-control css-14mf4t4">
              <div className="ant-form-item-control-input">
              <div className="ant-form-item-control-input-content">
              <div className="ant-space css-14mf4t4 ant-space-horizontal ant-space-align-center"
               style="gap: 5px;">
               <div className="ant-space-item">
               <label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked 
               ant-checkbox-wrapper-in-form-item rubric-points-input css-14mf4t4">
               <span className="ant-checkbox css-14mf4t4 ant-checkbox-checked">
    <input className="ant-checkbox-input" type="checkbox" checked=""></input>
    <span className="ant-checkbox-inner">
    </span>
    </span>
    <span>A</span>
    </label>
    </div>
    <div className="ant-space-item">
    <label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked
     ant-checkbox-wrapper-in-form-item rubric-points-input css-14mf4t4">
     <span className="ant-checkbox css-14mf4t4 ant-checkbox-checked">
     <input className="ant-checkbox-input" type="checkbox"></input>
     <span className="ant-checkbox-inner">
     </span></span><span>B</span></label>
     </div>
     <div className="ant-space-item">
     <label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked 
     ant-checkbox-wrapper-in-form-item rubric-points-input css-14mf4t4">
     <span className="ant-checkbox css-14mf4t4 ant-checkbox-checked">
     <input className="ant-checkbox-input" type="checkbox">
     </input>
     <span className="ant-checkbox-inner">
     </span></span><span>C</span></label></div>
     <div className="ant-space-item">
     <label className="ant-checkbox-wrapper ant-checkbox-wrapper-checked 
     ant-checkbox-wrapper-in-form-item rubric-points-input css-14mf4t4">
     <span className="ant-checkbox css-14mf4t4 ant-checkbox-checked">
     <input className="ant-checkbox-input" type="checkbox">
     </input>
     <span className="ant-checkbox-inner">
     </span></span><span>D</span>
     </label></div></div></div></div></div></div></div></div></div></div>
     <div className="ant-col ant-col-24 css-14mf4t4" 
     style="padding-left: 12px; padding-right: 12px;">
     <div className="ant-row css-14mf4t4" 
     style="margin-left: -12px; margin-right: -12px;">
     </div></div>
     <div className="ant-col ant-col-24 css-14mf4t4" 
     style="padding-left: 12px; padding-right: 12px;">
     <div className="ant-row css-14mf4t4" 
     style="margin-left: -12px; margin-right: -12px;">
     </div></div>
     <div className="ant-col ant-col-24 css-14mf4t4" 
     style="padding-left: 12px; padding-right: 12px;">
     <div className="ant-row css-14mf4t4" 
     style="margin-left: -12px; margin-right: -12px;">
     </div></div>
     <div className="ant-col ant-col-24 css-14mf4t4" 
     style="padding-left: 12px; padding-right: 12px;">
     <div className="ant-row css-14mf4t4" 
     style="margin-left: -12px; margin-right: -12px;">
     <div className="ant-col ant-col-8 wrap-question-form-question-type-dropdown css-14mf4t4" style="padding-left: 12px; padding-right: 12px;">
     <div className="ant-form-item form-item-question-form-question-type-dropdown css-14mf4t4">
     <div className="ant-row ant-form-item-row css-14mf4t4">
     <div className="ant-col ant-form-item-control css-14mf4t4">
     <div className="ant-form-item-control-input">
     <div className="ant-form-item-control-input-content">
     <div className="ant-select ant-select-in-form-item widget-question-form-question-type-dropdown 
     css-14mf4t4 ant-select-single ant-select-show-arrow" forminstance="[object Object]">
     <div className="ant-select-selector"><span className="ant-select-selection-search">
     <input type="search" id="segments_1_question_segment_attributes_question_type" 
     autocomplete="off" className="ant-select-selection-search-input" role="combobox"
      aria-expanded="false" aria-haspopup="listbox" 
      aria-owns="segments_1_question_segment_attributes_question_type_list" 
      aria-autocomplete="list" 
      aria-controls="segments_1_question_segment_attributes_question_type_list"
       aria-activedescendant="segments_1_question_segment_attributes_question_type_list_4"
        readonly="" unselectable="on" value="" style="opacity: 0;">

        </input></span>
        <span className="ant-select-selection-item" title="Long answer">Long answer</span>
        </div>
        <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix"><svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
     </path>
     </svg>
     </span>
     </span>
     </div>
     </div></div></div></div></div></div>
   <div className="ant-col ant-form-item-control css-14mf4t4">
       <div className="ant-form-item-control-input">
       <div className="ant-form-item-control-input-content">
       <div className="sc-ckVGcZ jvIYYi"><div className="sc-jKJlTe hHLXRu">
       <div className="sc-gPEVay cAGkIj">
       <div className="ant-col ant-col-8 wrap-question-form-game-type-dropdown 
     css-14mf4t4" style="padding-left: 12px; padding-right: 12px;">
     <div className="ant-row css-14mf4t4" style="margin-left: -12px;
      margin-right: -12px;"></div></div><div className="ant-col ant-col-24 css-14mf4t4"
       style="padding-left: 12px; padding-right: 12px;">
       <div className="ant-row css-14mf4t4" 
       style="margin-left: -12px; margin-right: -12px;">
       <div className="ant-col ant-col-24 css-14mf4t4" 
       style="padding-left: 12px; padding-right: 12px;">
       <div className="ant-form-item css-14mf4t4 ant-form-item-has-success">
       <div className="ant-row ant-form-item-row css-14mf4t4">
       <div className="ant-col ant-form-item-label css-14mf4t4">
       <label for="segments_1_question_segment_attributes_content"
       className="" title="Question content">Question content</label>
       </div>
       <div cassName="sc-kEYyzF cmwoAr multiline-input-area">
       <div className="ck ck-content ck-editor__editable ck-rounded-corners 
       ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox" 
       aria-label="Rich Text Editor, main" contenteditable="true">
       <p data-placeholder="Write here">
       <div className="math-input ck-widget" 
       style="display:inline-block;user-select:none;"
       equation="\sqrt{2}" pamojamaths="false" contenteditable="false">
       <div>
       <mjx-container className="MathJax CtxtMenu_Attached_0"
       jax="SVG" display="true" role="presentation" tabindex="0"
        ctxtmenu_counter="15" style="font-size: 120%; position: relative;">
        <svg xmlns="http://www.w3.org/2000/svg" width="3.673ex" height="2.878ex" 
        role="img" focusable="false" viewBox="0 -1209.9 1623.6 1272"
         xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" 
         style="vertical-align: -0.14ex;"><g stroke="currentColor"
          fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)">
          <g data-mml-node="math"><g data-mml-node="mstyle" transform="scale(1.2)">
          <g data-mml-node="msqrt"><g transform="translate(853, 0)">
          <g data-mml-node="mn"><use xlink:href="#MJX-TEX-N-32">
          </use></g></g><g data-mml-node="mo" transform="translate(0, 136.3)">
          <use xlink:href="#MJX-TEX-N-221A"></use>
          </g><rect width="500" height="72" x="853" y="864.3">
          </rect></g></g></g></g></svg>
          <mjx-assistive-mml role="presentation" unselectable="on" display="block">
          <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
          <mstyle mathsize="1.2em"><msqrt><mn>2</mn></msqrt></mstyle></math>
          </mjx-assistive-mml></mjx-container></div></div>+2</p></div>
          <div className="error-message">
          </div></div>
          <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle 
          ant-btn-text"><span role="img" aria-label="link" className="anticon anticon-link">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="link" 
          width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z">
          </path>
          </svg>
          </span>
          </button>
          </div>
          </div>
          <div className="ant-row css-14mf4t4">
          <div className="ant-col ant-col-24 css-14mf4t4">
          </div></div><div className="ant-row css-14mf4t4">
          <div className="ant-col ant-col-24 css-14mf4t4">
          </div></div></div></div></div></div></div></div></div></div></div>
          <div className="ant-col ant-col-24 css-14mf4t4" style="padding-left: 12px; 
          padding-right: 12px;"><div className="ant-row css-14mf4t4" style="margin-left: -12px;
           margin-right: -12px;"></div></div>
           <div className="ant-col ant-col-24 css-14mf4t4" 
           style="padding-left: 12px; padding-right: 12px;">
           <div className="ant-row css-14mf4t4"
            style="margin-left: -12px; margin-right: -12px;">
            <div className="ant-col ant-col-24 css-14mf4t4" 
            style="padding-left: 12px; padding-right: 12px;">
            <div className="ant-form-item css-14mf4t4 
            ant-form-item-has-success">
            <div className="ant-row ant-form-item-row css-14mf4t4">
            <div className="ant-col ant-form-item-label css-14mf4t4">
            <label for="segments_1_question_segment_attributes_answer_explanation"
             className="" title="">
             <div className="ant-space css-14mf4t4 ant-space-horizontal ant-space-align-center"
              style="gap: 8px;">
              <div className="ant-space-item" style="">
              <span>Teacher explanation</span></div>
              <div className="ant-space-item">
              <span className="ant-tag css-14mf4t4">Visible to students after grading</span>
              </div></div></label></div>
              <div className="ant-col ant-form-item-control css-14mf4t4">
              <div className="ant-form-item-control-input">
              <div className="ant-form-item-control-input-content">
              <div className="ant-row css-14mf4t4">
              <div className="ant-col ant-col-24 css-14mf4t4">
              <div className="sc-kEYyzF cmwoAr multiline-input-area custom-error">
              <div className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners 
              ck-editor__editable_inline" lang="en" dir="ltr" role="textbox" 
              aria-label="Rich Text Editor, main" contenteditable="true">
              <p className="ck-placeholder" data-placeholder="Write here">
              <br data-cke-filler="true"/>
              </p></div>
              <div className="error-message">
              </div></div></div></div></div></div></div></div></div></div></div></div>
              <div className="ant-col ant-col-24 css-14mf4t4" style="padding-left: 12px; 
              padding-right: 12px;"><div className="ant-row css-14mf4t4" 
              style="margin-left: -12px; margin-right: -12px;">
              <div className="ant-col ant-col-24 css-14mf4t4" 
              style="padding-left: 12px; padding-right: 12px;">
              <div className="ant-form-item css-14mf4t4 ant-form-item-has-success">
              <div className="ant-row ant-form-item-row css-14mf4t4">
              <div className="ant-col ant-form-item-label css-14mf4t4">
              <label for="segments_1_question_segment_attributes_markscheme" 
              className="" title=""><div className="ant-space css-14mf4t4 ant-space-horizontal 
              ant-space-align-center" style="gap: 8px;"><div className="ant-space-item" style="">
              <span>Markscheme</span></div><div className="ant-space-item">
              <span className="ant-tag css-14mf4t4">Only visible to teachers</span>
              </div></div></label></div>
              <div className="ant-col ant-form-item-control css-14mf4t4">
              <div className="ant-form-item-control-input">
              <div className="ant-form-item-control-input-content">
              <div className="sc-kEYyzF cmwoAr multiline-input-area custom-error">
              <div className="ck ck-content ck-editor__editable ck-rounded-corners
               ck-editor__editable_inline ck-blurred" lang="en" dir="ltr" role="textbox"
               aria-label="Rich Text Editor, main" contenteditable="true">
               <p className="ck-placeholder" data-placeholder="Write here">
               <br data-cke-filler="true"/>
               </p></div>
               <div className="error-message">
               </div></div></div></div></div></div></div></div></div></div></div></div>
               <div className="ant-col ant-col-24 hidden css-14mf4t4"
                style="padding-left: 12px; padding-right: 12px;">
                <div className="ant-row css-14mf4t4" 
                style="margin-left: -12px; margin-right: -12px;">
                <div className="ant-col ant-col-18 css-14mf4t4" 
                style="padding-left: 12px; padding-right: 12px;">
                <div className="ant-form-item css-14mf4t4">
                <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-label css-14mf4t4">
                <label for="segments_1_title" className="" title="Title/Name">Title/Name</label>
                </div><div className="ant-col ant-form-item-control css-14mf4t4">
                <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                <input placeholder="Title/Name" id="segments_1_title" 
                className="ant-input css-14mf4t4" type="text" value="">

                </input>
                </div></div></div></div></div></div></div></div>
                <div className="ant-col ant-col-24 css-14mf4t4" 
                style="padding-left: 12px; padding-right: 12px;">
                <div className="ant-row css-14mf4t4" 
                style="margin-left: -12px; margin-right: -12px;">
                <div className="ant-col ant-col-6 text-left css-14mf4t4" 
                style="padding-left: 12px; padding-right: 12px;">
                <div className="ant-form-item css-14mf4t4 ant-form-item-has-success">
                <div className="ant-row ant-form-item-row css-14mf4t4">
                <div className="ant-col ant-form-item-label css-14mf4t4">
                <label for="segments_1_settings_include_explanation"
                 className="" title="Include teacher explanation">Include teacher explanation</label>
                 </div>
                 <div className="ant-col ant-form-item-control css-14mf4t4">
                 <div className="ant-form-item-control-input">
                 <div className="ant-form-item-control-input-content">
                 <button placeholder="Include teacher explanation" 
                 forminstance="[object Object]" id="segments_1_settings_include_explanation" type="button" role="switch" aria-checked="true" className="ant-switch ant-switch-small css-14mf4t4 ant-switch-checked"><div className="ant-switch-handle">
                 </div>
                 <span className="ant-switch-inner">
                 <span className="ant-switch-inner-checked">
                 </span>
                 <span className="ant-switch-inner-unchecked">

                 </span></span></button></div></div></div></div></div></div>
                 <div className="ant-col ant-col-6 text-left css-14mf4t4" 
                 style="padding-left: 12px; padding-right: 12px;">
                 <div className="ant-form-item css-14mf4t4 ant-form-item-has-success">
                 <div className="ant-row ant-form-item-row css-14mf4t4">
                 <div className="ant-col ant-form-item-label css-14mf4t4">
                 <label for="segments_1_settings_include_markscheme"
                  className="" title="Include markscheme">Include markscheme</label>
                  </div>
                  <div className="ant-col ant-form-item-control css-14mf4t4">
                  <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                  <button placeholder="Include markscheme" forminstance="[object Object]" 
                  id="segments_1_settings_include_markscheme" type="button" role="switch" 
                  aria-checked="true" className="ant-switch ant-switch-small css-14mf4t4
                   ant-switch-checked">
                   <div className="ant-switch-handle">
                   </div>
                   <span className="ant-switch-inner">
                   <span className="ant-switch-inner-checked">
                   </span>
                   <span className="ant-switch-inner-unchecked">
                   </span>
                   </span>
                   </button>
                   </div>
                   </div></div></div></div></div>
                   <div className="ant-col ant-col-6 css-14mf4t4" 
                   style="padding-left: 12px; padding-right: 12px;">
                   <div className="ant-row css-14mf4t4" 
                   style="margin-left: -12px; margin-right: -12px;">
                   </div></div></div></div>
                   <div className="ant-col ant-col-24 css-14mf4t4"
                    style="padding-left: 12px; padding-right: 12px;">
                    <div className="ant-row css-14mf4t4" 
                    style="margin-left: -12px; margin-right: -12px;">
                    <div className="ant-col ant-col-24 text-left css-14mf4t4" 
                    style="padding-left: 12px; padding-right: 12px;">
                    <div className="ant-form-item css-14mf4t4">
                    <div className="ant-row ant-form-item-row css-14mf4t4">
                    <div className="ant-col ant-form-item-label css-14mf4t4">
                    <label for="segments_1_strands" className="" title="Strands">Strands</label>
                    </div><div className="ant-col ant-form-item-control css-14mf4t4">
                    <div className="ant-form-item-control-input">
                    <div className="ant-form-item-control-input-content">
                    <div className="ant-select ant-select-in-form-item css-14mf4t4 
                    ant-select-multiple ant-select-show-arrow ant-select-show-search" 
                    style="width: 500px;"><div className="ant-select-selector">
                    <div className="ant-select-selection-overflow">
                    <div className="ant-select-selection-overflow-item 
                    ant-select-selection-overflow-item-suffix" style="opacity: 1;">
                    <div className="ant-select-selection-search" style="width: 4px;">
                    <input type="search" autocomplete="off" 
                    className="ant-select-selection-search-input" role="combobox" 
                    aria-expanded="false" aria-haspopup="listbox" aria-owns="rc_select_19_list" 
                    aria-autocomplete="list" aria-controls="rc_select_19_list" 
                    aria-activedescendant="rc_select_19_list_4" value="" id="rc_select_19"
                     style="opacity: 0;" readonly="" unselectable="on">

                     </input>
                     <span className="ant-select-selection-search-mirror"
                      aria-hidden="true">&nbsp;</span>
                      </div></div></div>
                      <span className="ant-select-selection-placeholder">Select strands</span>
                      </div><span className="ant-select-arrow" unselectable="on" aria-hidden="true"
                       style="user-select: none;">
                       <span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
                       <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em"
                        height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">

                        </path></svg></span></span></div></div></div></div></div></div></div></div></div></div>
                        <div className="ant-form-item css-14mf4t4">
                        <div className="ant-row ant-form-item-row css-14mf4t4">
                        <div className="ant-col ant-form-item-control css-14mf4t4">
                        <div className="ant-form-item-control-input">
                        <div className="ant-form-item-control-input-content">
                        <div className="auto-save-state"></div>
                        <div className="ant-space css-14mf4t4 ant-space-horizontal ant-space-align-center"
                         style="gap: 8px;"><div className="ant-space-item" style="">
                         <button type="submit" className="ant-btn css-14mf4t4 ant-btn-primary">
                         <span>Save</span></button></div><div className="ant-space-item">
                         <button type="button" className="ant-btn css-14mf4t4 ant-btn-default">
                         <span>Cancel</span></button></div></div></div></div></div></div></div>
                         </form></div></div></div></div></div></li>
                         <li className="ant-list-item" style="width: 100%; display: block; text-align: center;">
                         <button type="button" className="ant-btn css-14mf4t4 ant-btn-circle 
                         ant-btn-primary ant-btn-lg ant-btn-icon-only ant-btn-icon-m-t-4 ant-tooltip-open">
                         <span className="ant-btn-icon"><span role="img" aria-label="plus" 
                         className="anticon anticon-plus">
                         <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                       <defs><style></style></defs>
                       <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z">

                       </path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z">

                       </path></svg></span></span></button></li></div> */}
  </div>
   
  );
};






export default SweetAlert;
