import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, TextField, Card, Dialog, DialogTitle, DialogContent, DialogActions, CardContent, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@mui/system';
import { boardOptions ,subjectOptions, teacherOptions}  from '../TeacherMap/SweetAlert';
import axios from 'axios';

const Source = () => {
 
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
const [deleteTeacherId, setDeleteTeacherId] = useState(null);
const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
const [teacherData, setTeacherData] = useState([]);
const [loading, setLoading] = useState(true);
const [sourceName1, setSourceName1] = useState('');
const [categories, setCategories] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://staging.ibgakiosk.com/api/view_source');
      const boardsResponse = await axios.get(
        "https://staging.ibgakiosk.com/api/category_list"
      );
      setCategories(boardsResponse.data?.data);
      setTeacherData(response.data?.data); 
      setLoading(false);
    } catch (error ) { 
      console.error('Error fetching teacher data:', error);
      setLoading(false);
    }
  };

  fetchData();
}, []);
  const [page, setPage] = useState(1);
  const teachersPerPage = 5;

  const handleEdit = async (teacher) => {
    console.log(teacher,"teacher");
    try {
      const responseGetById = await axios.get(`https://staging.ibgakiosk.com/api/edit_source/${teacher.source_id}`);
      const getData = responseGetById.data?.data;
      const editData = {...teacher, boardID:getData.boardID, subjectID:getData.subjectID,subjectlevelID:getData.subjectlevelID}
      setSelectedTeacher(editData);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  };
  const handleDeleteDialogOpen = (teacherId) => {
    setDeleteTeacherId(teacherId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteTeacherId(null);
    setOpenDeleteDialog(false);
  };
 
  const handleDeleteClick = async() => {
    try {
      await axios.post(
        `https://staging.ibgakiosk.com/api/delete_source`,
        {
          source_id: deleteTeacherId
        }
      );
    
    } catch (error) {
      console.error("Error deleting teacher:", error);
  };

    setDeleteSuccessDialogOpen(true);
    setTeacherData((prevData) => prevData.filter((teacher) => teacher.source_id!== deleteTeacherId));
    setOpenDeleteDialog(false);
  };
  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * teachersPerPage;
  const endIndex = startIndex + teachersPerPage;
  
   
      const handleSaveEdit = async () => {
        try {
          const response = await axios.post(
            `https://staging.ibgakiosk.com/api/update_source`,
            {
              source_id: selectedTeacher.source_id,
              boardID: selectedTeacher.boardID,
              subjectID: selectedTeacher.subjectID,
              subjectlevelID: selectedTeacher.subjectlevelID,
              sourceName: sourceName1
            }
          );
      
          if (response.data && response.data.message === "Source updated successfully") {
         
            setTeacherData(prevData =>
              prevData.map(teacher =>
                teacher.source_id === selectedTeacher.source_id ? { ...teacher, ...selectedTeacher, source_name: sourceName1 } : teacher
              )
            );
      
         
            setSelectedTeacher(null);
            setSourceName1('');
      
           
            setDeleteSuccessDialogOpen(true);
          } else {
            console.error("Edit API failed:", response.data?.message || "Unknown error");
          }
        } catch (error) {
          console.error("Error updating source:", error);
        }
      };
      
const handleClose=()=>{
    setSelectedTeacher(null);
}
const handleAddMapping = (newMapping) => {
  setTeacherData((prevData) => [...prevData, newMapping]);
};

  return (
    <Fragment>
    <Container maxWidth="xxl" sx={{marginTop:'15px',background:'#f0f0f0'}}>
   
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Board Name</TableCell>
                        {window.innerWidth > 1024 && (
                        <TableCell>Subject Name</TableCell>)}
                        {window.innerWidth > 1024 && (
                        <TableCell>Subject Level</TableCell>)}
                        {window.innerWidth > 1024 && (
                        <TableCell>Source</TableCell>)}
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {teacherData.slice(startIndex, endIndex).map((teacher, index) => (
                        <TableRow key={teacher.source_id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                           <TableCell>{teacher.board_name}</TableCell>
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.subject_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.subject_lev_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.source_name} </TableCell>)}
                          <TableCell>
                            <Link to=""
                className="item-trash text-danger circle"
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Delete"
               
      onClick={() => handleDeleteDialogOpen(teacher.source_id)}
                style={{
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    border: '1px solid #9ba4a4',
    padding: '5px 5px 5px 5px',
    fontSize: '16px',
    background: 'rgb(244 237 201)',
}}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </Link>
              &nbsp;&nbsp;
              <Link
                to=''
           className="item-edit text-info circle  text-blue-400" 
                style={{
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    border: '1px solid #9ba4a4',
    padding: '5px 5px 5px 5px',
    fontSize: '16px',
    background: 'rgb(244 237 201)',
}}
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Edit"
                onClick={() => handleEdit(teacher)}>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
         
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Stack spacing={2} justifyContent="center" className="mt-3">
                <Pagination count={Math.ceil(teacherData.length / teachersPerPage)} page={page} onChange={handleChangePage} />

                </Stack>
                  </Container>
                  <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle className='text-red-500'>Delete Teacher</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this teacher?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDeleteClick} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteSuccessDialogOpen} onClose={handleDeleteSuccessDialogClose}>
        <DialogTitle className='text-green-500'>Delete Successful</DialogTitle>
        <DialogContent>
          <p>The teacher has been successfully deleted.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Modal open={!!selectedTeacher} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          gap:'10px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" mb={2}>
          Edit Teacher
        </Typography>
        <Grid container spacing={2} mt={2}>
       <Grid item xs={12} sm={4}>
    
  <FormControl fullWidth>
    <InputLabel id="board-label">Select Board</InputLabel>
    <Select
      labelId="board-label"
      id="boardID"
      value={selectedTeacher?.boardID|| ''}
      onChange={(e) => {
        const selectedBoardId = e.target.value;
        const selectedBoard = categories.find(category => category.board_id === selectedBoardId);
        // const selectedSubject = selectedBoard.subjects.find(subject => subject.board_id === selectedBoardId);
        console.log(selectedBoard,"selectedboard AAAAAAAAA")
        setSelectedTeacher(prev => ({
          ...prev,
          board_name: selectedBoard.board_name,
          boardID: selectedBoard.board_id,
          // subject: selectedSubject 
        }));
      }}
      
      sx={{ height: '35px', marginTop: '8px' }}
    >
      {categories.map(option => (
        <MenuItem key={option.board_id} value={option.board_id}>
          {option.board_name}
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
              id="subjectID"
              value={selectedTeacher?.subjectID || ''}
              onChange={(e) => {
        const selectedSubjectId = e.target.value;
        const selectedBoard = categories.map(category => category.subject).flat()
        const selectedSubject = selectedBoard.find(subject => subject.subject_id === selectedSubjectId);
        console.log(selectedBoard,"selectedboard AAAAAAAAA")
        setSelectedTeacher(prev => ({
          ...prev,
          subject_name:selectedSubject.subject_name,
          subjectID:selectedSubject.subject_id,
          subject: selectedSubject 
        }));
      }}
      
              sx={{ height: '35px', marginTop: '8px' }}
            >
           {categories.map(category => (
                      category.subject.map(subject => (
                        <MenuItem key={subject.subject_id} value={subject.subject_id}>
                          {subject.subject_name}
                        </MenuItem>
                      ))
                    ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
  <FormControl fullWidth>
    <InputLabel id="subject-label">Select Subject Level</InputLabel>
    <Select
      labelId="subject-label"
      id="subjectlevelID"
      value={selectedTeacher?.subjectlevelID || ''}
      onChange={(e) => {
        const selectedSourceId = e.target.value;
        const flattenedLevels = categories.flatMap(category => category.subject.flatMap(subject => subject.subject_level));
        const selectedLevel = flattenedLevels.find(level => level.subject_lev_id === selectedSourceId);

        if (selectedLevel) {
          setSelectedTeacher(prevState => ({
            ...prevState,
            subject_level_name: selectedLevel.subject_level_name
,
            subjectlevelID: selectedSourceId,
          }));
        } else {
          console.error("Selected subject level not found.");
        }
      }}
      sx={{ height: '35px', marginTop: '8px' }}
    >
      {categories.map(category => (
        category.subject.map(subject => (
          subject.subject_level.map(level => (
            <MenuItem key={level.subject_lev_id} value={level.subject_lev_id}>
              {level.subject_lev_name}
            </MenuItem>
          ))
        ))
      ))}
    </Select>
  </FormControl>
</Grid>



        <Grid item xs={12} sm={4}>
          
        <TextField
                  label="Subject Level"
                  id="sourceName"
                  fullWidth
                  required
                  variant="outlined"
                  margin="normal"
                  value={sourceName1}
                  onChange={(e) => setSourceName1(e.target.value)}
                  InputProps={{
                    style: { height: 'auto' },
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                />
        
        </Grid>
        </Grid>
       
        <Box mt={2} className='flex flex-row justify-between'>
        <Button variant="outlined" onClick={handleClose}   sx={{
                  color: "white",
                  background:
                    "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                }}>
        Close
      </Button>
      <Button variant="contained" onClick={handleSaveEdit}   sx={{
                  color: "white", marginLeft: 2,
                  background:
                    "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                }}>
        Save
      </Button>
     
    </Box>
      </Box>
    </Modal>
   
    </Fragment>
  );
};


export default Source