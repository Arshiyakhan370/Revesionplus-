import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { Container, Paper, Grid, Typography, Box } from '@mui/material';
import Navbar1 from '../../Dashboard Components/Buttons1';
const PracticeQuestion= () => {
  
  const imageUrls = [
    
 
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAA1BMVEX/RQCU7LJ3AAAAMUlEQVR4nO3BAQEAAACAkP6v7ggKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAFx5AABm182xwAAAABJRU5ErkJggg==',
   'data:image/jpeg;base64,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'
   
    // "data:image/jpeg;base64,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",
  //  ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ9ZMvCEXQbb9at4ZobBQJPIK6POItUBhyylMf0wQjYxd7yFpgnpCwfBmtO7xN3cEv2s&usqp=CAU'
  ];

  

 const buttonTexts = [
  [{ text: 'IB MYP', link: '/ibmyb' }, ],
  [ { text: 'IB DP', link: '/ibdp' },],
 ];

 const backgroundColors = [	'#F4BB44','#00BCFF' ];
  const MYP = ['IB MYP', 'IB DP'];

  if (!imageUrls || !backgroundColors || !buttonTexts || !MYP) {
    return null; 
  
  }

  
  return (
    <Fragment> 
<Nav/>
     <Navbar1/>
     <Container maxWidth='xl'>
    <Box style={{ backgroundColor: '#4b7dd4' ,height:'auto' ,borderBottom: '1px solid #002b4f'}}>
    <h1
            style={{
              fontSize: '7vw', 
              color: '#fff',
              textAlign: 'center',
              margin: ' 0',
            }}
          >
        Best Assignment Practice Resources For
      </h1>
        <Grid className='flex justify-center' container spacing={2} style={{ alignItems:'center', gap:'20px', marginTop:'2vw',paddingBottom: '12vh', paddingTop: '4vw', paddingLeft: '1vw',paddingRight:'1vw' }}>
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
        </Box>
        </Container>
      </Fragment>
  );
};

const cardStyle = {
  position: 'relative',
  border: '2px solid #2377b5',
  marginTop: '2vh', 
  marginBottom: '2vh',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '20px', 
  transition: '0.4s ease-in-out',
  border: '1px solid white',
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
  left: '20%',
  top: '-40px',
  width: '60%',
  height: '100px',
  background: '',
  borderRadius: '16px',
  overflow:'hidden',
  border:'1px solid white',
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

export default PracticeQuestion;
