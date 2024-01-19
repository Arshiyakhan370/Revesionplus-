import React from 'react';
import { Button, Tabs, Box, Container } from '@mui/material';
import Nav from '../PracticeAssignment/Nav';
import { Link } from 'react-router-dom';

const OnlineClasses = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Nav />
     
      <div>
        <h1 className='text-center text-[#002B4F] pt-20'>Online Classes</h1>
        <div className='text-center text-black mt-8'><h2>Muhammad Akram</h2></div>
       
      </div>
      <Box
        sx={{
          background: '#ededed',
          marginBottom: '70px',
          padding: '40px',
          margin: '8%',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container>
          <Box
            sx={{
              background: '#ededed',
              marginBottom: '20px',
              padding: '10px',
              borderRadius: '10px',
            
             
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between',marginLeft:'20%' }}>
              <Button
                onClick={(e) => handleChange(e, 0)}
                variant="contained"
                color="primary"
                sx={{
                
                  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
                  // borderRadius: '40px',
              //  padding:'20px'
                }}
              >Scheduled Class
                
              </Button>
              <Link to='/past-class'><Button
                onClick={(e) => handleChange(e, 1)}
                variant="contained"
                color="primary"
                sx={{
                 
                  marginRight: '0%',
                  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
                  // borderRadius: '40px',
              //  padding:'20px'
                
                }}
              >
               Past Classes
              </Button></Link>
            </Box>
<Box sx={{ marginTop:'4%', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important', height:'2px'}}></Box>

            <Box
              sx={{
                marginBottom: 0,
                marginTop: '5%',
                display: value === 0 ? 'block' : 'none',
              }}
            >
              <Link to='/schdule-box'><Button href="create_online_class.php" variant="contained" color="info" sx={{  marginLeft: '2%', marginRight: '2%',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important', }}>
                Schedule New Class
              </Button></Link>
              <section className="container--tabs">
                <Tabs value={value} onChange={handleChange}>
                  {/* Add your tabs here */}
                </Tabs>
                <Box className="tab-content">
                  {/* Add your tab content here */}
                </Box>
              </section>
            </Box>
            <Box
              sx={{
                marginBottom: 0,
                display: value === 1 ? 'block' : 'none',
              }}
            >
              <section className="container--tabs">
                <Tabs value={value} onChange={handleChange}>
                  {/* Add your tabs here */}
                </Tabs>
                <Box className="tab-content">
                  {/* Add your tab content here */}
                </Box>
              </section>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default OnlineClasses;
