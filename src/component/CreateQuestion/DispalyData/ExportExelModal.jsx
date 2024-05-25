import React from 'react';
import { Modal, Button, Typography } from '@mui/material';
import * as XLSX from 'xlsx';

const ExportExelModal = ({ open, handleClose }) => {

  const handleExportToExcel = () => {
    // Dummy data for demonstration
    const data = [
      ['Name', 'Age', 'Country'],
      ['John', 30, 'USA'],
      ['Alice', 25, 'UK'],
      ['Bob', 35, 'Canada'],
    ];

    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    // Add a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, 'exported_data.xlsx');
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="export-excel-modal-title" aria-describedby="export-excel-modal-description">
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px', maxWidth: '600px' }}>
        <Typography variant="h6" id="export-excel-modal-title" gutterBottom>
          Exporting all results to Excel
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" onClick={handleExportToExcel} color="primary">
            Export to Excel
          </Button>
        </div>
        <Typography variant="caption" style={{ marginTop: '10px', textAlign: 'center' }}>
          This will take about 30s
        </Typography>
      </div>
    </Modal>
  );
};

export default ExportExelModal;
