import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Avatar, Paper, Backdrop } from '@mui/material';
import { useGetProfileDataListQuery } from '../../../Services/UserTeacherDataListApi';

const UserProfileDialog = ({ data, open, onClose }) => {
  const { data:{user} = {} ,isLoading,error} = useGetProfileDataListQuery(data);
  console.log(user,"aaaaaaaaaaaaaaaaaaa",data,"ssssssssssssssssss")
if(isLoading){
  return <div>Loading...</div>
}

  if (error) {
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
// import React, { useEffect, useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
// import axios from 'axios';

// const UserProfileDialog = ({ userId, onClose }) => {
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(`https://staging.ibgakiosk.com/api/profile_view/${userId}`);
//         setProfileData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchProfileData();
//     }
//   }, [userId]);

//   return (
//     <Dialog open={Boolean(userId)} onClose={onClose}>
//       <DialogTitle>User Profile</DialogTitle>
//       <DialogContent>
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p>Error: {error.message}</p>
//         ) : (
//           <>
//             <p>ID: {profileData.id}</p>
//             <p>Name: {profileData.name}</p>
//             <p>Email: {profileData.email}</p>
//             <p>Role: {profileData.role}</p>
//             <p>Mobile: {profileData.mobile}</p>
//             <p>Expire Date: {profileData.expire_date}</p>
//             {/* Add more profile details as needed */}
//           </>
//         )}
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };


export default UserProfileDialog;
