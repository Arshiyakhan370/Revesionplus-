import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import AddCategory from '../component/CategoryMaster/AddCategory/AddCategory';


const AddCategoryPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);

    const toggleSidebar = () => {
      setSidebarClosed(!isSidebarClosed);
    };
      return (
          <Fragment>
        <Header toggleSidebar={toggleSidebar}/>
     <Navbar1/>
     <AddCategory isSidebarClosed={isSidebarClosed}/>
     </Fragment>
      )
}
export default AddCategoryPage