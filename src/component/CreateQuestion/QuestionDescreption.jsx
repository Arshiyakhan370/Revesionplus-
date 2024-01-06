import React from 'react'
import { useState } from 'react'
import Description from './Description'
import Questions from './Questions'
import Library from './Library';

const QuestionDescreption = () => {
        

  return (
    <div>
<li className="ant-list-item ml-[-13%] " style={{ width: '100%', display: 'block', textAlign: 'center' }}>
      {/* <button
        type="button"
        className="ant-btn css-14mf4t4 ant-btn-circle ant-btn-default ant-btn-lg ant-btn-icon-only ant-btn-background-ghost ant-btn-dangerous ant-btn-icon-m-t-4 ant-tooltip-open"
      >
        <span className="ant-btn-icon">
          <span role="img" aria-label="close" className="anticon anticon-close">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </span>
        </span>
      </button> */}
       {/* <div className="ant-row css-14mf4t4 " style={{ marginTop: '10px' }}> 
        <div className="ant-space css-14mf4t4 ant-space-horizontal ant-space-align-center flex flex-row" style={{ margin: '0px auto', gap: '8px' }}>
          <div className="ant-space-item">
            <button
              type="button"
              className="ant-btn css-14mf4t4 ant-btn-primary ant-btn-background-ghost"
            >
              <span role="img" aria-label="appstore-add" className="anticon anticon-appstore-add">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="appstore-add"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zm52 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V680h560v208zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </span>

              <span onClick={ClickDescriptionHandler}> Question Descreption </span>
            </button>
          </div>
          <div className="ant-space-item ">
            <button
              type="button"
              className="ant-btn css-14mf4t4 ant-btn-primary ant-btn-background-ghost"
            >
              <span role="img" aria-label="question" className="anticon anticon-question">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="question"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 00-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"></path>
                </svg>
              </span>
              <span  onClick={ClickQuestionHandler}> Questions </span>
            </button>
          </div>
          <div className="ant-space-item">
            <button
              type="button"
              className="ant-btn css-14mf4t4 ant-btn-primary ant-btn-background-ghost"
            >
              <span role="img" aria-label="database" className="anticon anticon-database">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="database"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                </svg>
              </span>
              <span onClick={ClickLibraryHandler}> Library </span>
            </button>
          </div>
        </div>
      </div> */}
    </li> 
  </div>
  )
}

export default QuestionDescreption
