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

const StudentAdd = ({ isSidebarClosed }) => {
  const [usertype, setUsertype] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorFields, setErrorFields] = useState([]);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = [];
    if (!usertype) validationErrors.push("Usertype");
    if (!name) validationErrors.push("User Name");
    if (!email) validationErrors.push("User Email");
    if (!mobile) validationErrors.push("User Mobile");
    if (!expireDate) validationErrors.push("Inactivation Date");
    if (!password) validationErrors.push("User Password");
    if (!isStrongPassword(password)) {
      setErrorDialogOpen(true);
      setErrorFields(["Password must be strong."]);
      return;
    }

    if (validationErrors.length > 0) {
      setErrorDialogOpen(true);
      setErrorFields(validationErrors);
      return;
    }

    setSuccessDialogOpen(true);
    setErrorDialogOpen(false);
    setUsertype("");
    setName("");
    setEmail("");
    setMobile("");
    setExpireDate("");
    setPassword("");
    setShowPassword(false);
  };

  const handleCloseDialogs = () => {
    setSuccessDialogOpen(false);
    setErrorDialogOpen(false);
    setErrorFields([]);
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
  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    );
  };

  return (
    <Container maxWidth="xxl" style={styles}>
      <div className="content-header row1"></div>
      <div className="content-body">
        <Card sx={{ marginTop: "25px", background: "#f0f0f0" }}>
          <CardContent>
            <h4 className="card-title mt-4 mb-4">Add User</h4>

            <form
              className="needs-validation"
              noValidate
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
  <FormControl fullWidth size="small" className="mt-3">
    <InputLabel id="usertype-label">User Type</InputLabel>
    <Select
      labelId="usertype-label"
      id="select-usertype"
      name="usertype"
      value={usertype}
      onChange={(e) => setUsertype(e.target.value)}
      required
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
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                      variant="outlined"
                    margin="normal"
                  InputProps={{
                
                    }}
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
                    placeholder="john.doe@email.com"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required                                
                variant="outlined"
                    margin="normal"
                  InputProps={{
                
                    }}
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
                    placeholder="9145780000"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                       variant="outlined"
                    margin="normal"
                  InputProps={{
                
                    }}
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
                    options={{ dateFormat: "Y-m-d" }}
                    value={expireDate}
                    onChange={(date) => setExpireDate(date[0])}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label="User Password"
                    placeholder="············"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                              <EyeOff
                                style={{ width: "30px", height: "30px" }}
                              />
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
                  onClick={handleSubmit}
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
        </Card>
      </div>
      <Dialog open={successDialogOpen} onClose={handleCloseDialogs}>
        <DialogTitle className="text-green-500"> Success </DialogTitle>
        <DialogContent>
          <DialogContentText>Data added successfully!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs}>OK</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={errorDialogOpen} onClose={handleCloseDialogs}>
        <DialogTitle className="text-red-500">Error</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the following fields: {errorFields.join(", ")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs}>OK</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default StudentAdd;
