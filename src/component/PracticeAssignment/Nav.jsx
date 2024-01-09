import gsap from 'gsap';
import React, { useEffect } from 'react'

const Nav = () => {
    useEffect(() => {
        const logo = document.getElementById('pro-sidebar-logo');
    
        gsap.to(logo, {
          x: '80vw',  
          duration: 10,
          ease: 'linear',
          repeat: -1,
          onComplete: () => {
            gsap.set(logo, { x: 0 });
          },
        });
      }, []); 
    
      return (
        <div>
          <nav className="navbar navbar-light bg-light  w-full" style={{ zIndex:'999',position:'fixed',borderBottom: '1px solid #002b4f'}}>
            <span id="pro-sidebar-logo" className="pro-sidebar-logo ml-8 ">
              <div>M</div>
              <h5 className='text-black'> My Revision+ </h5>
            </span> 
          </nav>
          </div>
  )
}

export default Nav
