

import React, { useState, useEffect } from 'react';
import { TextField, Card, Grid, CardContent, Snackbar } from '@mui/material';
import SuccessMsg from '../AddCategory/SuccessMsg';
import BoardCustom from '../CustomComponent/BoardCustom';
import { useSaveSubjectMutation } from '../../../Services/CategoryApi';
import CustomSaveButton from '../CustomComponent/CustomSaveButton';

const SubjectAdd = ({ selectedBoard, handleBoardChange }) => {
  const [subjectName, setSubjectName] = useState('');
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [duplicateErrorOpen, setDuplicateErrorOpen] = useState(false);
  const [saveSubject, { isSuccess, isError, error }] = useSaveSubjectMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveSubject({ selectedBoard, subjectName });
      setSubjectName('');
      setSuccessMessageOpen(true);
    } catch (error) {
      if (error.code === 11000) {
        setDuplicateErrorOpen(true);
      } else {
        console.error('Error adding subject:', error);
      }
    }
  };
console.log(error,"checkstatus");
  const getLabel = () => {
    if (selectedBoard === '665fffe9e02ec586b271fba1') return "Subject Name";
    if (selectedBoard === '665fffe9e02ec586b271fba2') return "Grade";
    return "Subject Name";
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
                  label={getLabel()}
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
      <Snackbar
        open={duplicateErrorOpen}
        onClose={() => setDuplicateErrorOpen(false)}
        message="Duplicate entry error: Subject already exists."
        autoHideDuration={6000}
      />
    </div>
  );
};

export default SubjectAdd;
