import React, { useState } from 'react';
import {
  Box, Grid, TextField, IconButton, Button, Select, MenuItem, Card, CardContent,
  Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Badge, Chip, CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LaptopIcon from '@mui/icons-material/Laptop';
import MessageIcon from '@mui/icons-material/Message';
import { styled } from '@mui/system';
import DisplayQuestion from './DisplayQuestion';
import { Checkbox, Tag, Space, Progress } from 'antd'; 
// import { Progress } from '@mui/material'; 
const StatisticCard = ({ title, value }) => (
  <Grid item xs={6} md={3}>
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="h4" color="primary" align="center">{value}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

const SendComponent = () => {
    const [announcement, setAnnouncement] = useState('');
    const [showInput, setShowInput] = useState(false);
  
    const handleSendAnnouncement = () => {
      // Implement your logic to send the announcement
      console.log("Announcement:", announcement);
      // Clear the input field after sending the announcement
      setAnnouncement('');
      // Hide the input field
    }
  return (
    <div>
    <DisplayQuestion/>
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
  <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
    <TextField
      id="search-by-name"
      placeholder="Search by name"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
        clearable: true,
        endAdornment: (
          <IconButton>
            <ClearIcon />
          </IconButton>
        ),
      }}
    />
    <Select
      displayEmpty
      defaultValue="Started"
      variant="outlined"
      size="small"
      sx={{ width: 150 }}
    >
      <MenuItem value="Started">Started</MenuItem>
      {/* Add other options as needed */}
    </Select>
    <Select
      displayEmpty
      defaultValue="Smart sort (Default)"
      variant="outlined"
      size="small"
      sx={{ width: 150 }}
    >
      <MenuItem value="Smart sort (Default)">Smart sort (Default)</MenuItem>
      {/* Add other options as needed */}
    </Select>
  </Box>
</Grid>


        <Grid item xs={12}  alignItems="center" >
          <Grid container spacing={2} justifyContent='center'  alignItems="center">
            <StatisticCard title="All" value="1" />
            <StatisticCard title="Started" value="1" />
            <StatisticCard title="Ended" value="0" />
            <StatisticCard title="Submitted" value="0" />
          </Grid>
        </Grid>

        <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <div className='flex justify-start'>
                <Typography variant="h6" className='mt-1'>Students</Typography>
                <IconButton onClick={() => setShowInput(!showInput)}>
                  <InfoIcon />
                </IconButton>
              </div>
              <div>
                <Button variant="outlined" startIcon={<NotificationsIcon />} onClick={() => setShowInput(!showInput)}>
                  Make announcement
                </Button>
              </div>
            </Box>
          </Grid>

          {showInput && (
           
            <Grid item xs={4}>
            <div className='flex justify-end'>
              <TextField
              size='small'
                label="Announcement"
                variant="outlined"
                fullWidth
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
              />
              <Button variant="contained" onClick={handleSendAnnouncement} sx={{marginLeft:'-20px'}}>Send</Button>
              </div>
            </Grid>
          )}
        <Grid item xs={12}>
          {/* <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CircularProgress variant="determinate" value={0} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="h6" color="error">MD KHAN</Typography>}
                secondary={
                  <>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LaptopIcon color="primary" />
                      <Typography>TPDWMI</Typography>
                      <Typography>Started May 17, 23:44 pm</Typography>
                    </Box>
                    <Chip label="Started" color="primary" />
                  </>
                }
              />
              <IconButton>
                <Badge color="primary">
                  <MessageIcon />
                </Badge>
              </IconButton>
            </ListItem>
          </List> */}
          <ul className="ant-list-items">
      <li className="ant-list-item">
        <div className="ant-list-item-meta">
          <div className="ant-list-item-meta-avatar">
            <Space direction="horizontal" align="center" gap={8}>
              <div className="ant-space-item">
                <Checkbox defaultChecked />
              </div>
              <div className="ant-space-item">
                <Avatar size="large" shape="circle">
                  <Progress
                    type="circle"
                    percent={100}
                    width={45}
                    strokeWidth={6.67}
                    strokeLinecap="round"
                    success={{ percent: 100 }}
                    format={() => <span role="img" aria-label="check">✅</span>}
                  />
                </Avatar>
              </div>
            </Space>
          </div>
          <div className="ant-list-item-meta-content">
            <h4 className="ant-list-item-meta-title">
              <Space direction="horizontal" align="center" gap={8} className="title">
                <div className="ant-space-item">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="red" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'red' }}>
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                  </svg>
                </div>
                <div className="ant-space-item"></div>
                <div className="ant-space-item">
                  <span>Raghav Dalmia</span>
                </div>
              </Space>
            </h4>
            <div className="ant-list-item-meta-description">
              <Space direction="horizontal" align="center" gap={8} className="description">
                <div className="ant-space-item">
                  <span role="img" aria-label="laptop" style={{ color: 'rgb(16, 142, 233)' }}>💻</span>
                </div>
                <div className="ant-space-item">
                  <span>N92MPT</span>
                </div>
                <div className="ant-space-item">Started May 05, 21:07 pm</div>
              </Space>
              <br />
            </div>
          </div>
        </div>
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <Tag color="success" className="experience-current-view-tag">Submitted</Tag>
          </div>
        </div>
      </li>
      <li className="ant-list-item">
        <div className="ant-list-item-meta">
          <div className="ant-list-item-meta-avatar">
            <Space direction="horizontal" align="center" gap={8}>
              <div className="ant-space-item">
                <Checkbox defaultChecked />
              </div>
              <div className="ant-space-item">
                <Avatar size="large" shape="circle">
                  <CircularProgress
                    type="circle"
                    percent={100}
                    width={45}
                    strokeWidth={6.67}
                    strokeLinecap="round"
                    success={{ percent: 100 }}
                    format={() => <span role="img" aria-label="check">✅</span>}
                  />
                </Avatar>
              </div>
            </Space>
          </div>
          <div className="ant-list-item-meta-content">
            <h4 className="ant-list-item-meta-title">
              <Space direction="horizontal" align="center" gap={8} className="title">
                <div className="ant-space-item">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="red" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'red' }}>
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                  </svg>
                </div>
                <div className="ant-space-item"></div>
                <div className="ant-space-item">
                  <span>Raghav Dalmia</span>
                </div>
              </Space>
            </h4>
            <div className="ant-list-item-meta-description">
              <Space direction="horizontal" align="center" gap={8} className="description">
                <div className="ant-space-item">
                  <span role="img" aria-label="laptop" style={{ color: 'rgb(16, 142, 233)' }}>💻</span>
                </div>
                <div className="ant-space-item">
                  <span>N92MPT</span>
                </div>
                <div className="ant-space-item">Started May 05, 21:07 pm</div>
              </Space>
              <br />
            </div>
          </div>
        </div>
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <Tag color="success" className="experience-current-view-tag">Submitted</Tag>
          </div>
        </div>
      </li>
      <li className="ant-list-item">
        <div className="ant-list-item-meta">
          <div className="ant-list-item-meta-avatar">
            <Space direction="horizontal" align="center" gap={8}>
              <div className="ant-space-item">
                <Checkbox defaultChecked />
              </div>
              <div className="ant-space-item">
                <Avatar size="large" shape="circle">
                  <Progress
                    type="circle"
                    percent={100}
                    width={45}
                    strokeWidth={6.67}
                    strokeLinecap="round"
                    success={{ percent: 100 }}
                    format={() => <span role="img" aria-label="check">✅</span>}
                  />
                </Avatar>
              </div>
            </Space>
          </div>
          <div className="ant-list-item-meta-content">
            <h4 className="ant-list-item-meta-title">
              <Space direction="horizontal" align="center" gap={8} className="title">
                <div className="ant-space-item">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="red" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg" style={{ color: 'red' }}>
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                  </svg>
                </div>
                <div className="ant-space-item"></div>
                <div className="ant-space-item">
                  <span>Raghav Dalmia</span>
                </div>
              </Space>
            </h4>
            <div className="ant-list-item-meta-description">
              <Space direction="horizontal" align="center" gap={8} className="description">
                <div className="ant-space-item">
                  <span role="img" aria-label="laptop" style={{ color: 'rgb(16, 142, 233)' }}>💻</span>
                </div>
                <div className="ant-space-item">
                  <span>N92MPT</span>
                </div>
                <div className="ant-space-item">Started May 05, 21:07 pm</div>
              </Space>
              <br />
            </div>
          </div>
        </div>
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <Tag color="success" className="experience-current-view-tag">Submitted</Tag>
          </div>
        </div>
      </li>
      {/* Add more list items as needed */}
    </ul>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default SendComponent;
