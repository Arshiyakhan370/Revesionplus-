import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Avatar, Paper, Backdrop } from '@mui/material';

const UserProfileDialog = ({ data, open, onClose }) => {
  const { success, user } = data;

  if (!success || !user) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xxl" BackdropComponent={Backdrop} BackdropProps={{ sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
      <DialogContent sx={{ background: 'linear-gradient(to bottom right, #87CEEB, #0000FF)', overflow: 'hidden' }}>
        <Grid container justifyContent="center" alignItems="center" height="100vh">
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ borderRadius: 4, p: 3, background: 'white', maxWidth: 600, margin: 'auto', overflow: 'hidden' }}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                  <Avatar alt="Profile" src={user.profile_photo_url} sx={{ width: 80, height: 80, margin: 'auto' }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">{user.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom>Email: {user.email}</Typography>
                  <Typography variant="body1" gutterBottom>Role: {user.role}</Typography>
                  <Typography variant="body1" gutterBottom>Mobile: {user.mobile}</Typography>
                  <Typography variant="body1" gutterBottom>Expire Date: {user.expire_date}</Typography>
                </Grid>
              </Grid>
              <DialogActions sx={{ justifyContent: 'center' }}>
                <Button onClick={onClose} color="primary">Close</Button>
              </DialogActions>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileDialog;
