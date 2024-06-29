import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, TextField, Card, Dialog, DialogTitle, DialogContent, DialogActions, CardContent, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@mui/system';
import axios from 'axios';
import SuccessMsg from '../AddCategory/SuccessMsg';
import { useGetCategoryListQuery } from '../../../Services/CategoryMasterApi/CategoryApi';

const PaperLevel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [paperName, setPaperName] = useState('');

  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/categorys/paper');
        setTeacherData(response.data?.data?.papers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [page, setPage] = useState(1);
  const teachersPerPage = 5;
  const handleEdit = (teacher) => {
    setSelectedTeacher({
      ...teacher,
      boardID: teacher.board_info._id,
      subjectID: teacher.subject_info._id,
      subjectlevelID: teacher.subjectlevel_info?._id,
      sourceID:teacher.source_info?._id,
      paperID:teacher.paper_info?._id,
    });
    setPaperName(teacher.paper_name);
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
      await axios.delete(`/api/v1/categorys/paper/${deleteTeacherId}`);
      setDeleteSuccessDialogOpen(true);
      setTeacherData((prevData) => prevData.filter((teacher) => teacher._id !== deleteTeacherId));
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * teachersPerPage;
  const endIndex = startIndex + teachersPerPage;

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(
        `/api/v1/categorys/paper/${selectedTeacher._id}`,
        {
          board_id: selectedTeacher.boardID,
          subject_id: selectedTeacher.subjectID,
          subject_level_id: selectedTeacher.subjectlevelID,
          source_id: selectedTeacher.sourceID,
          paper_name: paperName
        }
      );

      if (response.data && response.data.status === "success") {
        setTeacherData(prevData =>
          prevData.map(teacher =>
            teacher._id === selectedTeacher._id ? { ...teacher, ...selectedTeacher, paper_name: paperName } : teacher
          )
        );
        setSelectedTeacher(null);
        setPaperName("");
        setSuccessMessageOpen(true);
      } else {
        console.error("Edit API failed:", response.data?.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error updating paper:", error);
    }
  };

  const handleClose = () => {
    setSelectedTeacher(null);
  };

  const handleAddMapping = (newMapping) => {
    setTeacherData((prevData) => [...prevData, newMapping]);
  };

  return (
    <Fragment>
      <Container maxWidth="xxl" sx={{ marginTop: '15px', background: '#f0f0f0' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Board Name</TableCell>
                {window.innerWidth > 1024 && (
                  <TableCell>Subject Name</TableCell>
                )}
                {window.innerWidth > 1024 && (
                  <TableCell>Subject Level</TableCell>
                )}
                {window.innerWidth > 1024 && (
                  <TableCell>Source</TableCell>
                )}
                {window.innerWidth > 1024 && (
                  <TableCell>Paper/Book</TableCell>
                )}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherData.slice(startIndex, endIndex).map((teacher, index) => (
                <TableRow key={teacher._id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                  <TableCell>{teacher.board_info.board_prog_name}</TableCell>
                  {window.innerWidth > 1024 && (
                    <TableCell>{teacher.subject_info.subject_name} </TableCell>
                  )}
                  {window.innerWidth > 1024 && (
                    <TableCell>{teacher.subjectlevel_info.subject_level_name} </TableCell>
                  )}
                  {window.innerWidth > 1024 && (
                    <TableCell>{teacher.source_info.source_name} </TableCell>
                  )}
                  {window.innerWidth > 1024 && (
                    <TableCell>{teacher.paper_name} </TableCell>
                  )}
                  <TableCell>
                    <Link
                      to=""
                      className="item-trash text-danger circle"
                      data-bs-toggle="tooltip"
                      title="Delete"
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </Link>
                    &nbsp;&nbsp;
                    <Link
                      to=''
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
                      data-bs-toggle="tooltip"
                      title="Edit"
                      onClick={() => handleEdit(teacher)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L7 18.5l-4 1 1-4L18.5 2.5z"></path></svg>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(teacherData.length / teachersPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Box>
      </Container>

      {/* Edit Modal */}
      <Modal open={selectedTeacher !== null} onClose={handleClose}>
        <Card sx={{ maxWidth: 600, p: 3, mx: 'auto', mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Edit Paper
          </Typography>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Board</InputLabel>
                  <Select
                    value={selectedTeacher?.boardID || ''}
                    onChange={(e) =>
                      setSelectedTeacher((prev) => ({
                        ...prev,
                        boardID: e.target.value,
                      }))
                    }
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
                    onChange={(e) =>
                      setSelectedTeacher((prev) => ({
                        ...prev,
                        subjectID: e.target.value,
                      }))
                    }
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
                  <InputLabel>Subject Level</InputLabel>
                  <Select
                    value={selectedTeacher?.subjectlevelID || ''}
                    onChange={(e) =>
                      setSelectedTeacher((prev) => ({
                        ...prev,
                        subjectlevelID: e.target.value,
                      }))
                    }
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
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>
                  <Select
                    value={selectedTeacher?.sourceID || ''}
                    onChange={(e) =>
                      setSelectedTeacher((prev) => ({
                        ...prev,
                        sourceID: e.target.value,
                      }))
                    }
                  >
                   {categories.categories.find(category => category._id === selectedTeacher?.boardID)?.subjects
  .find(subject => subject._id === selectedTeacher?.subjectID)?.subjectlevels
  .find(level => level._id === selectedTeacher?.subjectlevelID)?.sources.map(source => (
    <MenuItem key={source._id} value={source._id}>
      {source.source_name}
    </MenuItem>
))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Paper Name"
                  fullWidth
                  value={paperName}
                  onChange={(e) => setPaperName(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveEdit} color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Card>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this paper?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteClick} color="secondary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Success Message */}
      <Dialog open={deleteSuccessDialogOpen} onClose={handleDeleteSuccessDialogClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Paper deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Message */}
      <SuccessMsg
        open={successMessageOpen}
        handleClose={handleCloseSuccessMessage}
        message="Paper updated successfully!"
      />
    </Fragment>
  );
};

export default PaperLevel;
