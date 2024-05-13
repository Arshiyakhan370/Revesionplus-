import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  FormControl,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { useMediaQuery } from "react-responsive";
import { Eye, EyeOff } from "react-feather";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import SuccessMsg from "../../CategoryMaster/AddCategory/SuccessMsg";

const StudentAdd = ({ isSidebarClosed, addStudent }) => {
  const [formData, setFormData] = useState({
    usertype: "",
    name: "",
    email: "",
    mobile: "",
    expire_date: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [successMsgOpen, setSuccessMsgOpen] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging.ibgakiosk.com/api/add_user",
        formData
      );
          console.log(response.data)
      setSuccessMsgOpen(true);

      setFormData({
        usertype: "",
        name: "",
        email: "",
        mobile: "",
        expire_date: "",
        password: "",
      });
      setShowPassword(false);
    } catch (error) {
      setSuccessMsgOpen(false);
    }
  };
  console.log(setFormData, "datashow");
  const handleSuccessMsgClose = () => {
    setSuccessMsgOpen(false);
  };

  const goBack = () => {
    window.history.back();
  };
  const sidebarWidth = isSidebarClosed ? "50px" : "270px";
  const mainComponentWidth = isSmallScreen
    ? "100%"
    : `calc(100% - ${sidebarWidth})`;

  const styles = {
    width: mainComponentWidth,
    marginLeft: isSidebarClosed ? "75px" : isSmallScreen ? "0" : "270px",
    transition: "width 0.3s, margin-left 0.3s",
  };
  const inputStyle = { height: "35px" };

  return (
    <Container maxWidth="xxl" style={styles} className="bg-gray-100">
      <div className="content-header row1"></div>
      <div className="content-body">
        <CardContent>
          <h4 className="card-title mt-4 mb-4">Add User</h4>

          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sx={{ marginTop: "16px" }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="usertype-label">Role</InputLabel>
                  <Select
                    labelId="usertype-label"
                    id="select-usertype"
                    className="bg-white"
                    name=" usertype"
                    value={formData.usertype}
                    onChange={(e) =>
                      setFormData({ ...formData, usertype: e.target.value })
                    }
                    aria-labelledby="usertype-label"
                  >
                    <MenuItem value="" disabled>
                      Select User Type
                    </MenuItem>
                    <MenuItem value="SuperAdmin">SuperAdmin</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="IB Facilitator">IB Facilitator</MenuItem>
                    <MenuItem value="Assignment Editor/IB Facilitator">
                      Assignment Editor/IB Facilitator
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="User Name"
                  className="bg-white"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="email"
                  label="User Email"
                  className="bg-white"
                  placeholder="john.doe@email.com"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="User Mobile"
                  className="bg-white"
                  placeholder="9145780000"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Flatpickr
                  className="form-control flatpickr-basic flatpickr-input h-12 mt-3"
                  placeholder="Set Inactivation Date"
                  label="Date"
                  options={{ dateFormat: "Y-m-d", enableTime: false }}
                  value={
                    formData.expire_date ? [new Date(formData.expire_date)] : []
                  }
                  onChange={(date) =>
                    setFormData({
                      ...formData,
                      expire_date: date[0]?.toISOString().split("T")[0] || "",
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="User Password"
                  className="bg-white"
                  placeholder="············"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          style={{ width: "24px", height: "24px" }}
                        >
                          {showPassword ? (
                            <Eye style={{ width: "30px", height: "30px" }} />
                          ) : (
                            <EyeOff style={{ width: "30px", height: "30px" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
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
                sx={{
                  color: "white",
                  background:
                    "linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important",
                }}
              >
                Add
              </Button>
            </div>
          </form>
        </CardContent>

        <SuccessMsg
          open={successMsgOpen}
          onClose={handleSuccessMsgClose}
          message="Teacher Data saved successfully!"
        />
      </div>
    </Container>
  );
};

export default StudentAdd;
