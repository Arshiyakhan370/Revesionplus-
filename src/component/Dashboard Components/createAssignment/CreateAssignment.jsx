import React, { useState } from 'react'

const CreateAssignment = () => {
    const questions = [
        {
          question: "Find the principal axis of y = sin x - 3",
          options: ["y = -3", "y = -2 cos x + 5", "y = 1/4 sin(15x)"],
          answerKey: "b"
        },
        
      ];
    
      const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
    
      const handleSelectOption = (index, option) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[index] = option;
        setSelectedOptions(updatedOptions);
      };
    
      const handleBack = () => {
     
      };
    
      const handlePrint = () => {
     
        console.log("Printing...");
      };
    
      return (
        <div className="assignment-creator">
          {questions.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              {q.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={option}
                    checked={selectedOptions[index] === option}
                    onChange={() => handleSelectOption(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleBack}>Back</button>
          <button onClick={handlePrint}>Print</button>
        </div>
     
    
  )
}

export default CreateAssignment