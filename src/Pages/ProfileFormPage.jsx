import React, { useState } from 'react'
import Header from '../component/AdminDashboard/Header';
import ProfileForm from '../component/AdminDashboard/Profile';
import Navbar1 from '../component/Dashboard Components/Buttons1';

const ProfileFormPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    
    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
     
//     const [profileData, setProfileData] = useState({   name: '',
//   email: '',
//   dob: '',
//   gender: 'male',});

//   const handleSaveProfile = (formData) => {
//         setProfileData(formData);
//   };
  return (
    <div>
      <Header  toggleSidebar={toggleSidebar}/>
      <Navbar1/>
      <ProfileForm  isSidebarClosed={isSidebarClosed} />
    </div>
  );
};



export default ProfileFormPage