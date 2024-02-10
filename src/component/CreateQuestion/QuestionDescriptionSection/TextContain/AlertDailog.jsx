import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Alert } from "@mui/material";

const AlertDailog = ({ open, handleCloseAlert, alertMessage }) => {
  return (
    <Dialog open={open} onClose={handleCloseAlert}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <Alert severity="error">{alertMessage}</Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAlert}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};




export default AlertDailog