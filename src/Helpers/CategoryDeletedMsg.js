import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const CategoryDeletedMsg = ({ open, onClose, handleDeleteClick }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className='text-red-500'>Delete Teacher</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this teacher?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleDeleteClick} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDeletedMsg;
