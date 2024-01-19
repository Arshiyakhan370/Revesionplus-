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
  const [filterType, setFilterType] = useState('both'); // 'question', 'answer', 'both'

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

  const handleDelete = () => {
    Swal.fire('Deleted!', 'Your question has been deleted.', 'success');
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
    Swal.fire('Updated!', 'Your question has been updated.', 'success');
  };

  const handleShowAlert = (question) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this question!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
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
    <Container>
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
        {/* <div>
          <Button variant="outlined" onClick={() => setFilterType('both')} sx={{ marginRight: 2 }}>
            Both
          </Button>
          <Button variant="outlined" onClick={() => setFilterType('question')} sx={{ marginRight: 2 }}>
            Questions
          </Button>
          <Button variant="outlined" onClick={() => setFilterType('answer')}>
            Answers
          </Button>
        </div> */}
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
                <div className="button-container ml-[800px]">
                  <Button variant="outlined" startIcon={<Edit2 />} onClick={() => handleEdit(question)} sx={{ marginRight: 2 }}>
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Trash2 />}
                    color="error"
                    onClick={() => handleShowAlert(question)}
                  >
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
          <Dialog open={showAssignmentPreview} onClose={() => setShowAssignmentPreview(false)} >
          <span className="pro-sidebar-logo  ml-8 mt-4">
          <div>M</div>
          <h5 className='text-black'>My Revision+</h5>
          
          </span>
          <div className='border border-[#002B4F] h-1'></div>
            <DialogTitle>Selected Questions</DialogTitle>
            <div style={{ marginTop: '20px', marginLeft:'20px' }}>
                <Button variant="outlined" onClick={() => handlePrint('question')}>
                 Questions
                </Button>
                <Button variant="outlined" onClick={() => handlePrint('answer')} sx={{ marginLeft: 2 }}>
                  Answers
                </Button>
                <Button variant="outlined" onClick={() => handlePrint('both')} sx={{ marginLeft: 2 }}>
                  Both
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
    </Container>
  );
};

export default Assignment;
