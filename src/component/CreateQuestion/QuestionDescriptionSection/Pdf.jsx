import React, { useState, useEffect, useRef } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDropzone } from 'react-dropzone';
import { Button, Card, Container, Grid, TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { gsap } from 'gsap';

const PdfComponent = ({ pdfFile }) => {
  return (
    <object
      data={pdfFile}
      type="application/pdf"
      width="100%"
      height="500px"
    >
      <p>PDF cannot be displayed. Please download it.</p>
    </object>
  );
};

const Pdf = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:1024px)');
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: '.pdf',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPdfFile(URL.createObjectURL(file));
      }
    },
  });

  const pdfRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pdfRef.current,
      { x: '100%' },
      { x: '0%', duration: 2, ease: 'power3.out' }
    );
  }, []);

  const handleCloseModal = () => {
    // Handle close logic here
  };

  return (
    <Container maxWidth="xl" mt={16} ref={pdfRef}>
      {/* <Card mt={16}> */}
        <h2 className='text-center mb-8 mt-4'>Pdf</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              placeholder='Enter your content'
              onEditorStateChange={(value) => setDescription(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop a PDF file here, or click to select a PDF file</p>
            </div>
            {pdfFile && <PdfComponent pdfFile={pdfFile} />}
          </Grid>
          <Grid item xs={12} className='flex justify-end'>
            <Button onClick={handleCloseModal} variant="contained" sx={{ marginRight:"10px",color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
              Close
            </Button>
            <Button type="submit" variant="contained" sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
              Save
            </Button>
          </Grid>
        </Grid>
      {/* </Card> */}
    </Container>
  );
};

export default Pdf;
