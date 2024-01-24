import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Checkbox, FormControlLabel, Button, Grid, Container, Input } from '@mui/material';
import './Authentication.css';

const AuthenticationImage = () => {
  const [isV1, setIsV1] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [rememberMe, setRememberMe] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);

    let destinationRoute;

    if (selectedRole === 'teacher' && isV1) {
      destinationRoute = '/TeacherDashboardV1'; 
    } else if (selectedRole === 'teacher' && !isV1) {
      destinationRoute = '/TeacherDashboardV2'; 
    } else if (selectedRole === 'student' && isV1) {
      destinationRoute = '/DashboardStudentV1'; 
    } else {
      destinationRoute = '/dashboard'; 
    }
  
    navigate(destinationRoute);
  };

  return (
    <Fragment>
      <Container maxWidth='xl'>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="section-left h-full float-left block bg-transparent ">
              <img
                className=' '
                src='https://ibgakiosk.com/v2/backend/images/pages/login-v2.svg'
                alt='Authentication'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
        <div className="section-right  h-full float-left block bg- transparent ">
          <h2>Welcome to <span className="text-global">My Revision+</span> </h2>
          <div className="tab">
            <Button
              className={`tablinks hover:bg-[#065982] ${!isV1 ? '!bg-[#002b4f] !text-white' : ''}`}
              id="defaultOpen"
              onClick={() => {
                setIsV1(false);
                setSelectedRole('teacher');
              }}
            >
              Login My Revision V2
            </Button>
            <Button
              className={`tablinks hover:bg-[#065982] ${isV1 ? '!bg-[#002b4f] !text-white' : ''}`}
              onClick={() => {
                setIsV1(true);
                setSelectedRole('student');
              }}
            >
              Login My Revision V1
            </Button>
          </div>
          {isV1 && (
  <div className='flex items-center justify-between mt-4'>
    <div className="flex items-center me-4">
    <Grid sx={12} sm={6}>
    <input
        checked
        id="student-radio"
        type="radio"
        value=""
        name="colored-radio"
        className="w-4 h-4 text-purple-600  bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="student-radio" className="ms-2 text-sm font-medium text-white dark:text-gray-300">
        Student Login
      </label>
      </Grid>
    </div>
   
    <div className="flex items-center me-4">
      <input
        id="teacher-radio"
        type="radio"
        value=""
        name="colored-radio"
        className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="teacher-radio" className="ms-2 text-sm font-medium text-white dark:text-gray-300">
        Teacher Login
      </label>
    </div>
  </div>
)}

       
          <form>
        <div className="mb-10 mt-10 bg-white">
       
          <TextField
            type="email"
            id="floating_outlined"
            label="Your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
         
        </div>

        <div className="mb-10 bg-white ">
          <TextField
            type="password"
            id="floating_outlined"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </div>
        <div className="touch-form2 text-white">
          <FormControlLabel
            control={
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            }
            label="Remember me"
          />
          <Link to="#" style={{textDecoration:'none'}} className="forgot-password text-white ">
            Forgot Password?
          </Link>
        </div>
        <div className="touch-form2">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-now"
            onClick={handleLogin}
          >
            Continue
          </Button>
        </div>
      </form>
        </div>
        </Grid>
       
     
      </Grid>
      </Container>
    </Fragment>
  );
};

export default AuthenticationImage;
