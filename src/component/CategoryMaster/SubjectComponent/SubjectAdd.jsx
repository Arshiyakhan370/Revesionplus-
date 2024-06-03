// import React, { useState } from 'react';
// import { TextField, Card, Grid, CardContent } from '@mui/material';
// import SuccessMsg from '../AddCategory/SuccessMsg';
// import BoardCustom from '../CustomComponent/BoardCustom';
// import { useSaveSubjectMutation } from '../../../Services/CategoryApi';
// import CustomSaveButton from '../CustomComponent/CustomSaveButton';

// const SubjectAdd = () => {
//   const [selectedBoard, setSelectedBoard] = useState('dp');
//   const [subjectName, setSubjectName] = useState('');
//   const [grade, setGrade] = useState('');
//   const [successMessageOpen, setSuccessMessageOpen] = useState(false);
//   const [saveSubject, { isSuccess, isError, error }] = useSaveSubjectMutation();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const data = { selectedBoard };
//       if (selectedBoard === 'DP') {
//         data.subjectName = subjectName;
//       } else if (selectedBoard === 'MYP') {
//         data.grade = grade;
//       }

//       console.log(data);
//       await saveSubject(data);
//       setSelectedBoard('DP'); 
//       setSubjectName('');
//       setGrade('');
//       setSuccessMessageOpen(true);
//     } catch (error) {
//       console.error('Error adding subject:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Card>
//           <CardContent>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6} sx={{ marginTop: '16px' }}>
//                 <BoardCustom selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label={selectedBoard === 'DP' ? "Subject Name" : "Grade"}
//                   id={selectedBoard === 'DP' ? "subjectName" : "grade"}
//                   fullWidth
//                   required
//                   variant="outlined"
//                   margin="normal"
//                   value={selectedBoard === 'DP' ? subjectName : grade}
//                   onChange={(e) => selectedBoard === 'DP' ? setSubjectName(e.target.value) : setGrade(e.target.value)}
//                   InputProps={{
//                     style: { height: 'auto' },
//                   }}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   size="small"
//                 />
//               </Grid>
//               <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
//                 <CustomSaveButton type="submit">Save</CustomSaveButton>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </form>
//       <SuccessMsg
//         open={successMessageOpen}
//         onClose={() => setSuccessMessageOpen(false)}
//         message="Data saved successfully"
//       />
//     </div>
//   );
// };

// export default SubjectAdd;


import React, { useState } from 'react';
import { TextField, Card, Grid, CardContent } from '@mui/material';
import SuccessMsg from '../AddCategory/SuccessMsg';
import BoardCustom from '../CustomComponent/BoardCustom';
import { useSaveSubjectMutation } from '../../../Services/CategoryApi';
import CustomSaveButton from '../CustomComponent/CustomSaveButton';

const SubjectAdd = () => {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [grade, setGrade] = useState('');
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [saveSubject, { isSuccess, isError, error }] = useSaveSubjectMutation();

  const handleBoardChange = (board) => {
    setSelectedBoard(board);
    if (board !== 'MYP') {
      setGrade('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(selectedBoard, subjectName, grade);
      await saveSubject({ selectedBoard, subjectName, grade });
      setSelectedBoard('');
      setSubjectName('');
      setGrade('');
      setSuccessMessageOpen(true);
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
              <Grid item xs={12} md={6} sx={{ marginTop: '16px' }}>
                <BoardCustom selectedBoard={selectedBoard} setSelectedBoard={handleBoardChange} />
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
              {selectedBoard === 'MYP' && (
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Grade"
                    id="grade"
                    fullWidth
                    required
                    variant="outlined"
                    margin="normal"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    InputProps={{
                      style: { height: 'auto' },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                </Grid>
              )}
              <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                <CustomSaveButton type="submit">Save</CustomSaveButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
      <SuccessMsg
        open={successMessageOpen}
        onClose={() => setSuccessMessageOpen(false)}
        message="Data saved successfully"
      />
    </div>
  );
};

export default SubjectAdd;
