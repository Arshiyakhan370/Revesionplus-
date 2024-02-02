import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Checkbox, FormControlLabel, Button, Grid, Container, Input, Radio, RadioGroup, FormLabel, FormControl, InputAdornment, IconButton, OutlinedInput, InputLabel } from '@mui/material';
import './Authentication.css';
import { Eye, EyeOff } from 'react-feather';

const AuthenticationImage = () => {
  const [isV1, setIsV1] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);

    let destinationRoute;

    if (selectedRole === 'teacher' && isV1) {
      destinationRoute = 'TeacherDashboard';
    } else if (selectedRole === 'student' && isV1) {
      destinationRoute = 'dashboar-Student';
    } else {
      destinationRoute = '/admin';
    }
    navigate(destinationRoute);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
        <div className="section-right  h-full float-left block bg- transparent mb-16 mt-16 ">
          <h2>Welcome to <span className="text-global">My Revision<sup>+</sup></span> </h2>
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
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose Role</FormLabel>
                <RadioGroup
                  row
                  aria-label="role"
                  name="role-radio"
                  value={selectedRole}
                  className='flex justify-between'
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio style={{ color: 'white' }} />}
                    label="Student Login"
                    style={{ color: 'white' }}
                  />
                  <FormControlLabel
                    value="teacher"
                    color='#fff'
                    control={<Radio style={{ color: 'white' }} />}
                    label="Teacher Login"
                    style={{ color: 'white' }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          )}
       
          <form>
          <div className="mb-10 mt-10">
          <FormControl fullWidth>
  <InputLabel htmlFor="floating_outlined" className=' text-white'>Email</InputLabel>
  <OutlinedInput
    type="email"
    id="floating_outlined"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    fullWidth
    sx={{
      height: '50px',borderRadius:'7px' ,background:'white'
    }}
    label="email"
  />
  </FormControl>
</div>

<FormControl fullWidth>
  <InputLabel htmlFor="floating_outlined" className='text-white'>Password</InputLabel>
  <OutlinedInput
    id="floating_outlined"
    type={showPassword ? 'text' : 'password'}
    value={password}
   sx={{  background: 'white',borderRadius:'7px' ,color:'black' ,  height: '50px',}}
    onChange={(e) => setPassword(e.target.value)}
    endAdornment={
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility} edge="end" style={{ width: '30px', height: '30px' }}>
          {showPassword ? <Eye style={{ width: '30px', height: '30px' }} /> : <EyeOff style={{ width: '30px', height: '30px' }} />}
        </IconButton>
      </InputAdornment>
    }
  
    label="Password"
  />
</FormControl>


        
        <div className="touch-form2 text-white flex flex-row justify-between">
          <FormControlLabel
            control={
              <Checkbox
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            }
            label="Remember me"
            style={{ color: 'white' }}
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
            className="submit-now border border-white"
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
