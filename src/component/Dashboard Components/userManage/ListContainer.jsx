import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  Card,
  CardHeader,
 
  CardContent,
  FormControl,
  InputLabel,
  Select,
  Input,
  Grid,
  Typography,
} from '@mui/material';


import { Table, Button,  Pagination,Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {  Form,Modal} from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ListContainer.css';
import Header from '../../AdminDashboard/Header';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
const ListContainer = ({ isSidebarClosed }) => {
  const [selectedValue, setSelectedValue] = useState(10);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(selectedValue);
  const [userListData, setUserListData] = useState([
    {
      name: 'aarabbanisadiq',
      email: 'AArabbanisadiq@hotmail.com',
      role: 'IB Facilitator',
      mobile: '9667989159',
      expiryDate: '2023-10-14',
      id: 310,
    },
    {
        name: 'Dr. Abhay',
        email: 'Abhay.singh91286@gmail.com',
        role: 'IB Facilitator',
        mobile: '',
        expiryDate: '2023-10-14',
        id: 311,
      },
      {
        name: 'Afroz',
        email: 'afroz@ibglobalacademy.org',
        role: 'IB Facilitator',
        mobile: '9818805721',
        expiryDate: '2030-10-31',
        id: 312,
      },
      {
        name: 'Afroz',
        email: 'afroz@ibglobalacademy.org',
        role: 'IB Facilitator',
        mobile: '9818805721',
        expiryDate: '2030-10-31',
        id: 313,
      },
      {
        name: 'Dr. Abhay',
        email: 'Abhay.singh91286@gmail.com',
        role: 'IB Facilitator',
        mobile: '',
        expiryDate: '2023-10-14',
        id: 314,
      },
      {
        name: 'Dr. Abhay',
        email: 'Abhay.singh91286@gmail.com',
        role: 'IB Facilitator',
        mobile: '',
        expiryDate: '2023-10-14',
        id: 315,
      },
      {
        name: 'aarabbanisadiq',
        email: 'AArabbanisadiq@hotmail.com',
        role: 'IB Facilitator',
        mobile: '9667989159',
        expiryDate: '2023-10-14',
        id: 316,
      },
      {
          name: 'Dr. Abhay',
          email: 'Abhay.singh91286@gmail.com',
          role: 'IB Facilitator',
          mobile: '',
          expiryDate: '2023-10-14',
          id: 317,
        },
        {
            name: 'aarabbanisadiq',
            email: 'AArabbanisadiq@hotmail.com',
            role: 'IB Facilitator',
            mobile: '9667989159',
            expiryDate: '2023-10-14',
            id: 318,
          },
          {
              name: 'Dr. Abhay',
              email: 'Abhay.singh91286@gmail.com',
              role: 'IB Facilitator',
              mobile: '',
              expiryDate: '2023-10-14',
              id: 319,
            },
            {
                name: 'aarabbanisadiq',
                email: 'AArabbanisadiq@hotmail.com',
                role: 'IB Facilitator',
                mobile: '9667989159',
                expiryDate: '2023-10-14',
                id: 320,
              },
              {
                  name: 'Dr. Abhay',
                  email: 'Abhay.singh91286@gmail.com',
                  role: 'IB Facilitator',
                  mobile: '',
                  expiryDate: '2023-10-14',
                  id: 321,
                },
  ]);
 

  const [showEditModal, setShowEditModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState('');
  const [editUserEmail, setEditUserEmail] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectChange = (e) => {
    setSelectedValue(parseInt(e.target.value, 10));
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(1); 
  };

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); 
  };
  const handleProfileClick = (userId) => {
        console.log(`View profile for user ${userId}`);
      };
    
      const handleUpdatePasswordClick = (userId) => {
        console.log(`Update password for user ${userId}`);
      };
     
      const handleUpdatePassword = () => {
        setOpenPasswordModal(true);
        handleClose();
      };
    
      const handleUpdatePasswordConfirm = () => {
       
        handleUpdatePasswordClick(newPassword);
        setOpenPasswordModal(false);
      };
    
      const handlePasswordModalClose = () => {
        setOpenPasswordModal(false);
      };
      const handleDeleteClick = async (userId) => {
      try {
        const result = await Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this user!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!',
        });
    
        if (result.isConfirmed) {
          const updatedUserList = userListData.filter((user) => user.id !== userId);
          setUserListData(updatedUserList);
          Swal.fire('Deleted!', 'User has been deleted.', 'success');
        }
      } catch (error) {
        console.error('Error during delete operation:', error);
      }
    };
    
  const handleEditClick = (userId, userName, userEmail) => {
    setEditUserId(userId);
    setEditUserName(userName);
    setEditUserEmail(userEmail);
    setShowEditModal(true);
  };
  
  const handleSaveEdit = () => {
    const updatedUserList = userListData.map((user) =>
      user.id === editUserId ? { ...user, name: editUserName, email: editUserEmail } : user
    );
    setUserListData(updatedUserList);
    setShowEditModal(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

    

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
   
    const styles = {
      width: isSidebarClosed ?  (isSmallScreen ? '100%' : '95%') : (isSmallScreen ? '100%' : '79%'),
      marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '5%') : (isSmallScreen ? '0%' : '21%'),
      transition: 'width 0.3s, margin-left 0.3s',
    };
    return (
        <Fragment>
          
        <Container maxWidth="xl">
      <Card style={styles}>
      <CardContent>
      <section id="responsive-datatable">
        <div className="card-header border-bottom  flex flex-grow-0 justify-between">
                  <h4 className="card-title text-black font-400 ">User List</h4>
                  <Link
                    to="/student-add"
                    className="btn btn-round btn-gradient-primary float-end "
                  >
                    Add User
                  </Link>
                </div>
               
                <div className="card-datatable">
                  <div
                    id="datatable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                    <div className="row">
  <div className="col-sm-12 col-md-6">
    <div className=" pt-4 pb-4 lg:flex lg:flex-row lg:justify-between sm: flex-col sm:gap-4 "  >
      <div className="dataTables_length" id="datatable_length float-left">
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
      <div id="datatable_filter" className="dataTables_filter ms-3 float-right ">
        <label>Search:</label>
        <input
          type="search"
          className="form-control"
          placeholder=""
          aria-controls="datatable"
        />
      </div>
    </div>
  </div>
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
                                style={{ width: '285px' }}
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
                                style={{ width: '241px' }}
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
    <td className="dtr-control" tabIndex="0">
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
    <td>{user.expiryDate}</td>
  
    )}
    <td>
                                <div className="d-inline-flex">
                                {/* <UserActionsMenu/> */}
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
        <MenuItem onClick={() => { handleProfileClick(); handleClose(); }}>
          <LockIcon sx={{ marginRight: 1 }} />
          Profile
        </MenuItem>
        <MenuItem  onClick={handleUpdatePassword}>
          <LockIcon sx={{ marginRight: 1 }} />
          Update Password
        </MenuItem>
        <MenuItem  onClick={() => handleDeleteClick(user.id)}>
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
                          
                          <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="editFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={editUserName}
                  onChange={(e) => setEditUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="editFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={editUserEmail}
                  onChange={(e) => setEditUserEmail(e.target.value)}
                />
              </Form.Group>

            

              <Button variant="outline" sx={{  background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',color:'white'}} onClick={handleSaveEdit}>
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>


        <Dialog open={openPasswordModal} onClose={handlePasswordModalClose}>
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent >
          <TextField
          className='mt-5 '
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePasswordModalClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdatePasswordConfirm} color="primary">
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
        color:'white',
        background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)',
      }}
      color="primary"
      startIcon={<KeyboardArrowUpIcon />}
    >
     Top
    </Button>
    </div>
                        
       </section>
       </CardContent>
     </Card>
   </Container>


        </Fragment>
    )
}

export default ListContainer;