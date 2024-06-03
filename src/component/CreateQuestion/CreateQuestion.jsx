import React, { Fragment, useState } from "react";
import { Container, Button, Grid, CardContent } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import FilterForm from "../createAssignment/FilterForm";
import { useNavigate } from "react-router-dom";

const CreateQuestion = ({ isSidebarClosed }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const navigate = useNavigate();
  const [boardID, setBoardID] = useState('IB DP');

  const handleSave = () => {
    if (boardID === 'IB MYP') {
      navigate('/mypsection');
    } else if (boardID === 'IB DP') {
      navigate('/DisplayQuestion');
    }
  };

  const sidebarWidth = isSidebarClosed ? "70px" : "270px";
  const mainComponentWidth = isSmallScreen ? "100%" : `calc(100% - ${sidebarWidth})`;

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
        className="bg-gray-100 lg:mt-[-20px] md:mt-[-20px] sm:mt-[-20px]"
      >
        <FilterForm setBoardID={setBoardID} />

        <CardContent>
          <Grid item xs={12}>
            <div className="lg:flex flex-row md:flex-col sm:flex-col justify-between ">
              <div className="flex-1">
                <Button
                  onClick={handleSave}
                  style={{
                    textDecoration: 'none',
                    width: '13em',
                    height: '3em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)',
                    color: 'white',
                    borderRadius: '4px',
                    marginRight: '1em',
                  }}
                >
                  Add Question
                </Button>
              </div>
            </div>
          </Grid>
        </CardContent>
      </Container>
    </Fragment>
  );
};

export default CreateQuestion;
