import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from 'react-responsive';

const Library = ({isSidebarClosed}) => {
  const [isChecked, setChecked] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleCriteriaChange = (e) => {
    setSelectedCriteria(e.target.value);
  };

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const goBack = () => {
    window.history.back();
  };
  const styles = {
    width: isSidebarClosed ?  (isSmallScreen ? '100%' : '94%') : (isSmallScreen ? '100%' : '79%'),
    marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '6%') : (isSmallScreen ? '0%' : '21%'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  return (
    <Grid container spacing={3} justifyContent="center" style={styles}>
      <Grid item xs={12}>
        <Card style={{ padding: 20, backgroundColor: '#fff' }}>
          <CardContent>
            <h1 style={{ textAlign: 'left', fontSize: 14, marginLeft: 4 }}>
              Add from Library - Product Design
            </h1>
         
      <Grid item xs={12}>
        <Card style={{ padding: 20, backgroundColor: '#fff' }}>
          <CardContent>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                variant="outlined"
                placeholder="Search"
                style={{ flex: 1 }}
              />
              <Button
                variant="contained"
               
                style={{ marginLeft: -55, color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}
              >
                Search
              </Button>
              <div className="text-muted">0 item found</div>
            </div>
            </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="criteriaSelect">Criteria</InputLabel>
                  <Select
                    id="criteriaSelect"
                    value={selectedCriteria}
                    onChange={handleCriteriaChange}
                    label="Criteria"
                  >
                    <MenuItem value="criteriaOption1">Criteria Option 1</MenuItem>
                    <MenuItem value="criteriaOption2">Criteria Option 2</MenuItem>
                    <MenuItem value="criteriaOption3">Criteria Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="itemSelect">Item</InputLabel>
                  <Select
                    id="itemSelect"
                    value={selectedItem}
                    onChange={handleItemChange}
                    label="Item"
                  >
                    <MenuItem value="itemOption1">Item Option 1</MenuItem>
                    <MenuItem value="itemOption2">Item Option 2</MenuItem>
                    <MenuItem value="itemOption3">Item Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="me"
                  />
                  <Select
                    id="authorSelect"
                    value={selectedItem}
                    onChange={handleItemChange}
                    label="Authors"
                    className='mt-4'
                  >
                    <MenuItem value="authorOption1">Authors</MenuItem>
                    <MenuItem value="authorOption2">Author Option 2</MenuItem>
                    <MenuItem value="authorOption3">Author Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={goBack} sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
          Back
        </Button>
      </Grid>
      </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Library;
