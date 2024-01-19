import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Home, Info, Work, Email } from '@mui/icons-material'; // Import icons as needed
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab' && event.shiftKey) || event.key === 'Escape')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <Home />, to: '/dashboard' },
    { text: 'Teacher', icon: <Info />, to: '/admin' },
    { text: 'Student', icon: <Work />, to: '/add-user-show' },
    { text: 'Add Question', icon: <Email />, to: '/createquestion' },
  ];

  return (
    <div>
      <AppBar position="static" sx={{
        display: 'none',
        '@media (max-width:1024px)': {
          background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important',
          display: 'block',
        },
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Revesion+
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            display: 'none',
            boxSizing: 'border-box',
            '@media (max-width:767px)': {
              width: '100%',
              display: 'block',
              color: 'white',
              background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F) !important'
            },
          },
        }}
      >
        <List>
          <ListItem>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </ListItem>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={toggleDrawer(false)}>
              <Link to={item.to}><ListItemText primary={item.text}/>
              {/* {item.icon} */}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar1;
