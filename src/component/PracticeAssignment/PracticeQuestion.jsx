import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Container, Paper, Grid, Typography, Box } from '@mui/material';
const AssignmentResources = () => {
  // const [activeTab, setActiveTab] = useState("");

  // const handleTabChange = (index) => {
  //   setActiveTab(index);
  //   // Add logic to open corresponding city (if needed)
  // };

  // const tabButtonStyle = {
  //   fontSize: '16px',
  //   padding: '9px 12px',
  //   display: 'block',
  //   position: 'relative',
  //   backgroundColor: '#fff',
  //   color: '#444',
  //   borderRadius: '16px', 
  // boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.5)';

  //   width: '17.33%',
  //   margin: '1%',
  //   border: 'none',
  //   outline: 'none',
  //   textAlign: 'center',
  //   cursor: 'pointer',
  //   transition: '0.3s',
  //   fontSize: '20px',
  //   float: 'left',
  //   border: '1px solid #002b4f',
  // };
  // const getLinkPath = (index) => {
  //   switch (index) {
  //     case 0:
  //       return '/ibmyb';
  //     case 1:
  //       return '/ibdp';
  //     case 2:
  //       return '/igcse';
  //     case 3:
  //       return '/sat';
  //     default:
  //       return '/';
  //   }
  // };
  // const activeTabStyle = {
  //   backgroundColor: '#3b5998', // Change the active background color
  //   color: '#fff', // Change the active text color
  // };
  const imageUrls = [
    'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon1.png',
    'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon4.png',
    // 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon5.png',
    // 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon3.png',
    // 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon6.png',
    // 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/icon2.png',
  ];

  const backgroundColors = [''];

 const buttonTexts = [
  [
    { text: 'IB MYB', link: '/ibmyb' },
   
  ],
  [
    { text: 'IBDP', link: '/ibdp' },
  ],
 
];


  const MYP = ['IB MYB', 'IBDP'];

  if (!imageUrls || !backgroundColors || !buttonTexts || !MYP) {
    return null; 
  
  }

  
  return (
    <div>
        {/* <nav style={{ padding: '10px', color: '#fff' }}>
        <span id="pro-sidebar-logo" className="pro-sidebar-logo ml-8 ">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span>
      </nav> */}
<Nav/>
   
    <Box style={{ backgroundColor: '#4b7dd4' ,height:'100vh' ,borderBottom: '1px solid #002b4f'}}>
      {/* Navbar */}
      
      {/* Heading with background color */}
    

      {/* Tab Buttons */}
      {/* <div className="tab text-center " style={{paddingLeft:'300px', paddingRight:'100px'}}>
        {[0, 1, 2, 3].map((index) => (
          <Link to={getLinkPath(index)} key={index}>
            <Button
              style={{
                ...tabButtonStyle,
                ...(activeTab === index ? activeTabStyle : {}),
              }}
              onClick={() => handleTabChange(index)}
            >
              {index === 0 && 'IB MYP'}
              {index === 1 && 'IB DP'}
              {index === 2 && 'IGCSE'}
              {index === 3 && 'SAT'}
            </Button>
          </Link>
        ))}
      </div> */} <Container>
      <h1 style={{ backgroundColor: '#4b7dd4', fontSize:'80px', color: '#fff', textAlign: 'center' }}>
        Best Assignment Practice Resources For
      </h1>
          <Grid container spacing={2} style={{ paddingBottom: '10px', paddingTop: '1px', paddingLeft: '10px',justifyContent:'center', display:'flex',flexDirection:'row' }}>
            {imageUrls.map((imageUrl, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ ...cardStyle }}>
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
    </Box>
    <Footer/>
    </div>
  );
};
const cardStyle = {
  position: 'relative',
  border: '2px solid #2377b5',
  marginTop: '80px',
  boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.5)',
  borderRadius: '20px',
  transition: '0.4s ease-in-out',
  background:'linear-gradient(119.62deg, #002B4F 0.57%, #12b6e9 100%)',
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
boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.5)',

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
  padding: '10px',
boxShadow: '0px 3px 6px rgba(255, 255, 255, 0.5)',

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

export default AssignmentResources;
