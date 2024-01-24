import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid, Card } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';

const ProfileForm = ({ onSave, isSidebarClosed }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      dob: '',
      gender: 'male',
      password: '',
    });
    const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  
    const handleChange = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSave = () => {
      onSave(formData);
    };
    const handleCancel = () => {
        console.log('Cancel button clicked');
        window.history.back();
      };
    const styles = {
      width: isSidebarClosed ? (isSmallScreen ? '100%' : '94%') : (isSmallScreen ? '100%' : '79%'),
      marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '6%') : (isSmallScreen ? '0%' : '21%'),
      transition: 'width 0.3s, margin-left 0.3s',
    };
  
    return (
      <div style={styles}>
        <Card elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
           
            <Flatpickr
                className="form-control flatpickr-basic flatpickr-input h-16 "
                    placeholder="Set Date of birth"
              data-enable-time
              value={formData.dob}
              onChange={(date) => handleChange('dob', date[0])}
              options={{ dateFormat: 'Y-m-d H:i', enableTime: false }}
              fullWidth
              margin="normal"
            />
          </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} >
            <div className="d-flex justify-content-between">
            <Button variant="contained" color="primary" onClick={handleCancel}  style={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                          Back
                        </Button>
              <Button variant="contained" color="primary"  style={{background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                Save Profile
              </Button>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  };
  
  export default ProfileForm;
  