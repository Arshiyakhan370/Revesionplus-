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
import SuccessMsg from '../SuccessMsg';
import { useGetCategoryListQuery } from '../../../../Services/CategoryApi';

const SubjectLevelAdd = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectLevelName, setSubjectLevelName] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/v1/categorys/subjectlevel/create', {
        board_id: selectedBoard,
        subject_id: selectedSubject,
        subject_level_name: subjectLevelName,
      });
      console.log('Subject level added:', response.data);
      setSubmitted(true);
      setSelectedSubject('');
      setSubjectLevelName('');
    } catch (error) {
      console.error('Error adding subject level:', error);
    }
  };
console.log(selectedBoard,selectedSubject,subjectLevelName,);
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
                    id="board_id"
                    value={selectedBoard}
                    onChange={(e) => setSelectedBoard(e.target.value)}
                  >
                    {categories.categories.map(category => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.board_prog_name}
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
                    id="subject_id"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    {(categories.categories.find(cat => cat._id === selectedBoard)?.subjects || []).map(subject => (
                      <MenuItem key={subject._id} value={subject._id}>
                        {subject.subject_name}
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
