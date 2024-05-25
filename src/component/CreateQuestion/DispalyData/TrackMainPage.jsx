import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Box,
  Divider,
  FormLabel,
  FormControl,
  TextField,
  Switch,
  ToggleButton,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Typography,
  Alert,
  Radio,
  Input,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TabCapsuleButtonGroup from './TabCapsuleButtonGroup';

const TrackMainPage = () => {
  const [startConditionMode, setStartConditionMode] = React.useState('');
  const [scheduledDateTime, setScheduledDateTime] = React.useState(null);
  const [closeConditionDateTime, setCloseConditionDateTime] = React.useState(null);
  const [experienceMode, setExperienceMode] = React.useState('online');
  const [closeConditionMode, setCloseConditionMode] = React.useState('');
  const [timeAssessmentToggle, setTimeAssessmentToggle] = useState(false);
  const [timeAssessmentDuration, setTimeAssessmentDuration] = useState('');
  const [timeAssessmentUnit, setTimeAssessmentUnit] = useState('minutes');
  const [allowUploadDocuments, setAllowUploadDocuments] = useState(false);
  const [scientificCalculator, setScientificCalculator] = useState(false);
  const [graphingCalculator, setGraphingCalculator] = useState(false);
  const [externalVideoCallLink, setExternalVideoCallLink] = useState(false);
  const [extraInstructions, setExtraInstructions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); // To store selected radio option
  const [selectedClass, setSelectedClass] = useState(''); // To store selected class
  const [selectedStudent, setSelectedStudent] = useState([]); // To store selected students
  const [allowGuests, setAllowGuests] = useState(false);
  const [showCopyButton, setShowCopyButton] = useState(false);

  const handleGuestSwitchChange = () => {
    setAllowGuests(!allowGuests);
    if (!allowGuests) {
      setShowCopyButton(true); // Show copy button if switch is toggled on
    } else {
      setShowCopyButton(false); // Hide copy button if switch is toggled off
    }
  };
  const startConditionOptions = [
    { value: 'anytime', label: 'Any time' },
    { value: 'scheduled_time', label: 'Scheduled time' },
  ];

  const closeConditionOptions = [
    { value: 'anytime', label: 'Any time' },
    { value: 'scheduled_time', label: 'Scheduled time' },
  ];

  const handleStartConditionChange = (value) => {
    setStartConditionMode(value);
    setCloseConditionMode('');
  };

  const handleScheduledDateTimeChange = (value) => {
    setScheduledDateTime(value);
  };

  const handleCloseConditionDateTimeChange = (value) => {
    setCloseConditionDateTime(value);
  };

  const handleExperienceModeChange = (value) => {
    setExperienceMode(value);
  };

  const handleCloseConditionChange = (value) => {
    setCloseConditionMode(value);
  };

  const handleTimeAssessmentToggle = () => {
    setTimeAssessmentToggle(!timeAssessmentToggle);
    if (!timeAssessmentToggle) setTimeAssessmentDuration('');
  };

  // const handleTimeAssessmentDurationChange = (event) => {
  //   setTimeAssessmentDuration(event.target.value);
  // };

  const handleTimeAssessmentUnitChange = (event) => {
    setTimeAssessmentUnit(event.target.value);
  };

  const handleClassSelection = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleStudentSelection = (event) => {
    setSelectedStudent(event.target.value);
  };
  const renderTimeOptions = () => {
    const options = [];
    for (let i = 5; i <= 60; i += 5) {
      options.push(<MenuItem key={i} value={i}>{i} Minutes</MenuItem>);
    }
    return options;
  };
  
  
  const handleExternalVideoCallLinkToggle = () => {
    setExternalVideoCallLink(!externalVideoCallLink);
  };
  
  
  const handleExtraInstructionsToggle = () => {
    setExtraInstructions(!extraInstructions);
  };
  return (
    <Box p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Assign to Students" />
            <Divider style={{ marginTop: '10px', backgroundColor: '#002B4F' }} />
            <CardContent>
              <Alert severity="warning" sx={{ mt: 2 }}>
                Any student within your organization can search for and take the assessment using the join code. Additionally, any guest user can take the assessment from the login page using the join code or link.
              </Alert>
              <div style={{ marginTop: '20px' }}>
              <FormControlLabel
                control={
                  <Switch defaultChecked />
                }
                label="Allow any student in your organization to take this assessment using join code"
              />
               </div>
               <div style={{ marginTop: '20px' }}>
                <FormControl component="fieldset">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={allowGuests}
                        onChange={handleGuestSwitchChange}
                      />
                    }
                    label="Allow guests"
                  />
                </FormControl>
                {showCopyButton && (
                  <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
                    Copy join link
                  </Button>
                )}
              </div>
 
    <Typography variant="body1" style={{marginTop: '25px'}}>Assign specific classes or students
</Typography>
 <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
  <FormControl component="fieldset">
    <div className='flex justify-between'  style={{ display: 'flex', alignItems: 'center' }}>
  <div className='flex justify-between'>
      <Radio
      
        checked={selectedOption === 'classes'}
        onChange={() => setSelectedOption('classes')}
        value="classes"
        name="class-radio"
        inputProps={{ 'aria-label': 'Select classes' }}
        label="Select classes"
      />
      <Typography className='mt-2'>Select classes</Typography>
    </div>
    <div className='flex justify-between'>
      <Radio
        checked={selectedOption === 'students'}
        onChange={() => setSelectedOption('students')}
        value="students"
        name="student-radio"
        inputProps={{ 'aria-label': 'Select students' }}
      />
      <Typography className='mt-2'>Select students</Typography>
    </div>
    </div>
  </FormControl>
</div>
<div style={{ marginTop: '20px' }}>
  {selectedOption === 'classes' && (
    <div>
    <FormControl sx={{  marginRight: '10px', width: '190px' }} size="small">
        <InputLabel id="select-class-label">Select Class</InputLabel>
        <Select
          labelId="select-class-label"
          id="select-class"
          value={selectedClass}
          onChange={handleClassSelection}
        >
          <MenuItem value="Chemistry">Chemistry</MenuItem>
          <MenuItem value="IBD">IBD</MenuItem>
          <MenuItem value="BD">BD</MenuItem>
        </Select>
      </FormControl>
    </div>
  )}
  {selectedOption === 'students' && (
    <div>
    <FormControl sx={{  width: '190px' }} >
        <InputLabel id="select-student-label">Search for students</InputLabel>
        <Select
          labelId="select-student-label"
          id="select-student"
          multiple
          value={selectedStudent}
          sx={{border:'1px solid grey'}}
          onChange={handleStudentSelection}
          input={<Input />}
        >
        </Select>
      </FormControl>
    </div>
  )}
</div>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ borderRadius: '10px' }}>
            <CardHeader title="Settings" />
            <Divider style={{ marginTop: '10px', backgroundColor: '#002B4F' }} />
            <CardContent>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Experience Mode</FormLabel>
                <TabCapsuleButtonGroup
                  options={[
                    { value: 'online', label: 'Any browser' },
                    { value: 'online_secure', label: 'Any browser with security' },
                    { value: 'offline', label: 'Lockdown app' },
                  ]}
                  value={experienceMode}
                  onChange={handleExperienceModeChange}
                />
              </FormControl>
              <div className='flex justify-between'>
                <FormControl component="fieldset" required>
                  <FormLabel component="legend">Start Condition</FormLabel>
                  <TabCapsuleButtonGroup
                    options={startConditionOptions}
                    value={startConditionMode}
                    onChange={handleStartConditionChange}
                  />
                </FormControl>
                {startConditionMode === 'scheduled_time' && (
                  <FormControl component="fieldset" required>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} size="small" sx={{ marginTop: '35px' }} />}
                        label="Scheduled Date and Time"
                        className='mt-4 h-4'
                        value={scheduledDateTime}
                        onChange={handleScheduledDateTimeChange}
                      />
                    </LocalizationProvider>
                  </FormControl>
                )}
              </div>
              <div className='flex justify-between'>
                <FormControl component="fieldset" required>
                  <FormLabel component="legend">Close Condition</FormLabel>
                  <TabCapsuleButtonGroup
                    options={closeConditionOptions}
                    value={closeConditionMode}
                    onChange={handleCloseConditionChange}
                  />
                </FormControl>
                {closeConditionMode === 'scheduled_time' && (
                  <FormControl component="fieldset" required>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        renderInput={(props) => <TextField {...props} size="small" sx={{ marginTop: '35px' }} />}
                        label="Scheduled Date and Time"
                        className='mt-4 h-4'
                        value={closeConditionDateTime}
                        onChange={handleCloseConditionDateTimeChange}
                      />
                    </LocalizationProvider>
                  </FormControl>
                )}
              </div>
              <div className='flex justify-between'>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      checked={timeAssessmentToggle}
                      onChange={handleTimeAssessmentToggle}
                    />
                  }
                  label="Time Assessment"
                />
                {timeAssessmentToggle && (
                  <FormControl sx={{ marginTop: '25px', marginRight: '10px', width: '90px' }} size="small">
                    <InputLabel id="time-assessment-unit-label">Duration</InputLabel>
                    <Select
                      labelId="time-assessment-unit-label"
                      value={timeAssessmentUnit}
                      onChange={handleTimeAssessmentUnitChange}
                      label="Duration"
                      displayEmpty
                      inputProps={{ 'aria-label': 'Time Assessment Unit' }}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      {renderTimeOptions()}
                    </Select>
                  </FormControl>
                )}
              </div>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={allowUploadDocuments}
                    onChange={() => setAllowUploadDocuments(!allowUploadDocuments)}
                  />
                }
                label="Allow upload documents"
              />
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={scientificCalculator}
                    onChange={() => setScientificCalculator(!scientificCalculator)}
                  />
                }
                label="Scientific calculator"
              />
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={graphingCalculator}
                    onChange={() => setGraphingCalculator(!graphingCalculator)}
                  />
                }
                label="Graphing calculator"
              />
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={externalVideoCallLink}
                    onChange={handleExternalVideoCallLinkToggle}
                  />
                }
                label="External video call link"
              />
              {externalVideoCallLink && (
                <TextField
                  fullWidth
                  label="Video call link"
                  margin="normal"
                  variant="outlined"
                  size="small"
                />
              )}
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={extraInstructions}
                    onChange={handleExtraInstructionsToggle}
                  />
                }
                label="Extra instructions"
              />
              {extraInstructions && (
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Instructions</p>"
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                />
              )}

              
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};



export default TrackMainPage