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
import Text from '../component/CreateQuestion/QuestionDescriptionSection/Text'
import According from '../component/CreateQuestion/QuestionDescriptionSection/According'
import Image from '../component/CreateQuestion/QuestionDescriptionSection/Image'
import Pdf from '../component/CreateQuestion/QuestionDescriptionSection/Pdf'
import Vdeo from '../component/CreateQuestion/QuestionDescriptionSection/Vdeo'
import Audio from '../component/CreateQuestion/QuestionDescriptionSection/Audio'
import SimulationComponent from '../component/CreateQuestion/QuestionDescriptionSection/Simulation'
import Mcq from '../component/CreateQuestion/QuestionSub/Mcq'
import Drwaing from '../component/CreateQuestion/QuestionSub/Drwaing'

import CreateAssignment from '../component/Dashboard Components/createAssignment/CreateAssignment'
import StudentDash from '../component/StudentDashboard/StudentDash'
import FilterForm from '../component/Dashboard Components/createAssignment/FilterForm'
import PracticeQuestion from '../component/PracticeAssignment/PracticeQuestion'
import SubjectList from '../component/PracticeAssignment/IBMYP'
import MathsStandard from '../component/PracticeAssignment/MathsStandard'
import IBPage from '../Pages/IBPage'
import MathsSectionQuestion from '../component/PracticeAssignment/MathsSectionQuestion'
import Golink from '../component/PracticeAssignment/Golink.'
import IbDp from '../component/PracticeAssignment/IbDp'
import IGcse from '../component/PracticeAssignment/IGcse'
import Sat from '../component/PracticeAssignment/Sat'
import Aisl from '../component/PracticeAssignment/Aisl'
import AislLink from '../component/PracticeAssignment/AislLink'
import AislLinkGoLink from '../component/PracticeAssignment/aislLinkGoLink'
import AislQuestionPaper from '../component/PracticeAssignment/AislQuestionPaper'
import AlhlComponent from '../component/PracticeAssignment/alHl/AlhlComponent'
import AaslLink from '../component/PracticeAssignment/AASL/AaslLink';
import PysicsSl from '../component/PracticeAssignment/IbDkPysicsSl/PysicsSl'
import BussinesSl from '../component/PracticeAssignment/IBDPbUSINESS/BussinesSl'
import BussinessHl from '../component/PracticeAssignment/IBDPbUSINESS/BussinessHl'
import ChemistrySl from '../component/PracticeAssignment/IbdpChemistry/ChemistrySl'
import ChemistryHl from '../component/PracticeAssignment/IbdpChemistry/ChemistryHl'
import EconomicSl from '../component/PracticeAssignment/IBeconomic/EconomicSl'
import Paper1Secound from '../component/PracticeAssignment/Paper1Secound'
import Paper1MarthscoreLink from '../component/PracticeAssignment/paper1MarthscoreLink'
import SlEconomic from '../component/PracticeAssignment/IBeconomic/SlEconomic'
import Hase2Mathematics from '../component/PracticeAssignment/Hase2Mathematics'
import HaseMathsPpaper1 from '../component/PracticeAssignment/HaseMathsPpaper1'
import HaseMathematicsAlhl from '../component/PracticeAssignment/alHl/HaseMathematicsAlhl'
import Hase2AlhlPaper2 from '../component/PracticeAssignment/alHl/Hase2AlhlPaper2'
import PhysicsPaper from '../component/PracticeAssignment/IbDkPysicsSl/PhysicsPaper'
import Paper1 from '../component/PracticeAssignment/IbDkPysicsSl/Paper1'
import Oxford from '../component/PracticeAssignment/IbDkPysicsSl/Oxford'
import OxfordPaper1 from '../component/PracticeAssignment/IbDkPysicsSl/OxfordPaper1'
import BussSlPaper from '../component/PracticeAssignment/IBDPbUSINESS/BussSlPaper'
import BussPaper1and2 from '../component/PracticeAssignment/IBDPbUSINESS/BussPaper1and2'
import ChemistryCombridge from '../component/PracticeAssignment/IbdpChemistry/ChemistryCombridge'
import ChemistrayPperLink from '../component/PracticeAssignment/IbdpChemistry/ChemistrayPperLink'
import ChemistryOxford from '../component/PracticeAssignment/IbdpChemistry/ChemistryOxford'
import ChemistryPerson from '../component/PracticeAssignment/IbdpChemistry/ChemistryPerson'
import ChemOxfordPaper from '../component/PracticeAssignment/IbdpChemistry/ChemOxfordPaper'
import EconomicSlPaper from '../component/PracticeAssignment/IBeconomic/EconomicSlPaper'
import EconimicPpaer2 from '../component/PracticeAssignment/IBeconomic/EconimicPpaer2'
import OxfordEconimic from '../component/PracticeAssignment/IBeconomic/OxfordEconimic'
import EconimicBlink from '../component/PracticeAssignment/IBeconomic/EconimicBlink'
import TeacherDashboard from '../component/TeacherDashboard/TeacherDashboard'
import OnlineClasses from '../component/TeacherDashboard/OnlineClasses'
import ScheduleContainer from '../component/TeacherDashboard/ScheduleContainer'
import PastClass from '../component/TeacherDashboard/PastClass'
import Navbar1 from '../component/Dashboard Components/Buttons1'




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
          <Route path="/practiceQuestion" element={<PracticeQuestion/>}/>
          <Route path='/ibmyb' element={<SubjectList/>}/>
          <Route path='/maths-standard' element={<IBPage/>}/>
          <Route path='/maths-question' element={<MathsSectionQuestion/>}/>
          <Route path='/go-link' element={<Golink/>}/>
          <Route path='/ibdp' element={<IbDp/>}/>
          <Route path='/igcse' element={<IGcse/>}/>
          <Route path='/sat' element={<Sat/>}/>
          <Route path='/aisl' element={<Aisl/>}/>
          <Route path='/aislLink' element={<AislLink/>}/>
          <Route path='/aisl-paper-go-link' element={<AislLinkGoLink/>}/>
          <Route path='/aisl-Header-go-link' element={<AislQuestionPaper/>}/>
          <Route path='/aihl' element={<AlhlComponent/>}/>
          <Route path='/aasl' element={<AaslLink/>}/>
          <Route path='/Pysics' element={<PysicsSl/>}/>
          <Route path='/Businees-sl' element={<BussinesSl/>}/>
          <Route path='/Businees-hl' element={<BussinessHl/>}/>
          <Route path='/Chemistry-sl' element={<ChemistrySl/>}/>
          <Route path='/Chemistry-hl' element={<ChemistryHl/>}/>
          <Route path='/eco-sl' element={<EconomicSl/>}/>
          <Route path='/core-paper1' element={<Paper1Secound/>}/>
          <Route path='/maths-core-paper1' element={<Paper1MarthscoreLink/>}/>
          <Route path='/hase2-maths-paper1' element={<Hase2Mathematics/>}/>
          <Route path='/hase2-maths-paper1-link' element={<HaseMathsPpaper1/>}/>
          <Route path='/hase2-maths-paper2-link' element={<HaseMathematicsAlhl/>}/>
          <Route path='/hase2-maths-paper2-alhl2' element={<Hase2AlhlPaper2/>}/>
          <Route path='/pysics-paper' element={<PhysicsPaper/>}/>
          <Route path='/pysics-paper1' element={<Paper1/>}/>
          <Route path='/Oxford-paper1' element={<Oxford/>}/>
          <Route path='/Oxford-paper' element={<OxfordPaper1/>}/>
          <Route path='/busniess-paper' element={<BussSlPaper/>}/>
          <Route path='/busniess1-paper1and2' element={<BussPaper1and2/>}/>
          <Route path='/chemistry-cam-paper1' element={<ChemistryCombridge/>}/>
          <Route path='/chemistry-paper1' element={<ChemistrayPperLink/>}/>
          <Route path='/chemistry-oxford-paper1' element={<ChemistryOxford/>}/>
          <Route path='/chemistry-oxford-paper1-link' element={<ChemistrayPperLink/>}/>
          <Route path='/chemistry-person' element={<ChemistryPerson/>}/>
          <Route path='/chemistry-person-paper' element={<ChemOxfordPaper/>}/>
          <Route path='/Economic-paper-sl' element={<EconomicSlPaper/>}/>
          <Route path='/Economic-paper2' element={<EconimicPpaer2/>}/>
          <Route path='/Economic-paper2' element={<EconimicPpaer2/>}/>
          <Route path='/Economic-Blink-paper2' element={<OxfordEconimic/>}/>
          <Route path='/Economic-Blink-paper-link' element={<EconimicBlink/>}/>
          <Route path='/TeacherDashboard' element={<TeacherDashboard/>}/>
          <Route path='/Online-classes' element={<OnlineClasses/>}/>
          <Route path='/schdule-box' element={<ScheduleContainer/>}/>
          <Route path='/past-class' element={<PastClass/>}/>
          <Route path='/nav1' element={<Navbar1/>}/>

                  </Routes>
      </Suspense>
  )
}

export default Routing