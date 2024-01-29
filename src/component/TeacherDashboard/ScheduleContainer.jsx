import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import Nav from '../PracticeAssignment/Nav';
import { style } from '@mui/system';

const ScheduleOnlineClass = () => {
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <div>
    <Nav/>
    <Box>
    <Container component="section" maxWidth="xxl">
      <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl required fullWidth >
              <InputLabel htmlFor="studentid">Select Student</InputLabel>
              <Select
                name="studentid"
                id="studentid"
                label="studentid"
                className="input-md textinput textInput form-control"
                value="263"
                sx={{height:'40px'}}
              >
                <MenuItem value="263" id="student_263">
                  Gaurav
                </MenuItem>
                <MenuItem value="264" id="student_264">
                  Gaurav1
                </MenuItem>
                <MenuItem value="265" id="student_265">
                  Gaurav2
                </MenuItem>
                <MenuItem value="266" id="student_266">
                  Gaurav3
                </MenuItem>
                <MenuItem value="267" id="student_267">
                  Gaurav4
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth >
              <InputLabel htmlFor="subjectid">Select Subject</InputLabel>
              <Select
                name="subjectid"
                id="subjectid"
                label="subjectid"
                className="input-md textinput textInput form-control"
                value="65" 
                sx={{height:'40px'}}
              >
                <MenuItem value="65" id="subject_65">
                  Biology
                </MenuItem>
                <MenuItem value="66" id="subject_66">
                  Chemistry
                </MenuItem>
                <MenuItem value="67" id="subject_67">
                  Physics
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="session_name"
              label="Class Details"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="Class Details (Ex:-Math Class)"
              required
              InputProps={{
              style: { height: '40px' },
            }}
            />
          </Grid>

        

          <Grid item xs={6}>
            <TextField
              id="meeting_name"
              label="Meeting Name"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="Meeting Name"
              InputProps={{
              style: { height: '40px' },
            }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="meeting_id"
              label="Meeting ID"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="Meeting ID"
              InputProps={{
              style: { height: '40px' },
            }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="host_id"
              label="Host ID"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="Host ID"
              InputProps={{
              style: { height: '40px' },
            }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor="start_time">Start Time</InputLabel>
              <Flatpickr
                id="start_time"
                name="start_time"
                options={{
                  enableTime: true,
                  dateFormat: 'Y-m-dTH:i',
                }}
                value={selectedStartTime}
                onChange={(date) => setSelectedStartTime(date)}
                render={(props, ref) => (
                  <TextField
                    {...props}
                    variant="outlined"
                    margin="normal"
                    required
                    inputRef={ref}
                    InputProps={{
              style: { height: '40px' },
            }}
                  />
                )}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel htmlFor="end_time">End Time</InputLabel>
              <Flatpickr
                id="end_time"
                name="end_time"
                className='h-16'
                options={{
                  enableTime: true,
                  dateFormat: 'Y-m-dTH:i',
                }}
                value={selectedEndTime}
                onChange={(date) => setSelectedEndTime(date)}
                render={(props, ref) => (
                  <TextField
                    {...props}
                    variant="outlined"
                    margin="normal"
                    required
                    inputRef={ref}
                    InputProps={{
              style: { height: '40px' },
            }}
                  />
                )}
              />
            </FormControl>
          </Grid>

           <Grid item xs={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                background:
                  'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </Box>
    </div>
  );
};

export default ScheduleOnlineClass;
