import React, { Fragment } from 'react';
import AuthenticationImage from '../component/Authpage Components/AuthenticationImage';
import NavBar from '../component/Authpage Components/NavBar';

const AuthPage = () => {
  return (
    <Fragment>
     <div className="relative z-10 ">
          <NavBar />
        </div>

      <div
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/open-book-bible-light-blue-background-generative-ai_169016-40495.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
       <div className="relative z-10">
          <AuthenticationImage />
           
        </div>
      </div>
    </Fragment>
  );
};

export default AuthPage;
