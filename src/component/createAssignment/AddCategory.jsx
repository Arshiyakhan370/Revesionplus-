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
  const styles = {
    width: isSidebarClosed ?  (isSmallScreen ? '100%' : '95%') : (isSmallScreen ? '100%' : '79%'),
    marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '5%') : (isSmallScreen ? '0%' : '21%'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  return (
    <Container maxWidth="xl" disableGutters style={styles}>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className='text-center'>
        <Tab icon={<Layers />} label="Subject" />
          <Tab icon={<ChevronRightIcon />} disabled />
          <Tab icon={<Layers />} label="Subject Level" />
          <Tab icon={<ChevronRightIcon />} disabled />
          <Tab icon={<Description/>} label="Source" />
          <Tab icon={<ChevronRightIcon />} disabled />
          <Tab icon={< AddBox/>} label="Paper" />
          <Tab icon={<ChevronRightIcon />} disabled />
          <Tab icon={<MenuBook/>} label="Topic" />
          <Tab icon={<ChevronRightIcon />} disabled />
          <Tab icon={< LibraryBooks/>} label="Subtopic" />
        </Tabs>

        <Box sx={{ mt: 3, p: 3 }}>
        {value === 0 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                     <Grid item xs={12} md={6} ms={6}>
                      <FormControl fullWidth>
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
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
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
                 
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                        <Select label="Board" id="subjectLevelID">
                        <MenuItem value="">Select Board Type</MenuItem>
                          <MenuItem value="1">IB DP</MenuItem>
                          <MenuItem value="2">IGCSE</MenuItem>
                          <MenuItem value="3">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                 
                  <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID">
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
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
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
                 
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                        <Select label="Board" id="subjectLevelID">
                        <MenuItem value="">Select Board Type</MenuItem>
                          <MenuItem value="1">IB DP</MenuItem>
                          <MenuItem value="2">IGCSE</MenuItem>
                          <MenuItem value="3">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                 
                  <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID">
                          <MenuItem value="">Select board Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                                               </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                        <Select label="Subject Level" id="subjectLevelID">
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
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
                  )}
                  {value === 6 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                 
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                        <Select label="Board" id="subjectLevelID">
                        <MenuItem value="">Select Board Type</MenuItem>
                          <MenuItem value="1">IB DP</MenuItem>
                          <MenuItem value="2">IGCSE</MenuItem>
                          <MenuItem value="3">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                 
                  <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID">
                          <MenuItem value="">Select board Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                                               </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                        <Select label="Subject Level" id="subjectLevelID">
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Source Level</InputLabel>
                        <Select label="Source Level" id="subjectLevelID">
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
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
                  )}
                  {value === 8 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                 
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                        <Select label="Board" id="subjectLevelID">
                        <MenuItem value="">Select Board Type</MenuItem>
                          <MenuItem value="1">IB DP</MenuItem>
                          <MenuItem value="2">IGCSE</MenuItem>
                          <MenuItem value="3">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                 
                  <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID">
                          <MenuItem value="">Select board Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                                               </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                        <Select label="Subject Level" id="subjectLevelID">
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Source Level</InputLabel>
                        <Select label="Source Level" id="subjectLevelID">
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Paper/Book</InputLabel>
                        <Select label="Source Level" id="subjectLevelID">
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
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
                  )}
                  {value === 10 && (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                                     <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Board</InputLabel>
                        <Select label="Board" id="subjectLevelID">
                        <MenuItem value="">Select Board Type</MenuItem>
                          <MenuItem value="1">IB DP</MenuItem>
                          <MenuItem value="2">IGCSE</MenuItem>
                          <MenuItem value="3">IB MYP</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                 
                  <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Name</InputLabel>
                        <Select label="Subject Name" id="subjectLevelID">
                          <MenuItem value="">Select board Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                                               </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Subject Level</InputLabel>
                        <Select label="Subject Level" id="subjectLevelID">
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Source Level</InputLabel>
                        <Select label="Source Level" id="subjectLevelID">
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Paper/Book</InputLabel>
                        <Select label="Source Level" id="subjectLevelID">
                          <MenuItem value="">Select Level</MenuItem>
                          <MenuItem value="A">slect board first</MenuItem>
                           </Select>
                      </FormControl>
                      </Grid>
                      <Grid item xs={12} md={4} ms={6}>
                         <FormControl fullWidth>
                        <InputLabel htmlFor="subjectLevel">Topic</InputLabel>
                        <Select label="Paper Level" id="subjectLevelID">
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
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'right', mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
                  )}
        </Box>
      </Paper>
    </Container>
  );
};

export default AddCategory;
