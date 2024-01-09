import React from 'react'
import './QuestionLevel.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
const QuestionLevel = () => {
    const QuestionData = [
        {
            id:'1',
          questionNumber: 1,
          question: '1 The rate of change of x with respect to y is given by 3x. Find the gradient on the graph of y against x when x = 2.',
          options: ['Option A', 'Option B', 'Option C', 'Option D','Option e'],
         
        },
        {
            id:'2',
          questionNumber: 2,
          question: '2 The rate of change of x with respect to y is given by 3x. Find the gradient on the graph of y against x when x = 2.',
          options: ['Option A', 'Option B', 'Option C', 'Option D','Option E'],
        },
        {
            id:'3',
          questionNumber: 3,
          question: '3',
          options: ['option1', 'option2', 'option3', 'option4', 'option5'],
        },
        {
            id:'4',
          questionNumber: 4,
          question: '4',
          options: ['option1', 'option2', 'option3', 'option4', 'option5'],
        },
      ];
    
      return (
        <div>
        <main  style={{borderBottom: '1px solid #002b4f'}}>
        <section class="question">                   
        {QuestionData.map((ques) => (
        <div key={ques.id} className="mid-inner  wiki-mk">
       
        <div className="que-box">
          <div className="que-box-left">
            <h2>
              Question {ques.questionNumber}
              <div className="easy-box">
                <span className="spanclass" style={{ padding: '8px 14px', marginLeft: '21px', fontSize: '14px' }}>
                  CALCULATOR
                </span>
              </div>
            </h2>
          </div>
          <div className="easy-box">
            <span className="spanclass" style={{ padding: '8px 14px', marginLeft: '21px', fontSize: '14px' }}>
              Question Level
            </span>
          </div>
          <div className="easy-box">
            <div className="box3">Tough</div>
          </div>
    
          <div className="que-box-right">
            <ul>
              <li>
                <div className="wrap-box">
                  <Link data-popup-open="popup-6496" href="#">
                    <img src="https://ibgakiosk.com/v2/upload/mainimages/booklet.png" /> Answer Key
                  </Link>
                </div>
              </li>
              <li>
                <div className="wrap-box">
                  <Link data-popup-open="popup-m6496" href="#">
                    <img src="https://ibgakiosk.com/v2/upload/mainimages/booklet.png" /> Mark Scheme
                  </Link>
                </div>
              </li>
            </ul>
          </div>
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
            <p >{`Question ${ques.question}`}</p>
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
      <div className="que-footer">
      <ul>
        <li>
          <div className="wrap-box" style={{ float: 'left' }}> Number </div>
        </li>
        <li>
          <div className="wrap-box" style={{ float: 'left' }}> MYP Questionbank </div>
        </li>
        <li>
          <div className="wrap-box" style={{ float: 'left' }}> Number sequences(prediction,description) </div>
        </li>
        <li>
          <div className="wrap-box" style={{ float: 'left' }}> B&amp;C </div>
        </li>
      </ul>
    </div>
        
    </div>
        ))}
        </section>
      
        </main>
        <Footer/>
        </div>
      );
    };
    
  
    

export default QuestionLevel