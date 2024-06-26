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
import CategoryDeletedMsg from '../../../Helpers/CategoryDeletedMsg';
import DeletedSuccessMsg from '../../../Helpers/DeletedSuccessMsg';
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
  const { data: categories = [], error, isLoading } = useGetCategoryListQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://13.235.206.253/api/v1/categorys/subjectlevel');
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

  const handleEdit = async (teacher) => {
    try {
      const responseGetById = await axios.get(`https://staging.ibgakiosk.com/api/edit_subject_level/${teacher.subject_leve_id}`);
      const getData = responseGetById.data?.data;
      const editData = { ...teacher, boardID: getData.boardID, subjectID: getData.subjectID };
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

  const handleDeleteClick = async () => {
    try {
      await axios.post(
        `https://staging.ibgakiosk.com/api/destroy_subject_level`,
        { subject_leve_id: deleteTeacherId }
      );

      setTeacherData((prevData) => prevData.filter((teacher) => teacher.subject_leve_id !== deleteTeacherId));
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
      const response = await axios.post(
        `https://staging.ibgakiosk.com/api/update_subject_level`,
        {
          subjectlevel_id: selectedTeacher.subject_leve_id,
          boardID: selectedTeacher.boardID,
          subjectID: selectedTeacher.subjectID,
          subjectlevelName: subjectLevelName,
        }
      );

      if (response.data && response.data.message === "Subejct Level updated successfully") {
        setSuccessMessageOpen(true);
        setTeacherData((prevData) =>
          prevData.map((teacher) =>
            teacher.subject_leve_id === selectedTeacher.subject_leve_id ? { ...teacher, ...selectedTeacher, subject_level_name: subjectLevelName } : teacher
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
                <TableRow key={teacher.subject_leve_id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                  <TableCell>{teacher.board_info.board_prog_name}</TableCell>
                  {!isSmallScreen && <TableCell>{teacher.subject_info.subject_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.subject_level_name}</TableCell>}
                  <TableCell>
                    <Link
                      to="#"
                      className="item-trash text-danger circle"
                      onClick={() => handleDeleteDialogOpen(teacher.subject_leve_id)}
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

      <Modal open={!!selectedTeacher}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            gap: '10px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h4" mb={2}>
            Edit Teacher
          </Typography>
          {/* <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="board-label">Select Board</InputLabel>
                <Select
                  labelId="board-label"
                  id="boardID"
                  value={selectedTeacher?.boardID || ''}
                  onChange={(e) => {
                    const selectedBoardId = e.target.value;
                    const selectedBoard = categories.data.find((category) => category.board_id === selectedBoardId);
                    setSelectedTeacher((prev) => ({
                      ...prev,
                      board_name: selectedBoard.board_name,
                      boardID: selectedBoard.board_id,
                    }));
                  }}
                  sx={{ height: '35px', marginTop: '8px' }}
                >
                  {categories?.data.map((option) => (
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
                    const flattenedSubjects = categories?.data.flatMap((category) => category.subject);
                    const selectedSubject = flattenedSubjects.find((subject) => subject.subject_id === selectedSubjectId);

                    setSelectedTeacher((prev) => ({
                      ...prev,
                      subject_name: selectedSubject.subject_name,
                      subjectID: selectedSubject.subject_id,
                      subject: selectedSubject,
                    }));
                  }}
                  sx={{ height: '35px', marginTop: '8px' }}
                >
                  {categories?.data.map((category) =>
                    category.subject.map((subject) => (
                      <MenuItem key={subject.subject_id} value={subject.subject_id}>
                        {subject.subject_name}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                label="Subject Level"
                id="subjectlevelName"
                fullWidth
                required
                variant="outlined"
                margin="normal"
                value={subjectLevelName}
                onChange={(e) => setSubjectLevelName(e.target.value)}
                InputProps={{
                  style: { height: 'auto' },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
            </Grid>
          </Grid> */}

          <Box mt={2} className='flex flex-row justify-between'>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                color: 'white',
                background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              onClick={handleSaveEdit}
              sx={{
                color: 'white',
                marginLeft: 2,
                background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>

      <CategoryDeletedMsg open={openDeleteDialog} onClose={handleDeleteDialogClose} handleDeleteClick={handleDeleteClick} />
      <DeletedSuccessMsg open={deleteSuccessDialogOpen} onClose={handleDeleteSuccessDialogClose} />
      <SuccessMsg open={successMessageOpen} onClose={handleCloseSuccessMessage} message="Data Edited successfully" />
    </Fragment>
  );
};

export default SubjectLevel;


