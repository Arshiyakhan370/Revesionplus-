// BoardCustom.js
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const BoardCustom = ({ selectedBoard, setSelectedBoard }) => {
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.error}</p>;

  return (
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
  );
};

export default BoardCustom;
