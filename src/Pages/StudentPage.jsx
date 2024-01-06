import React from 'react'
import StudentAdd from '../component/Dashboard Components/StudentAdd'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import NavSideBar from '../component/Dashboard Components/SideBarComponents/NavSideBar'
import Header from '../component/AdminDashboard/Header'

const StudentPage = () => {
  return (
    <div>
    <Header/>
    {/* <NavSideBar/> */}
        <StudentAdd/>
    </div>
  )
}

export default StudentPage