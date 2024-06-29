import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, TextField, Card, Dialog, DialogTitle, DialogContent, DialogActions, CardContent, Grid, FormControl, InputLabel, Select, MenuItem, Menu } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';
import { Container } from '@mui/system';
import { boardOptions ,subjectOptions, teacherOptions}  from '../../TeacherMap/SweetAlert';
import axios from 'axios';
import SuccessMsg from '../AddCategory/SuccessMsg';
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const SubTopic = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
const [deleteTeacherId, setDeleteTeacherId] = useState(null);
const [viewPageModalOpen, setViewPageModalOpen] = useState(false);
const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
const [teacherData, setTeacherData] = useState([]);
const [loading, setLoading] = useState(true);
// const [categories, setCategories] = useState([]);
const [successMessageOpen, setSuccessMessageOpen] = useState(false); 
const [subTopicName1,setSubTopicName1]=useState([]);
const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

useEffect(() => {
const fetchData = async () => {
  try {
    const response = await axios.get('/api/v1/categorys/subtopic');
    

    setTeacherData(response.data?.data); 
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMore = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMore = () => {
    setAnchorEl(null);
  };
  const handleViewPage = () => {
    setViewPageModalOpen(true);
    handleCloseMore();
  };

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };


  const handlePrintPage = () => {
       window.print();
    handleCloseMore();
  };

  const handleCloseViewPageModal = () => {
    setViewPageModalOpen(false);
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
      await axios.delete(`/api/v1/categorys/subtopic/${deleteTeacherId}`);
      setTeacherData((prevData) => prevData.filter((teacher) => teacher._id !== deleteTeacherId));
      setOpenDeleteDialog(false);
      setDeleteSuccessDialogOpen(true);
    } catch (error) {
      console.error("Error deleting subtopic:", error);
      
    }
  };
  
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * teachersPerPage;
  const endIndex = startIndex + teachersPerPage;

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };
  const handleEdit = (teacher) => {
    setSelectedTeacher({
      ...teacher,
      boardID: teacher.board_info._id,
      subjectID: teacher.subject_info._id,
      subjectlevelID: teacher.subjectlevel_info?._id,
      sourceID: teacher.source_info?._id,
      paperID: teacher.paper_info?._id,
      topicID: teacher.topic_info?._id,
      subtopicID: teacher.subtopic_info?._id,
    });
    setSubTopicName1(teacher.subtopic_name); 
  };
  
  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(
        `/api/v1/categorys/subtopic/${selectedTeacher._id}`,
        {
          subtopic_id: selectedTeacher.subtopic_id,
          boardID: selectedTeacher.boardID,
          subjectID: selectedTeacher.subjectID,
          subjectlevelID: selectedTeacher.subjectlevelID,
          sourceID: selectedTeacher.sourceID,
          paperID: selectedTeacher.paperID,
          topicID: selectedTeacher.topicID,
          subtopicName: subTopicName1 ,
        }
      );
  
      if (response.data && response.data.message === "Subtopic updated successfully") {
        setTeacherData((prevData) =>
          prevData.map((teacher) =>
            teacher.subtopic_id === selectedTeacher.subtopic_id ? { ...teacher, subtopic_name: subTopicName1 } : teacher
          )
        );
  
        setSelectedTeacher(null);
        setSuccessMessageOpen(true);
      } else {
        console.error("Edit API failed:", response.data?.message || "Unknown error");
        
      }
    } catch (error) {
      console.error("Error updating subtopic:", error);
      
    }
  };
  
  
const handleClose=()=>{
    setSelectedTeacher(null);
}


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
                        {window.innerWidth > 1024 && (
                        <TableCell>Paper/Book</TableCell>)}
                        {window.innerWidth > 1024 && (
                        <TableCell>Topic</TableCell>)}
                        {window.innerWidth > 1024 && (
                        <TableCell>SubTopic</TableCell>)}
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {teacherData && teacherData.subtopics ? teacherData.subtopics.slice(startIndex, endIndex).map((teacher, index) => (
                <TableRow key={teacher.subtopic_id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                  <TableCell>{teacher.board_info.board_prog_name}</TableCell>
                  {!isSmallScreen && <TableCell>{teacher.subject_info.subject_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.subjectlevel_info.subject_level_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.source_info.source_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.paper_info.paper_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{teacher.topic_info.topic_name}</TableCell>}
                  {window.innerWidth > 1024 && <TableCell>{teacher.subtopic_name}</TableCell>}
                  <TableCell>
                    
                          <Link to=""
               className="item-edit text-info circle "
               onClick={() => handleDeleteDialogOpen(teacher.subtopic_id)}
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
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
             class="feather feather-more-vertical font-small-4">
             <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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

                            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMore}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleViewPage}>
                  <VisibilityIcon sx={{ marginRight: 1 }} />
                  View Page
                </MenuItem>
                <MenuItem  onClick={() => handleDeleteDialogOpen(teacher.subtopic_id)}>
                  <DeleteIcon sx={{ marginRight: 1 }} />
                  Delete
                </MenuItem>
                <MenuItem onClick={handlePrintPage}>
                  <PrintIcon sx={{ marginRight: 1 }} />
                  Print
                </MenuItem>
              </Menu>
                          </TableCell>
                        </TableRow>
                      )) : null}
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
  <FormControl fullWidth>
    <InputLabel>Paper</InputLabel>
    <Select
      value={selectedTeacher?.paperID || ''}
      onChange={(e) =>
        setSelectedTeacher((prev) => ({
          ...prev,
          paperID: e.target.value,
        }))
      }
    >
      {categories.categories
        .find(category => category._id === selectedTeacher?.boardID)
        ?.subjects.find(subject => subject._id === selectedTeacher?.subjectID)
        ?.subjectlevels.find(level => level._id === selectedTeacher?.subjectlevelID)
        ?.sources.find(source => source._id === selectedTeacher?.sourceID)
        ?.papers.map(paper => (
          <MenuItem key={paper._id} value={paper._id}>
            {paper.paper_name}
          </MenuItem>
        ))}
    </Select>
  </FormControl>

        </Grid>
        <Grid item xs={12}>
  <FormControl fullWidth>
    <InputLabel>Topic</InputLabel>
    <Select
      value={selectedTeacher?.topicID || ''}
      onChange={(e) =>
        setSelectedTeacher((prev) => ({
          ...prev,
          topicID: e.target.value,
        }))
      }
    >
      {categories?.categories
        .find(category => category._id === selectedTeacher?.boardID)
        ?.subjects.find(subject => subject._id === selectedTeacher?.subjectID)
        ?.subjectlevels.find(level => level._id === selectedTeacher?.subjectlevelID)
        ?.sources.find(source => source._id === selectedTeacher?.sourceID)
        ?.papers.find(paper => paper._id === selectedTeacher?.paperID)
        ?.topics.map(topic => (
          <MenuItem key={topic._id} value={topic._id}>
            {topic.topic_name}
          </MenuItem>
        ))}
    </Select>
  </FormControl>
</Grid>

        <Grid item xs={12} >
        <TextField
                    label="Subject Level"
                    id="subtopicName"
                    fullWidth
                    required
                    variant="outlined"
                    margin="normal"
                    value={subTopicName1}
                    onChange={(e) => setSubTopicName1(e.target.value)}
                    InputProps={{
                      style: { height: 'auto' },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
     
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
      </Grid>
      </Box>
    </Modal>
    <Modal open={viewPageModalOpen} onClose={handleCloseViewPageModal}>
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
            View Page
          </Typography>
                </Box>
      </Modal>
      <SuccessMsg
        open={successMessageOpen}
        onClose={handleCloseSuccessMessage}
        message="Data Edited  successfully"
      />
    </Fragment>
  );
};



export default SubTopic