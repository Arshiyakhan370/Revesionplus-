import React from 'react';
import { Link } from 'react-router-dom';
import '../MathsStandard.css';
import Footer from '../Footer';
import Nav from '../Nav';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const questionBankData = [
  {
    id: 1,
    title: 'Tsokos 6th Ed.',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#b7d0f7',
    link:'/aislLink' 
  },
  {
    id: 2,
    title: 'Oxford',
    imageSrc: 'https://ibgakiosk.com/v2/upload/mainimages/2023/01/1.png',
    backgroundColor: '#FFE5CC',
    link:'/aislLink' 
  },
 
];
const theme = createTheme({
    palette: {
      primary: {
        main: '#D0E1FF',
      },
    },
  });
const PysicsSl = () => {
  return (
    <div>
    <Nav/>
    <section className="questionbank-section" style={{ alignItems: 'center', borderBottom: '1px solid #002b4f' }}>
    <ThemeProvider theme={theme}>
      <div className='text-center'>
        <Button variant="contained" style={{ margin: '5px' }}>
        IB DP 

        </Button>
        <Button variant="contained" style={{  margin: '5px' }}>
       Physics
        </Button>
        <Button variant="contained" style={{  margin: '5px' }}>
         SL
        </Button>
       <Link to='/aisl-paper-go-link'><Button variant="contained" style={{ width:'120px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', Width:'120px', backgroundColor: 'lightSkyBlue', borderRadius: '30px', margin: '5px' }}>
          Go
        </Button></Link> 
      </div>
    </ThemeProvider>
      <div className="mid-inner wiki-mk pt-40 pb-10 pl-56 pr-10 ml-40 text-center">
        <ul className='flex flex-row gap-3 '>
          {questionBankData.map((item) => (
            <li key={item.id} className='mid-inner1' style={{ backgroundColor: item.backgroundColor }}>
              <Link to={item.link}>
                <div className="questionbank-item">
                  <img src={item.imageSrc} alt="Question Image" />
                  <div className="questionbank-item-head">
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Footer/>
    </div>
  );
};






export default PysicsSl