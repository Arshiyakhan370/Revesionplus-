
import React, { Fragment, useEffect } from 'react'
import gsap from 'gsap';

const NavBar = () => {
  useEffect(() => {
    const logo = document.getElementById('pro-sidebar-logo');

    gsap.to(logo, {
      x: '100vw',  // Set to a negative value to move from left to right
      duration: 10,
      ease: 'linear',
      repeat: -1,
      onComplete: () => {
        gsap.set(logo, { x: 0 });
      },
    });
  }, []); 
  return (
    <Fragment>
    

    <div className=" bg-none h-auto relative transition-transform duration-300 ease-in-out z-1020 border-b-1 border-solid border-gray-700 w-full mx-auto top-0">
        <div className="items-left bg-none flex h-[70px] relative bg-white">
          <div className=" mx-auto max-w-1200 w-full  pl-20 pr-40">
          <span id="pro-sidebar-logo" className="pro-sidebar-logo ml-8  mt-4">
          <div>M</div>
          <h5 className='text-black'> My Revision+ </h5>
        </span> 
    </div>
    </div>
    </div>
  
</Fragment>
  )
}

export default NavBar