import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Home, Users, UserPlus, BookOpen, Clipboard, HelpCircle, Info, MessageCircle } from 'react-feather';
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Menu, MenuItem, TextField } from '@mui/material';

import '.././AdminDashboard/Header.css';

const Navbar1 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownMenus, setDropdownMenus] = useState([
    { icon: <Home/> , text:'Dashboard', link:'/admin'},
    { icon: <Users />, text: 'User Master', submenu: [
      { icon: <BookOpen />, text: 'Teacher', link: '/admin' },
      { icon: <UserPlus />, text: 'Student', link: '/add-user-show' },
      { icon: <Clipboard />, text: 'Teacher  subject Mapping', link: '/teacher' },
    ]},
    { icon: <BookOpen />, text: 'Category Master', submenu: [
      { icon: <BookOpen />, text: 'Add Category', link: '/Add-category' },
      { icon: <BookOpen />, text: 'View Category', link: '/View-category' },
    ]},
    { icon: <Info />, text: ' Question Master', submenu: [
      { icon: <HelpCircle />, text: 'Add Question', link: '/createquestion' },
      { icon: <MessageCircle />, text: 'View Question', link: '/viewquestion' },
      { icon: <BookOpen />, text: 'Que Description', link: '/description' },
      { icon: <BookOpen />, text: 'Question', link: '/question' },
      { icon: <BookOpen />, text: 'Library', link: '/library' },
    ]},
    { icon: <BookOpen />, text: ' Assignment Master', submenu: [
      { icon: <BookOpen />, text: 'Create Assignment', link: '/create-filter' },
           { icon: <BookOpen />, text: 'Share Assignment', link: '/share-assignment' },
           { icon: <BookOpen />, text: 'Practice Assignment', link: '/practiceQuestion' },
    ]},
   
    { icon: <i className="bx bx-wallet-alt" />, text: 'Reports', link: '/reports' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>, text: 'Log Out', link: '/logout' },
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
            sx={{color:'white', marginBottom:'10px'}}
           className='text-white mr-4 '
            onClick={handleToggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className='text-white ml-4' component="div" sx={{ margineLeft:'5px' ,flexGrow: 1 , marginBottom:'10px'}}>
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
        <div className='mt-8 text-2xl text-end mr-16 mb-12' style={{ textDecoration: 'none', Color: 'white' }}>
        <IconButton
  size="large"
  edge="end"
  color="inherit"
  aria-label="close"
  sx={{ marginLeft: 'auto' }}
  onClick={handleToggleDrawer(false)}
>
  <CloseIcon sx={{width:'30px',height:'30px'}}/>
</IconButton>
  </div>

          
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links text-white">
                
                {dropdownMenus.map((menu, index) => (
                  <li className={`nav-link ml-12 mb-4 ${menu.submenu ? 'has-submenu' : ''}`} key={index}>
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
      
      </Drawer>
    </div>
  );
};

export default Navbar1;
