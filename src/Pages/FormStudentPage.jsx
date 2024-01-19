import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1'
import FormStudent from '../component/Dashboard Components/userManage/FormStudent';


const FormStudentPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <FormStudent isSidebarClosed={isSidebarClosed}/>
  
    </Fragment>
  )
}

export default FormStudentPage