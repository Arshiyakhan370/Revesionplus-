import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
    Typography,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive';

const According = ({ handleCloseModal }) => {
  const [tabs, setTabs] = useState([
    { key: 'panel1', title: 'Panel 1' },
  ]);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const addPanel = () => {
    const newKey = `panel${tabs.length + 1}`;
    const newTitle = `Panel ${tabs.length + 1}`;
    setTabs([...tabs, { key: newKey, title: newTitle }]);
  };

  const removePanel = (keyToRemove) => {
    const updatedTabs = tabs.filter((tab) => tab.key !== keyToRemove);
    setTabs(updatedTabs);
  };

 
  return (
    <Container maxWidth="xxl" mt={16}>
      
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12}>
          
              <Typography variant="h5" align="center" mb={4}>
                Accordion
              </Typography>
              {tabs.map((tab, index) => (
                <Card key={tab.key} mb={2}>
                  <CardContent>
                    <Grid container alignItems="center" >
                      <Typography variant="h6">{tab.title}</Typography>
                      <IconButton onClick={() => removePanel(tab.key)}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                    <Typography variant="subtitle1">Title</Typography>
                    <div className='border border-gray-500' style={{ marginBottom: '20px' }}>
                <Editor placeholder="Write here" 
                     
                      />
                    </div>
                    <Typography variant="subtitle1">Content</Typography>
                    <div className='border border-gray-500'>
               <Editor placeholder="Write here"  />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button type="button" variant="contained" color="primary" onClick={addPanel} sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
                Add Panel
              </Button>
            
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
          <Button type="button" onClick={handleCloseModal} sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
                    Close
                    </Button>
            <Button variant="contained" color="primary" type="submit"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default According;
