import React from 'react';
import { Link } from 'react-router-dom';
import './MathsStandard.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const MathsStandard = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#D0E1FF',
      },
    },
  });
  return (
    
    <section className="questionbank-section" style={{alignItems:'center', borderBottom: '1px solid #002b4f' }}>
       <ThemeProvider theme={theme}>
      <div className='text-center'>
        <Button variant="contained" style={{ margin: '5px' }}>
        IB MYP 
        </Button>
        <Button variant="contained" style={{  margin: '5px' }}>
         MYP 4&5 
        </Button>
        <Button variant="contained" style={{  margin: '5px' }}>
         Math Standard
        </Button>
       <Link to='/aisl-paper-go-link'><Button variant="contained" style={{ width:'120px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', Width:'120px', backgroundColor: 'lightSkyBlue', borderRadius: '30px', margin: '5px' }}>
          Go
        </Button></Link> 
      </div>
    </ThemeProvider>
      <div className="mid-inner wiki-mk  pt-30 pb-20 pl-40 pr-40">

        <ul className='mid-inner1'>

          <li className=''>
            <Link to="/maths-question">
              <div className="questionbank-item">
                <img src="https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png" alt="Question Image" />
                <div className="questionbank-item-head">
                  <h2>MYP Questionbank</h2>
                </div>
              </div>
            </Link>
          </li>

          

        </ul>
      </div>
    </section>
   
  );
};

export default MathsStandard;
