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

const SourceAdd = () => {
  const [categories, setCategories] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectLevelName1, setSubjectLevelName1] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://staging.ibgakiosk.com/api/category_list');
        setCategories(response.data?.data);
        setLoading(false);
        console.log('Response data:', response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_source', {
        "boardID": selectedBoard,
        "subjectID": selectedSubject,
        "subjectlevelID": subjectLevelName1,
        "sourceName": selectedSource,
      });
      console.log('Source added:', response.data);
      setSubmitted(true); // Set submitted to true upon successful form submission
      setSelectedBoard('');
      setSelectedSubject('');
      setSubjectLevelName1('');
      setSelectedSource('');
    } catch (error) {
      console.error('Error adding source:', error);
      setError(error.message);
    }
  };

  return (
    <div>
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
                      <MenuItem key={category.board_id} value={category.board_id}>{category.board_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                <FormControl fullWidth size="small">
                  <InputLabel htmlFor="subject">Subject Name</InputLabel>
                  <Select
                    label="Subject Name"
                    id="subjectID"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
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
              <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                <FormControl fullWidth size="small">
                  <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                  <Select
                    label="Subject Level"
                    id="subjectLevelID"
                    value={subjectLevelName1}
                    onChange={(e) => setSubjectLevelName1(e.target.value)}
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
      {/* Display success message when form is submitted successfully */}
      <SuccessMsg message="Data saved successfully!" open={submitted} onClose={() => setSubmitted(false)} />
    </div>
  );
};

export default SourceAdd;
