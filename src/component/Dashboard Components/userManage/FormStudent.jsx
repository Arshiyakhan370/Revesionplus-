import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  Avatar,
} from '@mui/material';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import { useMediaQuery } from 'react-responsive';

const FormStudent = ({isSidebarClosed}) => {
  const [teacher, setTeacher] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [inactiveDate, setInactiveDate] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleProfilePicChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePic(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {};

    reader.readAsDataURL(selectedFile);
  };

  const goBack = () => {
    window.history.back();
  };
  const styles = {
    width: isSidebarClosed ?  (isSmallScreen ? '100%' : '95%') : (isSmallScreen ? '100%' : '79%'),
    marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '5%') : (isSmallScreen ? '0%' : '21%'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  return (
    <div className="content-wrapper container-xxl p-0">
      <div className="content-header row1"></div>
      <div className="content-body">
        <Card style={styles}>
          <CardContent>
            <Typography variant="h4" gutterBottom className='mt-4 mb-4'>
              Add User
            </Typography>
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="select-teacher-label">Teacher</InputLabel>
                    <Select
                      labelId="select-teacher-label"
                      id="select-teacher"
                      name="teacher"
                      value={teacher}
                      onChange={(e) => setTeacher(e.target.value)}
                      required
                    >
                      <MenuItem value="">Select UserType</MenuItem>
                      <MenuItem value="SuperAdmin">SuperAdmin</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="IB Facilitator">IB Facilitator</MenuItem>
                      <MenuItem value="Assignment Editor/IB Facilitator">Assignment Editor/IB Facilitator</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    placeholder="john.doe@email.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Parent Name"
                    placeholder="Name"
                    name="parentName"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Parent Email"
                    placeholder="john.doe@email.com"
                    name="parentEmail"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Flatpickr
                    className="form-control flatpickr-basic flatpickr-input h-16 "
                    placeholder="Set Inactivation Date"
                    options={{ dateFormat: 'Y-m-d' }}
                    value={inactiveDate}
                    onChange={(date) => setInactiveDate(date[0])}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    type="password"
                    label="User Password"
                    placeholder="············"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="profile-pic-label"></InputLabel>
                    <input
                      type="file"
                      id="profile-pic"
                      className="form-control2  h-16"
                      name="Profile Picture"
                      accept="image/*"
                      onChange={(e) => handleProfilePicChange(e)}
                      required
                    />
                  
                  {profilePic && (
                    <Avatar
                      src={URL.createObjectURL(profilePic)}
                      alt="Profile Preview"
                      sx={{ width: 100, height: 100, marginRight: 3 }}
                    />
                  )}
                  {!profilePic && (
                    <Avatar
                      sx={{ width: 100, height: 100, marginRight: 3 }}
                    >
                   
                      <IconButton disabled>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.34 11.46C4.54 10.61 6.77 10 8 10s3.46.61 5.34 1.46A7 7 0 0 0 8 1z" />
                          <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                        </svg>
                      </IconButton>
                    </Avatar>
                  )}
                  </FormControl>
                </Grid>
              </Grid>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                <Button variant="outlined"  onClick={goBack} sx={{ color:'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                  Back
                </Button>
                <Button type="submit" variant="contained"  sx={{ color:'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                  Add
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormStudent;
