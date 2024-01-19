import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Description from '../component/CreateQuestion/Description'
import Navbar1 from '../component/Dashboard Components/Buttons1';

const QuestionDescriptionPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <Description isSidebarClosed={isSidebarClosed}/>
       
    </Fragment>
  )
}

export default QuestionDescriptionPage