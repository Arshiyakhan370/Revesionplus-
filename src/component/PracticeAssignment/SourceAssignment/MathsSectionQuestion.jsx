import React, { Fragment, useState } from 'react';
import { Link, useLocation , useNavigate} from 'react-router-dom';
import { Button, Card, Container, createTheme, ThemeProvider } from '@mui/material';
import Navbar1 from '../../Dashboard Components/Buttons1';
import '../MathsSectionQuestion.css';
import Nav from '../Nav';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#002B4F',
    },
  },
});

const data = [
  { id: 1, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Number' },
  { id: 2, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Functions' },
  { id: 3, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Geometry' },
  { id: 4, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Trigonometry' },
  { id: 5, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Statistics and probability' },
  { id: 6, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Algebra' },
];

const MathsSectionQuestion = () => {
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
        <Nav />
        <Navbar1 />
        <Container maxWidth='xl'>
        <Card backgroundColor='gray' >
        <section className="questionbank-section" style={{ alignItems: 'center',borderBottom: '1px solid #002b4f' }}>
       
        <ThemeProvider theme={theme}>
        <div className={`text-center mt-8 ${isSmallScreen ? 'mb-28' : ''}`}>
          <Link to='/ibmyb'>
            <Button
              variant="contained"
              style={{
                width: '120px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/ibmyb' ? '#12b6e9' : 'linear-gradient(119.62deg, #002B4F 0.57%, #12b6e9 100%)',
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
                backgroundColor: location.pathname === '/' ? '#12b6e9' : 'linear-gradient(119.62deg, #002B4F 0.57%, #12b6e9 100%)',
              }}
            >
              MYP 4&5
            </Button>
          </Link>
          <Link to='/maths-standard'>
          <Button
            variant="contained"
            style={{
              margin: '1px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: location.pathname === '/maths-standard' ? '#12b6e9' : 'linear-gradient(119.62deg, #002B4F 0.57%, #12b6e9 100%)',
            }}
          >
            Math Standard
          </Button></Link>
          <Link to='/maths-question'>
          <Button
            variant="contained"
            style={{
              margin: '1px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: location.pathname === '/maths-question' ? '#12b6e9' : '',
            }}
          >
          MYP Questionbank
          </Button></Link>
          <Link to='/go-link'>
          <Button
            variant="contained"
            style={{
              margin: '1px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: location.pathname === '' ? '#12b6e9' : '',
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
                backgroundColor: location.pathname === '/go-link' ? '#12b6e9' : '',
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
                <li key={item.id} className="mid-inner1">
                  <Link to={`${item.id}`} style={{ textDecoration: 'none' }}>
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

export default MathsSectionQuestion;
