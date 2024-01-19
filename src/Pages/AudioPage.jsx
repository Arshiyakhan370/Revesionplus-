import React, { Fragment, useState } from 'react'
import Header from '../component/AdminDashboard/Header';
import Navbar1 from '../component/Dashboard Components/Buttons1';
import Audio from '../component/CreateQuestion/QuestionDescriptionSection/Audio';

const AudioPage = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
        
          const toggleSidebar = () => {
            setSidebarClosed(!isSidebarClosed);
          };
            return (
                <Fragment>
              <Header toggleSidebar={toggleSidebar}/>
           <Navbar1/>
           <Audio isSidebarClosed={isSidebarClosed}/>
           
            </Fragment>
            )
        }
export default AudioPage