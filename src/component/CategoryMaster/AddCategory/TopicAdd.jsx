import React, { useState } from 'react';
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
import { useGetCategoryListQuery } from '../../../Services/CategoryApi';

const TopicAdd = () => {
  const initialFormData = {
    boardID: '',
    subjectID: '',
    subjectlevelID: '',
    sourceID: '',
    paperID: '',
    topicName: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const { data: { data: categories } = {}, error, isLoading } = useGetCategoryListQuery();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('{{base_url}}categorys/topic/create', {
        board_id: formData.boardID,
        subject_id: formData.subjectID,
        subject_level_id: formData.subjectlevelID,
        source_id: formData.sourceID,
        paper_id: formData.paperID,
        topic_name: formData.topicName,
      });
      console.log('Response from server:', response.data);
      setFormData(initialFormData);
      setSuccessMessageOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.error}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="boardID">Board</InputLabel>
                    <Select
                      label="Board"
                      id="boardID"
                      name="boardID"
                      value={formData.boardID}
                      onChange={handleChange}
                    >
                      {categories.categories.map((category) => (
                        <MenuItem key={category.board_id} value={category.board_id}>
                          {category.board_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="subjectID">Subject Name</InputLabel>
                    <Select
                      label="Subject Name"
                      id="subjectID"
                      name="subjectID"
                      value={formData.subjectID}
                      onChange={handleChange}
                    >
                      {categories.categories.map((category) =>
                        category.subject.map((subject) => (
                          <MenuItem key={subject.subject_id} value={subject.subject_id}>
                            {subject.subject_name}
                          </MenuItem>
                        ))
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="subjectlevelID">Subject Level</InputLabel>
                    <Select
                      label="Subject Level"
                      id="subjectlevelID"
                      name="subjectlevelID"
                      value={formData.subjectlevelID}
                      onChange={handleChange}
                    >
                      {categories.categories.map((category) =>
                        category.subject.map((subject) =>
                          subject.subject_level.map((level) => (
                            <MenuItem key={level.subject_lev_id} value={level.subject_lev_id}>
                              {level.subject_lev_name}
                            </MenuItem>
                          ))
                        )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="sourceID">Source</InputLabel>
                    <Select
                      label="Source"
                      id="sourceID"
                      name="sourceID"
                      value={formData.sourceID}
                      onChange={handleChange}
                    >
                      {categories.categories.map((category) =>
                        category.subject.map((subject) =>
                          subject.subject_level.map((level) =>
                            level.source.map((source) => (
                              <MenuItem key={source.source_id} value={source.source_id}>
                                {source.source_name}
                              </MenuItem>
                            ))
                          )
                        )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel htmlFor="paperID">Paper/Book</InputLabel>
                    <Select
                      label="Paper/Book"
                      id="paperID"
                      name="paperID"
                      value={formData.paperID}
                      onChange={handleChange}
                    >
                      {categories.categories.map((category) =>
                        category.subject.map((subject) =>
                          subject.subject_level.map((level) =>
                            level.source.map((source) =>
                              source.paper.map((paper) => (
                                <MenuItem key={paper.paper_id} value={paper.paper_id}>
                                  {paper.paper_name}
                                </MenuItem>
                              ))
                            )
                          )
                        )
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Topic"
                    id="topicName"
                    name="topicName"
                    fullWidth
                    required
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    value={formData.topicName}
                    onChange={handleChange}
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
      )}
      <SuccessMsg
        message="Data saved successfully!"
        open={successMessageOpen}
        onClose={() => setSuccessMessageOpen(false)}
      />
    </div>
  );
};

export default TopicAdd;
