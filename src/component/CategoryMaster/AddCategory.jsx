import React from 'react';
import {
  Tab,
  Tabs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Card,
  Grid,
  CardContent,
} from '@mui/material';
import {
  Layers,
  ChevronRight,
  FileText,
  FilePlus,
  Description, 
  AddBox,
  MenuBook,
  LibraryBooks,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

const AddCategory = ({isSidebarClosed}) => {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  const sidebarWidth = isSidebarClosed ? '79px' : '270px';
  const mainComponentWidth = isSmallScreen ? '100%' : `calc(100% - ${sidebarWidth})`;
  
  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? '79px' : (isSmallScreen ? '0' : '270px'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  const inputStyle = { height: '35px' };
  return (
    <Container maxWidth="xxl" disableGutters style={styles} className='bg-gray-100'>
      {/* <Paper elevation={3}   style={styles} sx={{ p: 3,marginTop:'25px',background:'#f0f0f0', marginRight:'25px' }}> */}
        <div className='text-center flex justify-center'>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className='text-center'>
        <Tab icon={<Layers />} label="Subject" />
          {/* <Tab icon={<ChevronRightIcon />} disabled /> */}
          <Tab icon={<Layers />} label="Subject Level" />
          {/* <Tab icon={<ChevronRightIcon />} disabled /> */}
          <Tab icon={<Description/>} label="Source" />
          {/* <Tab icon={<ChevronRightIcon />} disabled /> */}
          <Tab icon={< AddBox/>} label="Paper" />
          {/* <Tab icon={<ChevronRightIcon />} disabled /> */}
          <Tab icon={<MenuBook/>} label="Topic" />
          {/* <Tab icon={<ChevronRightIcon />} disabled /> */}
          <Tab icon={< LibraryBooks/>} label="Subtopic" />
        </Tabs>
</div>
        <Box sx={{ mt: 3, p: 3 }}>
        {value === 0 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2} >
                <Grid item xs={12} md={6} ms={6} sx={{ marginTop: '16px' }}>
  <FormControl fullWidth size="small">
    <InputLabel htmlFor="board">Board</InputLabel>
    <Select label="Board" id="boardID">
      <MenuItem value="">Select Board Type</MenuItem>
      <MenuItem value="1">IB DP</MenuItem>
      <MenuItem value="2">IGCSE</MenuItem>
      <MenuItem value="3">IB MYP</MenuItem>
    </Select>
  </FormControl>
</Grid>

                              <Grid item xs={12} md={6} ms={6}>
                              <TextField
                   label="Subject"
                    id="sourseName"
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
                  )}
                  {value === 1 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                 
                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                    <FormControl fullWidth size="small" >
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
                  <FormControl fullWidth size="small">
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID" sx={{height:'35px'}}>
                          <MenuItem value="">Select board Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                                               </Select>
                      </FormControl>
                    </Grid>
                  <Grid item xs={12} md={4} ms={6}>
                    <TextField
                      label="Subject Level"
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
                  <Button type="submit" variant="contained"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
             Save
                </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
                  )}
                  {value === 2 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                 
                <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small">
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
                        <Select label="Subject Name" id="subjectLevelID" sx={{height:'35px'}}>
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
                  <Grid item xs={12} md={4} ms={6}>
                    <TextField
                      label="Sour Name"
                      id="anotherFieldID"
                       fullWidth
                 required
                variant="outlined"
                    margin="normal"
                  InputProps={{
                
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
                  )}
                  {value === 3 && (
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
                  )}
                  {value === 4 && (
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
                        <Select label="Subject Name" id="subjectLevelID" sx={{height:'35px'}}>
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
                    <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Paper/Book</InputLabel>
                        <Select label="Source Level" id="subjectLevelID" sx={{height:'35px'}}>
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                  <Grid item xs={12} md={4} ms={6}>
                    <TextField
                      label="Topic"
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
                  )}
                  {value === 5 && (
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
                        <Select label="Subject Name" id="subjectLevelID" sx={{height:'35px'}} >
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
                    <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Paper/Book</InputLabel>
                        <Select label="Source Level" id="subjectLevelID" sx={{height:'35px'}}>
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                      </Grid>
                      
                      <Grid item xs={12} md={4} ms={6} sx={{ marginTop: '16px' }}>
                          <FormControl fullWidth size="small"  className='mt-3'>
                        <InputLabel htmlFor="subjectLevel">Topic</InputLabel>
                        <Select label="Paper Level" id="subjectLevelID" sx={{height:'35px'}}>
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                  <Grid item xs={12} md={4} ms={6}>
                    <TextField
                      label=" Sub Topic"
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
                  )}
        </Box>
      {/* </Paper> */}
    </Container>
  );
};

export default AddCategory;
