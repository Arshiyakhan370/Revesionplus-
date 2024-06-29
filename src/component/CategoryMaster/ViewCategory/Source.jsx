import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import SuccessMsg from '../AddCategory/SuccessMsg';
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const Source = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const teachersPerPage = 5;
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [sourceName1, setSourceName1] = useState('');

  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();
  const isSmallScreen = window.innerWidth <= 1024;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/categorys/source');
        setTeacherData(response.data?.data?.sources || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleEdit = (teacher) => {
    setSelectedTeacher({
      ...teacher,
      boardID: teacher.board_info._id,
      subjectID: teacher.subject_info._id,
      subjectlevelID: teacher.subjectlevel_info?._id,
    });
    setSourceName1(teacher.source_name);
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
      await axios.delete(`/api/v1/categorys/source/${deleteTeacherId}`);

      setDeleteSuccessDialogOpen(true);
      setTeacherData((prevData) => prevData.filter((teacher) => teacher._id !== deleteTeacherId));
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };
 
  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(`/api/v1/categorys/source/${selectedTeacher._id}`, {
        board_id: selectedTeacher.boardID,
        subject_id: selectedTeacher.subjectID,
        subject_level_id: selectedTeacher.subjectlevelID,
        source_name: sourceName1,
      });

      if (response.data && response.data.status === 'success') {
        setTeacherData((prevData) =>
          prevData.map((teacher) =>
            teacher._id === selectedTeacher._id ? { ...teacher, source_name: sourceName1 } : teacher
          )
        );

        setSelectedTeacher(null);
        setSourceName1('');
        setSuccessMessageOpen(true);
      } else {
        console.error('Edit API failed:', response.data?.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error updating source:', error);
    }
  };

  const handleClose = () => {
    setSelectedTeacher(null);
  };

  const startIndex = (page - 1) * teachersPerPage;
  const endIndex = startIndex + teachersPerPage;

  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ marginTop: '15px', background: '#f0f0f0' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Board Name</TableCell>
                {!isSmallScreen && <TableCell>Subject Name</TableCell>}
                {!isSmallScreen && <TableCell>Subject Level</TableCell>}
                {!isSmallScreen && <TableCell>Source</TableCell>}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherData.slice(startIndex, endIndex).map((teacher, index) => (
                <TableRow key={teacher._id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                  <TableCell>{teacher.board_info?.board_prog_name}</TableCell>
                  {!isSmallScreen && <TableCell>{teacher.subject_info?.subject_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.subjectlevel_info?.subject_level_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.source_name}</TableCell>}
                  <TableCell>
                    <Link
                      to=""
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </Link>
                    &nbsp;&nbsp;
                    <Link
                      to=""
                      className="item-edit text-info circle text-blue-400"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-edit"
                      >
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
        <DialogTitle>Delete Teacher</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this teacher?</Typography>
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
        <DialogTitle>Delete Success</DialogTitle>
        <DialogContent>
          <Typography>Teacher deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Modal open={!!selectedTeacher} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Edit Teacher
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
              <FormControl fullWidth>
                <InputLabel>Board</InputLabel>
                <Select
                  value={selectedTeacher?.subjectlevelID || ''}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, subjectlevelID: e.target.value })}
                >
                  {(categories.categories.find(category => category._id === selectedTeacher?.boardID)?.subjects.find(subject => subject._id === selectedTeacher?.subjectID)?.subjectlevels || []).map(level => (
                        <MenuItem key={level._id} value={level._id}>
                          {level.subject_level_name}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Source Name" value={sourceName1} onChange={(e) => setSourceName1(e.target.value)} />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button onClick={handleClose} color="secondary" sx={{ marginRight: 1 }}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>

      <SuccessMsg open={successMessageOpen} handleClose={handleCloseSuccessMessage} message="Source updated successfully!" />
    </Fragment>
  );
};

export default Source;
