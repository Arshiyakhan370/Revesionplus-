import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Card,
  Grid,
  CardContent,
} from '@mui/material';
import SuccessMsg from './SuccessMsg';
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const SourceAdd = () => {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSubjectLevel, setSelectedSubjectLevel] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  const handleBoardChange = (boardId) => {
    setSelectedBoard(boardId);
    setSelectedSubject('');
    setSelectedSubjectLevel('');
  };

  const handleSubjectChange = (subjectId) => {
    setSelectedSubject(subjectId);
    setSelectedSubjectLevel('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/v1/categorys/source/create', {
        board_id: selectedBoard,
        subject_id: selectedSubject,
        subject_level_id: selectedSubjectLevel,
        source_name: selectedSource,
      });
      console.log('Source added:', response.data);
      setSubmitted(true);
      setSelectedBoard('');
      setSelectedSubject('');
      setSelectedSubjectLevel('');
      setSelectedSource('');
    } catch (error) {
      console.error('Error adding source:', error);
    }
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="board">Board</InputLabel>
                    <Select
                      label="Board"
                      id="boardID"
                      value={selectedBoard}
                      onChange={(e) => handleBoardChange(e.target.value)}
                    >
                      {categories.categories.map(category => (
                        <MenuItem key={category._id} value={category._id}>{category.board_prog_name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="subject">Subject</InputLabel>
                    <Select
                      label="Subject"
                      value={selectedSubject}
                      onChange={(e) => handleSubjectChange(e.target.value)}
                    >
                      {(categories.categories.find(category => category._id === selectedBoard)?.subjects || []).map(subject => (
                        <MenuItem key={subject._id} value={subject._id}>
                          {subject.subject_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                    <Select
                      label="Subject Level"
                      id="subjectLevelID"
                      value={selectedSubjectLevel}
                      onChange={(e) => setSelectedSubjectLevel(e.target.value)}
                    >
                      {(categories.categories.find(category => category._id === selectedBoard)?.subjects.find(subject => subject._id === selectedSubject)?.subjectlevels || []).map(level => (
                        <MenuItem key={level._id} value={level._id}>
                          {level.subject_level_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4} ms={6}>
                  <TextField
                    label="Source Name"
                    id="sourceNameID"
                    fullWidth
                    required
                    variant="outlined"
                    margin="normal"
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      )}
      <SuccessMsg message="Data saved successfully!" open={submitted} onClose={() => setSubmitted(false)} />
    </div>
  );
};

export default SourceAdd;
