import React, { useState } from 'react';
import { Form,  Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import Header from '../../AdminDashboard/Header';
import { Container, Card, CardContent, Button, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const Text = ({ handleCloseModal}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    console.log('Form submitted:', rawContentState);
  };

  return (
    <div>
    
      <Container  maxWidth="xxl" mt={44}>
        <div className='  '>
          <Card>
            <CardContent className=''>
              <div className="container mt-3 ">
                <h2 className='text-center mb-8'>Text</h2> 
               <div>
                <TextField
                  size='small'
                  sx={{width:'30px'}}
                />
                Marks
               </div>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} className='border border-gray-500 '>
                      <Editor
                        editorState={editorState}
                        onEditorStateChange={(newEditorState) => setEditorState(newEditorState)}
                        placeholder="Enter text content"
                        
                      />
  

                    </Col>
                    <Col xs={12} className="mt-3 mb-24">
                      <div className="d-flex justify-content-between">
                    <Grid container spacing={2}>
                <Grid item xs={24} className=" mt-4 mb-4">
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        
                      />
                    }
                    label=" Teacher Explanation"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                       
                      />
                    }
                    label="Markscheme"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        
                      />
                    }
                    label=" Markscheme"
                  />
                 <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                      
                      />
                    }
                    label=" Markscheme"
                  />
                 
                 
                </Grid>
                </Grid>
                </div>
                </Col>

                    <Col xs={12} className="mt-3 mb-24">
                      <div className="d-flex justify-content-between">
                      <Button type="button" onClick={handleCloseModal} sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
                          Marks
                   </Button>
                        <Button type="submit" onClick={handleSubmit}  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                          Marks
                        </Button>
                        <Button type="submit" onClick={handleSubmit}  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                         AnswerKey
                        </Button>
                        <Button type="submit" onClick={handleSubmit}  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                        criteria
                        </Button>
                      </div>
                    </Col>
                    <Col xs={12} className="mt-3">
                      <div className="d-flex justify-content-between">
                      <Button type="button" onClick={handleCloseModal} sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
                           Close
                   </Button>
                        <Button type="submit" onClick={handleSubmit}  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                          Save
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Text;
