
    import React, { Fragment, useState } from 'react'
    import Header from '../component/AdminDashboard/Header'  
    import Navbar1 from '../component/Dashboard Components/Buttons1';
import According from '../component/CreateQuestion/QuestionDescriptionSection/According';
    
    const AccordionPage = () => {
          const [isSidebarClosed, setSidebarClosed] = useState(false);
        
          const toggleSidebar = () => {
            setSidebarClosed(!isSidebarClosed);
          };
            return (
                <Fragment>
              <Header toggleSidebar={toggleSidebar}/>
           <Navbar1/>
           <According isSidebarClosed={isSidebarClosed}/>
           
            </Fragment>
          )
        }
        
     
    
   
    

export default AccordionPage