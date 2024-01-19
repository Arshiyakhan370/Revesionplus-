import React, { Fragment, useState } from 'react'
import CreateQuestion from '../component/CreateQuestion/CreateQuestion'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1';

const CreateQuestionPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
      <CreateQuestion   isSidebarClosed={isSidebarClosed}/>
      
    </Fragment>
  )
}

export default CreateQuestionPage