import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  Card,
   IconButton,
  InputAdornment,
  CardContent,
  Select,
  InputLabel,
  FormControl,
 
} from '@mui/material';
import { Eye, EyeOff } from 'react-feather';
import { User } from 'react-feather';
import { Button,  Pagination,Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material';
import {  Form,Modal} from 'react-bootstrap';
import './ListContainer.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import { Box } from '@mui/system';
import axios from 'axios';
import ProfileDailoge from './ProfileDailoge';
import UserProfileDialog from './ProfileDailoge';


const ListContainer = ({ isSidebarClosed ,userListData,setUserListData}) => {
  const [selectedValue, setSelectedValue] = useState(10);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(selectedValue);
  const [selectedUserId, setSelectedUserId] = useState(null);
const [searchQuery, setSearchQuery] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState('');
  const [editUserEmail, setEditUserEmail] = useState('');
  const [editUserMobile, setEditUserMobile]=useState('');
  // const [editUserExpiryDate, setEditUserExpiryDate] = useState('');
  const [editUserRole,setEditUserRole]=useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [showPassword, setShowPassword] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
const [deleteUserId, setDeleteUserId] = useState(null);
const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);
const [editUserExpiryDate, setEditUserExpiryDate] = useState(new Date());
const [openDialog, setOpenDialog] = useState(false);
const [editAction,setEditAction]=useState('')
const flatpickrRef = useRef(null);
const [open, setOpen] = useState(false);
const [profileData, setProfileData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [dialogOpen, setDialogOpen] = useState(false);

const fetchProfileData = async (userId) => {
  try {
    const response = await axios.get(`https://staging.ibgakiosk.com/api/profile_view/${userId}`);
    setProfileData(response.data);
    setDialogOpen(true);
  } catch (error) {
    console.error('Error fetching profile data:', error);
   
  }
};
const handleCloseDialog = () => {
  setDialogOpen(false);
  setProfileData(null); 
}
const handleClick = (event, userId) => {
  setAnchorEl(event.currentTarget);
  if (userId) {
    fetchProfileData(userId);
  }
};
const handleProfileClick = (userId) => {
  setDialogOpen((prevState) => ({
    ...prevState,
    [userId]: true,
  }));
  fetchProfileData(userId); 
};

const roles = ['Admin', 'Ib Facility'];

 
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log('Visibility toggled. New state:', !showPassword);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectChange = (e) => {
    setSelectedValue(parseInt(e.target.value, 10));
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(1); 
  };
  const ScrollUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="24"
      height="24"
      className="scroll-up-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
  const handleDeleteDialogOpen = (userId) => {
    setDeleteUserId(userId);
    setOpenDeleteDialog(true);
  };
  
  const handleDeleteDialogClose = () => {
    setDeleteUserId(null);
    setOpenDeleteDialog(false);
    setOpenSuccessDialog(false);
  };
 

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  
 const handleSuccessDialogClose = () => {
    setOpenSuccessDialog(false);
  };
  const handleDeleteClick = async() => {
    try {
      await axios.post(
        `https://staging.ibgakiosk.com/api/delete_user`,
        {
          user_id: deleteUserId
        }
      );
    
    } catch (error) {
      console.error("Error deleting teacher:", error);
  };
  setUserListData((userListData)=> userListData.filter((user) => user.user_id !== deleteUserId));
         setOpenDeleteDialog(false);
      setOpenSuccessDialog(true);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); 
  };

    
     
      const handleUpdatePasswordClick = async (user) => {
        try {
          const response = await axios.post(`https://staging.ibgakiosk.com/api/update_auth`, {
            user_id: user.id,
            password: newPassword
          });
          console.log('Password updated successfully:', response.data);
          setOpenPasswordModal(false);
        } catch (error) {
          console.error("Error updating password:", error);
        }
      };
      
      const handleUpdatePassword = (user) => {
        setOpenPasswordModal(true);
        setEditUserId(user.id); 
        handleClose(); 
      };
      const handleUpdatePasswordConfirm = (user) => {
        handleUpdatePasswordClick(user.id);
        setOpenPasswordModal(false);
      };
      
      
    
      const handlePasswordModalClose = () => {
        setOpenPasswordModal(false);
      };
    
    
      const handleEditClick = async (user) => {
        try {
          const response = await axios.post(`https://staging.ibgakiosk.com/api/add_user`, {
            user_id: user.user_id,
            action: editAction,
          });
          const userData = response.data?.data;
          
         
          const updatedUser = {
            ...user,
            user_id: userData.user_id,
            name: userData.name,
            usertype: userData.usertype,
            email: userData.email,
            mobile: userData.mobile,
            expire_date: userData.expire_date
          };
      
       
          setUserListData((prevData) =>
            prevData.map((item) =>
              item.user_id === user.user_id ? { ...item, ...updatedUser } : item
            )
          );
          
       
          setAnchorEl(updatedUser);
        } catch (error) {
          console.error("Error occurred while fetching data:", error);
        }
        
        setShowEditModal(true);
      };
      
  const userListLength = userListData ? userListData.length : 0;
  const handleSaveEdit = async () => {
    try {
      const response = await axios.post('https://staging.ibgakiosk.com/api/update_user', {
        user_id: editUserId,
        name: editUserName,
        email: editUserEmail,
        usertype: editUserRole,
        mobile: editUserMobile,
        expire_date: editUserExpiryDate.toISOString().slice(0, 10) 
      });
      
      console.log('User data updated successfully:', response.data);
    
      if (response.data && response.data.message === " updated successfully") {
     
        setAnchorEl(prevData =>
          prevData.map(user =>
            user. user_id === anchorEl. user_id ? { ...user, ...anchorEl,  name: editUserName,
              email: editUserEmail,
              usertype: editUserRole,
              mobile: editUserMobile,
              expire_date: editUserExpiryDate.toISOString().slice(0, 10)} : user
          )
        );
      setAnchorEl(null)
      
      setShowEditModal(false);
    } else {
      console.error("Edit API failed:", response.data?.message || "Unknown error");
    }
  } catch (error) {
    console.error("Error updating topic:", error);
  }
};
  console.log(setAnchorEl,"dta")
  const handleDateChange = (selectedDates) => {
    const selectedDate = selectedDates[0];
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  if (!userListData) {
    return <div>Loading...</div>;
  }
  // const filteredUserList = userListData.filter((user) =>
  //   user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   user.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   user.expiryDate.toLowerCase().includes(searchQuery.toLowerCase())
  // );

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
   
    const sidebarWidth = isSidebarClosed ? '40px' : '262px';
    const mainComponentWidth = isSmallScreen ? '100%' : `calc(100% - ${sidebarWidth})`;
    
    const styles = {
      width: mainComponentWidth,
      marginLeft: isSidebarClosed ? '65px' : (isSmallScreen ? '0' : '250px'), 
      transition: 'width 0.3s, margin-left 0.3s',
    };
   

    const user1 = {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://ui-avatars.com/api/?name=B+Y&color=7F9CF5&background=EBF4FF',
      role: "Assignment Editor/IB Facilitator",
        mobile: "9798356204",
        expire_date: "2025-01-31",
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose1 = () => {
      setOpen(false);
    };
    return (
        <Fragment>
          
        <Container maxWidth="xxl" style={styles} className='bg-gray-100 mt-2'>
      {/* <Card  sx={{marginTop:'15px',background:'#f0f0f0'}}> */}
      <CardContent>
      <section id="responsive-datatable">
        <div className="card-header border-bottom  flex flex-grow-0 justify-between">
                  <h4 className="card-title text-black font-400 mt-6">User List</h4>
                                  </div>
               
                <div className="card-datatable">
                  <div
                    id="datatable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                      <div className="row">
  
  <div className=" pt-4 pb-4 lg:flex lg:flex-row lg:justify-between sm: flex-col sm:gap-4 "  >
    <div className="dataTables_length" id="datatable_length ">
      <label>Show</label>
      <select
        name="datatable_length"
        aria-controls="datatable"
        value={selectedValue}
        onChange={handleSelectChange}
        className="form-select"
        style={{ width: '80px' }} 
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label>entries</label>
    </div>
    <div id="datatable_filter" className="dataTables_filter ms-3 ">
<label>Search:</label>
<input
  type="search"
  className="form-control"
  placeholder=""
  aria-controls="datatable"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
</div>

  </div>

</div> 
<div className='flex  flex-row justify-end'>
<Link to="/student-add" style={{textDecoration:'none'}}>
  <Button sx={{height:'30px', marginRight:'14px', color: 'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important' }}>
Add User
</Button>
</Link>
</div>

                    </div>
                </div>
             
          
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="dt-responsive table table-striped dataTable no-footer dtr-inline">
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '95px' }}
                                aria-label="Name: activate to sort column ascending"
                              >
                                Name
                              </th>
                              {window.innerWidth > 1024 && (
                              <th
                                className="sorting sorting_asc "
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '85px' }}
                                aria-label="Email: activate to sort column descending"
                                aria-sort="ascending"
                              >
                                Email
                              </th>
                              )}
                              {window.innerWidth > 1024 && (
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '104px' }}
                                aria-label="Role: activate to sort column ascending"
                              >
                                Role
                              </th>
                              )}
                              {window.innerWidth > 1024 && (
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '63px' }}
                                aria-label="Mobile: activate to sort column ascending"
                              >
                                Mobile
                              </th>
                              )}
                              {window.innerWidth > 1024 && (
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '56px' }}
                                aria-label="Expiry Date: activate to sort column ascending"
                              >
                                Expiry Date
                              </th>
                              )}
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '52px' }}
                                aria-label="Action: activate to sort column ascending"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          {userListData.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((user, index) => (
                        <tr key={user.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td className="dtr-control" tabIndex="0" onClick={() => handleProfileClick(user.id)}>
      {user.name}
    </td>

   
    {window.innerWidth > 1024 && (
      <td className="sorting_1">{user.email}</td>
    )}

   
    {window.innerWidth > 1024 && (
      <td>{user.role}</td>
    )}

   
    {window.innerWidth > 1024 && (
      <td>{user.mobile}</td>
    )}
    {window.innerWidth > 1024 && (
    <td>{user.expire_date}</td>
  
    )}
    <td>
                                <div className="d-inline-flex">
                              
                                <Button
        onClick={handleClick}
        className="hide-arrow text-primary"
        startIcon={<MoreVertIcon />}
      >
   
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >   
        <MenuItem onClick={(e) => handleClick(e, user.id)}>
          <User sx={{ marginRight: 1 }} />
          Profile
        </MenuItem>
        {profileData && (
        <UserProfileDialog data={profileData} open={dialogOpen} onClose={handleCloseDialog}/>
      )}
        <MenuItem onClick={() => handleUpdatePassword(user)}>
  <LockIcon sx={{ marginRight: 1 }} />
  Update Password
</MenuItem>
        <MenuItem    onClick={() => handleDeleteDialogOpen(user.id)}>
          <DeleteIcon sx={{ marginRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>
       
                        
       
        <a  className="item-edit" onClick={() => handleEditClick(user.id, user.name, user.email)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit font-small-4"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </a>
      </div>
      </td>
      </tr>
    ))}
     </tbody>
      </table>
     </div>
   </div>
   <Dialog open={showEditModal} onClose={handleCloseEditModal}>
  <DialogTitle>Edit User</DialogTitle>
  <DialogContent>
    <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '1rem', marginTop:'1rem'}}
        value={editUserName?.name|| ''}
        onChange={(e) => setEditUserName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '1rem' }}
        value={editUserEmail?.email|| ''}
        onChange={(e) => setEditUserEmail(e.target.value)}
      />
      <TextField
        label="Mobile Number"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '1rem' }}
        value={editUserMobile?.mobile|| ''}
        onChange={(e) => setEditUserMobile(e.target.value)}
      />
      <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
        <InputLabel>Role</InputLabel>
        <Select
          value={editUserRole?.role|| ''}
          onChange={(e) => setEditUserRole(e.target.value)}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
       
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
  <InputLabel>Expiry Date</InputLabel>
  <Flatpickr
   className="flatpickr h-16"
  style={{ border: '1px solid #ccc', width: '100%' ,borderRadius:'4px'}}
            ref={flatpickrRef}
            options={{ dateFormat: 'Y-m-d', enableTime: false }}
            onChange={handleDateChange}
          />
    
 

</FormControl>

    </form>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseEditModal}>Close</Button>
    <Button onClick={handleSaveEdit} variant="contained" color="primary">Save</Button>
  </DialogActions>
</Dialog>

 <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
        
      <DialogTitle className='text-red-500'>Delete User</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this user?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteDialogClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => handleDeleteClick(deleteUserId)} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
    <Dialog open={openSuccessDialog} onClose={handleDeleteDialogClose}>
        <DialogTitle className='text-green-500'>Deletion Successful</DialogTitle>
        <DialogContent>
          <p>User has been successfully deleted.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

        <Dialog open={openPasswordModal} onClose={handlePasswordModalClose}>
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent>
          <TextField
            className='mt-5 '
            label="New Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePasswordModalClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => handleUpdatePasswordConfirm()}color="primary">
            Update Password
          </Button>
        </DialogActions>
      </Dialog>

                          <div className="pagination-container">
          <Pagination
            count={Math.ceil(userListData.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </div>
       <div className=' flex flex-row justify-between mt-10 ml-2'>
       <p className='ml-2 '>COPYRIGHT © 2024 My revesion+, All rights Reserved</p>
        <Button
      onClick={handleScrollToTop}
      style={{
       bottom: '20px',
        right: 0,
        left:0,
        zIndex: 1000,
             }}
      color="primary"
      startIcon={<ScrollUpIcon/>}
    >

    </Button>
    </div>
                        
       </section>
       </CardContent>
     {/* </Card> */}
   </Container>


        </Fragment>
    )
}

export default ListContainer;