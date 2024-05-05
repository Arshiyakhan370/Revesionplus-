// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Button,
//   Card,
//   Grid,
//   CardContent,
// } from '@mui/material';

// const SubjectLevelAdd = () => {
//   const [boards, setBoards] = useState([]);
//   const [selectedBoard, setSelectedBoard] = useState('');
//   const [selectedSubject1, setSelectedSubject1] = useState('');
//   const [selectedSubject, setSelectedSubject] = useState([]);
//   const [subjectLevelName, setSubjectLevelName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchBoards = async () => {
//       try {
//         const response = await axios.get('https://staging.ibgakiosk.com/api/category_list');
       
//         setBoards(response.data?.data);
//         setSelectedSubject(subject.data?.data)
//         setLoading(false);
//         console.log('Response data:', response.data);
//       } catch (error) {
//         console.error('Error fetching boards:', error);   
//         setError(error.message);
//       }
//     };

//     fetchBoards();
//   }, []); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://staging.ibgakiosk.com/api/add_subject_level', {
//         "boardID":selectedBoard,
//         "subjectID":selectedSubject1,
//        "subjectlevelName":subjectLevelName,
//       });
//       console.log('Subject added:', response.data);
//     } catch (error) {
//       console.error('Error adding subject:', error);
//       setError(error.message);
//     }
//    setSelectedBoard("");
//    setSelectedSubject1("");
//    setSubjectLevelName("")
   
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <Card>
//             <CardContent>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                   <FormControl fullWidth size="small">
//                     <InputLabel htmlFor="board">Board</InputLabel>
//                     <Select
//   label="Board"
//   id="boardID"
//   value={selectedBoard}
//   onChange={(e) => setSelectedBoard(e.target.value)}
// >
//   {boards.map((board) => (
//     <MenuItem key={board.id} value={board.id}>
//       {board.board_name}
//     </MenuItem>
//   ))}
// </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
//                   <FormControl fullWidth size="small">
//                     <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
//                     <Select
//                       label="Subject Name"
//                       id="subjectLevelID"
//                       value={selectedSubject1}
//   onChange={(e) => setSelectedSubject1(e.target.value)}
//                       sx={{ height: '35px' }}
//                     >
//                      {selectedSubject.map((subject) => (
//     <MenuItem key={subject.boardID} value={subject.boardID}>
//       {subject.subjectName}
//     </MenuItem>
//   ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 <Grid item xs={12} md={4} ms={6}>
//                   <TextField
//                     label="Subject Level"
//                     id="anotherFieldID"
//                     fullWidth
//                     required
//                     variant="outlined"
//                     margin="normal"
//                     value={subjectLevelName}
//                     onChange={(e) =>  setSubjectLevelName(e.target.value)}
//                     InputProps={{
//                       style: { height: 'auto' },
//                     }}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                     size="small"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       color: 'white',
//                       background:
//                         'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
//                     }}
//                   >
//                     Save
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SubjectLevelAdd;
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

const SubjectLevelAdd = () => {
  const [categories, setCategories] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectLevelName, setSubjectLevelName] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://staging.ibgakiosk.com/api/category_list');
        setCategories(response.data?.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/add_subject_level', {
        "boardID": selectedBoard,
        "subjectID": selectedSubject,
        "subjectlevelName": subjectLevelName,
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
                      <MenuItem key={category.board_id} value={category.board_id}>{category.board_name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4} sx={{ marginTop: '16px' }}>
                <FormControl fullWidth size="small">
                  <InputLabel htmlFor="subject">Subject</InputLabel>
                  <Select
                    label="Subject"
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
      {/* Render SuccessMsg component if form is submitted successfully */}
      <SuccessMsg message="Data saved successfully!" open={submitted} onClose={() => setSubmitted(false)} />
    </div>
  );
};

export default SubjectLevelAdd;
