import React, { useState } from 'react';
import '../MathsSectionQuestion.css';
import '../Golink.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav';
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
  { id: 1, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 1-Introduction to Economics-(The Foundation of Economics)' },
  { id: 2, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'UNIT 2. Microeconomics' },
  { id: 3, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'unit -2.macroecnomics.2. COMPETITIVE MARKETS: DEMAND AND SUPPLY' },
  { id: 4, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'microeconomics' },
  { id: 5, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [3] Elasticities ' },
  { id: 6, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [4] Government Intervention In Microeconomics' },
  { id: 1, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [5] Market Failure And Socially Undesirable Outcome I: Common Pool Resources And Negative Externalities' },
  { id: 2, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [6] Market Failure And Socially Undesirable Outcome II: ﻿ Positive externalities, public goods, asymmetric information and inability to achieve equity' },
  { id: 3, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'unit -2.macroecnomics.2. COMPETITIVE MARKETS: DEMAND AND SUPPLY' },
  { id: 4, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [7] Market Failure And Socially Undesirable Outcome III : Market Power (HL Only)s' },
  { id: 5, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [7] Market Failure And Socially Undesirable Outcome III : Market Power (HL Only)' },
  { id: 2, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Microeconomics-- [6] Market Failure And Socially Undesirable Outcome II: ﻿ Positive externalities, public goods, asymmetric information and inability to achieve equity' },
  { id: 3, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 2 Macroeconomics -- [8] The Level Of Overall Microeconomic Activity' },
  { id: 4, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 3 Macroeconomics -- [8] The Level Of Overall Microeconomic Activity' },
  { id: 5, imageUrl: 'https://ibgakiosk.com/v2/upload/mainimages/2023/02/1.jpg', name: 'Unit 3 Macroeconomics -- [9] Aggregate Demand And Aggregate Supply' },
];

const  EconimicPpaer2 = () => {
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
            Economics 

            </Button>
            <Button variant="contained" style={{ margin: '1px' , boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
           SL
            </Button>
            <Button variant="contained" style={{ margin: '1px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'  }}>
            Ellie Tragakes-Third edition

          </Button>
            <Button variant="contained" style={{ margin: '1px' , boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              Paper
            </Button>
            <Link to=''>
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








export default EconimicPpaer2