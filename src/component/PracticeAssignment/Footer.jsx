import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" style={{height:'5vh', padding: '20px'}}>
      <div className="mid-inner wiki-mk">
        <Typography variant="body1" className="address text-center">
          My Revision plus  Academy, DLF South Point Mall, SPO-209, Golf Course Road, Gurugram.
        </Typography>
        <Typography variant="body1" className="email-box text-center">
          <Link href="http://www.ibglobalacademy.org" style={{ color: '#fff' }}>www.ibglobalacademy.org</Link>, email – <a href="mailto:info@ibglobalacademy.org" style={{ color: '#fff' }}>info@ibglobalacademy.org</a>
        </Typography>
      </div>
    </Box>
  );
};

export default Footer;
