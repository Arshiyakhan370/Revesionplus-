import React from 'react'
import NavSideBar from '../component/Dashboard Components/SideBarComponents/NavSideBar'
// import CreateQuestion from '../component/CreateQuestion.jsx/CreateQuestion'
import Sidebar from '../component/Dashboard Components/SideBarComponents/Sidebar'
import CreateQuestion from '../component/CreateQuestion/CreateQuestion'
import Header from '../component/AdminDashboard/Header'

const CreateQuestionPage = () => {
  return (
    <div>
    <Header/>
        {/* <NavSideBar/> */}
        <CreateQuestion   />
    </div>
  )
}

export default CreateQuestionPage