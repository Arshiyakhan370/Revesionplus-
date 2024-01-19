import React, { Fragment, useState } from 'react'
import TeacherMap from '../component/TeacherMap/TeacherMap'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1'

const TeacherMapPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <TeacherMap isSidebarClosed={isSidebarClosed}/>
        
   </Fragment>
  )
}

export default TeacherMapPage