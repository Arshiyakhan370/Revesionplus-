import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const ButtonsSection = () => {
   const [activeTab, setActiveTab] = useState(0);
    
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
        backgroundColor: '#3b5998',
        color: '#fff', 
      };
    
      return (
        <div>
           
           
          <h1 style={{ backgroundColor: '#4b7dd4', fontSize:'80px',  color: '#fff', padding: '115px', textAlign: 'center' }}>
            Best Assignment Practice Resources For
          </h1>
    
         
          <div className="tab text-center " style={{paddingLeft:'300px', paddingRight:'100px', marginTop:'-60px'}}>
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
    </div>
  )
}

export default ButtonsSection