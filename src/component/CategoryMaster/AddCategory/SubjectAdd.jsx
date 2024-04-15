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

const SubjectAdd = () => {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://staging.ibgakiosk.com/api/boardprogramme');
        setBoards(response.data?.data);
        setLoading(false);
        console.log('Response data:', response.data);
      } catch (error) {
        console.error('Error fetching boards:', error);   
        setError(error.message);
      }
    };

    fetchBoards();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_subject', {
        "boardID":selectedBoard,
       "subejctName":subjectName,
      });
      console.log('Subject added:', response.data);
    } catch (error) {
      console.error('Error adding subject:', error);
      setError(error.message);
    }
   setSelectedBoard("");
   setSubjectName("")
   
  };
console.log('board',selectedBoard)
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
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
                      {boards.map((board) => (
    <MenuItem key={board.id} value={board.id}>
      {board.board_prog_name}
    </MenuItem>
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
    </div>
  );
};

export default SubjectAdd;
