import React, { Fragment, useState } from 'react'

import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1'
import StudentAdd from '../component/Dashboard Components/userManage/StudentAdd';

const StudentPage = ({userListData,setUserListData}) => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
  const addStudent = (userListDataAdd) => {
    setUserListData([...userListData, { ...userListDataAdd, id: userListData.length + 1 }]);
  };
  
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   <StudentAdd isSidebarClosed={isSidebarClosed}  addStudent={addStudent} />
       </Fragment>
  )
}

export default StudentPage