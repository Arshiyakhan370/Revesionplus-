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
import { useMediaQuery } from "react-responsive";
import { Container } from "@mui/system";

const Subject = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [boards, setBoards] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const teachersPerPage = 100;

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const subjectsResponse = await axios.get(
          "https://staging.ibgakiosk.com/api/view_subject"
        );
        const boardsResponse = await axios.get(
          "https://staging.ibgakiosk.com/api/boards"
        );
        setSubjects(subjectsResponse.data?.data);
        setBoards(boardsResponse.data?.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTeacherData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleDeleteDialogOpen = (teacherId) => {
    setDeleteTeacherId(teacherId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteTeacherId(null);
    setOpenDeleteDialog(false);
  };

  const handleDeleteClick = async (id) => {
    try {
      console.log("facing issues",id)
      await axios.post(
        `https://staging.ibgakiosk.com/api/delete_subject`,
        {
          subject_id: id
        }
      );
      setTeacherData((prevData) =>
        prevData.filter((teacher) => teacher.id !== id)
      );
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
      await axios.post(
        `https://staging.ibgakiosk.com/api/update_subject`,
        selectedTeacher
      );
      setTeacherData((prevData) =>
        prevData.map((teacher) =>
          teacher.id === selectedTeacher.id
            ? { ...teacher, ...selectedTeacher }
            : teacher
        )
      );
      setSelectedTeacher(null);
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  const handleClose = () => {
    setSelectedTeacher(null);
  };

  return (
    <Fragment>
      <Container
        maxWidth="xxl"
        sx={{ marginTop: "15px", background: "#f0f0f0" }}
      >
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
              {boards
                .slice((page - 1) * teachersPerPage, page * teachersPerPage)
                .map((teacher, index) => (
                  <TableRow
                    key={teacher.board_name}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f5f5f5" : "inherit",
                    }}
                  >
                    <TableCell>{teacher.board_name}</TableCell>
                    <TableCell>
                      {subjects.find(
                        (subject) => subject.board_id === teacher.id
                      )?.subjectName || "-"}
                    </TableCell>
                    <TableCell>
                      <Link
                        to=""
                        className="item-trash text-danger circle"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Delete"
                        onClick={() => handleDeleteDialogOpen(teacher.id)}
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-trash"
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
                        title=""
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </Link>
                    </TableCell>
                    <Dialog
                      open={openDeleteDialog}
                      onClose={handleDeleteDialogClose}
                    >
                      <DialogTitle className="text-red-500">
                        Delete Teacher
                      </DialogTitle>
                      <DialogContent>
                        <p>Are you sure you want to delete this teacher?</p>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleDeleteDialogClose}
                          color="secondary"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => handleDeleteClick(teacher?.subject_id)}
                          color="primary"
                        >
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
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

      <Dialog
        open={deleteSuccessDialogOpen}
        onClose={handleDeleteSuccessDialogClose}
      >
        <DialogTitle className="text-green-500">Delete Successful</DialogTitle>
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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            gap: "10px",
            bgcolor: "background.paper",
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
                  id="board-select"
                  value={selectedTeacher?.board || ""}
                  onChange={(e) =>
                    setSelectedTeacher((prev) => ({
                      ...prev,
                      board: e.target.value,
                    }))
                  }
                  sx={{ height: "35px", marginTop: "8px" }}
                >
                  {boards.map((board) => (
                    <MenuItem key={board.id} value={board.id}>
                      {board.board_name}
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
                  value={selectedTeacher?.subject || ""}
                  onChange={(e) =>
                    setSelectedTeacher((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  sx={{ height: "35px", marginTop: "8px" }}
                >
                  {subjects.map((subject) => (
                    <MenuItem key={subject.id} value={subject.id}>
                      {subject.subjectName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box mt={2} className="flex flex-row justify-between">
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                color: "white",
                background:
                  "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              onClick={handleSaveEdit}
              sx={{
                color: "white",
                marginLeft: 2,
                background:
                  "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Subject;
