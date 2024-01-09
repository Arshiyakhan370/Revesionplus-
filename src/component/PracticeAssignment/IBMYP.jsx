import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Paper, Grid, Typography, Box } from '@mui/material';
import ButtonsSection from './ButtonsSection';
import Footer from './Footer';
import Nav from './Nav';

const SubjectList = () => {
  const imageUrls = [
    'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon1.png',
    'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon4.png',
  ];

  const backgroundColors = ['#b7d0f7', '#02CCFE'];

  const buttonTexts = ['Maths', 'Maths Standard'];
  const MYP = ['MYP', 'MYP 4&5'];

  return (
  <div>
  <Nav/>
      <Box style={{ height: 'auto', borderBottom: '1px solid #002b4f' }}>
      <ButtonsSection/>
        <Container>
          <Grid container spacing={2} style={{ paddingBottom: '110px', paddingTop: '130px', paddingLeft: '10px' }}>
            {imageUrls.map((imageUrl, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ position: 'relative', border: '2px solid #2377b5', marginTop: '80px', boxShadow: '0px 3px 6px #00000029', borderRadius: '20px', transition: '0.4s ease-in-out', backgroundColor: backgroundColors[index] }}>
                  <div style={{ width: '100%', textAlign: 'left', fontSize: '20px', color: '#002b4f', fontWeight: 'bold', background: '#fff', borderRadius: '20px', paddingTop: '66px', boxShadow: '0px 3px 6px #00000029', position: 'relative' }}>
                    <img style={{ position: 'absolute', left: '29%', top: '-40px', width: 'auto', height: '100px', background: '#002b4f', borderRadius: '16px', padding: '10px', boxShadow: '0px 3px 6px #00000029' }} src={imageUrl} alt={`MYP ${index}`} />
                    <Typography variant="h6" className='text-center'> {MYP[index]}</Typography>
                  </div>
                  <Link to='/maths-standard'>
                    <div style={{ color: '#2377b5', width: '100%', height: '160px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ display: 'block', padding: '12px', width: '160px', border: '1px solid #002b4f', textDecoration: 'none', color: '#002b4f', backgroundColor: '#fff', borderRadius: '20px', margin: '10px 0', textAlign: 'center', transition: 'background-color 0.3s ease' }}>
                        {buttonTexts[index]}
                      </div>
                    </div>
                  </Link>
                  <Typography style={{ textAlign: 'center', marginTop: '10px', color: '#2377b5' }} variant="body2">
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>
      <Footer/>
      </div>
  );
};

export default SubjectList;
