import React from 'react'
import FormStudent from '../component/Dashboard Components/FormStudent'
import NavSideBar from '../component/Dashboard Components/SideBarComponents/NavSideBar'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import Header from '../component/AdminDashboard/Header'

const FormStudentPage = () => {
  return (
    <div>
        <Header/>
    {/* <NavSideBar/>  */}
    <FormStudent/>
    </div>
  )
}

export default FormStudentPage