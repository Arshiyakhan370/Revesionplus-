import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '../Pages/AuthPage'
import DashboardPage from '../Pages/DashboardPage'
import AddUserPage from '../Pages/AddUserPage'
import StudentPage from '../Pages/StudentPage'
import TeacherMapPage from '../Pages/TeacherMapPage'
import FormStudentPage from '../Pages/FormStudentPage'
import AddStudentPage from '../Pages/AddStudentPage'
import SweetAlert from '../component/TeacherMap/SweetAlert'
import CreateQuestionPage from '../Pages/CreateQuestionPage'

import Header from '../component/AdminDashboard/Header'
import Questions from '../component/CreateQuestion/Questions'
import QuestionPage from '../Pages/QuestionPage'
import QuestionDescriptionPage from '../Pages/QuestionDescriptionPage'
import LibraryPage from '../Pages/LibraryPage'
import Text from '../component/CreateQuestion/Text'
import According from '../component/CreateQuestion/According'
import Image from '../component/CreateQuestion/Image'
import Pdf from '../component/CreateQuestion/Pdf'
import Vdeo from '../component/CreateQuestion/Vdeo'
import Audio from '../component/CreateQuestion/Audio'
import SimulationComponent from '../component/CreateQuestion/Simulation'
import Mcq from '../component/CreateQuestion/QuestionSub/Mcq'
import Drwaing from '../component/CreateQuestion/QuestionSub/Drwaing'

import CreateAssignment from '../component/Dashboard Components/createAssignment/CreateAssignment'
import StudentDash from '../component/StudentDashboard/StudentDash'
import FilterForm from '../component/Dashboard Components/createAssignment/FilterForm'

const Routing = () => {
  return (
   
    <Suspense fallback={<div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>}>
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/create-Assigment' element={<CreateAssignment/>} />
          <Route path='/admin' element={<AddUserPage />} />  
          <Route path='/student-add' element={<StudentPage />} />  
          <Route path='/teacher' element={<TeacherMapPage />} /> 
          <Route path='/add-user' element={<FormStudentPage />} /> 
          <Route path='/add-user-show' element={< AddStudentPage />} /> 
          <Route path='/alert' element={<SweetAlert />} /> 
          <Route path='/createquestion' element={<CreateQuestionPage/>} /> 
       <Route path='/library' element={<LibraryPage/>}/>
          <Route path='/text' element={<Text/>} /> 
          <Route path='/question' element={<QuestionPage/>} />
          <Route path='/description' element={<QuestionDescriptionPage/>}/>
          <Route path='/according' element={<According/>} />
          <Route path='/image' element={<Image/>} />
          <Route path='/pdf' element={<Pdf/>} />
          <Route path='/vdo' element={<Vdeo/>} />
          <Route path='/audio' element={<Audio/>} />
          <Route path='/simulation' element={<SimulationComponent/>} />
          <Route path='/mcq' element={<Mcq/>} />
          <Route path='/drwing' element={<Drwaing/>} />
          <Route path='/dashboar-Student' element={<StudentDash/>} />
          <Route path='/create-filter' element={<FilterForm/>} />
        </Routes>
      </Suspense>
  )
}

export default Routing