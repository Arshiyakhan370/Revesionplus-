import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Questions from '../component/CreateQuestion/Questions'
import Navbar1 from '../component/Dashboard Components/Buttons1';

const QuestionPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <Questions isSidebarClosed={isSidebarClosed}/>
   
    </Fragment>
  )
}

export default QuestionPage