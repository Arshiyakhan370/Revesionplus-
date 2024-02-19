import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const EditDailog = ({ open, onClose, onConfirmEdit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-blue-600">Confirm Edit</DialogTitle>
      <DialogContent>
        <p>You can edit your data</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
         
        </Button>
        <Button onClick={onConfirmEdit} color="primary">
        Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default EditDailog