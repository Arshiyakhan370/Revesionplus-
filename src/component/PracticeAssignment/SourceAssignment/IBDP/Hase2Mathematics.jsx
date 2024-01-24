 import React, { Fragment, useState } from 'react';
import '../../MathsSectionQuestion.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from '../../Nav';
import Navbar1 from '../../../Dashboard Components/Buttons1';
import { Card, Container } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#D0E1FF'
    },
  },
});
const data = [
  { id: 1,link:'/maths-core-paper1', imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Paper1' },
  
];
const Hase2Mathematics = () => {
      const [checkedItems, setCheckedItems] = useState({});
  const location = useLocation();
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
<div className='text-center mb-sm-28 mb-lg-12'>
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
    Math AI 
    </Button>
  </Link>
  <Link to='/aisl'>
  <Button
    variant="contained"
    style={{
      margin: '1px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: location.pathname === '/alsl' ? 'lightSkyBlue' : '',
    }}
  >
   AL SL
  </Button></Link>
  <Link to='/hase2-maths-paper1'>
  <Button
    variant="contained"
    style={{
      margin: '1px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: location.pathname === '/hase2-maths-paper1' ? 'lightSkyBlue' : '',
    }}
  >
    Haese Mathematics Core 1 AISL & AASL 2
  </Button></Link>
  <Link to='/hase2-maths-paper1-link'>
  <Button
    variant="contained"
    style={{
      margin: '1px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: location.pathname === '/hase2-maths-paper1-link' ? 'lightSkyBlue' : '',
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
        <li key={item.id} className="mid-inner1">
          <Link to={item.link} style={{ textDecoration: 'none' }}>
            <div className="questionbank-item">
              <img src={item.imageUrl} alt="" />
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


export default Hase2Mathematics