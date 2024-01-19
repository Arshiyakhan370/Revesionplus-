import React, { useState } from 'react';
import {Typography, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, TextField, Card } from '@mui/material';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import SweetAlert from './SweetAlert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive';




const TeacherMap = ({isSidebarClosed }) => {
  const [teacherData, setTeacherData] = useState([
   
    { id: 2, name: 'xyz', board: '', subject: '' },
    { id: 3, name: 'xyz', board: '', subject: '' },
    { id: 3, name: 'xyz', board: '', subject: '' },
      { id: 4, name:"Mr. Shankar Jha", board: '', subject: '' },
      { id: 5, name:"Mr. S. Singh", board: '', subject: '' },
      { id: 6, name:"Mr Rahul Khewadia", board: '', subject: '' },
      { id: 7, name:"Mr Sanjay Singh", board: '', subject: '' },
      { id: 8, name:"xyz", board: '', subject: '' },
      { id: 9, name:"xyz", board: '', subject: '' },
      { id: 10, name:"xyz", board: '', subject: '' },
      { id: 11, name:"Mr. Harish Singh", board: '', subject: '' },
      { id: 12, name:"Mr Azam Khan", board: '', subject: '' },
      { id: 13, name:"Mr. Jay Prakash", board: '', subject: '' },
      { id: 14, name:"Mr Shahbaz Shirazi", board: '', subject: '' },
      { id: 15, name:"Mr. Quyamuddin", board: '', subject: '' },
      { id:16 , name:"Anjali Rathi", board: '', subject: '' },
      { id: 17, name:"Uggarsain Bhardwaj", board: '', subject: '' },
      { id:18, name:"xyz", board: '', subject: '' },
      { id:19, name:"Sarita Mittal", board: '', subject: '' },
      { id: 20, name:"Moin Ahmed", board: '', subject: '' },
      { id: 21, name:"Priyanka", board: '', subject: '' },
      { id: 22, name:"Mrs. Sandhya Singh", board: '', subject: '' },
      { id:23 , name:"Mr. Hari Shankar Kumar", board: '', subject: '' },
      { id:24 , name:"Musabani", board: '', subject: '' },
      { id:25 , name:"Mohd Sagheer Ahmad", board: '', subject: '' },
      { id: 26, name:"xyz", board: '', subject: '' },
      { id:27 , name:"Dr Palash Chakraborty", board: '', subject: '' },
      { id:28 , name:"Saksham Kaushik", board: '', subject: '' },
      { id: 29, name:"Shiv Batra", board: '', subject: '' },
       { id: 30, name:"Shiv Batra-Student", board: '', subject: '' },
      { id:31 , name:"Jasleen Singh Gill", board: '', subject: '' },
      { id: 32, name:"Muhammad Akram", board: '', subject: '' },
      { id:33 , name:"Sarfraz Javed", board: '', subject: '' },
      { id:34 , name:"Manoj Kumar", board: '', subject: '' },
      { id:35, name:"Pankaj Kumar sharma", board: '', subject: '' },
      { id: 36, name:"Shahid Javed", board: '', subject: '' },
      { id: 37, name:"Test Teacher", board: '', subject: '' },
      { id: 39, name:"Swati Dudhani", board: '', subject: '' },
      { id: 38, name:"Andeep Kaur", board: '', subject: '' },
      { id:40 , name:"INDRANI SINHA", board: '', subject: '' },
      { id: 41, name:"  MINAKSHI GROVER", board: '', subject: '' },
      { id: 42, name:"ZIA RAZAQUI", board: '', subject: '' },
      { id: 43, name:"NAINA VAISH", board: '', subject: '' },
  ])
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [page, setPage] = useState(1);
  const teachersPerPage = 5;

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
       
        setTeacherData((prevData) => prevData.filter((teacher) => teacher.id !== id));
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * teachersPerPage;
  const endIndex = startIndex + teachersPerPage;
  const handleSaveEdit = () => {
    setTeacherData((prevData) =>
      prevData.map((teacher) => (teacher.id === selectedTeacher.id ? { ...teacher, ...selectedTeacher } : teacher))
    );
    setSelectedTeacher(null);
  };
const handleClose=()=>{

}
const styles = {
  width: isSidebarClosed ?  (isSmallScreen ? '100%' : '94%') : (isSmallScreen ? '100%' : '79%'),
  marginLeft: isSidebarClosed ? (isSmallScreen ? '0%' : '6%') : (isSmallScreen ? '0%' : '21%'),
  transition: 'width 0.3s, margin-left 0.3s',
};
  return (
    <div className="content-wrapper container-xxl p-0">
      <div className="content-body">
        <Card style={styles}>
          <div className="row2">
            <div className="col-md-12 col-12">
              <Paper elevation={3} className="p-2">
                <SweetAlert />
              </Paper>
            </div>

            <div className="col-12">
              <Paper elevation={3} className="p-2">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Teacher Name</TableCell>
                        {window.innerWidth > 1024 && (
                        <TableCell>Board Name</TableCell>)}
                        {window.innerWidth > 1024 && (
                        <TableCell>Subject Name</TableCell>)}
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {teacherData.slice(startIndex, endIndex).map((teacher, index) => (
                        <TableRow key={teacher.id} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'inherit' }}>
                          <TableCell>{teacher.name}</TableCell>
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.board}</TableCell>)}
                          {window.innerWidth > 1024 && (
                          <TableCell>{teacher.subject}</TableCell>)}
                          <TableCell>
                            <Link to=""
                className="item-trash text-danger circle"
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Delete"
                onClick={() => handleDelete(teacher.id)}
                style={{
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    border: '1px solid #9ba4a4',
    padding: '5px 5px 5px 5px',
    fontSize: '16px',
    background: 'rgb(244 237 201)',
}}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </Link>
              &nbsp;&nbsp;
              <Link
                to=''
           className="item-edit text-info circle " 
                style={{
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    border: '1px solid #9ba4a4',
    padding: '5px 5px 5px 5px',
    fontSize: '16px',
    background: 'rgb(244 237 201)',
}}
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Edit"
                onClick={() => handleEdit(teacher)}>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
         
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Stack spacing={2} justifyContent="center" className="mt-3">
                  <Pagination count={Math.ceil(teacherData.length / teachersPerPage)} page={page} onChange={handleChangePage} />
                </Stack>
              </Paper>
            </div>
            </div>
        </Card>
      </div>
      <Modal open={!!selectedTeacher} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          gap:'10px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" mb={2}>
          Edit Teacher
        </Typography>
        <TextField
          label="Name"
          className='mt-4 mb-4 ml-10 mr-10'
          value={selectedTeacher?.name || ''}
          onChange={(e) => setSelectedTeacher((prev) => ({ ...prev, name: e.target.value }))}
        />
        <TextField
          label="Board"
          className='mt-4 mb-4 ml-10 mr-10'
          value={selectedTeacher?.board || ''}
          onChange={(e) => setSelectedTeacher((prev) => ({ ...prev, board: e.target.value }))}
        />
        <TextField
          className='mt-4 mb-4 ml-10 mr-10'
          label="Subject"
          value={selectedTeacher?.subject || ''}
          onChange={(e) => setSelectedTeacher((prev) => ({ ...prev, subject: e.target.value }))}
        />
        <Box mt={2}>
          <Button variant="contained" onClick={handleSaveEdit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
    </div>
  );
};

export default TeacherMap;
