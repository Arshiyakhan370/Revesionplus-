import React, { useState } from 'react'
import { Fragment } from 'react';
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import Mcq from '../component/CreateQuestion/QuestionSub/Mcq';

const McqPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
        
    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
      return (
          <Fragment>
        <Header toggleSidebar={toggleSidebar}/>
     <Navbar1/>
     <Mcq isSidebarClosed={isSidebarClosed}/>
     
      </Fragment>
    )
  }
  

export default McqPage