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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Container,
} from '@mui/material';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import { useMediaQuery } from 'react-responsive';
import {Eye, EyeOff } from 'react-feather';
import InputAdornment from '@mui/material/InputAdornment';


const FormStudent = ({isSidebarClosed}) => {
  const [teacher, setTeacher] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [inactiveDate, setInactiveDate] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorFields, setErrorFields] = useState([]);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = [];
    if (!teacher) validationErrors.push('Teacher');
    if (!name) validationErrors.push('Name');
    if (!email) validationErrors.push('Email');
    if (!parentName) validationErrors.push('Parent Name');
    if (!parentEmail) validationErrors.push('Parent Email');
    if (!inactiveDate) validationErrors.push('Inactivation Date');
    if (!password) validationErrors.push('User Password');
    if (!isStrongPassword(password)) validationErrors.push('Password must be strong.');

    if (validationErrors.length > 0) {
      setErrorDialogOpen(true);
      setErrorFields(validationErrors);
      return;
    }

    setSuccessDialogOpen(true);
    setErrorDialogOpen(false);

    setTeacher('');
    setName('');
    setEmail('');
    setParentName('');
    setParentEmail('');
    setInactiveDate('');
    setPassword('');
    setProfilePic(null);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const isStrongPassword = (password) => {
       const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
     return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    );
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

  const handleCloseDialogs = () => {
    setSuccessDialogOpen(false);
    setErrorDialogOpen(false);
    setErrorFields([]);
  };
  const sidebarWidth = isSidebarClosed ? '50px' : '272px';
  const mainComponentWidth = isSmallScreen ? '100%' : `calc(100% - ${sidebarWidth})`;
  
  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? '75px' : (isSmallScreen ? '0' : '272px'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  const inputStyle = { height: '35px' };
  return (
    <Container maxWidth="xxl" style={styles}>
      <div className="content-header row1"></div>
      <div className="content-body">
        <Card  sx={{marginTop:'25px',background:'#f0f0f0'}}>
          <CardContent>
            <Typography variant="h4" gutterBottom className='mt-4 mb-4'>
              Add User
            </Typography>
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
             <Grid item xs={12} md={4}>
      <FormControl fullWidth>
        <InputLabel id="select-teacher-label mt-2" sx={{ fontSize: 12 }}>
          Teacher
        </InputLabel>
        <Select
          labelId="select-teacher-label"
          id="select-teacher"
          name="teacher"
          value={teacher}
          sx={{ height: '35px' }}
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
                    InputProps={{
          style: inputStyle}}
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
                    InputProps={{
          style: inputStyle}}
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
                    InputProps={{
          style: inputStyle}}
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
                    InputProps={{
          style: inputStyle}}
                    onChange={(e) => setParentEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Flatpickr
                    className="form-control flatpickr-basic flatpickr-input h-10 "
                    placeholder="Set Inactivation Date"
                    options={{ dateFormat: 'Y-m-d' }}
                    value={inactiveDate}
                    onChange={(date) => setInactiveDate(date[0])}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
      <TextField
        fullWidth
        type={showPassword ? 'text' : 'password'}
        label="User Password"
        placeholder="············"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        InputProps={{
          style: inputStyle,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end" style={{ width: '24px', height: '24px' }}>
                {showPassword ? <Eye style={{ width: '30px', height: '30px' }} /> : <EyeOff style={{ width: '30px', height: '30px' }} />}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
                      InputProps={{
          style: inputStyle}}
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
      <Dialog open={successDialogOpen} onClose={handleCloseDialogs}>
        <DialogTitle className="text-green-500">Success</DialogTitle>
        <DialogContent>
          <DialogContentText>Data added successfully!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs}>OK</Button>
        </DialogActions>
      </Dialog>

    
      <Dialog open={errorDialogOpen} onClose={handleCloseDialogs}>
        <DialogTitle className="text-red-500">Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the following fields: {errorFields.join(', ')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs}>OK</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default FormStudent;
