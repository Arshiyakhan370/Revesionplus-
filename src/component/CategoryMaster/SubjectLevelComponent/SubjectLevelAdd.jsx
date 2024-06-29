import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  TextField,
  Button,
  Card,
  Grid,
  CardContent,
} from '@mui/material';
import SuccessMsg from '../AddCategory/SuccessMsg';
import { useGetCategoryListQuery } from '../../../Services/CategoryMasterApi/CategoryApi';
import BoardCustom from '../CustomComponent/BoardCustom';
import SubjectCustom from '../CustomComponent/SubjectCustom';
import { useSaveSubjectLevelMutation } from '../../../Services/CategoryMasterApi/SubjectApi';

const SubjectLevelAdd = ({ selectedBoard, handleBoardChange }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjectLevelName, setSubjectLevelName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [saveSubjectLevel, { isSuccess, isError, error }] = useSaveSubjectLevelMutation();
 
  useEffect(() => {
    setSelectedSubject('');
    setSubjectLevelName('');
  }, [selectedBoard]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveSubjectLevel({ selectedBoard,selectedSubject,subjectLevelName});
      setSubmitted(true);
      setSelectedSubject('');
      setSubjectLevelName('');
    } catch (error) {
        console.error('Error adding subject:', error);
    }
  };
  const getInputLabel = (label) => {
    if (selectedBoard === '665fffe9e02ec586b271fba2') { 
      switch (label) {
        case "Subject":
          return "Grade";
        case "Subject Level":
          return "Subject";
        default:
          return label;
      }
    }
    return label;
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sx={{ marginTop: '16px' }}>
                <BoardCustom selectedBoard={selectedBoard} setSelectedBoard={handleBoardChange} />
              </Grid>
              <Grid item xs={12} md={4} sx={{ marginTop: '16px' }}>
                <SubjectCustom
                  selectedBoard={selectedBoard}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                  getInputLabel={getInputLabel}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label={getInputLabel("Subject Level")}
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
