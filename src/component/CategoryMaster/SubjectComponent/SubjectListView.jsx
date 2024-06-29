import React, { Fragment, useEffect, useState } from "react";
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
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { useDeleteSubjectMutation, useGetCategoryListQuery, useGetViewSubjectListQuery, useUpdateSubjectMutation } from "../../../Services/CategoryApi";
import SuccessMsg from "../AddCategory/SuccessMsg";

const Subject = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [subjectName, setSubjectName] = useState('');
  const [page, setPage] = useState(1);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false); 
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();
  const [updatePost] = useDeleteSubjectMutation();
  const [editedData, result] = useUpdateSubjectMutation();
  const teachersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/categorys/subject');
        setTeacherData(response.data?.data?.subjects || []);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher({
      ...teacher,
      boardID: teacher.board_info._id,
    });
    setSubjectName(teacher.subject_name);
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
      await axios.delete(`/api/v1/categorys/subject/${deleteTeacherId}`);
      setTeacherData((prevData) => prevData.filter((teacher) => teacher._id !== deleteTeacherId));
      setOpenDeleteDialog(false);
      setDeleteSuccessDialogOpen(true);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(
        `/api/v1/categorys/subject/${selectedTeacher._id}`,
        {
          board_id: selectedTeacher.boardID,
          subject_name: subjectName,
        }
      );

      if (response.data && response.data.status === 'success') {
        setTeacherData((prevData) =>
          prevData.map((teacher) =>
            teacher._id === selectedTeacher._id ? { ...teacher, subject_name: subjectName } : teacher
          )
        );
        setSuccessMessageOpen(true);
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
      <Container maxWidth="xxl" sx={{ marginTop: "15px", background: "#f0f0f0" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Board Name</TableCell>
                <TableCell>Subject Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teacherData
                .slice((page - 1) * teachersPerPage, page * teachersPerPage)
                .map((teacher, index) => (
                  <TableRow key={teacher._id} sx={{ backgroundColor: index % 2 === 0 ? "#f5f5f5" : "inherit" }}>
                    <TableCell>{teacher.board_info.board_prog_name}</TableCell>
                    <TableCell>{teacher.subject_name}</TableCell>
                    <TableCell>
                      <Link
                        to=""
                        className="item-trash text-danger circle"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Delete"
                        onClick={() => handleDeleteDialogOpen(teacher._id)}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "30px",
                          border: "1px solid #9ba4a4",
                          padding: "5px 5px 5px 5px",
                          fontSize: "16px",
                          background: "rgb(244 237 201)",
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
                        className="item-edit text-info circle  text-blue-400"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "30px",
                          border: "1px solid #9ba4a4",
                          padding: "5px 5px 5px 5px",
                          fontSize: "16px",
                          background: "rgb(244 237 201)",
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit"
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
          <Pagination
            count={Math.ceil(teacherData.length / teachersPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Container>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this subject?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteClick} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      {selectedTeacher && (
        <Dialog open={selectedTeacher !== null} onClose={handleClose}>
          <DialogTitle>Edit Subject</DialogTitle>
          <DialogContent>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel>Board</InputLabel>
                <Select
                  value={selectedTeacher.boardID}
                  onChange={(e) =>
                    setSelectedTeacher({
                      ...selectedTeacher,
                      boardID: e.target.value,
                    })
                  }
                >
                  {categories.categories.map((board) => (
                    <MenuItem key={board._id} value={board._id}>
                      {board.board_prog_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                label="Subject Name"
                fullWidth
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSaveEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Success Message Dialog */}
      <Dialog open={successMessageOpen} onClose={handleCloseSuccessMessage}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Subject updated successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessMessage} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Success Message Dialog */}
      <Dialog
        open={deleteSuccessDialogOpen}
        onClose={handleDeleteSuccessDialogClose}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Subject deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Subject;
