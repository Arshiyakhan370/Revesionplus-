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
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';
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
        setSuccessMessageOpen(true);
        setSelectedTopic(null);
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

  const getFilteredSubjects = (boardID) => {
    return categories?.categories.find(category => category._id === boardID)?.subjects || [];
  };

  const getFilteredSubjectLevels = (boardID, subjectID) => {
    return getFilteredSubjects(boardID).find(subject => subject._id === subjectID)?.subjectlevels || [];
  };

  const getFilteredSources = (boardID, subjectID, subjectlevelID) => {
    return getFilteredSubjectLevels(boardID, subjectID).find(level => level._id === subjectlevelID)?.sources || [];
  };

  const getFilteredPapers = (boardID, subjectID, subjectlevelID, sourceID) => {
    return getFilteredSources(boardID, subjectID, subjectlevelID).find(source => source._id === sourceID)?.papers || [];
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2">
                        <path d="M17 3a2.83 2.83 0 0 1 4 4L7 21l-4 1 1-4z"></path>
                      </svg>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} mt={2} alignItems="center">
          <Pagination
            count={Math.ceil(topicData.length / topicsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Stack>
      </Container>

      <Dialog open={selectedTopic !== null} onClose={handleClose} fullWidth>
        <DialogTitle>Edit Topic</DialogTitle>
        <DialogContent>
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Board</InputLabel>
                  <Select
                    label="Board"
                    value={selectedTopic?.boardID || ''}
                    onChange={(e) => setSelectedTopic((prevTopic) => ({ ...prevTopic, boardID: e.target.value }))}
                  >
                    {categories?.categories.map((category) => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.board_prog_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Subject</InputLabel>
                  <Select
                    label="Subject"
                    value={selectedTopic?.subjectID || ''}
                    onChange={(e) => setSelectedTopic((prevTopic) => ({ ...prevTopic, subjectID: e.target.value }))}
                  >
                    {getFilteredSubjects(selectedTopic?.boardID).map((subject) => (
                      <MenuItem key={subject._id} value={subject._id}>
                        {subject.subject_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Subject Level</InputLabel>
                  <Select
                    label="Subject Level"
                    value={selectedTopic?.subjectlevelID || ''}
                    onChange={(e) => setSelectedTopic((prevTopic) => ({ ...prevTopic, subjectlevelID: e.target.value }))}
                  >
                    {getFilteredSubjectLevels(selectedTopic?.boardID, selectedTopic?.subjectID).map((level) => (
                      <MenuItem key={level._id} value={level._id}>
                        {level.subject_level_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Source</InputLabel>
                  <Select
                    label="Source"
                    value={selectedTopic?.sourceID || ''}
                    onChange={(e) => setSelectedTopic((prevTopic) => ({ ...prevTopic, sourceID: e.target.value }))}
                  >
                    {getFilteredSources(selectedTopic?.boardID, selectedTopic?.subjectID, selectedTopic?.subjectlevelID).map((source) => (
                      <MenuItem key={source._id} value={source._id}>
                        {source.source_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Paper</InputLabel>
                  <Select
                    label="Paper"
                    value={selectedTopic?.paperID || ''}
                    onChange={(e) => setSelectedTopic((prevTopic) => ({ ...prevTopic, paperID: e.target.value }))}
                  >
                    {getFilteredPapers(selectedTopic?.boardID, selectedTopic?.subjectID, selectedTopic?.subjectlevelID, selectedTopic?.sourceID).map((paper) => (
                      <MenuItem key={paper._id} value={paper._id}>
                        {paper.paper_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Topic Name"
                  value={topicName}
                  onChange={(e) => setTopicName(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose} fullWidth>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this topic?</Typography>
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

      <SuccessMsg
        open={successMessageOpen}
        handleClose={handleCloseSuccessMessage}
        title="Success"
        message="Topic updated successfully!"
      />

      <Dialog open={deleteSuccessDialogOpen} onClose={handleDeleteSuccessDialogClose} fullWidth>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Topic deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default TopicLevel;
