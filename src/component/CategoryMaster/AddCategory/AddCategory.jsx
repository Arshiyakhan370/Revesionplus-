import React from 'react';
import {
  Tab,
  Tabs,
  Container,
  Box, 
} from '@mui/material';
import {
  Layers,
  ChevronRight,
  FileText,
  FilePlus,
  Description, 
  AddBox,
  MenuBook,
  LibraryBooks,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';
import SubjectLevelAdd from './SubjectLevelAdd';
import SubjectAdd from './SubjectAdd';
import SourceAdd from './SourceAdd';
import PaperAdd from './PaperAdd';
import TopicAdd from './TopicAdd';
import SubTopicAdd from './SubTopicAdd';

const AddCategory = ({isSidebarClosed}) => {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  const sidebarWidth = isSidebarClosed ? '79px' : '270px';
  const mainComponentWidth = isSmallScreen ? '100%' : `calc(100% - ${sidebarWidth})`;
  
  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? '79px' : (isSmallScreen ? '0' : '270px'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  const inputStyle = { height: '35px' };
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
        <Box sx={{ mt: 3, p: 3 }}>
        {value === 0 && (
         <SubjectAdd/>
                  )}
                  {value === 1 && (
        <SubjectLevelAdd/>
                  )}
                  {value === 2 && (
         <SourceAdd/>
                  )}
                  {value === 3 && (
         <PaperAdd/>
                  )}
                  {value === 4 && (
          <TopicAdd/>
                  )}
                  {value === 5 && (
      <SubTopicAdd/>
                  )}
        </Box>
      {/* </Paper> */}
    </Container>
  );
};

export default AddCategory;
