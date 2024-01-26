import React, { Fragment, useEffect, useState } from 'react';
import '../MathsSectionQuestion.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, Container, Input } from '@mui/material';
import Navbar1 from '../../Dashboard Components/Buttons1';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D0E1FF',
    },
  },
});
const data = [
  { id: 1,link:'/busniess1-paper1and2', imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Paper1' },
  { id: 2,link:'/busniess1-paper1and2', imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Paper2' },
 
];

const BussSlPaper = () => {
 const [checkedItems, setCheckedItems] = useState({});
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

  const navigate = useNavigate();

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };
  const handleGoButtonClick = () => {
    const isAtLeastOneChecked = Object.values(checkedItems).some((isChecked) => isChecked);
  
    if (isAtLeastOneChecked) {
      navigate('/go-link');
    } else {
      alert('Please check at least one checkbox before clicking Go.');
    }
  };

  return (
<Fragment>
<Nav/>
<Navbar1/>
<Container maxWidth='xl'>
<Card backgroundColor='gray' >
<section className="questionbank-section" style={{ alignItems: 'center',borderBottom: '1px solid #002b4f' }}>
<ThemeProvider theme={theme}>
<div className={`button text-center mt-8 ${isSmallScreen ? 'mb-28' : ''}`}>
  <Link to='/ibmyb'>
    <Button
      variant="contained"
      style={{
        width: '120px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: location.pathname === '/ibdp' ? 'lightSkyBlue' : '',
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
        backgroundColor: location.pathname === '/ibdp' ? 'lightSkyBlue' : '',
      }}
    >
    Business Management
    </Button>
  </Link>
  <Link to='/Businees-sl'>
  <Button
    variant="contained"
    style={{
      margin: '1px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: location.pathname === '/Businees-sl' ? 'lightSkyBlue' : '',
    }}
  >
     Business SL
  </Button></Link>
  <Link to='/busniess-paper'>
  <Button
    variant="contained"
    style={{
      margin: '1px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: location.pathname === '/busniess-paper' ? 'lightSkyBlue' : '',
    }}
  >
    Tsokos 6th Ed.
  </Button></Link>
  <Link to='/busniess1-paper1and2'>
  <Button
    variant="contained"
    style={{
      margin: '1px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: location.pathname === '/busniess1-paper1and2' ? 'lightSkyBlue' : '',
    }}
  >
  Paper
  </Button></Link>
  <Link to='/go-link'>
    <Button
      variant="contained"
      onClick={handleGoButtonClick}
      style={{
        width: '120px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: location.pathname === '/go-link' ? 'lightSkyBlue' : '',
        borderRadius: '0 30px 30px 0',
        margin: '1px',
      }}
    >
      Go
    </Button>
  </Link>
</div>
</ThemeProvider>

  <div className="mid-inner wiki-mk pt-40 pb-20 pl-10 pr-10  ">
    <ul className="flex flex-row gap-3">
      {data.map((item) => (
        <li key={item.id} className="">
          <Link to={item.link} style={{ textDecoration: 'none' }}>
            <div className="questionbank-item">
              <img src={item.imageUrl} alt="Paper Type Image" />
              <h4 className="text-center">{item.name}</h4>
            </div>
          </Link>

         
          <div className="ml-8">
            <input
              id={`checkbox${item.id}`}
              type="checkbox"
              name={`subjectid-${item.id}`}
              value={item.id}
              checked={checkedItems[item.id] || false}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>

</section>
</Card>
</Container>
</Fragment>
)
};
export default BussSlPaper