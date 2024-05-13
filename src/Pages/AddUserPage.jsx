import React, { Fragment, useEffect, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1';
import ListContainer from '../component/Dashboard Components/userManage/ListContainer';
import StudentAdd from '../component/Dashboard Components/userManage/StudentAdd';
import axios from 'axios';

const AddUserPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   {/* <StudentAdd isSidebarClosed={isSidebarClosed}  addStudent={addStudent} /> */}

        {/* <ListContainer isSidebarClosed={isSidebarClosed}  /> */}
  
  <ListContainer isSidebarClosed={isSidebarClosed}/>
        </Fragment>
    )
}

export default AddUserPage