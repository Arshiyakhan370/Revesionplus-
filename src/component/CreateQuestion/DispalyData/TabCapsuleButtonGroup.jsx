
import { Box, Button } from '@mui/material';
import React from 'react'

const TabCapsuleButtonGroup = ({ options, value, onChange }) => {
        const capsuleButtonStyle = {
          padding: '8px 16px',
          margin: '4px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)',
          color: 'white',
        };
      
        const checkedStyle = {
          backgroundColor: '#1976D2',
          color: 'white',
        };
      
        return (
          <Box>
            {options.map((option) => (
              <Button
                key={option.value}
                variant="contained"
                style={{
                  ...capsuleButtonStyle,
                  ...(value === option.value ? checkedStyle : {}),
                }}
                onClick={() => onChange(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </Box>
        );
      };
      

export default TabCapsuleButtonGroup