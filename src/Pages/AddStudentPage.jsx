import React, { useState } from 'react'

import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1'
import { Fragment } from 'react'
import FormAddUser from '../component/Dashboard Components/userManage/FormAddUser'

const AddStudentPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <FormAddUser isSidebarClosed={isSidebarClosed}/>
 </Fragment>
      
   
  )
}

export default AddStudentPage