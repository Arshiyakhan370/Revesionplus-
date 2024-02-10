import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header'
import Navbar1 from '../component/Dashboard Components/Buttons1';
import ListContainer from '../component/Dashboard Components/userManage/ListContainer';
import StudentAdd from '../component/Dashboard Components/userManage/StudentAdd';

const AddUserPage = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [userListData, setUserListData] = useState([
    {
      name: 'aarabbanisadiq',
      email: 'AArabbanisadiq@hotmail.com',
      role: 'IB Facilitator',
      mobile: '9667989159',
      expiryDate: '2023-10-14',
      id: 310,
    },
    {
        name: 'Dr. Abhay',
        email: 'Abhay.singh91286@gmail.com',
        role: 'IB Facilitator',
        mobile: '',
        expiryDate: '2023-10-14',
        id: 311,
      },
      {
        name: 'Afroz',
        email: 'afroz@ibglobalacademy.org',
        role: 'IB Facilitator',
        mobile: '9818805721',
        expiryDate: '2030-10-31',
        id: 312,
      },
      {
        name: 'Afroz',
        email: 'afroz@ibglobalacademy.org',
        role: 'IB Facilitator',
        mobile: '9818805721',
        expiryDate: '2030-10-31',
        id: 313,
      },
      {
        name: 'Dr. Abhay',
        email: 'Abhay.singh91286@gmail.com',
        role: 'IB Facilitator',
        mobile: '',
        expiryDate: '2023-10-14',
        id: 314,
      },
      {
        name: 'Dr. Abhay',
        email: 'Abhay.singh91286@gmail.com',
        role: 'IB Facilitator',
        mobile: '',
        expiryDate: '2023-10-14',
        id: 315,
      },
      {
        name: 'aarabbanisadiq',
        email: 'AArabbanisadiq@hotmail.com',
        role: 'IB Facilitator',
        mobile: '9667989159',
        expiryDate: '2023-10-14',
        id: 316,
      },
      {
          name: 'Dr. Abhay',
          email: 'Abhay.singh91286@gmail.com',
          role: 'IB Facilitator',
          mobile: '',
          expiryDate: '2023-10-14',
          id: 317,
        },
        {
            name: 'aarabbanisadiq',
            email: 'AArabbanisadiq@hotmail.com',
            role: 'IB Facilitator',
            mobile: '9667989159',
            expiryDate: '2023-10-14',
            id: 318,
          },
          {
              name: 'Dr. Abhay',
              email: 'Abhay.singh91286@gmail.com',
              role: 'IB Facilitator',
              mobile: '',
              expiryDate: '2023-10-14',
              id: 319,
            },
            {
                name: 'aarabbanisadiq',
                email: 'AArabbanisadiq@hotmail.com',
                role: 'IB Facilitator',
                mobile: '9667989159',
                expiryDate: '2023-10-14',
                id: 320,
              },
              {
                  name: 'Dr. Abhay',
                  email: 'Abhay.singh91286@gmail.com',
                  role: 'IB Facilitator',
                  mobile: '',
                  expiryDate: '2023-10-14',
                  id: 321,
                },
  ]);
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
   <StudentAdd isSidebarClosed={isSidebarClosed}  addStudent={addStudent} />
   {userListData && userListData.length > 0 && (
        <ListContainer isSidebarClosed={isSidebarClosed} userListData={userListData} setUserListData={setUserListData} />
  )}
        </Fragment>
    )
}

export default AddUserPage