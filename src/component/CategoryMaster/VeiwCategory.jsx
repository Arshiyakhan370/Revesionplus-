    import React, { useState } from 'react';
    import { Tabs, Tab, Box, Container, Paper } from '@mui/material';
    import {
        Layers,
       Description, 
        AddBox,
        MenuBook,
        LibraryBooks,
        ChevronRight as ChevronRightIcon,
      } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';
import Subject from './Subject';
import SubjectLevel from './SubjectLevel';
import Source from './Source';
import PaperLevel from './PaperLevel';
import TopicLevel from './TopicLevel';
import SubTopic from './SubTopic';

    
    const VeiwCategory = ({isSidebarClosed}) => {
      const [value, setValue] = useState(0);
      const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const sidebarWidth = isSidebarClosed ? '80px' : '299px';
      const mainComponentWidth = isSmallScreen ? '100%' : `calc(100% - ${sidebarWidth})`;
      
      const styles = {
        width: mainComponentWidth,
        marginLeft: isSidebarClosed ? '90px' : (isSmallScreen ? '10px' : '299px'),
        transition: 'width 0.3s, margin-left 0.3s',
      };
      return (
        <Container maxWidth="xxl" disableGutters >
        <Paper  elevation={3}   style={styles} sx={{ p: 3,marginTop:'25px',background:'#f0f0f0', marginRight:'25px' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className='text-center'>
          <Tab icon={<Layers />} label="Subject" />
            <Tab icon={<ChevronRightIcon />} disabled />
            <Tab icon={<Layers />} label="Subject Level" />
            <Tab icon={<ChevronRightIcon />} disabled />
            <Tab icon={<Description/>} label="Source" />
            <Tab icon={<ChevronRightIcon />} disabled />
            <Tab icon={< AddBox/>} label="Paper" />
            <Tab icon={<ChevronRightIcon />} disabled />
            <Tab icon={<MenuBook/>} label="Topic" />
            <Tab icon={<ChevronRightIcon />} disabled />
            <Tab icon={< LibraryBooks/>} label="Subtopic" />
          </Tabs>
  <div className='border border-gray-500 mt-4 mb-2'></div>
       
          {value === 0 && (
            <Subject/>
          )}
          {value === 2 && (
            <SubjectLevel/>
          )}
          {value === 4 && (
            <Source/>
          )}
          {value === 6 && (
            <PaperLevel/>
          )}
          {value === 8 && (
            <TopicLevel/>
          )}
          {value === 10 && (
            <SubTopic/>
          )}
        </Paper>
        </Container>
    
      );
    };
    

export default VeiwCategory