import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Library from '../component/CreateQuestion/Library'
import Navbar1 from '../component/Dashboard Components/Buttons1';

const LibraryPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <Library isSidebarClosed={isSidebarClosed}/>
       
       
    </Fragment>
  )
}

export default LibraryPage