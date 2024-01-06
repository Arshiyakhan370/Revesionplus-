import React from 'react'
import TeacherMap from '../component/TeacherMap/TeacherMap'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import NavSideBar from '../component/Dashboard Components/SideBarComponents/NavSideBar'
import Header from '../component/AdminDashboard/Header'

const TeacherMapPage = () => {
  return (
    <div>
        <Header/>
    {/* <NavSideBar/> */}
        <TeacherMap/>
    </div>
  )
}

export default TeacherMapPage