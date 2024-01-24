import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MathsStandard.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar1 from '../Dashboard Components/Buttons1';
import Nav from './Nav';

const MathsStandard = () => {
  const location = useLocation();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#D0E1FF',
      },
    },
  });

  return (
    <div>
  
    <section className="questionbank-section" style={{ alignItems: 'center' }}>
      <ThemeProvider theme={theme}>
        <div className='text-center  mb-28'>
          <Link to='/ibmyb'>
            <Button
              variant="contained"
              style={{
                width: '120px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/ibmyb' ? 'lightSkyBlue' : '',
                borderRadius: '30px 0 0 30px',
              }}
            >
              IB MYP
            </Button>
          </Link>
          <Link to=''>
            <Button
              variant="contained"
              style={{
                margin: '1px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/' ? 'lightSkyBlue' : '',
              }}
            >
              MYP 4&5
            </Button>
          </Link>
          <Button
            variant="contained"
            style={{
              margin: '1px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: location.pathname === '/maths-standard' ? 'lightSkyBlue' : '',
            }}
          >
            Math Standard
          </Button>
          <Link to='/aisl-paper-go-link'>
            <Button
              variant="contained"
              style={{
                width: '120px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/aisl-paper-go-link' ? 'lightSkyBlue' : '',
                borderRadius: '0 30px 30px 0',
                margin: '1px',
              }}
            >
              Go
            </Button>
          </Link>
        </div>
      </ThemeProvider>
      <div className="mid-inner wiki-mk pt-30 pb-20 pl-40 pr-40 mt-44 border border-red-500">
        <ul className='mid-inner1'>
          <li className=''>
            <Link to="/maths-question" style={{ textDecoration: "none" }}>
              <div className="questionbank-item">
                <img src="https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png" alt="Question Image" />
                <div className="questionbank-item-head text-center">
                  <h5>MYP Questionbank</h5>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default MathsStandard;
