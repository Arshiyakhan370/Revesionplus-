import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Authentication.css';

const AuthenticationImage = () => {
  const [isV1, setIsV1] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);

    let destinationRoute;

    if (selectedRole === 'teacher' && isV1) {
      destinationRoute = '/TeacherDashboard';
    } else if (selectedRole === 'teacher' && !isV1) {
      destinationRoute = '/TeacherDashboard';
    } else if (selectedRole === 'student' && isV1) {
      destinationRoute = '/dashboar-Student';
    } else {
      destinationRoute = '/dashboard';
    }

    navigate(destinationRoute);
  };

  return (
    <Fragment>
      <div className="flex flex-grow-0 items-center  justify-center h-full  md:flex-col sm:flex-col lg:flex-row">
        <div className="w-full h-full float-left lg:block  relative">
          <img
            className='images border-0 max-w-full w-full h-full sm:hidden'
            src='https://ibgakiosk.com/v2/backend/images/pages/login-v2.svg'
            alt='Authentication'
          />
        </div>
        <div className="section-right w-[40vw] h-full float-left block bg- transparent ">
          <h2>Welcome to <span className="text-global">My Revision+</span> </h2>
          <div className="tab">
            <button
              className={`tablinks hover:bg-[#065982] ${!isV1 ? '!bg-[#002b4f] !text-white' : ''}`}
              id="defaultOpen"
              onClick={() => {
                setIsV1(false);
                setSelectedRole('teacher');
              }}
            >
              Login My Revision V2
            </button>
            <button
              className={`tablinks hover:bg-[#065982] ${isV1 ? '!bg-[#002b4f] !text-white' : ''}`}
              onClick={() => {
                setIsV1(true);
                setSelectedRole('student');
              }}
            >
              Login My Revision V1
            </button>
          </div>
          {isV1 && (
            <div className='flex items-center justify-between mt-4'>
              <div className="flex items-center me-4">
                <input
                  checked
                  id="purple-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="purple-radio" className="ms-2 text-sm font-medium text:white dark:text-gray-300">Student Login</label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="purple-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="purple-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teacher Login</label>
              </div>
            </div>
          )}
          <form>
            <div className="mb-10 mt-10">
              <div className="relative">
                <input
                  type="email"
                  id="outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-gray-500 focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                />
                <label
                  for="outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Your Email
                </label>
              </div>
            </div>
            <div className="mb-10">
              <div className="relative">
                <input
                  type="password"
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="password "
                />
                <label
                  for="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="touch-form2 text-white">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label className="remember" for="vehicle1 text-white">Remember me</label>
              <Link to="#" className="forgot-password text-white ">Forgot Password?</Link>
            </div>
            <div className="touch-form2">
              <button type="submit" className="submit-now" onClick={handleLogin}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthenticationImage;
