import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const  CopyQuestionAlert = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className='text-yellow-500'>Confirm Copy</DialogTitle>
      <DialogContent>
        your data is copy successfully
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
        Cancel
        </Button>
       
      </DialogActions>
    </Dialog>
  );
};

export default CopyQuestionAlert