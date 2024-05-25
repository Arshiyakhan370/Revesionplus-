import React, { useState } from 'react';
import { Grid, Button, Divider, Box, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Editor } from '@tinymce/tinymce-react';
import DisplayQuestion from './DisplayQuestion';

const Previwe = ({ open, onClose, onSave }) => {
  const [editorContent, setEditorContent] = useState('');

  const handleSave = () => {
    onSave(editorContent); // Pass the editor content to the save handler
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} fullWidth maxWidth="md">
      <DialogTitle>
        <Box display="flex" alignItems="center">
          Preview
          <IconButton onClick={handleCancel} sx={{ color: 'red', marginLeft: 'auto' }}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container direction="column" spacing={2} p={2}>
          <Divider />
          <Grid item>
            <Editor
              apiKey='sxjoo3xgjqdbipeju9chepopxxf7467it66w6puv0sv5ysse'
              init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                toolbar: 'undo redo | blocks fontfamily fontsize | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                  { value: 'First.Name', title: 'First Name' },
                  { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
              }}
              initialValue=""
              placeholder="write here"
              // editorState={editorState}
              // onEditorStateChange={(newEditorState) =>
              //   setEditorState(newEditorState)
              // }
            />
          </Grid>
          <Divider />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box display="flex" justifyContent="flex-end" mt={2} width="100%">
          <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginRight: 1 }}>
            Save
          </Button>
          <Button variant="outlined" color="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default Previwe;
