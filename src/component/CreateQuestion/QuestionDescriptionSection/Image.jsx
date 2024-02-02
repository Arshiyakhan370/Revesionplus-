import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Modal,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Header from "../../AdminDashboard/Header";
import { useMediaQuery } from "react-responsive";

const Image = ({ handleCloseModal }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const imageUrl = "https://example.com/placeholder.jpg";
      resolve({ data: { link: imageUrl } });
    });
  };

  const handleAddFromUrl = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleUrlSubmit = () => {
    handleModalClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    window.history.back();
  };

  return (
    <Container maxWidth="xxl" mt={16}>
      <Card mt={16}>
        <CardContent>
          <Typography variant="h5" align="center" mb={4} mt={4}>
            Image
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <Button>
                <div>
                  {imageSrc && (
                    <img src={imageSrc} alt="Uploaded" className="img-fluid" />
                  )}
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop an image here, or click to select an image
                    </p>
                  </div>
                </div>
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={description !== ""}
                      onChange={() =>
                        setDescription(
                          description !== "" ? "" : "Add description"
                        )
                      }
                    />
                  }
                  label={description !== "" ? "Add description" : "Description"}
                />
              </Grid>
              {description !== "" && (
                <Grid item xs={12} >
                <div className="border border-gray-500">
                  <Editor
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    placeholder="Enter your content"
                    toolbar={{ image: { uploadCallback: handleImageUpload } }}
                    onEditorStateChange={(value) => setDescription(value)}
                  />
                  </div>
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Image URL"
                  variant="outlined"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUrlSubmit}
                  sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}
                >
                  OK
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} mt={3}>
              <Grid container justifyContent="space-between">
              <Button type="button" onClick={handleCloseModal} sx={{ color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
                     Close
               </Button>
                <Button type="submit"  color="primary" variant="contained"  sx={{color:'white',  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'}}>
                              Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Image;
