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
import { IconButton } from '@mui/material';
import SearchIcon from 'react-feather/dist/icons/search';
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
  const sidebarWidth = isSidebarClosed ? "70px" : "270px";
  const mainComponentWidth = isSmallScreen
    ? "100%"
    : `calc(100% - ${sidebarWidth})`;

  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? "79px" : isSmallScreen ? "0" : "270px",
    transition: "width 0.3s, margin-left 0.3s",
  };
  return (
    <Grid container spacing={3} justifyContent="center" style={styles} className='bg-gray-100'>
      <Grid item xs={12}>
       
          <CardContent>
            <h1 style={{ textAlign: 'left', fontSize: 24, marginLeft: 4 }}>
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
            fullWidth
            size='small'
            InputProps={{
              
            }}
          />
          <IconButton
            variant="contained"
            sx={{
              marginLeft: -5,
              color: 'black',
             
            }}
          >
            <SearchIcon />
          </IconButton>
        
              <div className="text-muted  ml-4">0 item found</div>
            </div>
            </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small" className="mt-3">
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
                <FormControl fullWidth size="small" className="mt-3">
                  <InputLabel htmlFor="itemSelect">Item</InputLabel>
                  <Select
                    id="itemSelect"
                    value={selectedItem}
                    onChange={handleItemChange}
                    label="Item"
                    sx={{height:'40px'}}
                  >
                    <MenuItem value="itemOption1">Item Option 1</MenuItem>
                    <MenuItem value="itemOption2">Item Option 2</MenuItem>
                    <MenuItem value="itemOption3">Item Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth size="small" className="mt-3">
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
            <Grid item xs={12}>
        <Button variant="contained" onClick={goBack} sx={{color:'white', marginTop:'10px', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
          Back
        </Button>
      </Grid>
          </CardContent>
        </Card>
      </Grid>
      
      </CardContent>
        
      </Grid>
    </Grid>
  );
};

export default Library;
