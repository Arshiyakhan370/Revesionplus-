import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import Vdeo from '../component/CreateQuestion/QuestionDescriptionSection/Vdeo';

const VdeoPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    
    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
      return (
          <Fragment>
        <Header toggleSidebar={toggleSidebar}/>
     <Navbar1/>
     <Vdeo isSidebarClosed={isSidebarClosed}/>
     
      </Fragment>
    )
  }
  


export default VdeoPage