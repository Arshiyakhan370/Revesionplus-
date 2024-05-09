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
import { boardOptions ,subjectOptions, teacherOptions}  from '../TeacherMap/SweetAlert';
import axios from 'axios';
import SuccessMsg from './AddCategory/SuccessMsg';

const SubTopic = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
const [deleteTeacherId, setDeleteTeacherId] = useState(null);
const [viewPageModalOpen, setViewPageModalOpen] = useState(false);
const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
const [teacherData, setTeacherData] = useState([]);
const [loading, setLoading] = useState(true);
const [categories, setCategories] = useState([]);
const [successMessageOpen, setSuccessMessageOpen] = useState(false); 
const [subTopicName1,setSubTopicName1]=useState([]);
useEffect(() => {
const fetchData = async () => {
  try {
    const response = await axios.get('https://staging.ibgakiosk.com/api/view_subtopic');
    const boardsResponse = await axios.get(
      "https://staging.ibgakiosk.com/api/category_list"
    );
    setCategories(boardsResponse.data?.data);
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

  const handleEdit = async (teacher) => {
    console.log(teacher,"teacher");
    try {
      const responseGetById = await axios.get(`https://staging.ibgakiosk.com/api/edit_subtopic/${teacher.subtopic_id}`);
      const getData = responseGetById.data?.data;
      const editData = {...teacher, boardID:getData.boardID, subjectID:getData.subjectID,subjectlevelID:getData.subjectlevelID,sourceID:getData.sourceID,paperID:getData.paperID,topicID:getData.topicID}
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
        `https://staging.ibgakiosk.com/api/delete_subtopic`,
        {
          subtopic_id: deleteTeacherId
        }
      );
    
    } catch (error) {
      console.error("Error deleting teacher:", error);
  };
     setTeacherData((prevData) => prevData.filter((teacher) => teacher.subtopic_id !== deleteTeacherId));
    setOpenDeleteDialog(false);
    setDeleteSuccessDialogOpen(true);
    handleCloseMore();
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
      const response = await axios.post(
        `https://staging.ibgakiosk.com/api/update_subtopic`,
        {
          subtopic_id: selectedTeacher.subtopic_id,
          boardID: selectedTeacher.boardID,
          subjectID: selectedTeacher.subjectID,
          subjectlevelID: selectedTeacher.subjectlevelID,
          sourceID: selectedTeacher.sourceID,
          paperID: selectedTeacher.paperID,
          topicID: selectedTeacher.topicID,
          subtopicName: subTopicName1
        }
      );
  
      if (response.data && response.data.message === "Subtopic updated successfully") {
    
        setTeacherData(prevData =>
          prevData.map(teacher =>
            teacher.subtopic_id === selectedTeacher.subtopic_id ? { ...teacher, ...selectedTeacher, subtopicName: subTopicName1 } : teacher
          )
        );
  
    
        setSelectedTeacher(null);
        setSubTopicName1("");
     
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
                      {teacherData.slice(startIndex, endIndex).map((teacher, index) => (
                        <TableRow key={teacher.subtopic_id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                           <TableCell>{teacher.board_name}</TableCell>
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.subject_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.subject_lev_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.source_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.paper_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.topic_name} </TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.subtopicName} </TableCell>)}
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
    const selectedSubject = categories
      .flatMap(category => category.subject) 
      .flatMap(subject => subject.subject_level) 
      .find(level => level.subject_lev_id === selectedSourceId); 
  
    if (selectedSubject) {
      setSelectedTeacher(prevState => ({
        ...prevState,
        subject_lev_name: selectedSubject.subject_lev_name,
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
          <FormControl fullWidth>
            <InputLabel id="subject-label">Select Source</InputLabel>
            <Select
              labelId="subject-label"
              id="sourceID"
              value={selectedTeacher?.sourceID || ''}
              onChange={(e) => {
    const selectedPaperId = e.target.value;
    const selectedSubject = categories
      .flatMap(category => category.subject) 
      .flatMap(subject => subject.subject_level) 
      .flatMap(level=> level.source) 
      .find(source => source.source_id === selectedPaperId); 
  
    if (selectedSubject) {
      setSelectedTeacher(prevState => ({
        ...prevState,
        source_name: selectedSubject.source_name,
        sourceID: selectedPaperId,
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
            level.source.map(source => (
                <MenuItem key={source.source_id} value={source.source_id}>
                    {source.source_name}
                </MenuItem>
            ))
        ))
    ))
))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
  <FormControl fullWidth>
    <InputLabel id="paper-label">Select Paper</InputLabel>
    <Select
      labelId="paper-label"
      id="paperID"
      value={selectedTeacher?.paperID || ''}
      onChange={(e) => {
        const selectedPaperId = e.target.value;
        const selectedPaper = categories
          .flatMap(category => category.subject)
          .flatMap(subject => subject.subject_level)
          .flatMap(level => level.source)
          .flatMap(source => source.paper)
          .find(paper => paper.paper_id === selectedPaperId);

        if (selectedPaper) {
          setSelectedTeacher(prevState => ({
            ...prevState,
            paper_name: selectedPaper.paper_name,
            paperID: selectedPaperId,
          }));
        } else {
          console.error("Selected paper not found.");
        }
      }}
      sx={{ height: '35px', marginTop: '8px' }}
    >
      {categories.map(category => (
        category.subject.map(subject => (
          subject.subject_level.map(level => (
            level.source.map(source => (
              source.paper.map(paper => (
                <MenuItem key={paper.paper_id} value={paper.paper_id}>
                  {paper.paper_name}
                </MenuItem>
              ))
            ))
          ))
        ))
      ))}
    </Select>
  </FormControl>
</Grid>

       
<Grid item xs={12} sm={4}>
  <FormControl fullWidth>
    <InputLabel id="topic-label">Select Topic</InputLabel>
    <Select
      labelId="topic-label"
      id="topicID"
      value={selectedTeacher?.paperID || ''}
      onChange={(e) => {
        const selectedTopicId = e.target.value;
        const selectedTopic = categories
          .flatMap(category => category.subject)
          .flatMap(subject => subject.subject_level)
          .flatMap(level => level.source)
          .flatMap(source => source.paper)
          .flatMap(paper => paper.topic)
          .find(topic => topic.topic_id === selectedTopicId);

        if (selectedTopic) {
          setSelectedTeacher(prevState => ({
            ...prevState,
            topic_name: selectedTopic.topicName,
            topicID: selectedTopicId,
          }));
        } else {
          console.error("Selected topic not found.");
        }
      }}
      sx={{ height: '35px', marginTop: '8px' }}
    >
      {categories.map(category => (
        category.subject.map(subject => (
          subject.subject_level.map(level => (
            level.source.map(source => (
              source.paper.map(paper => (
                paper.topic.map(topic => (
                  <MenuItem key={topic.topic_id} value={topic.topic_id}>
                    {topic.topicName}
                  </MenuItem>
                ))
              ))
            ))
          ))
        ))
      ))}
    </Select>
  </FormControl>
</Grid>

        <Grid item xs={12} sm={4}>
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