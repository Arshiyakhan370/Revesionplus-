import React, { Fragment, useState } from 'react'

import { Link } from 'react-router-dom'
import './SideBarList.css';
import NavSideBar from './NavSideBar';
const SideBarList = () => {
    
  const [isDashboardVisible, setDashboardVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
  
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setIsOpen1(false);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
    };
  
    const toggleDropdown1= () => {
      setIsOpen(false);
      setIsOpen1(!isOpen1);
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
    };
  
    const toggleDropdown2 = () => {
      setIsOpen(false);
      setIsOpen1(false);
      setIsOpen2(!isOpen2);
      setIsOpen3(false);
      setIsOpen4(false);
      setIsOpen5(false);
    };
    const toggleDropdown3 = () => {
        setIsOpen(false);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(!isOpen3);
        setIsOpen4(false);
        setIsOpen5(false);
      };
      const toggleDropdown4 = () => {
        setIsOpen(false);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(!isOpen4);
        setIsOpen5(false);
      };
      const toggleDropdown5 = () => {
        setIsOpen(false);
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(!isOpen5);
      };
      const toggleDashboard = () => {
        setDashboardVisible(!isDashboardVisible);
      };
    return (
<Fragment>

                   
<div className=''>
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow menu-native-scroll" data-scroll-to-active="true" style={{ touchAction: "none", userSelect: "none", WebkitUserDrag: "none", WebkitTapHighlightColor: "  #002B4F 0.57%, #12b6e9 100%, #002B4F" }}>
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row" >
                  
                    <li className="nav-item hidden lg:block"></li>

                    

                    <li className="nav-item ">
                        <Link className="navbar-brand" to="/dashboard">
                            <span className="brand-logo" onClick={toggleDashboard}  >
                                <img src="" alt='' />
                            </span>
                            <h4 className="brand-text text-[#fff]">My Reviesion <span>+</span></h4>
                        </Link>
                    </li>
                
                </ul>
              
            </div>
    
        <div className="shadow-bottom"></div>
        {isDashboardVisible && 
    <div className="main-menu-content">
     <div>
        <NavSideBar/>
     </div>
   <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li className="nav-item active"><Link to="/dashboard" className="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span className="menu-title text-truncate" data-i18n="Email">Dashboard</span></Link>
            </li>
            <li className=" navigation-header "><span data-i18n="User Manage">User Manage</span><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal">
            {/* <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle> */}
            </svg>
            </li>
            <li className="nav-item has-sub " onClick={toggleDropdown}>
            <a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="menu-title text-truncate" data-i18n="User">Manage User</span></a>
            {isOpen && (
                <ul className="menu-content">
                    <li className=""> <Link to="/admin" className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Admin/Teacher</span> </Link>
                    </li>
                    <li className="">
                  <Link to="/add-user-show" className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span className="menu-item text-truncate" data-i18n="View">
            Student
        </span>
    </Link>
</li>
                    <li className=""><Link to="/teacher" className="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Teacher Mapping</span></Link>
                    </li>
                </ul>
                )}
            </li>

            <li className="nav-item has-sub" onClick={toggleDropdown1}>
            <a className="d-flex align-items-center" href="#"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="12" y1="16" x2="12" y2="12" />
  <line x1="12" y1="8" x2="12" y2="8" />
</svg><span className="menu-title text-truncate" data-i18n="User">Create Question</span></a>
                {isOpen1 && (
                <ul className="menu-content">
                    <li className=""><Link className="d-flex align-items-center" to="/create-question"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Add Question</span></Link>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/profile/password/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="View">View Question</span></a>
                    </li>
                </ul>
                )}
            </li>

            {/* <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span className="menu-title text-truncate" data-i18n="User">Manage Student</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/students/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">View</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/students/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="View">Add</span></a>
                    </li>
                </ul>
            </li> */}
            <li className=" navigation-header"><span data-i18n="Test &amp; Assessment">Test &amp; Assessment</span><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal">
            {/* <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle> */}
            </svg>
            </li>
            <li className="nav-item has-sub" onClick={toggleDropdown3}><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg><span className="menu-title text-truncate" data-i18n="User">Create Assignment</span></a>
            {isOpen3 && (
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-test/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">New Assignment</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-test/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">View Assignment</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-test/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Share Assignment</span></a>
                    </li>
                </ul>
            )}
            </li>
            <li className="nav-item has-sub" onClick={toggleDropdown2}><a className="d-flex align-items-center" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" className="feather feather-command">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span className="menu-title text-truncate" data-i18n="User">Category Master</span></a>
            {isOpen2 && (
                <ul className="menu-content">
                    <li className=""><Link className="d-flex align-items-center" to=""><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Add Category</span></Link>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-testmaster/show"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">View Category</span></a>
                    </li>
    
                </ul>
            )}
            </li>
            <li className="nav-item has-sub" onClick={toggleDropdown4}><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg><span className="menu-title text-truncate" data-i18n="User">Assess Assignment</span></a>
            {isOpen4 && (
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-teachermap/teacher-map/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Unchecked Assignment</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-teachermap/teacher-map/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Checked Assignment</span></a>
                    </li>
                </ul>
            )}
            </li>
            <li className=" navigation-header"><span data-i18n="Notes &amp; Assignment">Reports</span><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal">
            {/* <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle> */}
            </svg>
            </li>
            <li className="nav-item has-sub" onClick={toggleDropdown5}><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span className="menu-title text-truncate" data-i18n="User">Reports</span></a>
            {isOpen5 && (
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/rpt_user_questions"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Teachers Mapping</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/rpt_user_questions"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Question Upload</span></a>
                    </li>
                    
                </ul>
            )}
            </li>
           <li className=" navigation-header"><span data-i18n="Notes &amp; Assignment">Notes &amp; Assignment</span><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </li>
            <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span className="menu-title text-truncate" data-i18n="User">Board</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/board/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Board List</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/board-programme/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="View">Board Program list</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/board-programme/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="View">Board Program Add</span></a>
                    </li>
                </ul>
            </li>
           {/*   <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span className="menu-title text-truncate" data-i18n="User">Subject</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-subject/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Subject View</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-subject/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Subject Add</span></a>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><span className="menu-title text-truncate" data-i18n="User">Subject Level</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-subjectlevel/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Subject Level View</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-subjectlevel/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Subject Add</span></a>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg><span className="menu-title text-truncate" data-i18n="User">Assignment Level</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-assignmentlevel/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Assignment View</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-assignmentlevel/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Assignment Add</span></a>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span className="menu-title text-truncate" data-i18n="User">Paper Level</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-paperlevel/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Paper View</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-paperlevel/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Paper Add</span></a>
                    </li>
                </ul>
            </li>
            <li className="nav-item has-sub"><a className="d-flex align-items-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg><span className="menu-title text-truncate" data-i18n="User">Content Level</span></a>
                <ul className="menu-content">
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-contentlevel/view"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Content View</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-contentlevel/add"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">Content Add</span></a>
                    </li>
                    <li className=""><a className="d-flex align-items-center" href="https://ibgakiosk.com/v2/assessment-contentlevel/file/report"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg><span className="menu-item text-truncate" data-i18n="List">File Report</span></a>
                    </li>
                </ul>
            </li> */}
        </ul>
    </div>
        }
</div>
        
</div>
 
        </Fragment> 
    )
}

export default SideBarList