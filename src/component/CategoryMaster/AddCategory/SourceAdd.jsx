import React, { useEffect, useState } from 'react';
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
  const [subjectLevelName1, setSubjectLevelName1] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [filteredSubjectLevels, setFilteredSubjectLevels] = useState([]);
  const [submitted, setSubmitted] = useState(false); 
  const { data: { data: { categories } = {} } = {}, error, isLoading } = useGetCategoryListQuery();

  useEffect(() => {
    if (selectedBoard !== '') {
      const board = categories.find(category => category._id === selectedBoard);
      if (board) {
        setFilteredSubjects(board.subjects || []);
        setSelectedSubject('');
        setFilteredSubjectLevels([]);
        setSubjectLevelName1('');
      }
    }
  }, [selectedBoard, categories]);

  useEffect(() => {
    if (selectedSubject !== '') {
      const subject = filteredSubjects.find(subject => subject._id === selectedSubject);
      if (subject) {
        setFilteredSubjectLevels(subject.subjectlevels || []);
        setSubjectLevelName1('');
      }
    }
  }, [selectedSubject, filteredSubjects]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_source', {
        boardID: selectedBoard,
        subjectID: selectedSubject,
        subjectlevelID: subjectLevelName1,
        sourceName: selectedSource,
      });
      console.log('Source added:', response.data);
      setSubmitted(true); 
      setSelectedBoard('');
      setSelectedSubject('');
      setSubjectLevelName1('');
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
                      onChange={(e) => setSelectedBoard(e.target.value)}
                    >
                      {categories.map(category => (
                        <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
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
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      {filteredSubjects.map(subject => (
                        <MenuItem key={subject._id} value={subject._id}>
                          {subject.name}
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
                      value={subjectLevelName1}
                      onChange={(e) => setSubjectLevelName1(e.target.value)}
                    >
                      {filteredSubjectLevels.map(level => (
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
