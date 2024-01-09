import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const AssignmentResources = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (index) => {
    setActiveTab(index);
    // Add logic to open corresponding city (if needed)
  };

  const tabButtonStyle = {
    fontSize: '16px',
    padding: '9px 12px',
    display: 'block',
    position: 'relative',
    backgroundColor: '#fff',
    color: '#444',
    borderRadius: '16px', 
    boxShadow: '0px 3px 6px #00000029',
    width: '17.33%',
    margin: '1%',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    fontSize: '20px',
    float: 'left',
    border: '1px solid #002b4f',
  };
  const getLinkPath = (index) => {
    switch (index) {
      case 0:
        return '/ibmyb';
      case 1:
        return '/ibdp';
      case 2:
        return '/igcse';
      case 3:
        return '/sat';
      default:
        return '/';
    }
  };
  const activeTabStyle = {
    backgroundColor: '#3b5998', // Change the active background color
    color: '#fff', // Change the active text color
  };

  return (
    <div>
        {/* <nav style={{ padding: '10px', color: '#fff' }}>
        <span id="pro-sidebar-logo" className="pro-sidebar-logo ml-8 ">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span>
      </nav> */}
<Nav/>
   
    <Box style={{ backgroundColor: '#4b7dd4' ,height:'90vh' ,borderBottom: '1px solid #002b4f'}}>
      {/* Navbar */}
      
      {/* Heading with background color */}
      <h1 style={{ backgroundColor: '#4b7dd4', fontSize:'80px', color: '#fff', padding: '65px', textAlign: 'center' }}>
        Best Assignment Practice Resources For
      </h1>

      {/* Tab Buttons */}
      <div className="tab text-center " style={{paddingLeft:'300px', paddingRight:'100px'}}>
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
      </div>
    </Box>
    <Footer/>
    </div>
  );
};

export default AssignmentResources;
