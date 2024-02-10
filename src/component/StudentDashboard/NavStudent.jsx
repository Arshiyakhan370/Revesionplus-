import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Menu, MenuItem, TextField} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import PrintIcon from '@mui/icons-material/Print';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from 'react-avatar';
import InputAdornment from '@mui/material/InputAdornment';
import { Eye, EyeOff } from 'react-feather';
const NavStudent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [userName, setUserName] = useState('John Doe');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [displayedName, setDisplayedName] = useState(userName);
  const [displayedAvatar, setDisplayedAvatar] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [resetPasswordDialogOpen, setResetPasswordDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPasswordClick = () => {
    setResetPasswordDialogOpen(true);
    handleCloseMenu();
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
       setResetPasswordDialogOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    handleCloseMenu();

    switch (option) {
      case 'MyProfile':
        setOpenDialog(true);
        break;
      case 'SetupPrinter':
        
        break;
      case 'ResetPassword':
        
        break;
      case 'Logout':
       
        break;
      default:
        break;
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Submitted Data:', {
      userName,
      password,
      email,
      gender,
      mobileNumber,
      avatar,
      avatar: selectedAvatar || avatar,
    });

   
    setDisplayedName(userName);
    setDisplayedAvatar(selectedAvatar || avatar);

    setOpenDialog(false); 

  

   
    setDisplayedName(userName);
    setDisplayedAvatar(avatar);

    setOpenDialog(false); 
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
       console.log('Logout logic goes here');
  };
  return (
    <div>
      {windowWidth > 1024 ? (
        <nav style={{ backgroundColor: '#f8f9fa', display: 'flex', flexDirection: 'row',justifyContent:'space-between', borderBottom: '1px solid #002b4f' }}>
          <div>
          <span id="" className="pro-sidebar-logo ml-8 ">
            <div>M</div>
            <h5 style={{color:'black'}}> My Revision<sup className="  text-blue-900 ">+</sup></h5>
          </span>
          </div>
          <div className='flex flex-row justify-center mr-4'>
          <h4 className='mt-3'>{displayedName}</h4>
          <IconButton onClick={handleProfileClick} color="primary">
            {displayedAvatar ? (
              <Avatar src={displayedAvatar} alt={displayedName} size='40'  />
            ) : (
              <AccountCircleIcon fontSize="large" size='40'  />
            )}
          </IconButton>
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick('MyProfile')}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              My Profile
            </MenuItem>
            <MenuItem component="a" href="https://www.neodynamic.com/downloads/wcpp/?v=2" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',textDecorationColor:'none', color:'black'}}>
                  <PrintIcon fontSize="small" sx={{ mr: 1 }} />
                    Setup Printer
                  </MenuItem>
            <MenuItem onClick={() =>  handleResetPasswordClick ('ResetPassword')}>
              <LockIcon fontSize="small" sx={{ mr: 1 }} />
              Reset Password
            </MenuItem>
            <MenuItem onClick={() => handleLogout('Logout')}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </nav>
      ) : null}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit My Profile</DialogTitle>
        <DialogContent>
          <form onSubmit={handleProfileSubmit}>
            <TextField
              label="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
           <TextField
              select
              label="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
            <TextField
              label="Mobile Number"
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              fullWidth
              margin="normal"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{  }}
            />
            <DialogActions>
            <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '16px' }}>
          {selectedAvatar ? (
            <Avatar name={selectedAvatar} size="40" round />
          ) : (
            <Avatar name={userName} size="40" round />
          )}
        </div>
        <TextField
          label="Avatar (Optional)"
          value={avatar || ''}
          onChange={(e) => setAvatar(e.target.value)}
          fullWidth
          margin="normal"
        />
            </div>
              <Button type="submit" color="primary">
                Save
              </Button>
              <Button onClick={() => setOpenDialog(false)} color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={resetPasswordDialogOpen} onClose={() => setResetPasswordDialogOpen(false)}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleResetPasswordSubmit}>
            <TextField
            
              label="Current Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              margin="normal"
              InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleTogglePasswordVisibility}>
          {showPassword ? <EyeOff /> : <Eye />}
        </IconButton>
      </InputAdornment>
    ),
  }}
            />
          
          <TextField
  label="New Password"
  type={showPassword ? 'text' : 'password'}
  fullWidth
  margin="normal"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleTogglePasswordVisibility}>
          {showPassword ? <EyeOff /> : <Eye />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

            <TextField
              label="Confirm New Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              margin="normal"
              InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleTogglePasswordVisibility}>
          {showPassword ? <EyeOff /> : <Eye />}
        </IconButton>
      </InputAdornment>
    ),
  }}
            />
              
            <DialogActions>
              <Button type="submit" color="primary">
                Reset Password
              </Button>
              <Button onClick={() => setResetPasswordDialogOpen(false)} color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavStudent;
