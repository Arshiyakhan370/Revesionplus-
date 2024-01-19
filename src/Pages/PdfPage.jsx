import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import Pdf from '../component/CreateQuestion/QuestionDescriptionSection/Pdf';

const PdfPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
        
    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
      return (
          <Fragment>
        <Header toggleSidebar={toggleSidebar}/>
     <Navbar1/>
     <Pdf isSidebarClosed={isSidebarClosed}/>
     
      </Fragment>
    )
  }
  

export default PdfPage