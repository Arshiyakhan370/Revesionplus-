import React, { Fragment, useState } from 'react';
import './QuestionLevel.css';
import { Modal,} from 'react-bootstrap';
import { Card,} from '@mui/material';
import { Grid} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {IconButton, Box, Typography, Button,  } from '@mui/material';


const QuestionData = [
  {
    id: '1',
    questionNumber: 1,
    question: '1 The rate of change of x with respect to y is given by 3x. Find the gradient on the graph of y against x when x = 2.',
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option e'],
    level: 'medium',
    canUseCalculator: false,
    isRevisited: false,
  },
  {
    id: '2',
    questionNumber: 2,
    question: '2 The rate of change of x with respect to y is given by 3x. Find the gradient on the graph of y against x when x = 2.',
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
    level: 'easy',
    canUseCalculator: false,
    isRevisited: false,
  },
  {
    id: '3',
    questionNumber: 3,
    question: '3 Some question text here.',
    options: ['option1', 'option2', 'option3', 'option4', 'option5'],
    level: 'tough',
    canUseCalculator: true,
    isRevisited: false,
  },
  {
    id: '4',
    questionNumber: 4,
    question: '4 Some question text here.',
    options: ['option1', 'option2', 'option3', 'option4', 'option5'],
    level: 'medium',
    canUseCalculator: false,
    isRevisited: false,
  },
  {
    id: '5',
    questionNumber: 5,
    question: '5 Some question text here.',
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
    level: 'easy',
    canUseCalculator: false,
    isRevisited: false,
  },
  {
    id: '6',
    questionNumber: 6,
    question: '6 Some question text here.',
    options: ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'],
    level: 'tough',
    canUseCalculator: true,
    isRevisited: false,
  },
];
const QuestionLevel = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('medium');
    const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);
  const [questionData, setQuestionData] = useState(QuestionData);
   const buttonsData = [
   
    { backgroundColor: 'lightblue', text: 'Answer Key', icon: <svg viewBox="0 0 24 24" data-testid="DescriptionIcon" width='2rem' height='2rem'><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg> },
   {backgroundColor:'#AA98A9', text:'Mark Scheme',icon: <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DescriptionIcon " width='2rem' height='2rem'>
   <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
                              </svg>}
  ];
  const handleModalButtonClick = (buttonText) => {
    if (buttonText === 'Answer Key') {
     
      openModal();
    } else if (buttonText === 'Mark Scheme') {
   openModal()
     
    } else {
      
    }
  };
  
  const ModalContent = ({ question }) => (
    <div>
      {question ? (
        <>
          <p>{`Question ${question.questionNumber} - ${question.level}`}</p>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
         
        </>
      ) : (
        <p>No question data available</p>
      )}
    </div>
  );
  
  const handleRevisitClick = (questionId) => {
    console.log('handleRevisitClick called with questionId:', questionId);
    
    const updatedQuestions = questionData.map((question) =>
      question.id === questionId
        ? { ...question, isRevisited: !question.isRevisited }
        : question
    );
  
    console.log('updatedQuestions:', updatedQuestions);
    setQuestionData(updatedQuestions);
  };
  const openModal = (questionNumber, level) => {
    setSelectedQuestion(questionNumber);
    setSelectedLevel(level);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
  };
 
 

  


  const getLevelBadgeColor = (level) => {
    switch (level.toLowerCase()) {
      case 'easy':
        return ' #4CAF50';
      case 'medium':
        return '  #FFEB3B ';
      case 'tough':
        return ' #f44336';
      default:
        return 'purple'; 
    }
  };
  const handleThumbsUpClick = () => {
    setThumbsUpCount(thumbsUpCount + 1);
   
  };

  const handleThumbsDownClick = () => {
    setThumbsDownCount(thumbsDownCount + 1);
  
  };

  return (
    <Fragment>
     
      <main style={{ borderBottom: '1px solid #002b4f' }}>
        <section className="question">
          {QuestionData.map((ques) => (
        
            <Grid key={ques.id} className="mid-inner wiki-mk">
              <div className="que-box">
                <div className="que-box-left">
                  <h2>
                    Question {ques.questionNumber}
                    <div className="easy-box">
                    {ques.level.toLowerCase() === 'tough' && ques.canUseCalculator ? (
                      <svg
    fill="black"
    stroke="#737373"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="4rem"
    height="4rem"
    className='text-black'
   
  >
    <path    fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
  </svg>
) : (
  <svg
    viewBox="0 0 15 19"
    fill="black"
    stroke="#737373"
    xmlns="http://www.w3.org/2000/svg"
    width="3rem"
    height="3rem"
    className='text-black'
    
  >
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.77652 0.369901C1.42851
           -0.0589417 0.798744 -0.124468 0.369901 0.223544C-0.0589417 0.571556 -0.124468
            1.20132 0.223544 1.63016L1.59341 3.3182V14.8537C1.59341 15.3841 1.80413 15.8928 
            2.1792 16.2679C2.55427 16.643 3.06298 16.8537 3.59341 16.8537H11.5934C11.8847
             16.8537 12.1695 16.7901 12.4291 16.6707L13.2215 17.6471C13.5695 18.076 14.1993
              18.1415 14.6281 17.7935C15.057 17.4455 15.1225 16.8157 14.7745 16.3869L1.77652 
              0.369901ZM10.9123 14.8015L9.59341 13.1763V13.8537C9.59341 14.1189 9.69877 14.3732 
              9.88631 14.5608C10.0738 14.7483 10.3282 14.8537 10.5934 14.8537C10.7029 14.8537
               10.8104 14.8357 10.9123 14.8015ZM7.03523 10.024L8.29484 11.5761C8.10893 11.7541
                7.86131 11.8537 7.60341 11.8537H7.59341C7.3282 11.8537 7.07384 11.7483 6.88631 
                11.5608C6.69877 11.3732 6.59341 11.1189 6.59341 10.8537C6.59341 10.5885 6.69877 
                10.3341 6.88631 10.1466C6.93222 10.1007 6.98213 10.0597 7.03523 10.024ZM4.46882 
                6.86146L5.5457 8.18847C5.49641 8.32721 5.41662 8.45469 5.31052 8.56078C5.12298 
                8.74832 4.86863 8.85368 4.60341 8.85368H4.59341C4.3282 8.85368 4.07384 8.74832 
                3.88631 8.56078C3.69877 8.37325 3.59341 8.11889 3.59341 7.85368C3.59341 7.58846
                 3.69877 7.33411 3.88631 7.14657C4.04423 6.98864 4.24954 6.88899 4.46882 
                 6.86146ZM10.5934 4.85368H6.68297L10.7506 9.86611C10.9576 9.89906 11.1505
                  9.9965 11.3005 10.1466C11.4881 10.3341 11.5934 10.5885 11.5934 
                  10.8537V10.9046L13.5934 13.3692V2.85368C13.5934 2.32324 13.3827 
                  1.81453 13.0076 1.43946C12.6326 1.06439 12.1238 0.853675 11.5934 
                  0.853675H3.59341C3.54257 0.853675 3.49194 0.855611 3.4416
                   0.859441L5.05995 2.85368H10.5934C10.8586 2.85368 11.113 2.95903 
                   11.3005 3.14657C11.4881 3.33411 11.5934 3.58846 11.5934 3.85368C11.5934 
                   4.11889 11.4881 4.37325 11.3005 4.56078C11.113 4.74832 10.8586 4.85368 
                   10.5934 4.85368ZM7.59341 12.8537C7.3282 12.8537 7.07384 12.959 6.88631 
                   13.1466C6.69877 13.3341 6.59341 13.5885 6.59341 13.8537C6.59341 14.1189
                    6.69877 14.3732 6.88631 14.5608C7.07384 14.7483 7.3282 14.8537 7.59341 
                    14.8537H7.60341C7.86863 14.8537 8.12298 14.7483 8.31052 14.5608C8.49806
                     14.3732 8.60341 14.1189 8.60341 13.8537C8.60341 13.5885 8.49806 13.3341
                      8.31052 13.1466C8.12298 12.959 7.86863 12.8537 7.60341 12.8537H7.59341ZM3
                      .59341 13.8537C3.59341 13.5885 3.69877 13.3341 3.88631 13.1466C4.07384 12.959 4.3282 12.8537 4.59341 12.8537H4.60341C4.86863 12.8537 5.12298 12.959 5.31052 13.1466C5.49806 13.3341 5.60341 13.5885 5.60341 13.8537C5.60341 14.1189 5.49806 14.3732 5.31052 14.5608C5.12298 14.7483 4.86863 14.8537 4.60341 14.8537H4.59341C4.3282 14.8537 4.07384 14.7483 3.88631 14.5608C3.69877 14.3732 3.59341 14.1189 3.59341 13.8537ZM4.59341 9.85368C4.3282 9.85368 4.07384 9.95903 3.88631 10.1466C3.69877 10.3341 3.59341 10.5885 3.59341 10.8537C3.59341 11.1189 3.69877 11.3732 3.88631 11.5608C4.07384 11.7483 4.3282 11.8537 4.59341 11.8537H4.60341C4.86863 11.8537 5.12298 11.7483 5.31052 11.5608C5.49806 11.3732 5.60341 11.1189 5.60341 10.8537C5.60341 10.5885 5.49806 10.3341 5.31052 10.1466C5.12298 9.95903 4.86863 9.85368 4.60341 9.85368H4.59341ZM10.5934 6.85368C10.3282 6.85368 10.0738 6.95903 9.88631 7.14657C9.69877 7.33411 9.59341 7.58846 9.59341 7.85368C9.59341 8.11889 9.69877 8.37325 9.88631 8.56078C10.0738 8.74832 10.3282 8.85368 10.5934 8.85368H10.6034C10.8686 8.85368 11.123 8.74832 11.3105 8.56078C11.4981 8.37325 11.6034 8.11889 11.6034 7.85368C11.6034 7.58846 11.4981 7.33411 11.3105 7.14657C11.123 6.95903 10.8686 6.85368 10.6034 6.85368H10.5934Z" fill="currentColor" stroke="none"></path></svg>
           
      )}
                    </div>
                  
                  </h2>
                </div>
                </div>
                <div className="button-row mb-8 text-center">
               
                <Button
        variant="contained"
        size="small"
        style={{
    backgroundColor: getLevelBadgeColor(ques.level),
    marginRight: '10px',
            borderRadius: '50px',
            width: '190px',
            height:'45px',
            padding: '6px 14px',
            textAlign: 'center',
            border: '1px solid white',
             marginBottom:'10px'
        }}
      >
       {ques.level.toUpperCase()}
  
      </Button>
      
      <Button
        variant="contained"
        size="small"
        style={{
         backgroundColor: "#F4BB44",
           marginRight: '10px',
            borderRadius: '50px',
            width: '190px',
            height:'45px',
            color:'black',
            padding: '6px 14px',
            textAlign: 'center',
            border: '1px solid white',
            marginBottom:'10px'
        }}
      >
      <IconButton onClick={handleThumbsUpClick} size="medium" type="button">
        <ThumbUpAltIcon fontSize="medium" color='black' />
      </IconButton>
      <span>{thumbsUpCount}</span>

      <IconButton onClick={handleThumbsDownClick} size="medium" type="button">
        <ThumbDownAltIcon fontSize="medium" color='black'  />
      </IconButton>
      <span>{thumbsDownCount}</span>
    </Button>
    <Button
                    variant="contained"
                    size="small"
                    style={{
                      backgroundColor: ques.isRevisited ? 'white' : 'lightpink',
                      marginRight: '10px',
                      borderRadius: '50px',
                      width: '190px',
                      height: '45px',
                      padding: '6px 14px',
                      textAlign: 'center',
                      border: '1px solid white',
                      color: 'black',
                      marginBottom: '10px',
                    }}
                    onClick={() => handleRevisitClick(ques.id)}
                  >
                    {ques.isRevisited ? (
                      <>
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 14 16"
      className='ml-2'
      width="14"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="a"
        d="M7 2.01995e-06C5.284 2.01995e-06 3.592 0.106002 1.93 0.310002C0.806 0.450002 3.722e-09 1.414 3.722e-09 2.517V15.25C-1.26339e-05 15.3769 0.0321572 15.5017 0.0934999 15.6127C0.154843 15.7238 0.243353 15.8174 0.35075 15.885C0.458148 15.9525 0.580922 15.9917 0.707586 15.9989C0.834249 16.0061 0.960663 15.981 1.075 15.926L7 13.082L12.925 15.926C13.0393 15.981 13.1657 16.0061 13.2924 15.9989C13.4191 15.9917 13.5419 15.9525 13.6493 15.885C13.7566 15.8174 13.8452 15.7238 13.9065 15.6127C13.9678 15.5017 14 15.3769 14 15.25V2.517C14 1.414 13.194 0.449002 12.07 0.310002C10.3879 0.103001 8.69475 -0.00052737 7 2.01995e-06Z"
        fill="darkblue"
      ></path>
    </svg>{''}
     <div> Revisited</div>
    </>
   
  ) : (
    <>
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 14 16"
      className='ml-2'
      width="14"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="a"
        d="M7 2.01995e-06C5.284 2.01995e-06 3.592 0.106002 1.93 0.310002C0.806 0.450002 3.722e-09 1.414 3.722e-09 2.517V15.25C-1.26339e-05 15.3769 0.0321572 15.5017 0.0934999 15.6127C0.154843 15.7238 0.243353 15.8174 0.35075 15.885C0.458148 15.9525 0.580922 15.9917 0.707586 15.9989C0.834249 16.0061 0.960663 15.981 1.075 15.926L7 13.082L12.925 15.926C13.0393 15.981 13.1657 16.0061 13.2924 15.9989C13.4191 15.9917 13.5419 15.9525 13.6493 15.885C13.7566 15.8174 13.8452 15.7238 13.9065 15.6127C13.9678 15.5017 14 15.3769 14 15.25V2.517C14 1.414 13.194 0.449002 12.07 0.310002C10.3879 0.103001 8.69475 -0.00052737 7 2.01995e-06Z"
        fill="darkpink"
      ></path>
    </svg>{' '}
    <div className=' text-center ml-2'>Revisit</div>
    </>
    
  )}
</Button>


      {buttonsData.map((button, index) => (
        <Button
          key={index}
          style={{
            backgroundColor: button.backgroundColor,
            color: button.backgroundColor === 'lightpink' ? 'black' : 'black', 
            marginRight: '10px',
            borderRadius: '50px',
            width: '190px',
            height:'45px',
            padding: '6px 14px',
            textAlign: 'center',
            marginBottom:'10px',
            border: '1px solid white',
          }}
          onClick={() => handleModalButtonClick(button.text)}
        >
          
          <IconButton>
            {button.icon}
          </IconButton>
          <Typography variant="subtitle2">
            {button.text}
          </Typography>
        </Button>
      ))}
    </div>
    
              <div className="question-box">
                <div className="leftbox">
                  <p>
                    <b>[Maximum Mark: 0]</b>
                  </p>
                  <p>
                    <strong>
                      <span className="MathJax_Preview" style={{ color: 'inherit' }}></span>
                    </strong>
                  </p>
                  <ol type="A">
                    <li>
                      <p>{`Question ${ques.questionNumber} - ${ques.level.toUpperCase()}`}</p>
                      <ol type="a">
                        {ques.options.map((option, optionIndex) => (
                          <li key={optionIndex}>{option}</li>
                        ))}
                      </ol>
                    </li>
                  </ol>
                  <img src="https://ibgakiosk.com/v2/upload/question-image/54772.1700746023.png" alt="Question" />
                </div>
              </div>
             <Card container spacing={2} className="que-footer">
      <Grid item sx={12} m={6} md={3}>
        <Box className="wrap-box">
          <Typography variant="body1">Number</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} m={6} md={3}>
        <Box className="wrap-box">
          <Typography variant="body1">MYP Questionbank</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} m={6} md={3}>
        <Box className="wrap-box">
          <Typography variant="body1">Number sequences(prediction,description)</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} m={6} md={3}>
        <Box className="wrap-box">
          <Typography variant="body1">B&amp;C</Typography>
        </Box>
      </Grid>
    </Card>
            </Grid>
          ))}
        </section>
      </main>
  
      <Modal show={selectedQuestion !== null} onHide={closeModal} className='mt-10'>
        {selectedQuestion !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{`Question ${selectedQuestion} - ${selectedLevel}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card>
                <ModalContent
                  question={QuestionData.find((ques) => ques.id === selectedQuestion)}
                />
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
      </Fragment>
   

  );
};

export default QuestionLevel;
