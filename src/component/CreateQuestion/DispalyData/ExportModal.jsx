import React, { useState } from 'react';
import { Modal, Button, Checkbox, FormControlLabel, Typography, Grid } from '@mui/material';
import JSZip from 'jszip';

const ExportModal = ({ open, handleClose }) => {
  const [checkedItems, setCheckedItems] = useState({
    withQuestions: true,
    withStudentResponses: true,
    withAnswerExplanation: false,
    withMarkscheme: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleExportToZip = () => {
    const zip = new JSZip();

    // Example content for each selected item
    if (checkedItems.withQuestions) {
      zip.file('questions.txt', 'Sample questions content');
    }
    if (checkedItems.withStudentResponses) {
      zip.file('student_responses.txt', 'Sample student responses content');
    }
    if (checkedItems.withAnswerExplanation) {
      zip.file('answer_explanation.txt', "Sample teacher's explanation content");
    }
    if (checkedItems.withMarkscheme) {
      zip.file('markscheme.txt', 'Sample markscheme content');
    }

    zip.generateAsync({ type: 'blob' }).then((blob) => {
      // Create a temporary URL for the ZIP file
      const url = window.URL.createObjectURL(blob);
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      // Set the download attribute to specify the filename
      link.setAttribute('download', 'exported_files.zip');
      // Simulate a click on the link to trigger the download
      document.body.appendChild(link);
      link.click();
      // Clean up: remove the temporary link and URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="export-modal-title" aria-describedby="export-modal-description">
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px', maxWidth: '600px' }}>
        <Typography variant="h6" id="export-modal-title" gutterBottom>
          Export all submissions
        </Typography>
        <Typography variant="body1" id="export-modal-description" gutterBottom>
          Select items to export:
        </Typography>
        <div>
          <FormControlLabel
            control={<Checkbox checked={checkedItems.withQuestions} onChange={handleCheckboxChange} name="withQuestions" />}
            label="Questions"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedItems.withStudentResponses} onChange={handleCheckboxChange} name="withStudentResponses" />}
            label="Student responses"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedItems.withAnswerExplanation} onChange={handleCheckboxChange} name="withAnswerExplanation" />}
            label="Teacher's explanation"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedItems.withMarkscheme} onChange={handleCheckboxChange} name="withMarkscheme" />}
            label="Markscheme"
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained" onClick={handleExportToZip} color="primary">
            Export to ZIP
          </Button>
        </div>
        <Typography variant="caption" style={{ marginTop: '10px' }}>
          This can take up to 5 minutes
        </Typography>
      </div>
    </Modal>
  );
};

export default ExportModal;
