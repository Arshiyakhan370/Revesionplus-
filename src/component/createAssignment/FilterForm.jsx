
// import React, { Fragment, useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Button, FormControl, InputLabel, MenuItem, Select, Grid, Typography, Container, Card } from '@mui/material';
// import { ArrowLeft } from 'react-feather';

// const FilterForm = () => {
//   const [filters, setFilters] = useState({
//     boardID: 'IB DP',
//     sourceID: '',
//     grade: '',
//     subjectLevelID: '',
//     paperID: '',
//     subjectIDs: '',
//     topicID: '',
//     subtopicID: '',
//     rubricsID: ''
//   });

//   const handleSelectChange = (event, fieldName) => {
//     setFilters({ ...filters, [fieldName]: event.target.value });
//   };

//   const handleReset = () => {
//     setFilters({
//       boardID: 'IB DP',
//       sourceID: '',
//       grade: '',
//       subjectLevelID: '',
//       paperID: '',
//       subjectIDs: '',
//       topicID: '',
//       subtopicID: '',
//       rubricsID: ''
//     });
//   };

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const renderSelectField = (label, fieldName, options) => (
//     <Grid item xs={6} md={4}>
//       <FormControl fullWidth size="small" className="mt-3">
//         <InputLabel htmlFor={fieldName}>{label}</InputLabel>
//         <Select
//           id={fieldName}
//           value={filters[fieldName]}
//           onChange={(event) => handleSelectChange(event, fieldName)}
//         >
//           <MenuItem value="">{`Select ${label}`}</MenuItem>
//           {options.map(option => (
//             <MenuItem key={option} value={option}>{option}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Grid>
//   );

//   return (
//     <Fragment>
//       <Container maxWidth='xxl' style={{}} className='bg-gray-100'>
//         <div className=' mt-4 mb-4 text-black w-8 h-8'>
//           <Button onClick={handleGoBack}>
//             <ArrowLeft size={24} />
//           </Button>
//         </div>
//         <Card>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Accordion defaultExpanded>
//                 <AccordionSummary>
//                   <div className='flex flex-row justify-between'>
//                     <Typography className='text-lg'>Question Filter</Typography>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className='ml-4'
//                     >
//                       <polyline points="6 9 12 15 18 9"></polyline>
//                     </svg>
//                   </div>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Grid container spacing={2} style={{ padding: '20px' }}>
//                     {renderSelectField('Boards', 'boardID', ['IB DP', 'IB MYP'])}

//                     {filters.boardID === 'IB MYP' && (
//                       <>
//                         {renderSelectField('Grade', 'grade', ['MYP 1', 'MYP 2', 'MYP 3', 'MYP 4', 'MYP 5'])}
//                         {renderSelectField('Subject', 'subjectIDs', ['Math', 'Science', 'English'])}
//                       </>
//                     )}

//                     {filters.boardID === 'IB DP' && (
//                       <>
//                         {renderSelectField('Subject', 'subjectIDs', ['Maths Extended', 'Maths Standard'])}
//                         {renderSelectField('Subject Level', 'subjectLevelID', ['HL', 'SL'])}
//                       </>
//                     )}

//                     {renderSelectField('Source', 'sourceID', ['School Assignment', 'Test Book', 'Question Bank'])}
//                     {renderSelectField('Paper', 'paperID', ['Paper 1', 'Paper 2', 'Paper 3'])}
//                     {renderSelectField('Topic', 'topicID', ['Algebra', 'Functions'])}
//                     {renderSelectField('Subtopic', 'subtopicID', ['Absolute Values', 'Irrational Numbers'])}
//                     {renderSelectField('Rubrics', 'rubricsID', ['Comments Only', 'Achievement Level', 'Criteria with Points'])}
//                   </Grid>
//                   <div className="button-container flex justify-end">
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       onClick={handleReset}
//                       sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}
//                     >
//                       Reset
//                     </Button>
//                   </div>
//                 </AccordionDetails>
//               </Accordion>
//             </Grid>
//           </Grid>
//         </Card>
//       </Container>
//     </Fragment>
//   );
// };

// export default FilterForm;



// import React, { Fragment, useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Button, FormControl, InputLabel, MenuItem, Select, Grid, Typography, Container, Card } from '@mui/material';
// import { ArrowLeft } from 'react-feather';

// const FilterForm = () => {
//   const [boardID, setBoardID] = useState('IB DP');
//   const [sourceID, setSourceID] = useState('');
//   const [grade, setGrade] = useState('');
//   const [subjectLevelID, setSubjectLevelID] = useState('');
//   const [paperID, setPaperID] = useState('');
//   const [subjectIDs, setSubjectIDs] = useState('');
//   const [topicID, setTopicID] = useState('');
//   const [subtopicID, setSubtopicID] = useState('');
//   const [rubricsID, setRubricsID] = useState('');


//   const handleBoardChange = (event) => {
//     setBoardID(event.target.value);
//     setGrade('');
//     setSourceID('');
//     setSubjectLevelID('');
//     setPaperID('');
//     setSubjectIDs('');
//     setTopicID('');
//     setSubtopicID('');
//     setRubricsID('');
//   };

//   const handleSourceChange = (event) => {
//     setSourceID(event.target.value);
//   };

//   const handleSubjectLevelChange = (event) => {
//     setSubjectLevelID(event.target.value);
//   };

//   const handlePaperChange = (event) => {
//     setPaperID(event.target.value);
//   };

//   const handleSubjectChange = (event) => {
//     setSubjectIDs(event.target.value);
//   };

//   const handleTopicChange = (event) => {
//     setTopicID(event.target.value);
//   };

//   const handleSubtopicChange = (event) => {
//     setSubtopicID(event.target.value);
//   };
//   const handleGradeChange = (event) => {
//     setGrade(event.target.value);
//   };
  
  
//   const handleRubricsChange = (event) => {
//     setRubricsID(event.target.value);
//   };
//   const handleReset = () => {
//     setBoardID('IB DP');
//     setGrade('');
//     setSourceID('');
//     setSubjectLevelID('');
//     setPaperID('');
//     setSubjectIDs('');
//     setTopicID('');
//     setSubtopicID('');
//     setRubricsID('');
//   };

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   return (
//     <Fragment>
//       <Container maxWidth='xxl' style={{}} className='bg-gray-100'>
//         <div className=' mt-4 mb-4 text-black w-8 h-8'>
//           <Button onClick={handleGoBack}>
//             <ArrowLeft size={24} />
//           </Button>
//         </div>
//         <Card>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Accordion defaultExpanded>
//                 <AccordionSummary>
//                   <div className='flex flex-row justify-between'>
//                     <Typography className='text-lg'>Question Filter</Typography>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className='ml-4'
//                     >
//                       <polyline points="6 9 12 15 18 9"></polyline>
//                     </svg>
//                   </div>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Grid container spacing={2} style={{ padding: '20px' }}>
//                     <Grid item xs={6} md={4}>
//                       <FormControl fullWidth size="small" className="mt-3">
//                         <InputLabel htmlFor="boardID">Boards</InputLabel>
//                         <Select
//                           id="boardID"
//                           value={boardID}
//                           label="Boards"
//                           onChange={handleBoardChange}
//                         >
//                           <MenuItem value="">Select Board</MenuItem>
//                           <MenuItem value="IB DP">IB DP</MenuItem>
//                           <MenuItem value="IB MYP">IB MYP</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>

//                     {boardID === 'IB MYP' && (
//                       <>
//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="grade">Grade</InputLabel>
//                             <Select
//                               id="grade"
//                               name="grade"
//                               label="Grade"
//                               value={grade}
//                               onChange={handleGradeChange}
//                             >
//                               <MenuItem value="">Select Grade</MenuItem>
//                               <MenuItem value="MYP 1">MYP 1</MenuItem>
//                               <MenuItem value="MYP 2">MYP 2</MenuItem>
//                               <MenuItem value="MYP 3">MYP 3</MenuItem>
//                               <MenuItem value="MYP 4">MYP 4</MenuItem>
//                               <MenuItem value="MYP 5">MYP 5</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="subjectID">Subject</InputLabel>
//                             <Select
//                               id="subjectID"
//                               name="subjectID"
//                               label="Subject"
//                               value={subjectIDs}
//                               onChange={handleSubjectChange}
//                             >
//                               <MenuItem value="">Select Subject</MenuItem>
//                               <MenuItem value="Math">Math</MenuItem>
//                               <MenuItem value="Science">Science</MenuItem>
//                               <MenuItem value="English">English</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="sourceID">Source</InputLabel>
//                             <Select
//                               id="sourceID"
//                               name="sourceID"
//                               label="Source"
//                               value={sourceID}
//                               onChange={handleSourceChange}
//                             >
//                               <MenuItem value="">Select Source</MenuItem>
//                               <MenuItem value="School Assignment">School Assignment</MenuItem>
//                               <MenuItem value="Test Book">Test Book</MenuItem>
//                               <MenuItem value="Question Bank">Question Bank</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="topicID">Topic</InputLabel>
//                             <Select
//                               id="topicID"
//                               name="topicID"
//                               label="Topic"
//                               value={topicID}
//                               onChange={handleTopicChange}
//                             >
//                               <MenuItem value="">Select Topic</MenuItem>
//                               <MenuItem value="Algebra">Algebra</MenuItem>
//                               <MenuItem value="Functions">Functions</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="subtopicID">Subtopic</InputLabel>
//                             <Select
//                               id="subtopicID"
//                               name="subtopicID"
//                               label="Subtopic"
//                               value={subtopicID}
//                               onChange={handleSubtopicChange}
//                             >
//                               <MenuItem value="">Select Subtopic</MenuItem>
//                               <MenuItem value="Absolute Values">Absolute Values</MenuItem>
//                               <MenuItem value="Irrational Numbers">Irrational Numbers</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="rubicsID">Rubrics</InputLabel>
//                             <Select
//                               id="rubicsID"
//                               name="rubicsID"
//                               label="Rubrics"
//                               value={rubricsID} 
//                               onChange={handleRubricsChange} 
//                             >
//                               <MenuItem value="">Select Rubrics</MenuItem>
//                               <MenuItem value="Comments Only">Comments Only</MenuItem>
//                               <MenuItem value="Achievement Level">Achievement Level</MenuItem>
//                               <MenuItem value="Criteria with Points">Criteria with Points</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                       </>
//                     )}

//                     {boardID === 'IB DP' && (
//                       <>
//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="subjectIDs">Subject</InputLabel>
//                             <Select
//                               id="subjectIDs"
//                               name="subjectIDs"
//                               label="Subject"
//                               value={subjectIDs}
//                               onChange={handleSubjectChange}
//                             >
//                               <MenuItem value="">Select Subject</MenuItem>
//                               <MenuItem value="Maths Extended">Maths Extended</MenuItem>
//                               <MenuItem value="Maths Standard">Maths Standard</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="subjectLevelID">Subject Level</InputLabel>
//                             <Select
//                               id="subjectLevelID"
//                               name="subjectLevelID"
//                               label="Subject Level"
//                               value={subjectLevelID}
//                               onChange={handleSubjectLevelChange}
//                             >
//                               <MenuItem value="">Select Subject Level</MenuItem>
//                               <MenuItem value="HL">HL</MenuItem>
//                               <MenuItem value="SL">SL</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="sourceID">Source</InputLabel>
//                             <Select
//                               id="sourceID"
//                               name="sourceID"
//                               label="Source"
//                               value={sourceID}
//                               onChange={handleSourceChange}
//                             >
//                               <MenuItem value="">Select Source</MenuItem>
//                               <MenuItem value="School Assignment">School Assignment</MenuItem>
//                               <MenuItem value="Test Book">Test Book</MenuItem>
//                               <MenuItem value="Question Bank">Question Bank</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="paperID">Paper</InputLabel>
//                             <Select
//                               id="paperID"
//                               name="paperID"
//                               label="Paper"
//                               value={paperID}
//                               onChange={handlePaperChange}
//                             >
//                               <MenuItem value="">Select Paper</MenuItem>
//                               <MenuItem value="Paper 1">Paper 1</MenuItem>
//                               <MenuItem value="Paper 2">Paper 2</MenuItem>
//                               <MenuItem value="Paper 3">Paper 3</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="topicID">Topic</InputLabel>
//                             <Select
//                               id="topicID"
//                               name="topicID"
//                               label="Topic"
//                               value={topicID}
//                               onChange={handleTopicChange}
//                             >
//                               <MenuItem value="">Select Topic</MenuItem>
//                               <MenuItem value="Algebra">Algebra</MenuItem>
//                               <MenuItem value="Functions">Functions</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>

//                         <Grid item xs={6} md={4}>
//                           <FormControl fullWidth size="small" className="mt-3">
//                             <InputLabel htmlFor="subtopicID">Subtopic</InputLabel>
//                             <Select
//                               id="subtopicID"
//                               name="subtopicID"
//                               label="Subtopic"
//                               value={subtopicID}
//                               onChange={handleSubtopicChange}
//                             >
//                               <MenuItem value="">Select Subtopic</MenuItem>
//                               <MenuItem value="Absolute Values">Absolute Values</MenuItem>
//                               <MenuItem value="Irrational Numbers">Irrational Numbers</MenuItem>
//                             </Select>
//                           </FormControl>
//                         </Grid>
//                       </>
//                     )}
//                   </Grid>
//                   <div className="button-container flex justify-end">
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       onClick={handleReset}
//                       sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}
//                     >
//                       Reset
//                     </Button>
//                   </div>
//                 </AccordionDetails>
//               </Accordion>
//             </Grid>
//           </Grid>
//         </Card>
//       </Container>
//     </Fragment>
//   );
// };

// export default FilterForm;
import React, { Fragment, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, FormControl, InputLabel, MenuItem, Select, Grid, Typography, Container, Card } from '@mui/material';
import { ArrowLeft } from 'react-feather';

const FilterForm = ({ setBoardID }) => {
  const [boardID, setBoardStateID] = useState('IB DP');
  const [sourceID, setSourceID] = useState('');
  const [grade, setGrade] = useState('');
  const [subjectLevelID, setSubjectLevelID] = useState('');
  const [paperID, setPaperID] = useState('');
  const [subjectIDs, setSubjectIDs] = useState('');
  const [topicID, setTopicID] = useState('');
  const [subtopicID, setSubtopicID] = useState('');
  const [rubricsID, setRubricsID] = useState('');

  const handleBoardChange = (event) => {
    const newBoardID = event.target.value;
    setBoardStateID(newBoardID);
    setBoardID(newBoardID);
    setGrade('');
    setSourceID('');
    setSubjectLevelID('');
    setPaperID('');
    setSubjectIDs('');
    setTopicID('');
    setSubtopicID('');
    setRubricsID('');
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
  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleRubricsChange = (event) => {
    setRubricsID(event.target.value);
  };

  const handleReset = () => {
    setBoardStateID('IB DP');
    setGrade('');
    setSourceID('');
    setSubjectLevelID('');
    setPaperID('');
    setSubjectIDs('');
    setTopicID('');
    setSubtopicID('');
    setRubricsID('');
    setBoardID('IB DP');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Fragment>
      <Container maxWidth='xxl' style={{}} className='bg-gray-100'>
        <div className='mt-4 mb-4 text-black w-8 h-8'>
          <Button onClick={handleGoBack}>
            <ArrowLeft size={24} />
          </Button>
        </div>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Accordion defaultExpanded>
                <AccordionSummary>
                  <div className='flex flex-row justify-between'>
                    <Typography className='text-lg mb-[-20px]'>Question Filter</Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className='ml-4'
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2} style={{  }}>
                    <Grid item xs={6} md={4}>
                      <FormControl fullWidth size="small" className="mt-3">
                        <InputLabel htmlFor="boardID">Boards</InputLabel>
                        <Select
                          id="boardID"
                          value={boardID}
                          label="Boards"
                          onChange={handleBoardChange}
                        >
                          <MenuItem value="">Select Board</MenuItem>
                          <MenuItem value="IB DP">IB DP</MenuItem>
                          <MenuItem value="IB MYP">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    {boardID === 'IB MYP' && (
                      <>
                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="grade">Grade</InputLabel>
                            <Select
                              id="grade"
                              name="grade"
                              label="Grade"
                              value={grade}
                              onChange={handleGradeChange}
                            >
                              <MenuItem value="">Select Grade</MenuItem>
                              <MenuItem value="MYP 1">MYP 1</MenuItem>
                              <MenuItem value="MYP 2">MYP 2</MenuItem>
                              <MenuItem value="MYP 3">MYP 3</MenuItem>
                              <MenuItem value="MYP 4">MYP 4</MenuItem>
                              <MenuItem value="MYP 5">MYP 5</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="subjectID">Subject</InputLabel>
                            <Select
                              id="subjectID"
                              name="subjectID"
                              label="Subject"
                              value={subjectIDs}
                              onChange={handleSubjectChange}
                            >
                              <MenuItem value="">Select Subject</MenuItem>
                              <MenuItem value="Math">Math</MenuItem>
                              <MenuItem value="Science">Science</MenuItem>
                              <MenuItem value="English">English</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="sourceID">Source</InputLabel>
                            <Select
                              id="sourceID"
                              name="sourceID"
                              label="Source"
                              value={sourceID}
                              onChange={handleSourceChange}
                            >
                              <MenuItem value="">Select Source</MenuItem>
                              <MenuItem value="School Assignment">School Assignment</MenuItem>
                              <MenuItem value="Test Book">Test Book</MenuItem>
                              <MenuItem value="Question Bank">Question Bank</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="topicID">Topic</InputLabel>
                            <Select
                              id="topicID"
                              name="topicID"
                              label="Topic"
                              value={topicID}
                              onChange={handleTopicChange}
                            >
                              <MenuItem value="">Select Topic</MenuItem>
                              <MenuItem value="Algebra">Algebra</MenuItem>
                              <MenuItem value="Functions">Functions</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="subtopicID">Subtopic</InputLabel>
                            <Select
                              id="subtopicID"
                              name="subtopicID"
                              label="Subtopic"
                              value={subtopicID}
                              onChange={handleSubtopicChange}
                            >
                              <MenuItem value="">Select Subtopic</MenuItem>
                              <MenuItem value="Absolute Values">Absolute Values</MenuItem>
                              <MenuItem value="Irrational Numbers">Irrational Numbers</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="rubicsID">Rubrics</InputLabel>
                            <Select
                              id="rubicsID"
                              name="rubicsID"
                              label="Rubrics"
                              value={rubricsID} 
                              onChange={handleRubricsChange} 
                            >
                              <MenuItem value="">Select Rubrics</MenuItem>
                              <MenuItem value="Comments Only">Comments Only</MenuItem>
                              <MenuItem value="Achievement Level">Achievement Level</MenuItem>
                              <MenuItem value="Criteria with Points">Criteria with Points</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    )}

                    {boardID === 'IB DP' && (
                      <>
                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="subjectIDs">Subject</InputLabel>
                            <Select
                              id="subjectIDs"
                              name="subjectIDs"
                              label="Subject"
                              value={subjectIDs}
                              onChange={handleSubjectChange}
                            >
                              <MenuItem value="">Select Subject</MenuItem>
                              <MenuItem value="Maths Extended">Maths Extended</MenuItem>
                              <MenuItem value="Maths Standard">Maths Standard</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="subjectLevelID">Subject Level</InputLabel>
                            <Select
                              id="subjectLevelID"
                              name="subjectLevelID"
                              label="Subject Level"
                              value={subjectLevelID}
                              onChange={handleSubjectLevelChange}
                            >
                              <MenuItem value="">Select Subject Level</MenuItem>
                              <MenuItem value="HL">HL</MenuItem>
                              <MenuItem value="SL">SL</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="sourceID">Source</InputLabel>
                            <Select
                              id="sourceID"
                              name="sourceID"
                              label="Source"
                              value={sourceID}
                              onChange={handleSourceChange}
                            >
                              <MenuItem value="">Select Source</MenuItem>
                              <MenuItem value="School Assignment">School Assignment</MenuItem>
                              <MenuItem value="Test Book">Test Book</MenuItem>
                              <MenuItem value="Question Bank">Question Bank</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="paperID">Paper</InputLabel>
                            <Select
                              id="paperID"
                              name="paperID"
                              label="Paper"
                              value={paperID}
                              onChange={handlePaperChange}
                            >
                              <MenuItem value="">Select Paper</MenuItem>
                              <MenuItem value="Paper 1">Paper 1</MenuItem>
                              <MenuItem value="Paper 2">Paper 2</MenuItem>
                              <MenuItem value="Paper 3">Paper 3</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="topicID">Topic</InputLabel>
                            <Select
                              id="topicID"
                              name="topicID"
                              label="Topic"
                              value={topicID}
                              onChange={handleTopicChange}
                            >
                              <MenuItem value="">Select Topic</MenuItem>
                              <MenuItem value="Algebra">Algebra</MenuItem>
                              <MenuItem value="Functions">Functions</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={6} md={4}>
                          <FormControl fullWidth size="small" className="mt-3">
                            <InputLabel htmlFor="subtopicID">Subtopic</InputLabel>
                            <Select
                              id="subtopicID"
                              name="subtopicID"
                              label="Subtopic"
                              value={subtopicID}
                              onChange={handleSubtopicChange}
                            >
                              <MenuItem value="">Select Subtopic</MenuItem>
                              <MenuItem value="Absolute Values">Absolute Values</MenuItem>
                              <MenuItem value="Irrational Numbers">Irrational Numbers</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    )}
                  </Grid>
                  <div className="button-container flex justify-end">
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={handleReset}
                      sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}
                    >
                      Reset
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Fragment>
  );
};
export default FilterForm;