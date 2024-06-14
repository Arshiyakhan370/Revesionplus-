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
import SuccessMsg from '../SuccessMsg';
import { useGetCategoryListQuery } from '../../../../Services/CategoryApi';

const SubjectLevelAdd = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectLevelName, setSubjectLevelName] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const { data, error, isLoading } = useGetCategoryListQuery();

  const categories = data?.data?.categories ?? [];

  useEffect(() => {
    if (selectedBoard !== '') {
      const board = categories.find(category => category._id === selectedBoard);
      if (board) {
        setFilteredSubjects(board.subjects || []);
        setSelectedSubject('');
      }
    }
  }, [selectedBoard, categories]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_subject_level', {
        boardID: selectedBoard,
        subjectID: selectedSubject,
        subjectlevelName: subjectLevelName,
      });
      console.log('Subject added:', response.data);
      setSubmitted(true);
       setSelectedBoard('');
      setSelectedSubject('');
      setSubjectLevelName('');
    } catch (error) {
      console.error('Error adding subject:', error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sx={{ marginTop: '16px' }}>
                <FormControl fullWidth size="small">
                  <InputLabel htmlFor="board">Board</InputLabel>
                  <Select
                    label="Board"
                    id="boardID"
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value)}
                  >
                    {categories.map(category => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} sx={{ marginTop: '16px' }}>
                <FormControl fullWidth size="small">
                  <InputLabel htmlFor="subject">Subject</InputLabel>
                  <Select
                    label="Subject"
                    id="subjectID"
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
              <Grid item xs={12} md={4}>
                <TextField
                  label="Subject Level"
                  id="subjectLevel"
                  fullWidth
                  required
                  variant="outlined"
                  margin="normal"
                  value={subjectLevelName}
                  onChange={(e) => setSubjectLevelName(e.target.value)}
                  InputProps={{
                    style: { height: 'auto' },
                  }}
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
      <SuccessMsg message="Data saved successfully!" open={submitted} onClose={() => setSubmitted(false)} />
    </div>
  );
};

export default SubjectLevelAdd;
