import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1';
import ListContainer from '../component/Dashboard Components/userManage/ListContainer';

const AddUserPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
      <ListContainer isSidebarClosed={isSidebarClosed}/>
        
        </Fragment>
    )
}

export default AddUserPage