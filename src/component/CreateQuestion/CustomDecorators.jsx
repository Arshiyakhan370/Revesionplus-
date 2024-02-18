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
import Text from "./QuestionDescriptionSection/Text";

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
    setShowAdditionalButtons(false); 
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  const handleToggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
    setShowQuestion(false);
  };

  const handleQuestion = () => {
    setShowQuestion(!showQuestion);
    setShowAdditionalButtons(false);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setShowAdditionalButtons(!showAdditionalButtons); 
    setShowQuestion(false);
    setItems([...items, { isVisible: true }]);
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
    marginLeft: isSidebarClosed ? "79px" : isSmallScreen ? "0" : "270px",
    transition: "width 0.3s, margin-left 0.3s",
  };

  return (
    <Fragment>
      <Container
        maxWidth="xxl"
        style={styles}
        className="bg-gray-100 lg:mt-[-40px] md:mt-[-20px] sm:mt-[-20px]"
      >
        <FilterForm />

        <CardContent>
          {currentContent && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: currentContent }} />
            </div>
          )}
          <Grid item xs={12}>
            <div className="lg:flex flex-row md:flex-col sm:flex-col justify-between ">
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
            </div>
          </Grid>
          <div className="text-center">
            {showAdditionalButtons && (
              <Text onSave={handleSaveTextContent} />
            )}
          </div>
          {/* <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                margin: "16px 0",
                marginTop:"-30px"
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
            </div>
          </Grid> */}
        </CardContent>
      </Container>
    </Fragment>
  );
};

export default CreateQuestion;
