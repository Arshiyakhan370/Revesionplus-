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
  
  const [submitted, setSubmitted] = useState(false); 
  const { data:categories=[], error, isLoading ,} = useGetCategoryListQuery();

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
     {isLoading  ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.error}</p>
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
                   {categories?.data.map(category => (
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
                    {categories?.data.map(category => (
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
                    {categories?.data.map(category => (
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
      )}
      <SuccessMsg message="Data saved successfully!" open={submitted} onClose={() => setSubmitted(false)} />
    </div>
  );
};

export default SourceAdd;
