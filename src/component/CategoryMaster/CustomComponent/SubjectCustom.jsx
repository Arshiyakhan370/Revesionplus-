
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetCategoryListQuery } from '../../../Services/CategoryMasterApi/CategoryApi';

const SubjectCustom = ({ selectedBoard, selectedSubject, setSelectedSubject, getInputLabel }) => {
    const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  

  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="subject">{getInputLabel("Subject")}</InputLabel>
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
  );
};

export default SubjectCustom
