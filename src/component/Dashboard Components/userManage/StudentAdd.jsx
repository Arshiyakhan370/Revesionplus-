import React, { useState } from 'react';
import { Card, CardContent, Button, FormControl, InputLabel, MenuItem, Select, TextField, Grid } from '@mui/material';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import { useMediaQuery } from 'react-responsive';

const StudentAdd = ({isSidebarClosed}) => {
  const [usertype, setUsertype] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [password, setPassword] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleSubmit = (e) => {
    e.preventDefault();
   
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
    <div className="content-wrapper container-xxl p-0 pt-10">
      <div className="content-header row1"></div>
      <div className="content-body">
        <Card style={styles}>
          <CardContent>
            <h4 className="card-title mt-4 mb-4">Add User</h4>
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="select-country1-label">Usertype</InputLabel>
                    <Select
                      labelId="select-country1-label"
                      id="select-country1"
                      name="usertype"
                      value={usertype}
                      onChange={(e) => setUsertype(e.target.value)}
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
                  <TextField fullWidth label="User Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth type="email" label="User Email" placeholder="john.doe@email.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth label="User Mobile" placeholder="9145780000" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Flatpickr
                    className="form-control flatpickr-basic flatpickr-input h-16 "
                    placeholder="Set Inactivation Date"
                    options={{ dateFormat: 'Y-m-d' }}
                    value={expireDate}
                    onChange={(date) => setExpireDate(date[0])}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth type="password" label="User Password" placeholder="············" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Grid>
              </Grid>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                <Button variant="outlined"  onClick={goBack} sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                  Back
                </Button>
                <Button type="submit" variant="contained"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
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

export default StudentAdd;
