    import React, { useState } from 'react';
    import Dialog from '@mui/material/Dialog';
    import DialogTitle from '@mui/material/DialogTitle';
    import DialogContent from '@mui/material/DialogContent';
    import DialogActions from '@mui/material/DialogActions';
    import Button from '@mui/material/Button';
    
    const AlertMessage = ({ open, onClose, onConfirmDelete }) => {
      return (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle className='text-red-500'>Confirm Deletion</DialogTitle>
          <DialogContent>
            Are you sure you want to delete?
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={onConfirmDelete} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      );
    };
    

export default AlertMessage
