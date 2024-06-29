import React, { useState } from 'react';
import { Tab, Tabs, Container, Box } from '@mui/material';
import { Layers, Description, AddBox, MenuBook, LibraryBooks } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';
import SubjectLevelAdd from '../SubjectLevelComponent/SubjectLevelAdd';
import SubjectAdd from '../SubjectComponent/SubjectAdd';
import SourceAdd from '../SourceComponent/SourceAdd';
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

const AddCategory = ({ isSidebarClosed }) => {
  const [value, setValue] = useState(0);
  const [selectedBoard, setSelectedBoard] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBoardChange = (board) => {
    setSelectedBoard(board);
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
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className='text-center mt-16'>
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              label={getTabLabel(tab.label)}
            />
          ))}
        </Tabs>
      </div>
      <Box sx={{ mt: 3, p: 3 }}>
        {tabData.map((tab, index) => (
          <React.Fragment key={index}>
            {value === index && React.cloneElement(tab.component, { selectedBoard, handleBoardChange })}
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );

  function getTabLabel(originalLabel) {
    if (selectedBoard === '665fffe9e02ec586b271fba2') {
      switch (originalLabel) {
        case "Subject": return "Grade";
        case "Subject Level": return "Subject";
        case "Source": return "Source";
        case "Paper": return "Topic";
        case "Topic": return "Subtopic";
        case "Subtopic": return "Rubics";
        default: return originalLabel;
      }
    }
    return originalLabel;
  }
};

export default AddCategory;
