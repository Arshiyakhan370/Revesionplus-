import React, { Fragment, useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Button,
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
  Pagination,
  Stack,
  Container,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessMsg from '../AddCategory/SuccessMsg';
import { useGetCategoryListQuery } from '../../../Services/CategoryMasterApi/CategoryApi';
import { useMediaQuery } from 'react-responsive';

const TopicLevel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteTopicId, setDeleteTopicId] = useState(null);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
  const [topicData, setTopicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [topicName, setTopicName] = useState('');
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();
  const [page, setPage] = useState(1);
  const topicsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/categorys/topic');
        setTopicData(response.data?.data.topics);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching topic data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };

  const handleEdit = (topic) => {
    setSelectedTopic({
      ...topic,
      boardID: topic.board_info._id,
      subjectID: topic.subject_info._id,
      subjectlevelID: topic.subjectlevel_info?._id,
      sourceID: topic.source_info?._id,
      paperID: topic.paper_info?._id,
      topicID: topic.topic_info?._id,
    });
    setTopicName(topic.topic_name);
  };

  const handleDeleteDialogOpen = (topicId) => {
    setDeleteTopicId(topicId);
    setOpenDeleteDialog(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteTopicId(null);
    setOpenDeleteDialog(false);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`/api/v1/categorys/topic/${deleteTopicId}`);
      setTopicData((prevData) => prevData.filter((topic) => topic._id !== deleteTopicId));
      setOpenDeleteDialog(false);
      setDeleteSuccessDialogOpen(true);
    } catch (error) {
      console.error('Error deleting topic:', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * topicsPerPage;
  const endIndex = startIndex + topicsPerPage;

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };
  const handleSaveEdit = async () => {
    try {
      const response = await axios.patch(
        `/api/v1/categorys/topic/${selectedTopic._id}`,
        {
          board_id: selectedTopic.boardID,
          subject_id: selectedTopic.subjectID,
          subject_level_id: selectedTopic.subjectlevelID,
          source_id: selectedTopic.sourceID,
          paper_id: selectedTopic.paperID,
          topic_name: topicName,
        }
      );
  
      if (response.data && response.data.message === 'Topic updated successfully') {
        setTopicData((prevData) =>
          prevData.map((topic) =>
            topic._id === selectedTopic._id ? { ...topic, ...selectedTopic, topic_name: topicName } : topic
          )
        );
  
        setTopicName('');
        setSelectedTopic(null); 
        setSuccessMessageOpen(true); 
      } else {
        console.error('Edit API failed:', response.data?.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error updating topic:', error);
    }
  };
  
  const handleClose = () => {
    setSelectedTopic(null);
  };

  return (
    <Fragment>
      <Container maxWidth="xxl" sx={{ marginTop: '15px', background: '#f0f0f0' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Board Name</TableCell>
                {!isSmallScreen && <TableCell>Subject Name</TableCell>}
                {!isSmallScreen && <TableCell>Subject Level</TableCell>}
                {!isSmallScreen && <TableCell>Source</TableCell>}
                {!isSmallScreen && <TableCell>Paper/Book</TableCell>}
                {!isSmallScreen && <TableCell>Topic</TableCell>}
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topicData.slice(startIndex, endIndex).map((topic, index) => (
                <TableRow key={topic._id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                  <TableCell>{topic.board_info.board_prog_name}</TableCell>
                  {!isSmallScreen && <TableCell>{topic.subject_info.subject_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{topic.subjectlevel_info.subject_level_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{topic.source_info.source_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{topic.paper_info.paper_name}</TableCell>}
                  {!isSmallScreen && <TableCell>{topic.topic_name}</TableCell>}
                  <TableCell>
                    <Link
                      to=""
                      className="item-trash text-danger circle"
                      onClick={() => handleDeleteDialogOpen(topic._id)}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '30px',
                        border: '1px solid #9ba4a4',
                        padding: '5px',
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
                      to=""
                      className="item-edit text-info circle text-blue-400"
                      onClick={() => handleEdit(topic)}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '30px',
                        border: '1px solid #9ba4a4',
                        padding: '5px',
                        fontSize: '16px',
                        background: 'rgb(244 237 201)',
                      }}
                    >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} mt={2}>
          <Pagination count={Math.ceil(topicData.length / topicsPerPage)} page={page} onChange={handleChangePage} />
        </Stack>
      </Container>
      <Modal open={selectedTopic !== null} onClose={handleClose}>
      
        <Box p={3} sx={{ ...modalStyle }}>
          <Typography variant="h6">Edit Topic</Typography>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Board</InputLabel>
                  <Select
                    value={selectedTopic?.boardID || ''}
                    onChange={(e) =>
                      setSelectedTopic((prev) => ({
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
                    value={selectedTopic?.subjectID || ''}
                    onChange={(e) =>
                      setSelectedTopic((prev) => ({
                        ...prev,
                        subjectID: e.target.value,
                      }))
                    }
                  >
                   {(categories.categories.find(cat => cat._id === selectedTopic?.boardID)?.subjects || []).map(subject => (
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
                    value={selectedTopic?.subjectlevelID || ''}
                    onChange={(e) =>
                      setSelectedTopic((prev) => ({
                        ...prev,
                        subjectlevelID: e.target.value,
                      }))
                    }
                  >
                    {(categories.categories.find(category => category._id === selectedTopic?.boardID)?.subjects.find(subject => subject._id === selectedTopic?.subjectID)?.subjectlevels || []).map(level => (
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
                    value={selectedTopic?.sourceID || ''}
                    onChange={(e) =>
                      setSelectedTopic((prev) => ({
                        ...prev,
                        sourceID: e.target.value,
                      }))
                    }
                  >
                   {categories.categories.find(category => category._id === selectedTopic?.boardID)?.subjects
  .find(subject => subject._id === selectedTopic?.subjectID)?.subjectlevels
  .find(level => level._id === selectedTopic?.subjectlevelID)?.sources.map(source => (
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
      value={selectedTopic?.paperID || ''}
      onChange={(e) =>
        setSelectedTopic((prev) => ({
          ...prev,
          paperID: e.target.value,
        }))
      }
    >
      {categories.categories
        .find(category => category._id === selectedTopic?.boardID)
        ?.subjects.find(subject => subject._id === selectedTopic?.subjectID)
        ?.subjectlevels.find(level => level._id === selectedTopic?.subjectlevelID)
        ?.sources.find(source => source._id === selectedTopic?.sourceID)
        ?.papers.map(paper => (
          <MenuItem key={paper._id} value={paper._id}>
            {paper.paper_name}
          </MenuItem>
        ))}
    </Select>
  </FormControl>
</Grid>
            <Grid item xs={12}>
              <TextField
                label="Topic Name"
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSaveEdit}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose} sx={{ ml: 1 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this topic?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteClick} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <SuccessMsg
        open={successMessageOpen}
        handleClose={handleCloseSuccessMessage}
        message="Topic updated successfully"
      />
      <SuccessMsg
        open={deleteSuccessDialogOpen}
        handleClose={handleDeleteSuccessDialogClose}
        message="Topic deleted successfully"
      />
    </Fragment>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default TopicLevel;
