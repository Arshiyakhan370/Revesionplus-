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

const According = ({isSidebarClosed}) => {
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

  const handleCancel = () => {
    console.log('Cancel button clicked');
    window.history.back();
  };
  const styles = {
    width: isSidebarClosed ?  (isSmallScreen ? '100%' : '94%') : (isSmallScreen ? '100%' : '79%'),
    marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '6%') : (isSmallScreen ? '0%' : '21%'),
    transition: 'width 0.3s, margin-left 0.3s',
  };
  return (
    <Container maxWidth="xl" mt={16}>
      
      <Grid container justifyContent="center" spacing={3} style={styles}>
        <Grid item xs={12}>
          <Card >
            <CardContent>
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
                    <div style={{ marginBottom: '20px' }}>
                      <Typography variant="subtitle1">Title</Typography>
                      <Editor placeholder="Write here" 
                     
                      />
                    </div>
                    <div>
                      <Typography variant="subtitle1">Content</Typography>
                      <Editor placeholder="Write here" />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button type="button" variant="contained" color="primary" onClick={addPanel}>
                Add Panel
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Button variant="contained" onClick={handleCancel}  style={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit"  style={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default According;
