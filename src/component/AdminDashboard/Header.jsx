import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { ChevronRight, Home, Users ,UserPlus,QuestionMark, BookOpen, Clipboard, HelpCircle, Info, MessageCircle } from 'react-feather';


const Header = ({toggleSidebar}) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
const maleAvatarUrl = 'data:image/jpeg;base64,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';

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

  

    const handleButtonClick = () => {
      toggleSidebar();
      toggleSidebar1();
    };
  const toggleSidebar1 = () => {
    setSidebarClosed(!isSidebarClosed);
  };
  
  return (
    <nav className={`sidebar  ${isSidebarClosed ? 'close' : ''} ${isDarkMode ? 'dark' : ''}`}>
      <header>
        <div className="image-text">
        <div className="text header-text">
          <span className="pro-sidebar-logo">
          <div>M</div>
          <h5>My Revision+</h5>
           
          </span>
        
          </div>
        </div>
        <ChevronRight className="toggle mr-4 border border-white"  onClick={handleButtonClick } />
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
          <li className="profile-item">
          <img
      src={maleAvatarUrl}
      alt="Male Avatar"
      style={{ width: '40px', height: '40px', borderRadius: '50%' }}
    />
     
      <div className="profile-info">
        <span className="name">Sahir Khan</span>
        {/* <span className="role">Super Admin</span> */}
      </div>
    </li>
            <li className="nav-link">
              <Link to="/dashboard">
            <Home className="icons" /> 
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>
            <li className={`nav-link ${isOpen ? 'active' : ''}`}>
              <Link to="#" onClick={toggleDropdown}>
             
              <Users className="icons" />
                <span className="text nav-text">User Manage</span>
                <ChevronRight className={`submenu-toggle ${isOpen ? 'open' : ''}`} />
              </Link>
              </li>
              
              {isOpen && (
                <ul>
                <li className="nav-link">
                  <Link to="/admin">
                  <BookOpen className="icons"/> 
                    <span className="text nav-text">Teacher</span>
                  </Link>
                </li>
             
                <li className="nav-link">
                  <Link to="/add-user-show">
                  <UserPlus className="icons"/> 
                    <span className="text nav-text">Student</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/teacher">
                  <Clipboard className="icons"/> 
                    <span className="text nav-text">Teacher Map</span>
                  </Link>
                </li>
              </ul>
              )}
              <li className={`nav-link ${isOpen1 ? 'active' : ''}`}>
              <Link to=""  onClick={toggleDropdown1}>
              
              <Info className="icons"/> 
                <span className="text nav-text">Create Question</span>
                <ChevronRight className={`submenu-toggle ${isOpen1 ? 'open' : ''}`} />
              </Link>
            </li>
            {isOpen1 && (
            <ul>
                <li className="nav-link">
                  <Link to="/createquestion">
                  <HelpCircle className="icons"/> 
                    <span className="text nav-text">Add Que</span>
                  </Link>
                </li>
             
                <li className="nav-link">
                  <Link to="">
                  <MessageCircle className="icons"/> 
                    <span className="text nav-text">View Que</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/description">
                  <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="appstore-add"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icons"
                >
                  <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zm52 132H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V680h560v208zM424 712H296V584c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v128H104c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h128v128c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V776h128c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                </svg>
              
                    <span className="text nav-text">Que Description </span>
                  </Link>
                </li>

                <li className="nav-link">
                  <Link to="/question">
                 
                  <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="question"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icons"
                >
                  <path d="M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2-27.2 31.7-65.6 54.4-108.1 64-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 00-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9 58.4-13.2 111.4-44.7 149.3-88.7 19.1-22.3 34-47.1 44.3-74 10.7-27.9 16.1-57.2 16.1-87 0-35-7.4-69-22-100.9zM512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56z"></path>
                </svg>
          
                    <span className="text nav-text">Question</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/library">
                  <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="database"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  className="icons"
                >
                  <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                </svg>
                    <span className="text nav-text">Library</span>
                  </Link>
                </li>
              </ul>
            )}
            <li className="nav-link">
              <Link to="#" onClick={toggleDropdown2}>
                <BookOpen className="icons" />
                <span className="text nav-text">Create Assignment</span>
                <ChevronRight className={`submenu-toggle ${isOpen2 ? 'open' : ''}`} />
              </Link>
            </li>
            {isOpen2 && (
            <ul>
          
            <li className="nav-link">
                  <Link to="/create-filter">
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
    >
      <path d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 14H4"></path>
      <path d="M11 16h6"></path>
      <path d="M9 12h6"></path>
      <path d="M7 8h6"></path>
    </svg>
                   
                    <span className="text nav-text">New Assignment</span>
                  </Link>
                </li> 
                <li className="nav-link">
                  <Link to="">
                  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
    >
      <path d="M12 2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 14l-4-4 1.414-1.414L10 13.172l6.293-6.293L18 8l-8 8z"></path>
    </svg>
                 
                    <span className="text nav-text">View Assignment</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="/create-question">
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
    >
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
                
                    <span className="text nav-text">Share Assignment</span>
                  </Link>
                </li>
          
                </ul>
            )}
            <li className="nav-link">
              <Link to="#" onClick={toggleDropdown3}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" className="icons">
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z">

            </path></svg>
                <span className="text nav-text">Create Master</span>
                <ChevronRight className={`submenu-toggle ${isOpen3 ? 'open' : ''}`} />
              </Link>
            </li>
            {isOpen3 && (
            <ul>
                <li className="nav-link">
                  <Link to="/practiceQuestion">
                  <BookOpen className="icons"/> 
                    <span className="text nav-text">Add Category</span>
                  </Link>
                </li>
             
                <li className="nav-link">
                  <Link to="">
                  <UserPlus className="icons"/> 
                    <span className="text nav-text">View Category</span>
                  </Link>
                </li>
                
              </ul>

            )}
            <li className="nav-link">
              <Link to="#">
                <i className="bx bx-wallet-alt icons"></i>
                <span className="text nav-text">Reports</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="nav-link">
            <Link to="#">
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" icons">
  <circle cx="12" cy="12" r="10" />
  <line x1="15" y1="9" x2="9" y2="15" />
  <line x1="9" y1="9" x2="15" y2="15" />
</svg> 
              <span className="text nav-text">Log Out</span>
            </Link>
          </li>

       
      </div>
    </div>
    </nav>
  )
}

export default Header