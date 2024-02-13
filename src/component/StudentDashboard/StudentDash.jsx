import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar1 from '../Dashboard Components/Buttons1';
import Nav from '../PracticeAssignment/Nav';
import NavStudent from './NavStudent';
import StudentNavSmall from './StudentNavSmall';


const StudentDash = () => {
  const imageUrls = [
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-1_New2.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-6.png',
    // 'https://ibgakiosk.com/v2/upload/teacher&student/Butten-2.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1new.png',
  ];

  const backgroundColors = ['#3468b2', '#CF9FFF', '#73abdc' , '#3468b2'];
  const buttonTexts = [
    [
      { text: ' Assignment', link: '/Student-Create-assignment' },
    ],
    [{ text: 'Practice ', link: '/practiceQuestion' }],
    [{text:' Printer' , link: 'https://www.neodynamic.com/downloads/wcpp/wcpp2.aspx', external: true }],
    // [{ text: 'My Profile', link: '/aisl' }],
    [{ text: 'Share ', link: '/aisl' }],
  ];
  const MYP = ['Prepare Assignment', 'Practice Question', 'Setup Printer',  'Share Assignment'];

  return (
    <div>
  
     <NavStudent/>
     {/* <Navbar1/> */}
     <StudentNavSmall/>
      <Container maxWidth='xxl'>
      <div><h2 className='text-center text-sky-500 mt-9 mb-2 text-lg'>Welcom to My Revesion</h2>
      <h4 className='text-center mb-16'>Aush Batra</h4></div>
        <Grid container spacing={2} styl e={{  marginTop:'5vh',paddingBottom: '12vh', paddingTop: '1vw', paddingLeft: '1vw',paddingRight:'1vw' }}>
          {imageUrls.map((imageUrl, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper style={{ ...cardStyle, backgroundColor: backgroundColors[index] }}>
                <div style={cardHeaderStyle}>
                  <img style={cardImageStyle} src={imageUrl} alt={`MYP ${index}`} />
                  <Typography variant="h6" className="text-center">
                    {MYP[index]}
                  </Typography>
                </div>
                <div style={buttonContainerStyle}>
                  {buttonTexts[index] &&
                    buttonTexts[index].map((button, buttonIndex) => (
                      <React.Fragment key={buttonIndex}>
                        {button.external ? (
                          <a href={button.link} style={{ ...buttonStyle }} target="_blank" rel="noopener noreferrer">
                            {button.text}
                          </a>
                        ) : (
                          <Link to={button.link} style={{ ...buttonStyle }}>
                            {button.text}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                </div>
                <Typography style={{ textAlign: 'center', marginTop: '10px', color: '#2377b5' }} variant="body2"></Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const cardStyle = {
  position: 'relative',
  border: '2px solid #2377b5',
  marginTop: '20px',
  marginBottom: '20px',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '20px',
  transition: '0.4s ease-in-out',
};

const cardHeaderStyle = {
  width: '100%',
  textAlign: 'left',
  fontSize: '20px',
  color: '#002b4f',
  fontWeight: 'bold',
  background: '#fff',
  borderRadius: '20px',
  paddingTop: '66px',
  boxShadow: '0px 3px 6px #00000029',
  position: 'relative',
};

const cardImageStyle = {
  position: 'absolute',
  left: '22%',
  top: '-40px',
  width: 'auto',
  height: '100px',
  background: '#002b4f',
  borderRadius: '16px',
  boxShadow: '0px 3px 6px #00000029',
};

const buttonContainerStyle = {
  color: '#2377b5',
  width: '100%',
  height: '140px',
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = {
  display: 'block',
  padding: '12px',
  width: '35%',
  border: '1px solid #002b4f',
  textDecoration: 'none',
  color: '#002b4f',
  borderRadius: '20px',
  backgroundColor: '#fff',
  margin: '10px',
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
};

export default StudentDash;
