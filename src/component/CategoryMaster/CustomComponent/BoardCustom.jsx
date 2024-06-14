// BoardCustom.js
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const BoardCustom = ({ selectedBoard, setSelectedBoard }) => {
  const { data, error, isLoading } = useGetCategoryListQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const categories = data?.data?.categories ?? [];

  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="board">Board</InputLabel>
      <Select
        label="Board"
        id="board_id"
        value={selectedBoard}
        onChange={(e) => setSelectedBoard(e.target.value)}
      >
        {categories.map((category) => (
          <MenuItem key={category._id} value={category._id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BoardCustom;
