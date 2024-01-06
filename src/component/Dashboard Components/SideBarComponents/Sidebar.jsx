import React, { useState } from 'react'
import SideBarList from './SideBarList'

const Sidebar = () => {


    return (
        <div >
            <aside id="sidebar-multi-level-sidebar" className=" bg-gray-300 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
                   
                        <SideBarList />
                   
                </div>
            </aside>
           
        
        </div>
       
    )
}

export default Sidebar