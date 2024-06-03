import React, { useState } from 'react';
import {
  Modal,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
  Alert,
  Box,
} from '@mui/material';

const AchievementLevelModel = ({ open, handleClose }) => {
    const modalStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    
      return (
        <Modal open={open} sx={modalStyle}>
      <div className="ant-modal-content">
        <button type="button" aria-label="Close" className="ant-modal-close" onClick={handleClose}>
          <span className="ant-modal-close-x">
            <span role="img" aria-label="close" className="anticon anticon-close ant-modal-close-icon">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </span>
          </span>
        </button>
        <div className="ant-modal-header">
          <div className="ant-modal-title" id="rc_unique_0">
            <span>Convert to achievement level</span>
            <span role="img" aria-label="question-circle" className="anticon anticon-question-circle" style={{ marginLeft: '5px' }}>
              <svg viewBox="64 64 896 896" focusable="false" data-icon="question-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path>
              </svg>
            </span>
          </div>
        </div>
        <Alert severity="error">
      Criteria total must be at least 8 or higher to use this tool.
    </Alert>
        <div className="ant-modal-body">
          <hr />
          <Grid container alignItems="center">
            {[...Array(9)].map((_, index) => (
              <Grid item xs={1} key={index} className="ant-col-offset-1 level-label-heading">
                <div className="level-box">
                  <div className="level-circle"></div>
                </div>
                {/* <Typography variant="subtitle1" className="level-label">
                  Level {index + 1}
                </Typography> */}
                {index < 8 && (
                  <div className="main-separator">
                    <div className="main-vertical-line"></div>
                  </div>
                )}
              </Grid>
            ))}
          </Grid>
          <Grid container className='flex justify-center'>
          <Grid item xs={1} className='mr-8'>
          <TextField
                    label="Criteria"
                    variant="outlined"
                    size="small"
                    disabled
                    // value={criteria}
                  />
                  </Grid>
            {[...Array(9).keys()].map((_, index) => (
              <React.Fragment key={index}>
                <Grid item xs={1}>
                  <TextField
                    label={`Level ${index + 1}`}
                    variant="outlined"
                    size="small"
                    disabled
                    value={index === 0 ? 0 : ''}
                  />
                 <Box display="flex" alignItems="center">
      <Box
        height="16px"
        width="1px"
        bgcolor="#374151" // Slate-600 color
        marginRight="-14px"
      ></Box>
      <Box
      marginTop="20px"
        height="40px" // Change height to 40px to center the circle vertically
        width="40px"
        border={1}
        borderColor="black"
        borderRadius="50%"
        bgcolor="#1E3A8A" // Blue-900 color
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft="10px"
      >
        <Typography variant="body1" color="textPrimary">
          {/* Content inside the circle */}
        </Typography>
      </Box>
    </Box>

                </Grid>
                {index < 9 && (
                  <Grid item>
                    <Divider orientation="vertical" style={{ backgroundColor: 'grey', height: '100%' }} />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </div>
    
          <div className='flex justify-center mt-4 mb-4'>
            <Button variant="contained" color="primary" disabled>
              Calculate and Assign
            </Button>
          </div>
        </div>
  
    </Modal>
  );
}

export default AchievementLevelModel;
