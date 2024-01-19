    import React, { Fragment, useState } from 'react'
    import Header from '../component/AdminDashboard/Header'  
    import Navbar1 from '../component/Dashboard Components/Buttons1';
import Image from '../component/CreateQuestion/QuestionDescriptionSection/Image';
    
const ImagePage = () => {
          const [isSidebarClosed, setSidebarClosed] = useState(false);
        
          const toggleSidebar = () => {
            setSidebarClosed(!isSidebarClosed);
          };
            return (
                <Fragment>
              <Header toggleSidebar={toggleSidebar}/>
           <Navbar1/>
           <Image isSidebarClosed={isSidebarClosed}/>
           
            </Fragment>
          )
        }
        
 
export default ImagePage
