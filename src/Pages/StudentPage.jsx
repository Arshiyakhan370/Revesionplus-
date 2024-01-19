import React, { Fragment, useState } from 'react'

import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1'
import StudentAdd from '../component/Dashboard Components/userManage/StudentAdd';

const StudentPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <StudentAdd isSidebarClosed={isSidebarClosed}/>
       </Fragment>
  )
}

export default StudentPage