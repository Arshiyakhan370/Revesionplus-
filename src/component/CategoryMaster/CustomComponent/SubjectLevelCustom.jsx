import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetCategoryListQuery } from '../../../Services/CategoryMasterApi/CategoryApi';

const SubjectLevelCustom = ({ selectedBoard, selectedSubject, selectedSubjectLevel, setSelectedSubjectLevel, getInputLabel }) => {
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="subjectLevelID">{getInputLabel("Subject Level")}</InputLabel>
      <Select
        label={getInputLabel("Subject Level")}
        id="subjectLevelID"
        value={selectedSubjectLevel}
        onChange={(e) => setSelectedSubjectLevel(e.target.value)}
      >
        {(categories.categories.find(category => category._id === selectedBoard)?.subjects.find(subject => subject._id === selectedSubject)?.subjectlevels || []).map(level => (
          <MenuItem key={level._id} value={level._id}>
            {level.subject_level_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SubjectLevelCustom;
