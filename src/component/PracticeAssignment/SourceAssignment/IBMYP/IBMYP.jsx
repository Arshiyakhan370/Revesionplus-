import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Container, Paper, Grid, Typography, Box } from '@mui/material';
import Nav from '../../Nav';
import Navbar1 from '../../../Dashboard Components/Buttons1';

  

const IBMYPComponent = () => {
  const imageUrls = [
    'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon1.png',
    'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon4.png',
  ];

  const backgroundColors = ['#b7d0f7', '#02CCFE'];

  const buttonTexts = [
    [{ text: '  Maths', link: '/maths-standard' }, ],
    [ { text: 'Standard', link: '/maths-standard' },],
   ];
  const MYP = ['MYP', 'MYP 4&5'];
  
  return (
  <Fragment>
  <Nav/>
  <Navbar1/>
      <Container maxWidth='xxl' className='mt-6'>
      <Box style={{ backgroundColor: '#4b7dd4' ,height:'auto' ,borderBottom: '1px solid #002b4f'}}>
    <h1
            style={{
              fontSize: '7vw', 
              color: '#fff',
              textAlign: 'center',
              marginBottom:'20vh',
            }}
          >
        Best Assignment Practice Resources For
      </h1>
            <div className='lg:block md:hidden sm:hidden' style={{ zIndex:'99' ,position: 'relative', textAlign: 'center', marginBottom:'-15px' }}>
           
 <div className='hidden sm:block'
    style={{  background: 'linear-gradient(119.62deg, #002B4F 0.57%, #12b6e9 100%)', borderRadius: '60%', width: '100px', height: '100px',zIndex:'99', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',border:'1px solid white' }}
   >
   <h2 className='text-center text-8xl text-white mt-2
   '>ib</h2> </div>
</div>
          
    </Box>
     
      <Box style={{ backgroundColor: '#4b7dd4', height: 'auto', borderBottom: '1px solid #002b4f' }}>
      
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
  // border: '2px solid #2377b5',
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
  left: '25%',
  top: '-40px',
  width: '50%',
  height: '100px',
  background: '#002b4f',
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
  
export default IBMYPComponent;
