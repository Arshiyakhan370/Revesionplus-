 import React from 'react';
import { Button } from '@mui/material';

const CustomSaveButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        color: 'white',
        background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)',
        ...props.sx, 
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomSaveButton