import React, { Fragment, useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@mui/system';
import axios from 'axios';
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';
import SuccessMsg from '../AddCategory/SuccessMsg';

const SubjectLevel = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [teacherData, setTeacherData] = useState([]);
  const [subjectLevelName, setSubjectLevelName] = useState('');
  const [page, setPage] = useState(1);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/categorys/subjectlevel');
        setTeacherData(response.data?.data?.subjectlevels || []);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const teachersPerPage = 5;

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher({
      ...teacher,
      boardID: teacher.board_info._id,
      subjectID: teacher.subject_info._id,
    });
    setSubjectLevelName(teacher.subject_level_name);
  };

  const handleDeleteDialogOpen = (teacherId) => {
    setDeleteTeacherId(teacherId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteTeacherId(null);
    setOpenDeleteDialog(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`/api/v1/categorys/subjectlevel/${deleteTeacherId}`);
      setTeacherData((prevData) => prevData.filter((teacher) => teacher._id !== deleteTeacherId));
      setOpenDeleteDialog(false);
      setDeleteSuccessDialogOpen(true);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(
        `/api/v1/categorys/subjectlevel/${selectedTeacher._id}`,
        {
          board_id: selectedTeacher.boardID,
          subject_id: selectedTeacher.subjectID,
          subject_level_name: subjectLevelName,
        }
      );

        if (response.data && response.data.status === 'success') {
          setTeacherData((prevData) =>
            prevData.map((teacher) =>
              teacher._id === selectedTeacher._id ? { ...teacher, subject_level_name: subjectLevelName } : teacher
            )
          );
        setSelectedTeacher(null);
      } else {
        console.error("Edit API failed:", response.data?.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error updating subject level:", error);
    }
  };

      

        

  const handleClose = () => {
    setSelectedTeacher(null);
  };

  return (
    <Fragment>
      <Container maxWidth="xxl" sx={{ marginTop: '15px', background: '#f0f0f0' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Board Name</TableCell>
                {isSmallScreen || <TableCell>Subject Name</TableCell>}
                {isSmallScreen || <TableCell>Subject Level</TableCell>}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherData.slice((page - 1) * teachersPerPage, page * teachersPerPage).map((teacher, index) => (
                <TableRow key={teacher._id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                  <TableCell>{teacher.board_info.board_prog_name}</TableCell>
                  {!isSmallScreen && <TableCell>{teacher.subject_info.subject_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.subject_level_name}</TableCell>}
                  <TableCell>
                    <Link
                      to="#"
                      className="item-trash text-danger circle"
                      onClick={() => handleDeleteDialogOpen(teacher._id)}
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </Link>
                    &nbsp;&nbsp;
                    <Link
                      to="#"
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
                      onClick={() => handleEdit(teacher)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
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
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteClick} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteSuccessDialogOpen} onClose={handleDeleteSuccessDialogClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <p>Teacher deleted successfully!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>

      {successMessageOpen && (
        <SuccessMsg open={successMessageOpen} onClose={handleCloseSuccessMessage} message="Subject Level updated successfully" />
      )}

      <Modal open={selectedTeacher !== null} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isSmallScreen ? '90%' : 500,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Subject Level
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Board</InputLabel>
                <Select
                  value={selectedTeacher?.boardID || ''}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, boardID: e.target.value })}
                >
                  {categories.categories.map(category => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.board_prog_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={selectedTeacher?.subjectID || ''}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, subjectID: e.target.value })}
                >
                  {(categories.categories.find(cat => cat._id === selectedTeacher?.boardID)?.subjects || []).map(subject => (
                    <MenuItem key={subject._id} value={subject._id}>
                      {subject.subject_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject Level Name"
                value={subjectLevelName}
                onChange={(e) => setSubjectLevelName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose} sx={{ ml: 2 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default SubjectLevel;
