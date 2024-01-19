import React from 'react';
import { Button } from '@mui/material';


const Nav = () => {
     
    
      return (
        <div>
           <nav className="navbar navbar-light bg-light  flex flex-row" style={{borderBottom: '1px solid #002b4f'}}>
        <span id="" className="pro-sidebar-logo ml-8 ">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span> 
        <Button variant='primary' style={{  marginRight:'30px',color:'white', background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) '}}>LogOut</Button>
      </nav>
          </div>
  )
}

export default Nav
