import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Home, Users, UserPlus, BookOpen, Clipboard, HelpCircle, Info, MessageCircle, User } from 'react-feather';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Menu, MenuItem, TextField } from '@mui/material';

import '.././AdminDashboard/Header.css';

const StudentNavSmall = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownMenus, setDropdownMenus] = useState([
    { icon: <Home/> , text:'Dashboard', link:''},
      { icon: <UserPlus />, text: 'Profile', link: '/' },
      { icon: <User />, text: 'Logout', link: '/' },
    
 
]);

  const handleToggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && ((event.key === 'Tab' && event.shiftKey) || event.key === 'Escape')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const renderSubMenu = (submenu) => (
    <ul>
      {submenu.map((item, index) => (
        <li className="nav-link text-white mb-4" key={index}>
          <Link className='text-white' to={item.link} style={{textDecoration:'none'}}>
            {item.icon}
            <span className="text nav-text text-white">{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className='mt-[-20px] mb-[-20px]'>
      <AppBar position="static" sx={{
        display: 'none',
        '@media (max-width:1024px)': {
          background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
          display: 'block',
        },
      }}>
        <Toolbar>
          <IconButton
            size="30"
            position="end"
            edge="start"
            aria-label="menu"
           className='text-white mr-4 '
            onClick={handleToggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className='text-white ml-4' component="div" sx={{ margineLeft:'5px' ,flexGrow: 1 }}>
            My Revesion <sup>+</sup>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className='text-white'
        anchor="left"
        open={isDrawerOpen}
        onClose={handleToggleDrawer(false)}
        color='white'
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            display: 'none',
            boxSizing: 'border-box',
            '@media (max-width:1024px)': {
              width: '100%',
              display: 'block',
              color: 'white',
              background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'
            },
          },
        }}
      >
        <div style={{ textDecoration: 'none', Color: 'white' }}>
        <IconButton
  size="large"
  edge="end"
  color="inherit"
  aria-label="close"
  sx={{ marginLeft: 'auto' }}
  onClick={handleToggleDrawer(false)}
>
  <CloseIcon />
</IconButton>


          
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links text-white">
                
                {dropdownMenus.map((menu, index) => (
                  <li className={`nav-link  mb-4 ${menu.submenu ? 'has-submenu' : ''}`} key={index}>
                    <Link to="#" className='text-white' style={{textDecoration:'none'}} onClick={() => setDropdownMenus((prevMenus) => prevMenus.map((m, i) => (i === index ? { ...m, isOpen: !m.isOpen } : m)))}>
                      {menu.icon}
                      <span className="text nav-text  text-white">{menu.text}</span>
                    </Link>
                    {menu.isOpen && renderSubMenu(menu.submenu)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};



export default StudentNavSmall