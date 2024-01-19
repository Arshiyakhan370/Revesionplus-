import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Button, Container, Grid, Paper ,Typography,} from '@mui/material';
import { Link } from 'react-router-dom';
import Nav from '../PracticeAssignment/Nav';




const CustomCard = ({ link, imageUrl, backgroundColor }) => {
  return (
    <a href={link}>
      <div
        className="card bg-c-blue"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor,
          height: '160px',
          width: '295px',
          borderRadius: '30px',
        }}
      >
        <div className="card-body"></div>
      </div>
    </a>
  );
};

const StudentDash = () => {
  // useEffect(() => {
  //   const logo = document.getElementById('pro-sidebar-logo');

  //   gsap.to(logo, {
  //     x: '80vw',  
  //     duration: 10,
  //     ease: 'linear',
  //     repeat: -1,
  //     onComplete: () => {
  //       gsap.set(logo, { x: 0 });
  //     },
  //   });
  // }, []); 
  const imageUrls = [
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-1_New2.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-6.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-2.png',
    'https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1new.png'
    
  ];

  const backgroundColors = ['#3468b2', '	#CF9FFF','#73abdc', '#6fb85e','#3468b2'];
  const buttonTexts = [
    [
      { text: ' Assignment', link: '/create-filter' }],
  [{text:'Practice ' , link: '/practiceQuestion' }],
  [{text:'Setup Printer' , link: '/aisl' }],
  [{text:'My Profile' , link: '/aisl' }],
  [{text:'Share ' , link: '/aisl' }],
  ]
  const MYP = ['Prepare Assignment', 'Practice Question', 'Setup Printer','My Profile','Share Assignment'];
  return (
    <div>
      <nav className="navbar navbar-light bg-light  flex flex-row" style={{borderBottom: '1px solid #002b4f'}}>
        <span id="" className="pro-sidebar-logo ml-8 ">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span> 
        <Button variant='primary' style={{  marginRight:'30px',color:'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) '}}>LogOut</Button>
      </nav>
      {/* <Container className='mt-24' style={{ padding: '0 80px' }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Link to="/create-filter">
              <CustomCard
                imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1.png"
                backgroundColor="#f58840"
              />
            </Link>
          </Grid>
          <Grid item md={4}>
          <Link to='/practiceQuestion'>
            <CustomCard
              
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-1_New2.png"
              backgroundColor="#6fb85e"
            />
            </Link>
          </Grid>
          
          <Grid item md={4}>
            <CustomCard
              link="https://www.neodynamic.com/downloads/wcpp/wcpp2.aspx"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-6.png"
              backgroundColor="#3468b2"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="#"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-2.png"
              backgroundColor="#73abdc"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="https://ibgakiosk.com/v2/assignmentview"
              imageUrl="https://ibgakiosk.com/v2/upload/teacher&student/Butten-4_1new.png"
              backgroundColor="#f58840"
            />
          </Grid>
          <Grid item md={4}>
            <CustomCard
              link="https://ibgakiosk.com/v2/assignmentview"
              imageUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgcF/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APQAHJXsgAgAAACiKgAAAAGiLBQTQQ0NBEVFAAEAB0EEVUAFEAURQAUQBAUAgAgKmgAhqKCAACAAA2YogAAIoAAAqAKIAqAAABuoagAIoAgKgAAA6CUQUSgKAAAAAAAAAAlAEBFAABAAAUAAaEVBUBBRAFqsqBVZAaoyA1UEAAUQABFRQAAAAABRFQAAFQBRFAABUAAABAAABBUUAAABUABQBBUEFEUAAAAAAAAAEBUBQAAAARUFAAUAQAAAQAAAAAAAAAFAAAAAABAGoAKKAjIAAAAAAAAAAAAAAAACCqgACCgADQggoAgAAAAAAAAAAAAAAgCiAoAgsAFGhFZQVAFEBFAAAAAAAAAAQAEBVATQNAVYCAKoIhQAAAUAClAAAAAQKAIAKVAAqUFCgAAA/9k="
              backgroundColor='#FFFFE0'
            />
          </Grid>
        </Grid>
      </Container> */}
      
      <Container>
          <Grid container spacing={2} style={{ paddingBottom: '110px', paddingTop: '10px', paddingLeft: '10px' }}>
            {imageUrls.map((imageUrl, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ ...cardStyle, backgroundColor: backgroundColors[index] }}>
                  <div style={cardHeaderStyle}>
                    <img style={cardImageStyle} src={imageUrl} alt={`MYP ${index}`} />
                    <Typography variant="h6" className="text-center">
                      {MYP[index]}
                    </Typography>
                  </div>
                  <Link to="/maths-standard">
                    <div style={buttonContainerStyle}>
                    {buttonTexts[index] && buttonTexts[index].map((button, buttonIndex) => (
  <Link key={buttonIndex} to={button.link} style={{ ...buttonStyle }}>
    {button.text}
  </Link>
))}
                    </div>
                  </Link>
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
  marginTop: '80px',
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
  left: '29%',
  top: '-40px',
  width: 'auto',
  height: '100px',
  background: '#002b4f',
  borderRadius: '16px',
  // padding: '10px',
  boxShadow: '0px 3px 6px #00000029',
};

const buttonContainerStyle = {
  color: '#2377b5',
  width: '100%',
  height: '160px',
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
