import React, { useState } from 'react';
import { Button, Box, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { AddIcCallOutlined } from '@mui/icons-material';
import Description from '../Description';
import Questions from '../Questions';

const MypAddQuestion = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const [buttonsVisible, setButtonsVisible] = useState(true);

  const handleDescriptionClick = () => {
    setActiveComponent(prev => (prev === 'Description' ? '' : 'Description'));
  };

  const handleQuestionsClick = () => {
    setActiveComponent(prev => (prev === 'Questions' ? '' : 'Questions'));
  };

  const handleCloseClick = () => {
    setActiveComponent('');
    setButtonsVisible(false);
  };

  const handleAddClick = () => {
    setButtonsVisible(true);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '20px' }}>
      <Box sx={{ marginLeft: '20px' }}>
        <Button
          color="primary"
          size="large"
          onClick={buttonsVisible ? handleCloseClick : handleAddClick}
          variant="outlined"
          sx={{
            border: '1px solid',
            borderColor: buttonsVisible ? 'red' : 'black',
            background: buttonsVisible ? 'white' : "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
            color: buttonsVisible ? 'red' : 'white',
            borderRadius: '20px',
            padding: '10px 20px',
            marginLeft: '20px'
          }}
          startIcon={buttonsVisible ? <CloseIcon /> : <AddIcon />}
        >
          {buttonsVisible ? 'Close' : 'Add'}
        </Button>
        {buttonsVisible && (
          <Box sx={{ mt: 2, ml: 8 }} style={{ marginLeft: "40px" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Button
                variant="outlined"
                startIcon={<AddIcCallOutlined />}
                onClick={handleDescriptionClick}
              >
                Description
              </Button>
              <Button
                variant="outlined"
                startIcon={<QuestionMarkIcon />}
                onClick={handleQuestionsClick}
              >
                Questions
              </Button>
            </Stack>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          {activeComponent === 'Description' && <Description />}
          {activeComponent === 'Questions' && <Questions />}
        </Box>
      </Box>
    </Box>
  );
};

export default MypAddQuestion;
