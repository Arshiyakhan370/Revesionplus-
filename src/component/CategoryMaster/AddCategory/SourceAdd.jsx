import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

   
const SourceAdd = () => {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject1, setSelectedSubject1] = useState('');
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [subjectLevelName1, setSubjectLevelName1] = useState('');
  const [subjectLevelName, setSubjectLevelName] = useState([]);
   const [selectedSource, setSelectedSource] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://staging.ibgakiosk.com/api/boardprogramme');
        const subject = await axios.get('https://staging.ibgakiosk.com/api/get_subject/1');
        const source = await axios.get('https://staging.ibgakiosk.com/api/get_subject_level/1/6');
        setBoards(response.data?.data);
        setSelectedSubject(subject.data?.data)
        setSubjectLevelName(source.data?.data)
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
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_source', {
        "boardID":selectedBoard,
            "subjectID":selectedSubject1,
           "subjectlevelID":subjectLevelName1,
           "sourceName":selectedSource,
          });
      console.log('Subject added:', response.data);
    } catch (error) {
      console.error('Error adding subject:', error);
      setError(error.message);
    }
    setSelectedBoard("");
    setSelectedSubject1("");
    setSubjectLevelName1("");
    setSelectedSource("");
   
  };
  

  return (
    <div> <form onSubmit={handleSubmit}>
    <Card>
      <CardContent>
        <Grid container spacing={2}>
         
        <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small">
                <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                <Select label="Board" id="subjectLevelID" sx={{height:'35px'}}
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
         
            <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small"  className='mt-3'>
                <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                <Select label="Subject Name" id="subjectLevelID" 
                   value={selectedSubject1}
  onChange={(e) => setSelectedSubject1(e.target.value)}
                      sx={{ height: '35px' }}
                    >
                     {selectedSubject.map((subject) => (
    <MenuItem key={subject.boardID} value={subject.boardID}>
      {subject.subjectName}
    </MenuItem>
  ))}
                                       </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                  <FormControl fullWidth size="small"  className='mt-3'>
                <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                <Select label="Subject Level" id="subjectLevelID" 
                    value={subjectLevelName1}
  onChange={(e) =>  setSubjectLevelName1(e.target.value)}
                      sx={{ height: '35px' }}
                    >
                     {subjectLevelName.map((source) => (
    <MenuItem key={source.boardID} value={source.boardID}>
      {source.subjectlevelName}
    </MenuItem>
  ))}
                   </Select>
              </FormControl>
            </Grid>
          <Grid item xs={12} md={4} ms={6}>
            <TextField
              label="Sour Name"
              id="anotherFieldID"
              value={selectedSource}
  onChange={(e) => setSelectedSource(e.target.value)}
               fullWidth
         required
        variant="outlined"
            margin="normal"
          InputProps={{
        
            }}
          InputLabelProps={{
            shrink: true, 
            }}
             size="small" 
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
          <Button type="submit" variant="contained" sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
         Save
        </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </form>
  </div>
  )
}

export default SourceAdd