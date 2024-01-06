import React from 'react'
import FormAddUser from '../component/Dashboard Components/FormAddUser'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import NavSideBar from '../component/Dashboard Components/SideBarComponents/NavSideBar'
import Header from '../component/AdminDashboard/Header'

const AddStudentPage = () => {
  return (
    <div>
      <Header/>
      {/* <NavSideBar/> */}
      <FormAddUser/>  
    </div>
  )
}

export default AddStudentPage