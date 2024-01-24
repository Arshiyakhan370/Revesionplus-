import React, { useEffect, useRef, useState } from 'react';
import './NavSideBar.css';
import gsap from 'gsap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const NavSideBar = () => {
 
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();


  const showDropdownPopup = async () => {
    const { value: selectedValue } = await Swal.fire({
          title: 'Select an option',
          input: 'select',
          inputOptions: {
            '': 'Select an option',
            'profile': 'Profile',
            'inbox': 'Inbox',
            'task': 'Task',
            'chats': 'Chats',
            'settings': 'Settings',
            'pricing': 'Pricing',
            'faq': 'FAQ',
            'logout': 'Logout',
          },
          inputPlaceholder: 'Select an option',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value) {
                resolve();
              } else {
                resolve('You need to select an option');
              }
            });
          },
        });
    
        if (selectedValue) {
         
          switch (selectedValue) {
            case 'profile':
             break;
            case 'inbox':
             
              break;
            case 'task':
             
              break;
            case 'chats':
             
              break;
            case 'settings':
              
              break;
            case 'pricing':
         
            case 'faq':
           
              break;
            case 'logout':
             
              break;
            default:
              break;
          }
        }
      };
      const handleClick = (event) => {
        if (event.target.tagName !== 'h1') {
          setShowDropdown(!showDropdown);
        }
      };
    
    
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          event.target.tagName !== 'nav'
        ) {
          setShowDropdown(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClick);
          document.removeEventListener('click', handleClickOutside);
        };
      }, [showDropdown]);
    
    
      
  return (
   <div className='bg-gray-100 w-[253px] '>
    {/* // <nav className="border border-red-900  header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl"> */}
      {/* // <div className="navbar-container d-flex content"> */}
        {/* <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav d-xl-none">
            <li className="nav-item">
              <Link  to="#" className="nav-link menu-toggle is-active lg:d-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu ficon"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <h1></h1>
              </Link>
            </li>
          </ul>
        </div> */}
        <ul className="nav navbar-nav align-items-center ms-auto">
          {/* <li className="nav-item d-lg-block  position-static">
            <Link  to="#" className="nav-link nav-link-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon ficon  "
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </Link>
          </li> */}

          
          <li className="nav-item dropdown dropdown-user">
            <a
              className="nav-link dropdown-toggle dropdown-user-link"
              id="dropdown-user"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
             
              // onClick={handleClick}
            
            >
            <div className='flex flex-row '>
              <div className="user-nav d-sm-flex  flex flex-col mt-4 mr-4">
                <span className="user-name fw-bolder text-[#fff]" >Mr Sahir Khan</span>
                <span className="user-status text-gray-400"> SuperAdmin </span>
              </div>
              <span className="avatar ml-24 ">
                <img
                  className="round"
                  src="https://ibgakiosk.com/v2/upload/default-avatar.png"
                  alt="avatar"
                  height="40"
                  width="40"
                />
                <span className="avatar-status-online"></span>
              </span>
              </div>
            </a>
            {showDropdown && (
        <div className="swal2-container text-right mr-16 ml-96" ref={dropdownRef}>
          <div
            id="dropdown-menu1"
            className="d-block position-static"
            aria-labelledby="dropdown-user"
            style={{ marginLeft: '60rem',textAlign:'left', marginTop:"6.2rem", boxShadow:" 0 5px 25px rgba(34, 41, 47, 0.1);", zIndex: "1000" ,backgroundColor:'white' }}
          >
            <Link to="#" className="dropdown-item mr-8" onClick={showDropdownPopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user me-50"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>{' '}
              Profile
            </Link>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail me-50"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>{' '}
              Inbox
            </Link>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-square me-50"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"></path>
              </svg>{' '}
              Task
            </Link>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-square me-50"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>{' '}
              Chats
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-settings me-50"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>{' '}
              Settings
            </Link>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-credit-card me-50"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>{' '}
              Pricing
            </Link>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-help-circle me-50"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>{' '}
              FAQ
            </Link>
            <Link to="#" className="dropdown-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-power me-50"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>{' '}
              Logout
            </Link>
          </div>
        </div>
        )}
        
            {/* <div
              id="dropdown-menu1"
              className=" d-block position-static" 
              aria-labelledby="dropdown-user"
              style={{ width: '10rem' }}
            >
              <Link to="#" className="dropdown-item" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user me-50"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>{' '}
                Profile
              </Link>
              <Link  to="#" className="dropdown-item" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail me-50"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>{' '}
                Inbox
              </Link>
              <Link  to="#" className="dropdown-item" >
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square me-50">
              <polyline points="9 11 12 14 22 4">

              </polyline>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg> Task</Link>
              <Link  to="#" className="dropdown-item" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square me-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Chats</Link>
              <div className="dropdown-divider"></div>
              <Link  to="#" className="dropdown-item" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings me-50"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings</Link>
              <Link  to="#" className="dropdown-item" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-credit-card me-50"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Pricing</Link>
              <Link  to="#" className="dropdown-item" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-help-circle me-50"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> FAQ</Link>
              <Link  to="#" className="dropdown-item" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power me-50"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> Logout</Link>
         
         
         
         </div> */}
         
         </li>
        </ul>
        </div>
        
        
        

        //  </nav>
  )
}

export default NavSideBar;