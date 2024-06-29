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
  const [boards, setBoards] = useState([]);
  // const [subjects, setSubjects] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [subjectName, setSubjectName] = useState('');
  const [page, setPage] = useState(1);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false); 
  const { data:{data:categories}={},  error, isLoading ,} = useGetCategoryListQuery();
  const { data: { data: subjects } = {}, error: subjectError, isLoading: subjectIsLoading } = useGetViewSubjectListQuery()
  const [updatePost] = useDeleteSubjectMutation()
  const [editedData,result] =useUpdateSubjectMutation()
  const teachersPerPage = 10;

  if(isLoading || subjectIsLoading){
  
    return <div>
      Loading
    </div>
  }
  if(error || subjectError){

    return <div>
      error
    </div>
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

  
   
    
    const handleDeleteClick = async (deleteId) => {
      try{
        await updatePost(deleteId)
        setOpenDeleteDialog(false);
      }
        catch(error){
        }

      // try {
      //   await axios.delete(`/api/v1/categorys/subject/${deleteId}`);
      //   const updatedSubjects = subjects.data.filter(subject => subject._id !== deleteId);
      //   setSelectedTeacher({ ...subjects, data: updatedSubjects });
    
      //   setOpenDeleteDialog(false);
      //   setDeleteSuccessDialogOpen(true);
      // } catch (error) {
      //   console.error("Error deleting subject:", error);
      // }
    };
    
    

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };
console.log(subjects,"board");
const handleSaveEdit = async () => {
  try {
    const response = await axios.patch(
      `/api/v1/categorys/subjectl/${selectedTeacher._id}`,
      {
        board_id: selectedTeacher.boardID,
        subject_nmae: subjectName,
        
      }
    );

      if (response.data && response.data.status === 'success') {
        setTeacherData((prevData) =>
          prevData.map((teacher) =>
            teacher._id === selectedTeacher._id ? { ...teacher, subject_name: subjectName } : teacher
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
              {subjects.subjects
                .slice((page - 1) * teachersPerPage, page * teachersPerPage)
                .map((teacher, index) => (
                  <TableRow
                    key={teacher.board_name}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#f5f5f5" : "inherit",
                    }}
                  >
                    <TableCell>{teacher.board_info.board_prog_name}</TableCell>
                    <TableCell>{teacher.subject_name}</TableCell>
                    <TableCell>
                      <Link
                        to=""
                        className="item-trash text-danger circle"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="Delete"
                        onClick={() => handleDeleteDialogOpen(teacher.subject_id)}
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
            count={Math.ceil(subjects.length / teachersPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Container>
      {/* {isLoading  ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.error}</p>
      ) : ( */}
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
            onClick={() => handleDeleteClick(deleteTeacherId)}
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
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
            <Grid item xs={12} sm={4}>
            <TextField
                  label="Subject"
                  id="subejctName"
                  fullWidth
                  required
                  variant="outlined"
                  margin="normal"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
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
    {/* )} */}
    <SuccessMsg
        open={successMessageOpen}
        onClose={handleCloseSuccessMessage}
        message="Data Edited  successfully"
      />
    </Fragment>
  );
};

export default Subject;

