// MathSection.js

import React, { Fragment, useState } from 'react';
import './Golink.css'; 
import QuestionLevel from './QuestionLevel';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from './Nav';
import Navbar1 from '../Dashboard Components/Buttons1';
import { Card, CardContent, Container, Grid } from '@mui/material';

const Golink= () => {
  const [selectedSubtopics, setSelectedSubtopics] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const location = useLocation();
  const subtopics = [
    { value: '183', label: 'Absolute values' },
    { value: '214', label: 'Representing and solving inequalities, including compound and double inequalities' },
    { value: '215', label: 'Irrational numbers' },
    { value: '225', label: 'Surds, roots and radicals, including simplifying' },
    { value: '228', label: 'Standard form(scientific notation)' },
    { value: '230', label: 'Laws of exponents, including integer and negative exponents' },
    { value: '231', label: 'Number System notation' },
    { value: '232', label: 'Direct and inverse Proportion' },
    { value: '233', label: 'Number sequences(prediction,description)' },
    { value: '228', label: 'Standard form(scientific notation)' },
    { value: '230', label: 'Laws of exponents, including integer and negative exponents' },
    { value: '231', label: 'Number System notation' },
   
  ];

  const criteria = [
    { value: '512', label: 'A' },
    { value: '644', label: 'B&C' },
    { value: '646', label: 'A,B&C' },
    { value: '647', label: 'A' },
    { value: '652', label: 'B' },
    { value: '659', label: 'C' },
    { value: '660', label: 'A,B&C' },
    { value: '660', label: 'A,B&C' },
    { value: '659', label: 'C' },
    { value: '660', label: 'A,B&C' },
    { value: '660', label: 'A,B&C' },
    { value: '660', label: 'A,B&C' },
    { value: '660', label: 'A,B&C' },

  ];

  const handleSubtopicChange = (value) => {
    if (selectedSubtopics.includes(value)) {
      setSelectedSubtopics(selectedSubtopics.filter((subtopic) => subtopic !== value));
    } else {
      setSelectedSubtopics([...selectedSubtopics, value]);
    }
  };

  const handleCriteriaChange = (value) => {
    if (selectedCriteria.includes(value)) {
      setSelectedCriteria(selectedCriteria.filter((criteria) => criteria !== value));
    } else {
      setSelectedCriteria([...selectedCriteria, value]);
    }
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#002B4F',
      },
    },
  });
  return (
    <Fragment>
    <Nav />
    <Navbar1 />
    <Container maxWidth="xxl" sx={{backgroundColor: '#4b7dd4',marginTop:"20px"}}>
    <Card>
    <ThemeProvider theme={theme}>
    <div className='text-center mb-8 lg:mb-12 mt-8 '>
              
          <Link to='/ibmyb'>
            <Button
              variant="contained"
              style={{
                width: '120px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/ibmyb' ? '#12b6e9' : '',
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
                backgroundColor: location.pathname === '/' ? '#12b6e9' : '',
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
              backgroundColor: location.pathname === '/maths-standard' ? '#12b6e9' : '',
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
          <Link to='/aisl-paper-go-link'>
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
            
              style={{
                width: '120px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: location.pathname === '/go-link' ? '#12b6e9' : '',
                borderRadius: '0 30px 30px 0',
                margin: '1px',
              }}
            >
            0
            </Button>
          </Link>
        </div>
      </ThemeProvider>
    
      <CardContent>
  <h3 className='text-center text-[#122be9]'>IB MATH</h3>

 
  <div className='ibHomeCheck lg:flex lg:flex-row md:flex-col sm:flex-col'>
    <Card  className='homeCheckLeft w-full lg:w-6/12 md:w-full sm:w-full'>
    
        <h2 className="text-2xl text-blue-500">Select Subtopic</h2>
     
        <div className='flex flex-wrap'>
          {subtopics.map((subtopic) => (
            <div key={subtopic.value} className='relative mb-4 lg:w-1/2 md:w-full sm:w-full'>
              <input
                id={`subtopicCheckbox${subtopic.value}`}
                type="checkbox"
                name="subtopic[]"
                value={subtopic.value}
                checked={selectedSubtopics.includes(subtopic.value)}
                onChange={() => handleSubtopicChange(subtopic.value)}
                className="mr-2 zoom-150"
              />
              <label htmlFor={`subtopicCheckbox${subtopic.value}`} className="text-base">{subtopic.label}</label>
            </div>
          ))}
        </div>
        
         </Card>
       
    <Card className='homeCheckRight w-full lg:w-6/12 md:w-full sm:w-full'>
     
        <h3 className="text-xl text-blue-500">Select Criteria</h3>
        <div className='flex flex-wrap text-lg'>
          {criteria.map((criterion) => (
            <div key={criterion.value} className=' text-lg relative mb-4 lg:w-1/2 md:w-full sm:w-full'>
              <input
                id={`criteriaCheckbox${criterion.value}`}
                type="checkbox"
                name="criteria[]"
                value={criterion.value}
                checked={selectedCriteria.includes(criterion.value)}
                onChange={() => handleCriteriaChange(criterion.value)}
                className="mr-2 zoom-150"
              />
              <label htmlFor={`criteriaCheckbox${criterion.value}`} className="text-base">{criterion.label}</label>
            </div>
          ))}
        </div>
      </Card>
   
  </div>
</CardContent>

</Card>
    </Container>
    <QuestionLevel />
  </Fragment>
  
  );
};

export default Golink;
