import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const Nav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth > 1024 ? (
        <nav className="navbar navbar-light bg-light flex flex-row" style={{ borderBottom: '1px solid #002b4f' }}>
        <span id="" className="pro-sidebar-logo ml-8">
  <div>M</div>
  <h5 className='text-black mt-2'> My Revision<sup className="  text-blue-900 ">+</sup></h5>
</span>


          <Button
            variant='primary'
            style={{
              marginRight: '30px',
              color: 'white',
              background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)',
            }}
          >
            LogOut
          </Button>
        </nav>
      ) : null}
    </div>
  );
};

export default Nav;
