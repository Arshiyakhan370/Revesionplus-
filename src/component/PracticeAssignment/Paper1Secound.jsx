import React, { useState } from 'react';
import './MathsSectionQuestion.css';
import './Golink.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D0E1FF',
    },
  },
});
const data = [
  { id: 1, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Paper1' },
  // { id: 2, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Functions' },
  // { id: 3, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Geometry' },
  // { id: 4, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Trigonometry' },
  // { id: 5, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Statistics and probability' },
  // { id: 6, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Algebra' },
];

const Paper1Secound = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div>
    <Nav/>

    
    <section className="questionbank-section" style={{ alignItems: 'center', borderBottom: '1px solid #002b4f' }}>
    <ThemeProvider theme={theme}>
          <div className='text-center'>
            <Button variant="contained" style={{width: '120px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', Width: '120px', backgroundColor: 'lightSkyBlue',  borderRadius: ' 30px 0 0 30px ' }}>
              IB DP
            </Button>
            <Button variant="contained" style={{ margin: '1px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              Math AI
            </Button>
            <Button variant="contained" style={{ margin: '1px' , boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              SL
            </Button>
            <Button variant="contained" style={{ margin: '1px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'  }}>
            Haese Mathematics Core 1 AISL & AASL

            </Button>
            <Button variant="contained" style={{ margin: '1px' , boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              Paper
            </Button>
            <Link to='/maths-core-paper1'>
              <Button variant="contained" style={{ width: '120px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', Width: '120px', backgroundColor: 'lightSkyBlue', borderRadius: ' 0 30px  30px 0', margin: '1px' }}>
                Go
              </Button>
            </Link>
          </div>
        </ThemeProvider>
     
      <div className="mid-inner wiki-mk  pt-40 pb-20 pl-60 pr-10  ">
        <ul className=' flex flex-row  gap-3'>
          {data.map((item) => (
            <li key={item.id} className="mid-inner2 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
              <Link to={item.id}>
                <div className="questionbank-item">
                  <img src={item.imageUrl} alt="Paper Type Image" />
                 
                  <h2>{item.name}</h2>
                </div>
              </Link>
         
              <div className=" ml-8">
              <input
        id={`checkbox${item.id}`}
        type="checkbox"
        name="subjectid[]"
        value={item.id}
        checked={isChecked}
        onChange={handleCheckboxChange}>
        </input>
    </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Footer/>
    </div>
  );
};



export default Paper1Secound