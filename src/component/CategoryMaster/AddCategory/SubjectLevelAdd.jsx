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

const SubjectLevelAdd = () => {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('A');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://staging.ibgakiosk.com/api/boardprogramme');
        console.log('Response:', response.data);
        if (Array.isArray(response.data)) {
          setBoards(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching boards:', error);
        setLoading(false); 
      }
    };

    fetchBoards();
  }, []); 

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
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
  <MenuItem value="">Select Board Type</MenuItem>
  {boards.map((board) => (
    <MenuItem key={board.id} value={board.id}>
      {board.name}
    </MenuItem>
  ))}
</Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                    <Select
                      label="Subject Name"
                      id="subjectLevelID"
                      sx={{ height: '35px' }}
                    >
                      <MenuItem value="">Select board Level</MenuItem>
                      <MenuItem value="A">Select board first</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4} ms={6}>
                  <TextField
                    label="Subject Level"
                    id="anotherFieldID"
                    fullWidth
                    required
                    variant="outlined"
                    margin="normal"
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
                      background:
                        'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
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
    </div>
  );
};

export default SubjectLevelAdd;
