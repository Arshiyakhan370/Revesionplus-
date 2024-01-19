import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import DrawingApp from '../component/CreateQuestion/QuestionSub/Drwaing';

const DrwaingPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
        
    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
      return (
          <Fragment>
        <Header toggleSidebar={toggleSidebar}/>
     <Navbar1/>
     <DrawingApp isSidebarClosed={isSidebarClosed}/>
     
      </Fragment>
    )
  }
  

export default DrwaingPage