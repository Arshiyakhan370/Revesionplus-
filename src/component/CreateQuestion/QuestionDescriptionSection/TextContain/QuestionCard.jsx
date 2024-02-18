import React from "react";
import { Card, Button } from "@mui/material";
import { convertFromRaw } from "draft-js";

const QuestionCard = ({  questions, handleCopy, handleDelete, handleEditQuestion, handleViewPage, copyingQuestion, nextQuestionNumber }) => {
   

    const convertToText = (contentState) => {
        const contentBlocks = contentState.blocks;
        const text = contentBlocks.map((block) => block.text).join("\n");
        return text;
    };

    return (
        <div>
        {questions && questions.map((question, index) => (
      <Card key={index} className="text-start ml-4 mt-4 mb-4">
              <div className="mb-3 ml-4">
                <h5>
                  Q{question.questionNumber} {copyingQuestion && nextQuestionNumber}
                </h5>{" "}
                 <p>{question.editorState && question.editorState.blocks[0].text}</p>
              </div>
              {question.criteria && <p>Criteria: {question.criteria.join(", ")}</p>}
              {question.marks && <p>Marks: {question.marks}</p>}
              <div className="mb-3 ml-4">
                <h6> Answer Key:</h6>
                <span>
                  {question.answerKey && convertToText(question.answerKey)}
                </span>
              </div>
              <div className="mb-3 ml-4">
                <h6>Mark Scheme:</h6>
                <span>
                  {question.markScheme && convertToText(question.markScheme)}
                </span>
              </div>
              {question.imageSrc && (
                <img
                  src={question.imageSrc}
                  alt="Image"
                  className="img-fluid"
                  style={{ width: `${question.imageSize.width}px`, height: `${question.imageSize.height}px` }}
                />
              )}
              {question.pdfFile && (
                <embed
                  src={question.pdfFile}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                />
              )}
          
              {question.videoSrc && (
                <video controls width="100%">
                  <source src={question.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div>
                <Button
                  onClick={() => handleCopy(index)}
                  variant="outlined"
                  sx={{ marginRight: 1 }}
                >
                  Copy
                </Button>
                <Button
                  onClick={() => handleDelete(index)}
                  variant="outlined"
                  sx={{ marginRight: 1 }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleEditQuestion(index)}
                  variant="outlined"
                  sx={{ marginRight: 1 }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleViewPage(index)}
                  variant="outlined"
                  sx={{ marginRight: 1 }}
                >
                  View Page
                </Button>
              </div>
            </Card>
          ))}
          </div>
    );
};

export default QuestionCard;
