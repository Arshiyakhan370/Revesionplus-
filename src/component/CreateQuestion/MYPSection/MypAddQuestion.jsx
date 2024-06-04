import React, { useState } from 'react';
import { Button, IconButton, Box, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { AddIcCallOutlined } from '@mui/icons-material';
import Description from '../Description';
import Questions from '../Questions';

const MypAddQuestion = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const handleDescriptionClick = () => {
    setActiveComponent(prev => (prev === 'Description' ? '' : 'Description'));
  };

  const handleQuestionsClick = () => {
    setActiveComponent(prev => (prev === 'Questions' ? '' : 'Questions'));
  };

  return (
    <Box sx={{ width: '100%', display: 'block', textAlign: 'center' }}>
      <IconButton
        color="error"
        size="large"
        sx={{
          margin: 2,
          border: '2px solid red',
          borderRadius: '50%',
          padding: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ mt: 2 }}>
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
      <Box sx={{ mt: 2 }}>
        {activeComponent === 'Description' && <Description />}
        {activeComponent === 'Questions' && <Questions />}
      </Box>
    </Box>
  );
};

export default MypAddQuestion;
