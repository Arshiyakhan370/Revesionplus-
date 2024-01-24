import React, { Fragment, useState } from 'react';
import { Tabs, Tab, Typography, Box, Container, Paper, Pagination ,Button, Card, CardContent, Grid} from '@mui/material';
import Nav from '../PracticeAssignment/Nav';
import { ArrowLeft } from 'react-feather';
import Navbar1 from '../Dashboard Components/Buttons1';


const data = [
  { label: 'John Doe', subjects: [
    { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
   { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
  
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Biology - Subject 1', date: '12-May-23', time: '04:00 PM', location: 'Room 103' },
    { content: 'Content for Biology - Subject 2', date: '15-May-23', time: '11:15 AM', location: 'Room 104' },
  ] },
  { label: 'Class 1', subjects: [
    { content: 'Content for Class 1 - Subject 1', date: '18-May-23', time: '02:30 PM', location: 'Room 105' },
    { content: 'Content for Class 1 - Subject 2', date: '20-May-23', time: '01:45 PM', location: 'Room 106' },
  ] },
{ label: 'John Doe', subjects: [
    { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
   { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
  
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Biology - Subject 1', date: '12-May-23', time: '04:00 PM', location: 'Room 103' },
    { content: 'Content for Biology - Subject 2', date: '15-May-23', time: '11:15 AM', location: 'Room 104' },
  ] },
  { label: 'Class 1', subjects: [
    { content: 'Content for Class 1 - Subject 1', date: '18-May-23', time: '02:30 PM', location: 'Room 105' },
    { content: 'Content for Class 1 - Subject 2', date: '20-May-23', time: '01:45 PM', location: 'Room 106' },
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
   { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
  
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Biology - Subject 1', date: '12-May-23', time: '04:00 PM', location: 'Room 103' },
    { content: 'Content for Biology - Subject 2', date: '15-May-23', time: '11:15 AM', location: 'Room 104' },
  ] },
  { label: 'Class 1', subjects: [
    { content: 'Content for Class 1 - Subject 1', date: '18-May-23', time: '02:30 PM', location: 'Room 105' },
    { content: 'Content for Class 1 - Subject 2', date: '20-May-23', time: '01:45 PM', location: 'Room 106' },
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
   { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
  
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Biology - Subject 1', date: '12-May-23', time: '04:00 PM', location: 'Room 103' },
    { content: 'Content for Biology - Subject 2', date: '15-May-23', time: '11:15 AM', location: 'Room 104' },
  ] },
  { label: 'Class 1', subjects: [
    { content: 'Content for Class 1 - Subject 1', date: '18-May-23', time: '02:30 PM', location: 'Room 105' },
    { content: 'Content for Class 1 - Subject 2', date: '20-May-23', time: '01:45 PM', location: 'Room 106' },
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
   { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
  
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Biology - Subject 1', date: '12-May-23', time: '04:00 PM', location: 'Room 103' },
    { content: 'Content for Biology - Subject 2', date: '15-May-23', time: '11:15 AM', location: 'Room 104' },
  ] },
  { label: 'Class 1', subjects: [
    { content: 'Content for Class 1 - Subject 1', date: '18-May-23', time: '02:30 PM', location: 'Room 105' },
    { content: 'Content for Class 1 - Subject 2', date: '20-May-23', time: '01:45 PM', location: 'Room 106' },
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
   { content: 'Content for Maths - Subject 1', date: '04-May-23', time: '08:09 PM', location: 'Room 101' },
    { content: 'Content for Maths - Subject 2', date: '05-May-23', time: '09:30 AM', location: 'Room 102' },
  
  ] },
  { label: 'John Doe', subjects: [
    { content: 'Content for Biology - Subject 1', date: '12-May-23', time: '04:00 PM', location: 'Room 103' },
    { content: 'Content for Biology - Subject 2', date: '15-May-23', time: '11:15 AM', location: 'Room 104' },
  ] },
  { label: 'Class 1', subjects: [
    { content: 'Content for Class 1 - Subject 1', date: '18-May-23', time: '02:30 PM', location: 'Room 105' },
    { content: 'Content for Class 1 - Subject 2', date: '20-May-23', time: '01:45 PM', location: 'Room 106' },
  ] },
];

const itemsPerPage = 5; 

  const PastClass = () => {
    const [value, setValue] = useState(0);
    const [page, setPage] = useState(1);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handlePageChange = (event, newPage) => {
      setPage(newPage);
    };
  
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);
  
    const handleGoBack = () => {
      window.history.back();
    };
  
    return (
      <Fragment>
        <Nav />
        <Navbar1 />
        <Container maxWidth='xl'>
          <div className='ml-10 mt-8 text-black w-8 h-8'>
            <Button onClick={handleGoBack}>
            <ArrowLeft size={24} />
            </Button>
          </div>
  
          <Paper>
            <Tabs value={value} onChange={handleChange} centered>
              {paginatedData.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>
  
            {paginatedData.map((tab, index) => (
              <TabPanel key={index} value={value} index={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
                      {tab.label}
                    </Typography>
                  </Grid>
                  {tab.subjects.map((subject, subIndex) => (
                    <Grid item xs={12} md={4} key={subIndex}>
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            {subject.date}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Time: {subject.time}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Location: {subject.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {subject.content}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            ))}
  
            <Pagination
              count={Math.ceil(data.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              sx={{ marginTop: '20px', alignSelf: 'center' }}
            />
          </Paper>
        </Container>
      </Fragment>
    );
  };
  
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  };
  
  export default PastClass;
  