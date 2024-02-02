import React, { useState } from 'react';
import { Button, Card, CardContent, Container ,Dialog,DialogContent,Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Mcq from './QuestionSub/Mcq';
import DrawingApp from './QuestionSub/Drwaing';
import Vdeo from './QuestionDescriptionSection/Vdeo';
import Audio from './QuestionDescriptionSection/Audio';
import SimulationComponent from './QuestionDescriptionSection/Simulation';

   const Questions =  () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);
    const [openModal5, setOpenModal5] = useState(false);
    const [openModal6, setOpenModal6] = useState(false);
    
  
  
    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };
  
    const handleOpenModal2 = () => {
      setOpenModal2(true);
    };
  
    const handleCloseModal2 = () => {
      setOpenModal2(false);
    };
    const handleOpenModal3 = () => {
      setOpenModal3(true);
    };
  
    const handleCloseModal3 = () => {
      setOpenModal3(false);
    };
    const handleOpenModal4 = () => {
      setOpenModal4(true);
    };
  
    const handleCloseModal4 = () => {
      setOpenModal4(false);
    }
    const handleOpenModal5 = () => {
      setOpenModal5(true);
    };
  
    const handleCloseModal5 = () => {
      setOpenModal5(false);
    }
    const handleOpenModal6 = () => {
      setOpenModal6(true);
    };
  
    const handleCloseModal6 = () => {
      setOpenModal6(false);
    }
   
 
  
  const goBack = () => {
    window.history.back();
  };
  return (
    <Container maxWidth='xxl' className='mt-4' >
   
     <Card>
          <CardContent className='text-center'>
          <Link to="/createquestion" style={{ textDecoration: 'none', margin:'10px'  }}>
              <Button
                type="button"
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg stroke="currentColor" fill="none" strokeWidth="2"
                 viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                }
              >
             Long answer
              </Button>
            </Link>
            {/* <Link to='/mcq' style={{ textDecoration: 'none', margin:'10px' }}> */}
              <Button
                type="button"
                onClick={handleOpenModal2}
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="check-square"
                   width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M433.1 657.7a31.8 31.8 0 0051.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                  </svg>
               }
              >
              MCQ
              </Button>
              <Dialog open={openModal2} onClose={handleCloseModal2} maxWidth="md">
            <DialogContent>
              <Mcq/>
            </DialogContent>
          </Dialog>
            {/* </Link> */}
            {/* <Link to='/mcq' style={{ textDecoration: 'none', margin:'10px' }}> */}
              <Button
                type="button"
                onClick={handleOpenModal2}
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM15 9H4.00255L4.00021 20H15V9ZM8.50242 18L4.96689 14.4645L6.3811 13.0503L8.50242 15.1716L12.7451 10.9289L14.1593 12.3431L8.50242 18Z"></path>
                </svg>
              }
              >
             MCQ Multiple
              </Button>
              
              <Dialog open={openModal2} onClose={handleCloseModal2} maxWidth="md">
            <DialogContent>
              <Mcq  handleCloseModal={handleCloseModal2}/>
            </DialogContent>
          </Dialog>
            {/* </Link> */}
            {/* <Link to='/drwing' style={{ textDecoration: 'none', margin:'10px' }}> */}
              <Button
                type="button"
                onClick={handleOpenModal3}
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="aim" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"></path>
                    <path d="M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8A118.57 118.57 0 00512 392z"></path>
                  </svg>
              }
              >
           Drwaing
              </Button>
              <Dialog open={openModal3} onClose={handleCloseModal3} maxWidth="md">
            <DialogContent>
              <DrawingApp  handleCloseModal={handleCloseModal3}/>
            </DialogContent>
          </Dialog>
            {/* </Link> */}
            {/* <Link to='/vdo' style={{ textDecoration: 'none', margin:'10px' }}> */}
              <Button
                type="button"
                onClick={handleOpenModal4}
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="video-camera"
                   width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM712 792H136V232h576v560zm176-167l-104-59.8V458.9L888 399v226zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                  </svg>
              }
              >
           Video
              </Button>
            {/* </Link> */}
            <Dialog open={openModal4} onClose={handleCloseModal4} maxWidth="md">
            <DialogContent>
              <Vdeo  handleCloseModal={handleCloseModal4}/>
            </DialogContent>
          </Dialog>
            {/* <Link to='/audio' style={{ textDecoration: 'none', margin:'10px' , }}> */}
              <Button
                type="button"
                onClick={handleOpenModal5}
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="sound" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"></path>
                  </svg>
              }
              >
            Audio 
              </Button>
            {/* </Link> */}
            
            <Dialog open={openModal5} onClose={handleCloseModal5} maxWidth="md">
            <DialogContent>
              <Audio  handleCloseModal={handleCloseModal5}/>
            </DialogContent>
          </Dialog>
            {/* <Link to='/simulation' style={{ textDecoration: 'none', margin:'10px' }}> */}
              <Button
                type="button"
                onClick={handleOpenModal6}
                className="segment-type-button"
                variant="text"
                startIcon={
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>
                </svg>
              }
              >
            Simulation
              </Button>
            {/* </Link> */}
           
            <Dialog open={openModal6} onClose={handleCloseModal6} maxWidth="md">
            <DialogContent>
            <SimulationComponent handleCloseModal={handleCloseModal6}/>
            </DialogContent>
          </Dialog>
          {/* <Grid item xs={12}>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
            <Button variant="outlined"  onClick={goBack} sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                  Back
                </Button>
            {/* <Button type="submit" variant="contained"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
              Save
            </Button> 
            </div>
            </Grid>  */}
            </CardContent>
            </Card>
    </Container>
  );
};
export default Questions















  
    
       
     
       
     
    
              //   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              //     <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              //     <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z"></path>
              //   </svg>
            
              // <div> Fill Text </div>
     
              //   <span role="img" aria-label="down-circle" className="anticon anticon-down-circle">
              //     <svg viewBox="64 64 896 896" focusable="false" data-icon="down-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              //       <path d="M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"></path>
              //       <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              //     </svg>
               
              // <div> Fill Dropdown </div>
            
   
    
                

