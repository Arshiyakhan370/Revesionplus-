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
import Questions from '../component/CreateQuestion/Questions'
import QuestionPage from '../Pages/QuestionPage'
import QuestionDescriptionPage from '../Pages/QuestionDescriptionPage'
import LibraryPage from '../Pages/LibraryPage'
import Mcq from '../component/CreateQuestion/QuestionSub/Mcq'
import Drwaing from '../component/CreateQuestion/QuestionSub/Drwaing'
import CreateAssignment from '../component/createAssignment/CreateAssignment'
import StudentDash from '../component/StudentDashboard/StudentDash'
import FilterForm from '../component/createAssignment/FilterForm'
import PracticeQuestion from '../component/PracticeAssignment/SourceAssignment/PracticeQuestion'
import IBPage from '../Pages/IBPage'
import MathsSectionQuestion from '../component/PracticeAssignment/SourceAssignment/MathsSectionQuestion'
import Golink from '../component/PracticeAssignment/Golink.'
import IbDp from '../component/PracticeAssignment/SourceAssignment/IBDP/IbDp'
import IGcse from '../component/PracticeAssignment/IGcse'
import Sat from '../component/PracticeAssignment/Sat'
import Aisl from '../component/PracticeAssignment/SourceAssignment/IBDP/Aisl'
import AislLink from '../component/PracticeAssignment/SourceAssignment/IBDP/AislLink'
import AislLinkGoLink from '../component/PracticeAssignment/SourceAssignment/IBDP/aislLinkGoLink'
import AislQuestionPaper from '../component/PracticeAssignment/AislQuestionPaper'
import AlhlComponent from '../component/PracticeAssignment/alHl/AlhlComponent'
import AaslLink from '../component/PracticeAssignment/AASL/AaslLink';
import PysicsSl from '../component/PracticeAssignment/IbDkPysicsSl/PysicsSl'
import BussinesSl from '../component/PracticeAssignment/IBDPbUSINESS/BussinesSl'
import BussinessHl from '../component/PracticeAssignment/IBDPbUSINESS/BussinessHl'
import ChemistrySl from '../component/PracticeAssignment/IbdpChemistry/ChemistrySl'
import ChemistryHl from '../component/PracticeAssignment/IbdpChemistry/ChemistryHl'
import EconomicSl from '../component/PracticeAssignment/IBeconomic/EconomicSl'
import Paper1Secound from '../component/PracticeAssignment/SourceAssignment/IBDP/Paper1Secound'
import Paper1MarthscoreLink from '../component/PracticeAssignment/SourceAssignment/IBDP/paper1MarthscoreLink'
import Hase2Mathematics from '../component/PracticeAssignment/SourceAssignment/IBDP/Hase2Mathematics'
import HaseMathsPpaper1 from '../component/PracticeAssignment/SourceAssignment/IBDP/HaseMathsPpaper1'
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
import TextPage from '../Pages/TextPage'
import AccordionPage from '../Pages/AccordionPage'
import ImagePage from '../Pages/ImagePage'
import PdfPage from '../Pages/PdfPage'
import VdeoPage from '../Pages/VdeoPage'
import AudioPage from '../Pages/AudioPage'
import SimulationPage from '../Pages/SimulationPage'
import McqPage from '../Pages/McqPage'
import DrwaingPage from '../Pages/DrwaingPage'
import FilterFormAndQuestion from '../Pages/FilterFormAndQuestion'
import ProfileFormPage from '../Pages/ProfileFormPage'
import AssignmentCreate from '../component/StudentDashboard/AssignmentCreate'
import IBMYPComponent from '../component/PracticeAssignment/SourceAssignment/IBMYP/IBMYP'
import AddCategory from '../component/createAssignment/AddCategory'
import AddCategoryPage from '../Pages/AddCategoryPage'
import TableComponent from '../component/Dashboard Components/TableComponent'




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
          <Route path='/text' element={<TextPage/>} /> 
          <Route path='/question' element={<QuestionPage/>} />
          <Route path='/description' element={<QuestionDescriptionPage/>}/>
          <Route path='/according' element={<AccordionPage/>} />
          <Route path='/image' element={<ImagePage/>} />
          <Route path='/pdf' element={<PdfPage/>} />
          <Route path='/vdo' element={<VdeoPage/>} />
          <Route path='/audio' element={<AudioPage/>} />
          <Route path='/simulation' element={<SimulationPage/>} />
          <Route path='/mcq' element={<McqPage/>} />
          <Route path='/drwing' element={<DrwaingPage/>} />
          <Route path='/dashboar-Student' element={<StudentDash/>} />
          <Route path='/create-filter' element={<FilterFormAndQuestion/>} />
          <Route path="/practiceQuestion" element={<PracticeQuestion/>}/>
          <Route path='/ibmyb' element={<IBMYPComponent/>}/>
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
<Route path='/profile' element={<ProfileFormPage/>}/>
<Route path='/Student-Create-assignment' element={<AssignmentCreate/>}/>
<Route path='/Add-category' element={<AddCategoryPage/>}/>
<Route path='/Add' element={<TableComponent/>}/>
                  </Routes>
    </Suspense>
  )
}

export default Routing