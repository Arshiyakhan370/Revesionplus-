import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../MathsStandard.css';
import Nav from '../../Nav';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar1 from '../../../Dashboard Components/Buttons1';

const questionBankData = [
  {
    id: 1,
    title: 'Hodder 2019',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#b7d0f7',
    link:'/aislLink' 
  },
  {
    id: 2,
    title: 'Haese Mathematics Core 1 AISL & AASL',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#FFE5CC',
    link:'/core-paper1' 
  },
  {
    id: 3,
    title: 'Haese Mathematics AISL 2',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#b7d0f7',
    link:'/hase2-maths-paper1'  
  },
];
const theme = createTheme({
    palette: {
      primary: {
        main: '#002B4F',
      },
    },
  });

 
const Aisl = () => {
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
  
  const buttonStyle = {
    width: '120px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    marginLeft:'2px',
  };

  

  return (
    <div>
      <Nav />
      <Navbar1 />
      <section className="questionbank-section" style={{ alignItems: 'center', borderBottom: '1px solid #002b4f' }}>
        <ThemeProvider theme={theme}>
      
<div className={`button text-center mt-8 ${isSmallScreen ? 'mb-28' : ''}`}>
  <Link to='/ibdp'>
    <Button
      variant="contained"
      style={{
        ...buttonStyle,
        backgroundColor: location.pathname.trim() === '/ibdp' ? '#12b6e9' : '',
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
        ...buttonStyle,
        backgroundColor: location.pathname.trim() === '/ibdp' ? '#12b6e9' : '',
      }}
    >
      Math AI
    </Button>
  </Link>
  <Button
    variant="contained"
    style={{
      ...buttonStyle,
      backgroundColor: location.pathname.trim() === '/aisl' ? '#12b6e9' : '',
    }}
  >
    AL SL
  </Button>
  <Link to='/go-link'>
    <Button
      variant="contained"
      style={{
        ...buttonStyle,
        backgroundColor: location.pathname.trim() === '/go-link' ? '#12b6e9' : '',
        borderRadius: '0 30px 30px 0',
      }}
    >
      Go
    </Button>
  </Link>
</div>


        </ThemeProvider>

        <div className="mid-inner wiki-mk pt-40 pb-10 pl-56 pr-10 ml-40 text-center">
          <ul className='flex flex-row gap-3 text-center'>
            {questionBankData.map((item) => (
              <li key={item.id} className='mid-inner1 ' style={{ backgroundColor: item.backgroundColor }}>
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

export default Aisl;
