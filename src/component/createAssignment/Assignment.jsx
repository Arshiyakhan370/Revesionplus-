import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  SvgIcon,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Edit2, Trash2 } from 'react-feather';
import Swal from 'sweetalert2';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Form } from 'react-bootstrap';

const CreateAssignmentIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-10v4h4v-2h-2V8h-2v2H8v2h4z" />
  </SvgIcon>
);

const Assignment = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text:
        'The rate of change of x with respect to y is given by 3x. Find the gradient on the graph of y against x when x = 2.',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: '\\frac{1}{6}',
      selected: false,
    },
    {
      id: 2,
      text: 'The average daytime temperature for a city is given by the function',
      options: ['(a) Sketch the graph of D against t for', '(b) Find the average daytime temperature during May.', '(c) Find the minimum average daytime temperature and the month in which it occurs.', 'Option D'],
      answer: '\\frac{1}{4}',
      selected: false,
    },
    {
        id: 3,
        text: 'Another question...',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        answer: '\\frac{1}{4}',
        selected: false,
      },
      {
      id: 4,
      text:
        'The rate of change of x with respect to y is given by 3x. Find the gradient on the graph of y against x when x = 2.',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: '\\frac{1}{6}',
      selected: false,
    },
    {
      id: 5,
      text: 'The average daytime temperature for a city is given by the function',
      options: ['(a) Sketch the graph of D against t for', '(b) Find the average daytime temperature during May.', '(c) Find the minimum average daytime temperature and the month in which it occurs.', 'Option D'],
      answer: '\\frac{1}{4}',
      selected: false,
    },
    {
        id: 6,
        text: 'Another question...',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        answer: '\\frac{1}{4}',
        selected: false,
      },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedQuestionText, setEditedQuestionText] = useState(EditorState.createEmpty());
  const [showAssignmentPreview, setShowAssignmentPreview] = useState(false);
  const [filterType, setFilterType] = useState('both'); 
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedQuestionToDelete, setSelectedQuestionToDelete] = useState(null);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);
 
  const filteredQuestions = questions.filter((question) => {
    if (filterType === 'both') return true;
    if (filterType === 'question') return !question.answer;
    if (filterType === 'answer') return question.answer;
    return true;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedQuestionsData = filteredQuestions.filter((question) => question.selected);
    setSelectedQuestions(selectedQuestionsData);
    setShowAssignmentPreview(true);
  };
 
  const handleShowDeleteDialog = (question) => {
    setSelectedQuestionToDelete(question);
    setDeleteDialogOpen(true);
  };
  

  const handleDeleteSuccessDialogClose = () => {
    setDeleteSuccessDialogOpen(false);
  };

  const handleDeleteQuestion = () => {
       setDeleteSuccessDialogOpen(true);
        setSelectedQuestionToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleShowAlert = (question) => {
    setSelectedQuestionToDelete(question);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setSelectedQuestionToDelete(null);
  };

    const handleEdit = (question) => {
    setSelectedQuestions([]);
    setEditedQuestionText(
      EditorState.createWithContent(ContentState.createFromText(question.text))
    );
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };
  const handleEditQuestionSave = () => {
    setEditDialogOpen(false);
    setUpdateDialogOpen(true);
  };

  const handleUpdateDialogClose = () => {
    setUpdateDialogOpen(false);
  };

  
   

  const handleQuestionSelect = (questionId) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((q) => {
        if (q.id === questionId) {
          return { ...q, selected: !q.selected };
        }
        return q;
      });
      return updatedQuestions;
    });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((q) => ({ ...q, selected: !selectAll }));
      return updatedQuestions;
    });
  };

  const handlePrint = (type) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
    <html>
      <head>
        <title>My Revision plus</title>
        <!-- Add your stylesheets or additional styles here -->
      </head>
      <body>
        <div>
          <span class="pro-sidebar-logo ml-8 mt-4" style="text-align: center; margin-bottom: 20px;display: flex;
        align-items: center;">
            <div style=" width: 35px;
            min-width: 35px;
            height: 35px;
            min-height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            color: #f5f5f5;
            font-size: 24px;
            font-weight: 700;
            background: linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important;
            margin-right: 10px;">M</div>
            <h5 class='text-black'>My Revision+</h5>
          </span>
        </div>
  `);
    selectedQuestions.forEach((question) => {
      printWindow.document.write(`<h2>Question ${question.id}</h2>`);
      printWindow.document.write(`<p>${question.text}</p>`);
      printWindow.document.write('<p>Options:</p>');
      printWindow.document.write('<ul>');
      question.options.forEach((option, index) => {
        printWindow.document.write(`<li>Option ${String.fromCharCode(65 + index)}: ${option}</li>`);
      });
      printWindow.document.write('</ul>');
      if (type === 'both' || type === 'answer') {
        printWindow.document.write(`<h3>Answer:</h3><p>${question.answer}</p>`);
      }
    });
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Container maxWidth="xxl" className='bg-gray-100' >
      <Grid container spacing={2} >
        <Grid item xs={12} >
          {/* <Card elevation={2} > */}
            <CardContent>
      <Form onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
        <Grid container mt={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            <u>Select Questions</u>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{  marginRight:'30px',color:'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) ',height:'40px'}}
      
            type="submit"
            enable={selectedQuestions.length !== 0}
          >
            <CreateAssignmentIcon sx={{ marginRight: 1 }} />
            Create Assignment
          </Button>
        </Grid>
        <FormControlLabel
          control={<Checkbox checked={selectAll} onChange={handleSelectAll} />}
          label="Select All"
        />
        
        {filteredQuestions.map((question) => (
          <Container key={question.id} style={{ marginTop: '20px' }}>
            <Paper elevation={2} className="question-paper">
              <div className="question-container pt-10 pb-10 pl-10 pr-10">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={question.selected}
                      onChange={() => handleQuestionSelect(question.id)}
                    />
                  }
                  label={`Question ${question.id}`}
                />
                <Typography variant="h4" gutterBottom>
                  {question.text}
                </Typography>
                <div>
                  {question.options.map((option, index) => (
                    <Typography variant="h5" key={index}>
                      Option {String.fromCharCode(65 + index)}: {option}
                    </Typography>
                  ))}
                </div>
                <Divider />
                <div className="button-container flex justify-end mt-4">
                  <Button variant="outlined" startIcon={<Edit2 />} onClick={() => handleEdit(question)} sx={{ marginRight: 2 }}>
                    Edit
                  </Button>
                  <Button variant="outlined" startIcon={<Trash2 />} color="error" onClick={() => handleShowDeleteDialog(question)}>
                Delete
                </Button>
                </div>
              </div>
            </Paper>
          </Container>
        ))}

        <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
          <DialogTitle>Edit Question</DialogTitle>
          <DialogContent>
            <Editor
              editorState={editedQuestionText}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={(editorState) => setEditedQuestionText(editorState)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditDialogClose}>Cancel</Button>
            <Button onClick={handleEditQuestionSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {showAssignmentPreview && (
  <Dialog  maxWidth='xl' open={showAssignmentPreview} onClose={() => setShowAssignmentPreview(false)}>
    <div className="pro-sidebar-logo ml-8 mt-4">
      <div>M</div>
      <h5 className='text-black'>My Revision+</h5>
    </div>
    <div className='border border-[#002B4F] h-1'></div>
    <DialogTitle>Selected Questions</DialogTitle>
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <Button variant="outlined" onClick={() => handlePrint('question')}>
        Questions
      </Button>
      <Button variant="outlined" onClick={() => handlePrint('answer')} sx={{ marginLeft: 2 }}>
        Answers
      </Button>
      <Button variant="outlined" onClick={() => handlePrint('both')} sx={{ marginLeft: 2 }}>
        Both
      </Button>
      <Button variant="outlined" sx={{ marginLeft: 2 ,marginRight:2}}>
        Mark Scheme
      </Button>
    
    </div>
    <DialogContent>
   {selectedQuestions.map((question) => (
    <Container key={question.id} style={{ marginTop: '20px' }}>
      <Paper elevation={2} className="question-paper pt-4 pb-4 pl-4 pr-4">
        <Typography variant="h6" gutterBottom>
          Question {question.id}
        </Typography>
        <Typography variant="body1">{question.text}</Typography>
        <div>
          {question.options.map((option, index) => (
            <Typography variant="body2" key={index}>
              Option {String.fromCharCode(65 + index)}: {option}
            </Typography>
          ))}
        </div>
        {filterType === 'both' || filterType === 'answer' ? (
          <div>
            <Typography variant="h6" gutterBottom>
              Answer:
            </Typography>
            <Typography variant="body2">{question.answer}</Typography>
          </div>
        ) : null}
        {filterType === 'schememark' ? (
          <div>
            <Typography variant="h6" gutterBottom>
              Mark Scheme:
            </Typography>
          
            <Typography variant="body2">
              Marking criteria and additional information for this question.
            </Typography>
          </div>
        ) : null}
      </Paper>
    </Container>
  ))}
</DialogContent>

    <DialogActions>
            <Button variant="outlined" onClick={() => handlePrint('both')} sx={{ marginLeft: 2 }}>
                  Print 
                </Button>
              <Button variant="outlined" onClick={() => setShowAssignmentPreview(false)}>
                Close
              </Button>
            </DialogActions>
  </Dialog>
)}
              
          
      </Form>
      </CardContent>
      

      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle className='text-red-500'>Delete Question</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete question {selectedQuestionToDelete?.id}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleDeleteQuestion} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={deleteSuccessDialogOpen} onClose={handleDeleteSuccessDialogClose}>
        <DialogTitle className='text-green-500'>Delete Successfully</DialogTitle>
        <DialogContent>
          <Typography>
            Question {selectedQuestionToDelete?.id} deleted successfully.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteSuccessDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
                <Dialog open={updateDialogOpen} onClose={handleUpdateDialogClose}>
        <DialogTitle className='text-blue-500'>Update Confirmation</DialogTitle>
       <DialogContent>
          <p>Your question has been updated.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      {/* </Card> */}
      </Grid>
      </Grid>
    </Container>

  );
};

export default Assignment;
