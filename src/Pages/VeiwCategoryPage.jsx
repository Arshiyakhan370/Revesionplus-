import React, { Fragment, useState } from 'react'
// import VeiwCategory from '../component/CategoryMaster/VeiwCategory';
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import VeiwCategory from '../component/CategoryMaster/ViewCategory/VeiwCategory';

const VeiwCategoryPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);

    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
      return (
          <Fragment>
        <Header toggleSidebar={toggleSidebar}/>
     <Navbar1/>
     <VeiwCategory isSidebarClosed={isSidebarClosed}/>
     </Fragment>
  )
}

export default VeiwCategoryPage