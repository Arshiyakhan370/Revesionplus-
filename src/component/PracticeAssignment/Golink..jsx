// MathSection.js

import React, { useState } from 'react';
import './Golink.css'; // Assuming Golink.css is in the same directory as this component
import QuestionLevel from './QuestionLevel';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from './Nav';

const MathSection = () => {
  const [selectedSubtopics, setSelectedSubtopics] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState([]);

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
  ];

  const criteria = [
    { value: '512', label: 'A' },
    { value: '644', label: 'B&C' },
    { value: '646', label: 'A,B&C' },
    { value: '647', label: 'A' },
    { value: '652', label: 'B' },
    { value: '659', label: 'C' },
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
        main: '#D0E1FF',
      },
    },
  });
  return (
    <div>
    <Nav/>
      <ThemeProvider theme={theme}>
      <div className='text-center pt-20 pb-4'>
        <Button variant="contained" style={{ margin: '5px', height:'40px' }}>
          B MYP
        </Button>
        <Button variant="contained" style={{  margin: '5px' , height:'40px'}}>
          MYP 4&5
        </Button>
        <Button variant="contained" style={{  margin: '5px' , height:'40px'}}>
          Math Standard
        </Button>
        <Button variant="contained" style={{ margin: '5px', height:'40px' }}>
          MYP Questionbank
        </Button>
        
       <Link to='/go-link'><Button variant="contained" style={{ height:'40px', width:'120px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', Width:'120px', backgroundColor: 'lightSkyBlue', borderRadius: '30px', margin: '5px' }}>
          0
        </Button></Link> 
      </div>
    </ThemeProvider>
    <section id="head-top">
      <div className="mid-inner wiki-mk">
        <h3>IB MATHs</h3>
        <div className="ib-homecheck">
          <div className="homecheck-left">
            <h3>Select Subtopic</h3>
            <div className="homecheck-items">
            <div className="main-wrapper">
  {subtopics.map((subtopic) => (
    <div key={subtopic.value} className="cutsom-checkbox-row">
      <input
        id={`checkbox${subtopic.value}`}
        type="checkbox"
        name="subtopic[]"
        value={subtopic.value}
        checked={selectedSubtopics.includes(subtopic.value)}
        onChange={() => handleSubtopicChange(subtopic.value)}
      />
      <label htmlFor={`checkbox${subtopic.value}`}>{subtopic.label}</label>
    </div>
  ))}
</div>
            </div>
          </div>

          <div className="homecheck-right">
            <h3>Select Criteria</h3>
          <div className="main-wrapper">
  {criteria.map((criterion) => (
    <div key={criterion.value} className="cutsom-checkbox-row">
      <input
        id={`checkbox${criterion.value}`}
        type="checkbox"
        name="criteria[]"
        value={criterion.value}
        checked={selectedCriteria.includes(criterion.value)}
        onChange={() => handleCriteriaChange(criterion.value)}
      />
      <label htmlFor={`checkbox${criterion.value}`}>{criterion.label}</label>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
    <QuestionLevel/>
    </div>
  );
};

export default MathSection;
