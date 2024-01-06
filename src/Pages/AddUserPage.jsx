import React, { Fragment } from 'react'
import FormAddUser from '../component/Dashboard Components/FormAddUser'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import NavSideBar from '../component/Dashboard Components/SideBarComponents/NavSideBar'
import ListContainer from '../component/Dashboard Components/ListContainer'
import Header from '../component/AdminDashboard/Header'

const AddUserPage = () => {
    return (
        <Fragment>
      <Header/>
      {/* <NavSideBar/> */}
      <ListContainer/>
        
        </Fragment>
    )
}

export default AddUserPage