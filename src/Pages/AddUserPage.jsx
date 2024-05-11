import React, { Fragment, useEffect, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1';
import ListContainer from '../component/Dashboard Components/userManage/ListContainer';
import StudentAdd from '../component/Dashboard Components/userManage/StudentAdd';
import axios from 'axios';

const AddUserPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [userListData, setUserListData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://staging.ibgakiosk.com/api/view_user');
        setUserListData(response?.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }; 

    fetchData();
  }, []);
   
  const addStudent = (userListDataAdd) => {
    setUserListData([...userListData, { ...userListDataAdd, id: userListData.length + 1 }]);
  };
  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
    return (
        <Fragment>
      <Header toggleSidebar={toggleSidebar}/>
   <Navbar1/>
   {/* <StudentAdd isSidebarClosed={isSidebarClosed}  addStudent={addStudent} /> */}
   {userListData && userListData.length > 0 && (
        <ListContainer isSidebarClosed={isSidebarClosed} userListData={userListData} setUserListData={setUserListData} />
  )}
  <ListContainer isSidebarClosed={isSidebarClosed}/>
        </Fragment>
    )
}

export default AddUserPage