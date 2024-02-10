import React from "react";
import { Card, Button } from "@mui/material";
import { convertFromRaw } from "draft-js";

const QuestionCard = ({ question, setQuestions,setMarkSchemeEditorState, questions, setEditorState, EditorState, index, setAnswerKeyEditorState, setPdfFile, setImageSrc, setVideoSrc, setQuestionNumber, setSubQuestionNumber, setShowSubEditor, setSelectedQuestionIndex }) => {
    const handleCopy = (questionIndex) => {
        const questionToCopy = questions[questionIndex];
        navigator.clipboard.writeText(
            convertToText(questionToCopy.editorState)
        );
        console.log(`Copy button clicked for Question ${questionIndex + 1}`);
    };

    const handleCopyQuestionContent = (index, questionIndex) => {
        const questionToCopy = questions[questionIndex];
        const copiedQuestion = { ...questions[index] };
        setQuestions((prevQuestions) => [...prevQuestions, copiedQuestion]);
        console.log(`Copy button clicked for Question ${questionIndex + 1}`);
    };

    const handleDelete = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(questionIndex, 1);
        setQuestions(updatedQuestions);
        console.log(`Delete button clicked for Question ${questionIndex + 1}`);
    };

    const handleEditQuestion = (index) => {
        const questionToEdit = questions[index];

        setEditorState(EditorState.createWithContent(convertFromRaw(questionToEdit.editorState)));
        setAnswerKeyEditorState(EditorState.createWithContent(convertFromRaw(questionToEdit.answerKey)));
        // Assuming setMarkSchemeEditorState is defined somewhere
        setMarkSchemeEditorState(EditorState.createWithContent(convertFromRaw(questionToEdit.markScheme)));
        setPdfFile(questionToEdit.pdfFile);
        setImageSrc(questionToEdit.imageSrc);
        setVideoSrc(questionToEdit.videoSrc);

        if (questionToEdit.questionNumber.includes('.')) {
            const [questionNumber, subQuestionNumber] = questionToEdit.questionNumber.split('.');
            setQuestionNumber(parseInt(questionNumber));
            setSubQuestionNumber(parseFloat(subQuestionNumber));
            setShowSubEditor(true);
        } else {
            setQuestionNumber(parseInt(questionToEdit.questionNumber));
            setShowSubEditor(false);
        }
        setSelectedQuestionIndex(index);
    };

    const handleViewPage = (questionIndex) => {
        const questionToView = questions[questionIndex];
        const newWindow = window.open();
        newWindow.document.write(
            "<html><head><title>Question Page</title></head><body>"
        );
        newWindow.document.write(`<h2>Q${questionIndex + 1}</h2>`);
        newWindow.document.write(
            "<p>" + convertToText(questionToView.editorState) + "</p>"
        );
        newWindow.document.write("</body></html>");
        newWindow.document.close();
        console.log(`View Page button clicked for Question ${questionIndex + 1}`);
    };

    const convertToText = (contentState) => {
        const contentBlocks = contentState.blocks;
        const text = contentBlocks.map((block) => block.text).join("\n");
        return text;
    };

    return (
        <Card key={index}>
            <div className="mb-3 ml-4">
                <h5>Q{question.questionNumber}</h5>
            </div>

            {question.criteria && (
                <p>Criteria: {question.criteria.join(", ")}</p>
            )}
            {question.marks && <p>Marks: {question.marks}</p>}
            <div className="mb-3 ml-4">
                <h6> Answer Key:</h6>
                <span>{question.answerKey && convertToText(question.answerKey)}</span>
            </div>
            <div className="mb-3 ml-4">
                <h6>Mark Scheme:</h6>
                <span>{question.markScheme && convertToText(question.markScheme)}</span>
            </div>
            <div>
                <Button onClick={() => handleCopyQuestionContent(index)} variant="outlined" sx={{ marginRight: 1 }}>Copy</Button>
                <Button onClick={() => handleDelete(index)} variant="outlined" sx={{ marginRight: 1 }}>Delete</Button>
                <Button onClick={() => handleEditQuestion(index)} variant="outlined" sx={{ marginRight: 1 }}>Edit</Button>
                <Button onClick={() => handleViewPage(index)} variant="outlined" sx={{ marginRight: 1 }}>View Page</Button>
            </div>
        </Card>
    );
};

export default QuestionCard;
