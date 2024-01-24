import React, { useState } from 'react';
import { Box } from '@mui/material';


const ButtonsSection = () => {
   
    
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
     
      
      return (
        
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
            
          
    </Box>
  )
}

export default ButtonsSection