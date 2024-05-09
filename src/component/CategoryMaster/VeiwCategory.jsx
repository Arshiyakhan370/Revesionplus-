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
      const sidebarWidth = isSidebarClosed ? '79px' : '270px';
      const mainComponentWidth = isSmallScreen ? '100%' : `calc(100% - ${sidebarWidth})`;
      
      const styles = {
        width: mainComponentWidth,
        marginLeft: isSidebarClosed ? '79px' : (isSmallScreen ? '0' : '270px'),
        transition: 'width 0.3s, margin-left 0.3s',
      };
      return (
        <Container maxWidth="xxl" disableGutters style={styles} className='bg-gray-100'>
        <div className='text-center flex justify-center'>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className='text-center'>
          <Tab icon={<Layers />} label="Subject" />
            <Tab icon={<Layers />} label="Subject Level" />
            <Tab icon={<Description/>} label="Source" />
            <Tab icon={< AddBox/>} label="Paper" />
            <Tab icon={<MenuBook/>} label="Topic" />
            <Tab icon={< LibraryBooks/>} label="Subtopic" />
          </Tabs>
          </div>
  <div className='border border-gray-500 mt-4 mb-2'></div>
     
      {value === 0 && (
            <Subject/>
          )} 
              
          {value === 1 && (
            <SubjectLevel/>
          )} 
          {value === 2 && (
            <Source/>
          )}
          {value === 3 && (
            <PaperLevel/>
          )}
          {value === 4 && (
            <TopicLevel/>
          )}
          {value === 5 && (
            <SubTopic/>
          )}
        {/* </Paper> */}
        </Container>
    
      );
    };
    

export default VeiwCategory