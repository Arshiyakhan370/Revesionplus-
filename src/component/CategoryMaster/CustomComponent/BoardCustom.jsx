
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetCategoryListQuery } from '../../../Services/CategoryMasterApi/CategoryApi';

const BoardCustom = ({ selectedBoard, setSelectedBoard }) => {
  const { data:{data:categories}={},  error, isLoading ,} = useGetCategoryListQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  

  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="board">Board</InputLabel>
      <Select
        label="Board"
        id="board_id"
        value={selectedBoard}
        onChange={(e) => setSelectedBoard(e.target.value)}
      >
        {categories.categories.map((board) => (
          <MenuItem key={board._id} value={board._id}>
            {board.board_prog_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BoardCustom;
