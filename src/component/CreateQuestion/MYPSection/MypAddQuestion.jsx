import React, { useState } from 'react';
import { Button, IconButton, Box, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { AddIcCallOutlined } from '@mui/icons-material';
import Description from '../Description';
import Questions from '../Questions';

const MypAddQuestion = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  
  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowQuestion(false);
  };

  const handleQuestionsClick = () => {
    setShowQuestion(true);
    setShowDescription(false);
  };

  return (
    <Box sx={{ width: '100%', display: 'block', textAlign: 'center' }}>
      <IconButton color="error" size="large" sx={{ margin: 2 }}>
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
          {/* Uncomment and implement the library button if needed */}
          {/* <Button
            variant="outlined"
            startIcon={<DatabaseIcon />}
          >
            From Library
          </Button> */}
        </Stack>
      </Box>
      <Box sx={{ mt: 2 }}>
        {showDescription && (
          <Description/>
        ) 
        }
        {showQuestion && (
          <Questions/>
        ) 
        }
      </Box>
    </Box>
  );
};

export default MypAddQuestion;
