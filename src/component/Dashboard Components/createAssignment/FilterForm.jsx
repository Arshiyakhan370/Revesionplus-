import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, FormControl, InputLabel, MenuItem, Select, Grid, Paper, Typography, Container, IconButton } from '@mui/material';
import Assignment from './Assignment';
import { ArrowLeft } from 'react-feather';
import gsap from 'gsap';

const YourComponent = () => {
  const [boardID, setBoardID] = useState('');
  const [sourceID, setSourceID] = useState('');
  const [subjectlevelID, setSubjectLevelID] = useState('');
  const [paperID, setPaperID] = useState('');
  const [subjectIDs, setSubjectIDs] = useState([]);
  const [topicID, setTopicID] = useState('');
  const [subtopicID, setSubtopicID] = useState('');

  const handleBoardChange = (event) => {
    setBoardID(event.target.value);
  
  };

  const handleSourceChange = (event) => {
    setSourceID(event.target.value);
   
  };

  const handleSubjectLevelChange = (event) => {
    setSubjectLevelID(event.target.value);
  
  };

  const handlePaperChange = (event) => {
    setPaperID(event.target.value);
   
  };

  const handleSubjectChange = (event) => {
    setSubjectIDs(event.target.value);
  
  };

  const handleTopicChange = (event) => {
    setTopicID(event.target.value);
  
  };

  const handleSubtopicChange = (event) => {
    setSubtopicID(event.target.value);
  
  };

  const handleReset = () => {
   
  };

  const handleFilter = () => {
   
  };
 
  const handleGoBack = () => {
    window.history.back();
  };
 
  return (
    <div>
     <nav className="navbar navbar-light bg-light  flex flex-row">
        <span id="" className="pro-sidebar-logo ml-8 ">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span> 
        <Button variant='primary' style={{  marginRight:'30px',color:'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) '}}>LogOut</Button>
      </nav>
          <div className='ml-10 mt-8 text-black w-8 h-8  '>
          <Button onClick={handleGoBack} >
      <ArrowLeft size={24} />
    </Button></div>
          
    <Container style={{ marginTop:'30px'}}>
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Accordion defaultExpanded>
          <AccordionSummary>
          <div className='flex felx-row justify-between'>
            <Typography className='text-lg  '>Question Filter</Typography>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
             height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              className='ml-4'>
  <polyline points="6 9 12 15 18 9"></polyline>
</svg>
</div>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} style={{ padding: '20px' }}>
            <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="boardID">Boards</InputLabel>
    <Select
      id="boardID"
      value={boardID}
      label="Boards"
      onChange={handleBoardChange}
    >
      <MenuItem value="">Select board</MenuItem>
      <MenuItem value="1">IB</MenuItem>
      <MenuItem value="2">IGCSE</MenuItem>
      <MenuItem value="3">IB MYP</MenuItem>
    </Select>
  </FormControl>
</Grid>

<Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="sourceID">Source</InputLabel>
    <Select
      id="sourceID"
      name="sourceID"
      label="Source"
      value={sourceID}
      onChange={handleSourceChange}
    >
      <MenuItem value="">Select Source</MenuItem>
    
    </Select>
  </FormControl>
</Grid>

<Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="subjectIDs">Subject</InputLabel>
    <Select
      id="subjectIDs"
      name="subjectIDs"
      label="Subject"
      value={subjectIDs}
      onChange={handleSubjectChange}
    >
      <MenuItem value="">Select subject</MenuItem>
     
    </Select>
  </FormControl>
</Grid>
<Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="subjectlevelID">Subject Level</InputLabel>
    <Select
      id="subjectlevelID"
      name="subjectlevelID"
      label="Subject Level"
      value={subjectlevelID}
      onChange={handleSubjectLevelChange}
    >
      <MenuItem value="">Select Level</MenuItem>
     
    </Select>
  </FormControl>
</Grid>

<Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="paperID">paper</InputLabel>
    <Select
      id="paperID"
      name="paperID"
      label="paperID"
      value={paperID}
      onChange={handlePaperChange}
    >
      <MenuItem value="">Select Paper</MenuItem>
    
    </Select>
  </FormControl>
</Grid>

<Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="topicID">Topic</InputLabel>
    <Select
      id="topicID"
      name="topicID"
      label="topic"
      value={topicID}
      onChange={handleTopicChange}
    >
      <MenuItem value="">Select Topic</MenuItem>
     
    </Select>
  </FormControl>
</Grid>
<Grid item xs={6} md={4}>
  <FormControl fullWidth>
    <InputLabel htmlFor="subtopicID">Subtopic</InputLabel>
    <Select
      id="subtopicID"
      name="subtopicID"
      label="Subtopic"
      value={subtopicID}
      onChange={handlePaperChange}
    >
      <MenuItem value="">Select Subtopic</MenuItem>
    
    </Select>
  </FormControl>
</Grid>


</Grid>
        
              <Button variant="outlined" onClick={handleReset} style={{ marginTop: '25px' }}>
                Reset
              </Button>
              <Button variant="outlined" onClick={handleFilter} style={{ marginTop: '25px', marginLeft: '10px' }}>
                Filter
              </Button>
            </Paper>
          </AccordionDetails>
        </Accordion>
      
   </Grid>
    </Grid>
    </Container>
    <Assignment/>
    
    </div>
  );
};

export default YourComponent;
