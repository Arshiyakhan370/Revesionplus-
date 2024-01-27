import React, { useState } from 'react';
import { Grid, Select, MenuItem, Button, FormControl, InputLabel,  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions, } from '@mui/material';

const  SweetAlert= ({ onAddMapping}) => {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  
  const teacherOptions = [
      { value: '2', label: 'xyz [sakzishu]' },
      { value: "2",   label: "xyz  [sakzishu]"},
      { value: "3",   label: "yz  [teacher]"},
      { value: "4",   label: "yz  [igcse]"},
      { value: "6",   label: "yz  [ss]"},
      { value: "7",   label: "yz  [physics]"},
      { value: "8",   label: "r. Shankar Jha  [jhajishankar@gmail.com]"},
      { value: "10",   label: "Mr. S. Singh  [bshyamendra@gmail.com]"},
      { value: "12",   label: "Mr Rahul Khewadia  [khewadiarahul@gmail.com]"},
      { value: "12",  label: "Mr Rahul Khewadia  [khewadiarahul@gmail.com]"},
      { value: "12",   label: "Mr Rahul Khewadia  [khewadiarahul@gmail.com]"},
      { value: "15",   label: "xyz  [shiveshs]"},
      { value: "16",   label: "Mr Sanjay Singh  [scholarnd@gmail.com]"},
      { value: "17",   label: "xyz  [tanyab]"},
      { value: "18",   label: "xyz  [saritam]"},
      { value: "20",   label: "xyz  [Hareram]"},
      { value: "24",   label: "Mr. Harish Singh  [Singhharish662@gmail.com]"},
      { value: "27",   label: "Mr Azam Khan  [azam.iase@gmail.com]"},
      { value: "28",   label: "Mr. Jay Prakash  [jayprakash@ibglobalacademy.org]"},
      { value: "29",   label: "Mr Shahbaz Shirazi  [shirazijnu@gmail.com]"},
      { value: "30",   label: "Mr. Quyamuddin  [nizami.delhi@gmail.com] "},
      { value: "32",   label: "Anjali Rathi  [Anjali.rathi@ymail.com]"},
      { value: "34",   label: "Uggarsain Bhardwaj  [uggarsain25bhardwaj@gmail.com]"},
      { value: "36",   label: "xyz  [RatheeRaj]"},
      { value: "37",   label: "Sarita Mittal  [saritamitt@gmail.com]"},
      { value: "38",   label: "Moin Ahmed  [moin_alig@yahoo.com]"},
      { value: "39",   label: "Priyanka  [Priyanka123]"},
      { value: "39",   label: "Priyanka  [Priyanka123]"},
      { value: "40",   label: "Mrs. Sandhya Singh  [sandhyashdelnew@gmail.com]"},
      { value: "41",   label: "Mr. Hari Shankar Kumar  [Hari@ibglobalacademy.org]"},
      { value: "42",   label: "Musabani  [musabani@gmail.com]"},
      { value: "43",   label: "Mohd Sagheer Ahmad  [sagheer@ibglobalacademy.org]"},
      { value: "44",   label: "xyz  [Rundstedt]"},
      { value: "45",   label: "Dr Palash Chakraborty  [p_chakraborti@yahoo.co.in]"},
      { value: "46",   label: "Saksham Kaushik  [sakshamkaushik2006@gmail.com]"},
      { value: "47",   label: "Shiv Batra  [shivbatra2004@gmail.com]"},
      { value: "48",   label: "Shiv Batra-Student  [batrashiv63@gmail.com]"},
      { value: "49",   label: "Jasleen Singh Gill  [Jasleensinghgill@gmail.com]"},
      { value: "52",   label: "Muhammad Akram  [akram@ibglobalacademy.org]"},
      { value: "53",   label: "Sarfraz Javed  [sarfrazjavedjmi@gmail.com]"},
      { value: "54",   label: "Manoj Kumar  [manoj.writer25@gmail.com]"},
      { value: "56",   label: "Pankaj Kumar sharma  [pankaj@ibglobalacademy.org]"},
      { value: "57",   label: "Shahid Javed  [shahid@ibglobalacademy.org]"},
      { value: "58",   label: "Test Teacher  [pankajk846@gmail.com]"},
      { value: "59",   label: "Swati Dudhani  [swati.dudhani89@gmail.com]"},
      { value: "60",   label: "Andeep Kaur  [andeepgulati@gmail.com]"},
      { value: "61",   label: "INDRANI SINHA  [indranisinha_2007@rediffmail.com]"},
      { value: "62",   label: "  MINAKSHI GROVER  [minakshi1401@gmail.com]"},
      { value: "63",   label: "ZIA RAZAQUI  [ziarajaki96755@gmail.com]"},
      { value: "64",   label: "NAINA VAISH  [vaish.naina@yahoo.co.in]"},
    ];
  
      
  

  const boardOptions = [
    { value: '1', label: 'IB' },
    { value: '2', label: 'IGCSE' },
  ];

  const subjectOptions = [
    { value: '1', label: 'Subject 1' },
    { value: '2', label: 'Subject 2' },
  
  ];

  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  const handleBoardChange = (event) => {
    setSelectedBoard(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedTeacher || !selectedBoard || !selectedSubject) {
      setErrorDialogOpen(true);
      return;
    }

    const newMapping = {
      teacher: selectedTeacher,
      board: selectedBoard,
      subject: selectedSubject,
    };
    onAddMapping(newMapping);
    setSelectedTeacher('');
    setSelectedBoard('');
    setSelectedSubject('');
    setSuccessDialogOpen(true);
  };

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };
  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };
  const goBack = () => {
    window.history.back();
  };
  return (
    <div>
    <div className="card-header border-bottom mt-4 mb-4">
    <h4 className="card-title mb-4 text-blue-800">Teacher Subject Mapping</h4>
  </div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="teacher-label">Select Teacher</InputLabel>
          <Select
            labelId="teacher-label"
            id="teacher-select"
            value={selectedTeacher}
            onChange={handleTeacherChange}
            sx={{ height: '40px' }} 
          >
            {teacherOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="board-label">Select Board</InputLabel>
          <Select
            labelId="board-label"
            id="board-select"
            value={selectedBoard}
            sx={{ height: '40px' }} 
            onChange={handleBoardChange}
          >
            {boardOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <InputLabel id="subject-label">Select Subject</InputLabel>
          <Select
            labelId="subject-label"
            id="subject-select"
            value={selectedSubject}
            sx={{ height: '40px' }}
                onChange={handleSubjectChange}
          >
            {subjectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
                <Button variant="outlined"  onClick={goBack} sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                  Back
                </Button>
                 <Button type="submit" variant="contained" onClick={handleSubmit} sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                  Add
                </Button>
              </div>
        
      </Grid>
    </Grid>
    <Dialog open={successDialogOpen} onClose={handleCloseSuccessDialog}>
        <DialogTitle className="text-green-500">Success</DialogTitle>
        <DialogContent>
          <DialogContentText>Data added successfully!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog}>OK</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={errorDialogOpen} onClose={handleCloseErrorDialog}>
        <DialogTitle className='text-red-500'>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>Please select values for all fields.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseErrorDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};




export default SweetAlert;
