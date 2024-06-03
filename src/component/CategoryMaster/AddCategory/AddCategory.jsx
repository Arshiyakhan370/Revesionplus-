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
} from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';
import SubjectLevelAdd from './SubjectLevelComponent/SubjectLevelAdd';
import SubjectAdd from '../SubjectComponent/SubjectAdd';
import SourceAdd from './SourceAdd';
import PaperAdd from './PaperAdd';
import TopicAdd from './TopicAdd';
import SubTopicAdd from './SubTopicAdd';

const tabData = [
  { icon: <Layers />, label: "Subject", component: <SubjectAdd /> },
  { icon: <Layers />, label: "Subject Level", component: <SubjectLevelAdd /> },
  { icon: <Description />, label: "Source", component: <SourceAdd /> },
  { icon: <AddBox />, label: "Paper", component: <PaperAdd /> },
  { icon: <MenuBook />, label: "Topic", component: <TopicAdd /> },
  { icon: <LibraryBooks />, label: "Subtopic", component: <SubTopicAdd /> },
];

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

  return (
    <Container maxWidth="xxl" disableGutters style={styles} className='bg-gray-100 '>
      <div className='text-center flex justify-center'>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className='text-center mt-16'>
          {tabData.map((tab, index) => (
            <Tab key={index} icon={tab.icon} label={tab.label} />
          ))}
        </Tabs>
      </div>
      <Box sx={{ mt: 3 , p: 3 }}>
        {tabData.map((tab, index) => (
          <React.Fragment key={index}>
            {value === index && tab.component}
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );
};

export default AddCategory;
