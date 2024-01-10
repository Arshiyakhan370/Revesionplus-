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
      const handleGoBack = () => {
        window.history.back();
      };
    
      const handleGoForward = () => {
        window.history.forward();
      };
      return (
        <div>
           
           
          <h1 style={{ backgroundColor: '#4b7dd4', fontSize:'80px',  color: '#fff', padding: '115px', textAlign: 'center' }}>
            Best Assignment Practice Resources For
          </h1>
    
         
          <div className="tab text-center " style={{paddingLeft:'300px', paddingRight:'100px', marginTop:'-60px'}}>
          {/* <Button variant="primary" onClick={handleGoBack}  style={{
                    ...tabButtonStyle}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.354 1.646a.5.5 0 0 1 0 .708L2.707 8H13.5a.5.5 0 0 1 0 1H2.707l4.647 4.646a.5.5 0 0 1 0 .708l-.708.707a.5.5 0 0 1-.707 0L.646 8.354a.5.5 0 0 1 0-.708L6.646.646a.5.5 0 0 1 .708 0z"
          />
        </svg>{' '}
     
      </Button> */}

     
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
            {/* <Button variant="primary" onClick={handleGoForward}  style={{
                    ...tabButtonStyle}}>
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8.646 1.646a.5.5 0 0 1 0 .708L13.293 8l-4.647 4.646a.5.5 0 0 1-.708-.708L11.793 8l-3.147-3.146a.5.5 0 0 1 .708-.708z"
          />
        </svg>
      </Button> */}
          </div>
    </div>
  )
}

export default ButtonsSection