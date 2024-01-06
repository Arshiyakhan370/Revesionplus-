import React from 'react'
import { Link } from 'react-router-dom'

const Questions = () => {
  return (
    
        <div className="ant-row css-14mf4t4" style={{ marginTop: '250px',marginLeft:'30%' }}>
        <div className="ant-list ant-list-split ant-list-grid add-segment-grid add-segment-grid-content css-14mf4t4">
          <div className="ant-spin-nested-loading css-14mf4t4">
            <div className="ant-spin-container">
              <div className="ant-row css-14mf4t4" style={{ marginLeft: '-8px', marginRight: '-8px' }}>
              <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '8px', paddingRight: '8px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <svg stroke="currentColor" fill="none" strokeWidth="2"
                 viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                  height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </span>
              <div> Long answer </div>
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <Link to='/mcq'><button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <span role="img" aria-label="check-square" className="anticon anticon-check-square">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="check-square"
                   width="2em" height="2em" fill="currentColor" aria-hidden="true">
                    <path d="M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                  </svg>
                </span>
              </span>
              <div> MCQ </div>
            </button></Link>
          </div>
        </div>
      </div>
       
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
          <Link to='/mcq'>  <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM15 9H4.00255L4.00021 20H15V9ZM8.50242 18L4.96689 14.4645L6.3811 13.0503L8.50242 15.1716L12.7451 10.9289L14.1593 12.3431L8.50242 18Z"></path>
                </svg>
              </span>
              <div> MCQ multiple </div>
            </button></Link>
          </div>
        </div>
      </div>
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
           <Link to='/drwing'> <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <span role="img" aria-label="aim" className="anticon anticon-aim">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="aim" width="2em" height="2em" fill="currentColor" aria-hidden="true">
                    <path d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"></path>
                    <path d="M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8A118.57 118.57 0 00512 392z"></path>
                  </svg>
                </span>
              </span>
              <div> True/False </div>
            </button></Link>
          </div>
        </div>
      </div>
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                  <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z"></path>
                </svg>
              </span>
              <div> Fill Text </div>
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <span role="img" aria-label="down-circle" className="anticon anticon-down-circle">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="down-circle" width="2em" height="2em" fill="currentColor" aria-hidden="true">
                    <path d="M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"></path>
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  </svg>
                </span>
              </span>
              <div> Fill Dropdown </div>
            </button>
          </div>
        </div>
      </div>
      {/* <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{paddingTop:'18px', paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                 viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 13L22.9641 17.0622L19.9913 17.9129L22.116 21.5933L20.384 22.5933L18.2592 18.9129L16.0359 21.0622L16 13ZM14 6H16V8H21C21.5523 8 22 8.44772 22 9V13H20V10H10V20H14V22H9C8.44772 22 8 21.5523 8 21V16H6V14H8V9C8 8.44772 8.44772 8 9 8H14V6ZM4 14V16H2V14H4ZM4 10V12H2V10H4ZM4 6V8H2V6H4ZM4 2V4H2V2H4ZM8 2V4H6V2H8ZM12 2V4H10V2H12ZM16 2V4H14V2H16Z"></path>
                </svg>
              </span>
              <div> Match </div>
            </button>
          </div>
        </div>
      </div>  */}
    
         
                 </div>
              </div>
            </div>
          </div>
        </div>
      
   
  )
}

export default Questions