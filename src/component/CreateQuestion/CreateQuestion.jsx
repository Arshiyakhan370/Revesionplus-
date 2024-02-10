import React, { Fragment, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { Apps, QuestionAnswer, Add, Close } from "@mui/icons-material";
import Description from "./Description";
import Questions from "./Questions";
import { useMediaQuery } from "react-responsive";
import FilterForm from "../createAssignment/FilterForm";

const CreateQuestion = ({ isSidebarClosed }) => {
  const [content, setContent] = useState("");
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [items, setItems] = useState([]);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [textData, setTextData] = useState('');
  const handleSaveTextContent = (rawContentState) => {
    setTextData(rawContentState);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleToggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
    setShowQuestion(false)
  };

  const handleQuestion = () => {
    setShowQuestion(!showQuestion);
    setShowAdditionalButtons(false)
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { isVisible: true }]);
    setShowAdditionalButtons(false);
    setShowQuestion(false);
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isVisible = !updatedItems[index].isVisible;
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      content,
    };

    setSavedQuestions([...savedQuestions, newQuestion]);
    setContent("");
  };

  const goBack = () => {
    window.history.back();
  };
 const sidebarWidth = isSidebarClosed ? "70px" : "270px";
  const mainComponentWidth = isSmallScreen
    ? "100%"
    : `calc(100% - ${sidebarWidth})`;

  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? "89px" : isSmallScreen ? "0" : "270px",
    transition: "width 0.3s, margin-left 0.3s",
  };

  return (
    <Fragment>
      <Container maxWidth="xxl" >
      <Card sx={{ background: "#f0f0f0" }}  style={styles}>
      <FilterForm/>
        
          <CardContent>
            <Typography variant="h6" gutterBottom className="mt-4 mb-4">
              Create  Question
            </Typography>
          
            {currentContent && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: currentContent }} />
            </div>
          )}
            <Grid item xs={12}>
              <div className="lg:flex flex-row md:flex-col sm:flex-col justify-between "
                
              >
              <div className="flex-1">
                <Button
                  onClick={handleAddItem}
                  variant="outlined"
                  sx={{
                    width: "13em",
                    height: "3em",
                    background:
                      "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                    color: "white",
                  }}
                >
                  Add Question
                </Button>
                </div>
                    <div>
                <ul className="mt-[-60px]">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="ant-list-item"
                      style={{ width: "100%", display: "block", textAlign: "center" }}
                    >
                      {item.isVisible && (
                        <>
                          <Button
                            type="button"
                            className="ant-btn css-bua3hd ant-btn-circle bg-white ant-btn-default ant-btn-lg ant-btn-icon-only ant-btn-background-ghost ant-btn-dangerous ant-btn-icon-m-t-4 border border-red-500"
                            onClick={() => handleToggleItem(index)}
                            sx={{
                            background: item.isVisible ? 'red' : 'blue',
                            }}
                          >
                            <span className="ant-btn-icon">
                             <Close />
                            </span>
                          </Button>

                          <div className="ant-row css-bua3hd" style={{ marginTop: "10px" }}>
                            <Grid container spacing={2} justifyContent="center">
                              <Grid item>
                                <Button
                                  type="button"
                                  onClick={handleToggleAdditionalButtons}
                                  sx={{
                                    background:
                                      "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                                    color: "white",
                                  }}
                                  className=" text-white ant-btn css-bua3hd ant-btn-primary ant-btn-background-ghost"
                                >
                                  <Apps />
                                  <span> Question/ Question Description</span>
                                </Button>
                              </Grid>
                              <Grid item>
                                <Button
                                  type="button"
                                  onClick={handleQuestion}
                                  sx={{
                                    background:
                                      "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                                    color: "white",
                                  }}
                                  className="text-white ant-btn css-bua3hd ant-btn-primary ant-btn-background-ghost"
                                >
                                  <QuestionAnswer />
                                  <span>Sub Questions/ Sub Question Description</span>
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                 
                </ul>
                </div>
              </div>
            </Grid>
            <div className="text-center">
            {showAdditionalButtons && 
                            <div>
                            <Description onSave={handleSaveTextContent} />
                            </div>}
                            </div>
                            <div className="text-center">
                            {showQuestion && <div><Questions /></div>}
                            </div>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "16px 0",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={goBack}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                  }}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                  }}
                >
                  Save
                </Button>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Fragment>
  );
};

export default CreateQuestion;
