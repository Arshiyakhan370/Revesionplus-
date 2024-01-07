import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const Description = () => {
  return (
    <div className="ant-row css-14mf4t4" style={{ marginTop: '50px',marginLeft:"30%" }}>
       <h2 className='text-center mb-28'>Questions Description</h2>
    <div className="ant-list ant-list-split ant-list-grid add-segment-grid add-segment-grid-content css-14mf4t4">
      <div className="ant-spin-nested-loading css-14mf4t4">
        <div className="ant-spin-container">
          <div className="ant-row css-14mf4t4" style={{ marginLeft: '-8px', marginRight: '-8px' }}>
          
            <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
         
              <div className="ant-col css-14mf4t4" style={{ paddingLeft: '8px', paddingBottom:'8px' ,paddingRight: '8px', flex: '1 1 auto' }}>
               
                <div className="ant-list-item ">
                
                <Link to='/text' style={{textDecoration:"none"}}>  <Button type="button" className="ant-btn css-14mf4t4 ant-btn-text 
                  segment-type-button">
                   <span className="ant-btn-icon">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" 
width="2em" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 
0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z">
</path>
<path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0
 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z">
</path>
</svg>

</span>
<div> Text </div>
</Button></Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col ' style={{ width: '16.6667%', maxWidth: '16.6667%'  }}>
      <div className="ant-col css-14mf4t4" style={{ paddingLeft: '8px', paddingRight: '18px', flex: '1 1 auto' }}>
        <div className="ant-list-item ">
         <Link to='/according'> <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
            <span className="ant-btn-icon">
              <span role="img" aria-label="vertical-align-middle" className="anticon anticon-vertical-align-middle">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="vertical-align-middle" width="2em" height="2em" fill="currentColor" aria-hidden="true">
                  <path d="M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zm-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zm11.4 225.4a7.14 7.14 0 00-11.3 0L405.6 752.3a7.23 7.23 0 005.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z"></path>
                </svg>
              </span>
            </span>
            <div> Accordion </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
    <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
      <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '18px', flex: '1 1 auto' }}>
        <div className="ant-list-item">
         <Link to="/image"> <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
            <span className="ant-btn-icon">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
               viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"></path>
              </svg>
            </span>
            <div> Image </div>
          </button></Link>
        </div>
      </div>
    </div>
    <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '8px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
          <Link to='/pdf'> <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                 viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
                </svg>
              </span>
              <div> PDF </div>
            </button></Link> 
          </div>
        </div>
      </div>

      {/* Video Button */}
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '8px', paddingRight: '8px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <Link to='/vdo'><button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <span role="img" aria-label="video-camera" className="anticon anticon-video-camera">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="video-camera"
                   width="2em" height="2em" fill="currentColor" aria-hidden="true">
                    <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                  </svg>
                </span>
              </span>
              <div> Video </div>
            </button></Link>
          </div>
        </div>
      </div>
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{ paddingLeft: '18px', paddingRight: '8px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
            <Link to='/audio'><button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <span role="img" aria-label="sound" className="anticon anticon-sound">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="sound" width="2em" height="2em" fill="currentColor" aria-hidden="true">
                    <path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path>
                  </svg>
                </span>
              </span>
              <div> Audio </div>
            </button></Link>
          </div>
        </div>
      </div>
      <div style={{ width: '16.6667%', maxWidth: '16.6667%' }}>
        <div className="ant-col css-14mf4t4" style={{paddingTop:'18px', paddingLeft: '-8px', paddingRight: '18px', flex: '1 1 auto' }}>
          <div className="ant-list-item">
           <Link to='/simulation'> <button type="button" className="ant-btn css-14mf4t4 ant-btn-text segment-type-button">
              <span className="ant-btn-icon">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
                </svg>
              </span>
              <div> Simulation </div>
            </button></Link>
          </div>
        </div>
      </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Description