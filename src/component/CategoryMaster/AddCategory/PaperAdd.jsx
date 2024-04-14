import React from 'react'
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
const PaperAdd = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                 
                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                        <Select label="Board" id="subjectLevelID" sx={{height:'35px'}}>
                        <MenuItem value="">Select Board Type</MenuItem>
                          <MenuItem value="1">IB DP</MenuItem>
                          <MenuItem value="2">IGCSE</MenuItem>
                          <MenuItem value="3">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                 
                    <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID " sx={{height:'35px'}}>
                          <MenuItem value="">Select board Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                                               </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                        <Select label="Subject Level" id="subjectLevelID" sx={{height:'35px'}}>
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Source Level</InputLabel>
                        <Select label="Source Level" id="subjectLevelID" sx={{height:'35px'}}>
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                  <Grid item xs={12} md={4} ms={6}>
                    <TextField
                      label="Paper/Book"
                      id="anotherFieldID"
                       fullWidth
                 required
                variant="outlined"
                    margin="normal"
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
                  <Button type="submit" variant="contained" sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                 Save
                </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form> 
    </div>
  )
}

export default PaperAdd