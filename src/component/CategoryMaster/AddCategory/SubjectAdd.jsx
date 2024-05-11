import React, { useState, useEffect } from 'react';
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

const SubjectAdd = () => {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [successMessageOpen, setSuccessMessageOpen] = useState(false); 
  
  const { data:{data:categories}={},  error, isLoading ,} = useGetCategoryListQuery();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_subject', {
        "boardID":selectedBoard,
        "subejctName":subjectName,
      });
      setSelectedBoard("");
      setSubjectName("");
      console.log('Subject added:', response.data);
      setSuccessMessageOpen(true); 
    } catch (error) {
      console.error('Error adding subject:', error);
      
    }
   
  };
console.log(error,"check");
  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
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
                <Grid item xs={12} md={6} sx={{ marginTop: '16px' }}>
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

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Subject Name"
                    id="subjectName"
                    fullWidth
                    required
                    variant="outlined"
                    margin="normal"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
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
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      color: 'white',
                      background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)',
                    }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      )}
      
      <SuccessMsg
        open={successMessageOpen}
        onClose={handleCloseSuccessMessage}
        message="Data saved successfully"
      />
    </div>
  );
};

export default SubjectAdd;
