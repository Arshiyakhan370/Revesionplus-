import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Help from '../component/CreateQuestion/DispalyData/Help';
import Previwe from '../component/CreateQuestion/DispalyData/Previwe';
import SendComponent from '../component/CreateQuestion/DispalyData/SendComponent';
import Assess from '../component/CreateQuestion/DispalyData/Assess';
import MypSection from '../Pages/MypSectionpage';
import MypSectionpage from '../Pages/MypSectionpage';
// import Previwe from '../component/CreateQuestion/DispalyData/Previwe';



const Routing = () => {
const AuthPage = lazy(() => import('../Pages/AuthPage'));
const DashboardPage = lazy(() => import('../Pages/DashboardPage'));
const AddUserPage = lazy(() => import('../Pages/AddUserPage'));
const StudentPage = lazy(() => import('../Pages/StudentPage'));
const TeacherMapPage = lazy(() => import('../Pages/TeacherMapPage'));
const FormStudentPage = lazy(() => import('../Pages/FormStudentPage'));
const AddStudentPage = lazy(() => import('../Pages/AddStudentPage'));
const SweetAlert = lazy(() => import('../component/TeacherMap/SweetAlert'));
const CreateQuestionPage = lazy(() => import('../Pages/CreateQuestionPage'));
const Questions = lazy(() => import('../component/CreateQuestion/Questions'));
const QuestionPage = lazy(() => import('../Pages/QuestionPage'));
const QuestionDescriptionPage = lazy(() => import('../Pages/QuestionDescriptionPage'));
const LibraryPage = lazy(() => import('../Pages/LibraryPage'));
const Mcq = lazy(() => import('../component/CreateQuestion/QuestionSub/Mcq'));
const Drwaing = lazy(() => import('../component/CreateQuestion/QuestionSub/Drwaing'));
const CreateAssignment = lazy(() => import('../component/createAssignment/CreateAssignment'));
const StudentDash = lazy(() => import('../component/StudentDashboard/StudentDash'));
const FilterForm = lazy(() => import('../component/createAssignment/FilterForm'));
const PracticeQuestion = lazy(() => import('../component/PracticeAssignment/SourceAssignment/PracticeQuestion'));
const IBPage = lazy(() => import('../Pages/IBPage'));
const MathsSectionQuestion = lazy(() => import('../component/PracticeAssignment/SourceAssignment/MathsSectionQuestion'));
const Golink = lazy(() => import('../component/PracticeAssignment/Golink.'));
const IbDp = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/IbDp'));
const IGcse = lazy(() => import('../component/PracticeAssignment/IGcse'));
const Sat = lazy(() => import('../component/PracticeAssignment/Sat'));
const Aisl = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/Aisl'));
const AislLink = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/AislLink'));
const AislLinkGoLink = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/aislLinkGoLink'));
const AislQuestionPaper = lazy(() => import('../component/PracticeAssignment/AislQuestionPaper'));
const AlhlComponent = lazy(() => import('../component/PracticeAssignment/alHl/AlhlComponent'));
const AaslLink = lazy(() => import('../component/PracticeAssignment/AASL/AaslLink'));
const PysicsSl = lazy(() => import('../component/PracticeAssignment/IbDkPysicsSl/PysicsSl'));
const BussinesSl = lazy(() => import('../component/PracticeAssignment/IBDPbUSINESS/BussinesSl'));
const BussinessHl = lazy(() => import('../component/PracticeAssignment/IBDPbUSINESS/BussinessHl'));
const ChemistrySl = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemistrySl'));
const ChemistryHl = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemistryHl'));
const EconomicSl = lazy(() => import('../component/PracticeAssignment/IBeconomic/EconomicSl'));
const Paper1Secound = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/Paper1Secound'));
const Paper1MarthscoreLink = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/paper1MarthscoreLink'));
const Hase2Mathematics = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/Hase2Mathematics'));
const HaseMathsPpaper1 = lazy(() => import('../component/PracticeAssignment/SourceAssignment/IBDP/HaseMathsPpaper1'));
const HaseMathematicsAlhl = lazy(() => import('../component/PracticeAssignment/alHl/HaseMathematicsAlhl'));
const Hase2AlhlPaper2 = lazy(() => import('../component/PracticeAssignment/alHl/Hase2AlhlPaper2'));
const PhysicsPaper = lazy(() => import('../component/PracticeAssignment/IbDkPysicsSl/PhysicsPaper'));
const Paper1 = lazy(() => import('../component/PracticeAssignment/IbDkPysicsSl/Paper1'));
const Oxford = lazy(() => import('../component/PracticeAssignment/IbDkPysicsSl/Oxford'));
const OxfordPaper1 = lazy(() => import('../component/PracticeAssignment/IbDkPysicsSl/OxfordPaper1'));
const BussSlPaper = lazy(() => import('../component/PracticeAssignment/IBDPbUSINESS/BussSlPaper'));
const BussPaper1and2 = lazy(() => import('../component/PracticeAssignment/IBDPbUSINESS/BussPaper1and2'));
const ChemistryCombridge = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemistryCombridge'));
const ChemistrayPperLink = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemistrayPperLink'));
const ChemistryOxford = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemistryOxford'));
const ChemistryPerson = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemistryPerson'));
const ChemOxfordPaper = lazy(() => import('../component/PracticeAssignment/IbdpChemistry/ChemOxfordPaper'));
const EconomicSlPaper = lazy(() => import('../component/PracticeAssignment/IBeconomic/EconomicSlPaper'));
const EconimicPpaer2 = lazy(() => import('../component/PracticeAssignment/IBeconomic/EconimicPpaer2'));
const OxfordEconimic = lazy(() => import('../component/PracticeAssignment/IBeconomic/OxfordEconimic'));
const EconimicBlink = lazy(() => import('../component/PracticeAssignment/IBeconomic/EconimicBlink'));
const TeacherDashboard = lazy(() => import('../component/TeacherDashboard/TeacherDashboard'));
const OnlineClasses = lazy(() => import('../component/TeacherDashboard/OnlineClasses'));
const ScheduleContainer = lazy(() => import('../component/TeacherDashboard/ScheduleContainer'));
const PastClass = lazy(() => import('../component/TeacherDashboard/PastClass'));
const Navbar1 = lazy(() => import('../component/Dashboard Components/Buttons1'));
const TextPage = lazy(() => import('../Pages/TextPage'));
const AccordionPage = lazy(() => import('../Pages/AccordionPage'));
const ImagePage = lazy(() => import('../Pages/ImagePage'));
const PdfPage = lazy(() => import('../Pages/PdfPage'));
const VdeoPage = lazy(() => import('../Pages/VdeoPage'));
const AudioPage = lazy(() => import('../Pages/AudioPage'));
const SimulationPage = lazy(() => import('../Pages/SimulationPage'));
const McqPage = lazy(() => import('../Pages/McqPage'));
const DrwaingPage = lazy(() => import('../Pages/DrwaingPage'));
const FilterFormAndQuestion = lazy(() => import('../Pages/FilterFormAndQuestion'));
const ProfileFormPage = lazy(() => import('../Pages/ProfileFormPage'))
const AssignmentCreate =lazy (()=> import ('../component/StudentDashboard/AssignmentCreate'))
const IBMYPComponent =lazy (()=> import ('../component/PracticeAssignment/SourceAssignment/IBMYP/IBMYP')) 
const AddCategoryPage =lazy (()=> import ( '../Pages/AddCategoryPage'))
const  TableComponent =lazy (()=> import ( '../component/Dashboard Components/TableComponent'))
const VeiwCategoryPage =lazy (()=> import ('../Pages/VeiwCategoryPage')) 
const DisplayQuesionpage =lazy(()=> import ('../Pages/DisplayQuesionpage'))
const Track = lazy(()=> import ('../component/CreateQuestion/DispalyData/Track'))
// const Preview =lazy(()=>import('../component/CreateQuestion/DispalyData/Previwe'))
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
          <Route path='/audio' element={<AudioPage/>}/>
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
<Route path='/View-category' element={<VeiwCategoryPage/>}/>
<Route path='/Add' element={<TableComponent/>}/>
<Route path='DisplayQuestion' element={<DisplayQuesionpage/>}/>
<Route path='/help' element={<Help/>}/>
<Route path='/track' element={<Track/>}/>
<Route path='/previwe' element={<Previwe/>}/>
<Route path='/send' element={<SendComponent/>}/>
<Route path='/assess' element={<Assess/>}/>
<Route path='/mypSection' element={<MypSectionpage/>}/>
                  </Routes>
    </Suspense>
  )
}

export default Routing