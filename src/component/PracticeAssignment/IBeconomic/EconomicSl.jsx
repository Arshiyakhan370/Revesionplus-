import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../MathsStandard.css';
import Footer from '../Footer';
import Nav from '../Nav';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar1 from '../../Dashboard Components/Buttons1';
const questionBankData = [
  {
    id: 1,
    title: 'Ellie Tragakes-Third edition',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#b7d0f7',
    link:'/Economic-paper-sl' 
  },
  {
    id: 2,
    title: ' Oxford_2020_Jocelyn Blink,Ian Dorton',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#FFE5CC',
    link:'/Economic-Blink-paper2' 
  },
 
];
const theme = createTheme({
    palette: {
      primary: {
        main: '#002B4F',
      },
    },
  });
const  EconomicSl = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
  
    const logPathname = () => {
      console.log('Current pathname:', location.pathname);
    };
  
    window.addEventListener('resize', handleResize);
    logPathname(); 
    return () => {
      window.removeEventListener('resize', handleResize);
      logPathname();
    };
  }, [location.pathname]);
  

    return (
      <div>
      <Nav/>
      <Navbar1/>
      <section className="questionbank-section" style={{ alignItems: 'center', borderBottom: '1px solid #002b4f' }}>
              <ThemeProvider theme={theme}>
              <div className={`button text-center mt-8 ${isSmallScreen ? 'mb-28' : ''}`}>
            <Link to='/ibmyb'>
              <Button
                variant="contained"
                style={{
                  width: '120px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  backgroundColor: location.pathname === '/ibdp' ? ' #12b6e9' : '',
                  borderRadius: '30px 0 0 30px',
                }}
              >
               IB DP 
  
              </Button>
            </Link>
            <Link to=''>
              <Button
                variant="contained"
                style={{
                  margin: '1px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  backgroundColor: location.pathname === '/ibdp' ? ' #12b6e9' : '',
                }}
              >
               Economic
              </Button>
            </Link>
            <Button
              variant="contained"
              style={{
                margin: '1px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/eco-sl' ? ' #12b6e9' : '',
              }}
            >
               Economic SL
            </Button>
            <Link to='/Economic-paper-sl'>
              <Button
                variant="contained"
                style={{
                  width: '120px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  backgroundColor: location.pathname === '/Economic-paper-sl' ? ' #12b6e9' : '',
                  borderRadius: '0 30px 30px 0',
                  margin: '1px',
                }}
              >
                Go
              </Button>
            </Link>
          </div>
        </ThemeProvider>
        <div className="mid-inner wiki-mk pt-40 pb-10 pl-56 pr-10 ml-40 text-center">
          <ul className='flex flex-row gap-3 '>
            {questionBankData.map((item) => (
              <li key={item.id} className='mid-inner1' style={{ backgroundColor: item.backgroundColor }}>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <div className="questionbank-item">
                    <img src={item.imageSrc} alt="Question Image" />
                    <div className="questionbank-item-head">
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
  
      </div>
    );
  };
  

export default EconomicSl