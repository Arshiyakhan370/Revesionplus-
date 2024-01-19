import React, { Fragment, useState } from 'react'
import SimulationComponent from '../component/CreateQuestion/QuestionDescriptionSection/Simulation';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import Header from '../component/AdminDashboard/Header';

const SimulationPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    
      const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
      };
        return (
            <Fragment>
          <Header toggleSidebar={toggleSidebar}/>
       <Navbar1/>
       <SimulationComponent isSidebarClosed={isSidebarClosed}/>
       
        </Fragment>
      )
    }
    
export default SimulationPage