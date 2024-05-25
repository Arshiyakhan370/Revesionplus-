import React, { Fragment, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MonitorIcon from '@mui/icons-material/Monitor';
import SendIcon from '@mui/icons-material/Send';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DraftsIcon from '@mui/icons-material/Drafts';
import PreviewIcon from '@mui/icons-material/Preview';
import UploadIcon from '@mui/icons-material/Upload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import LongQuestion from './LongQuestion';
import Upload from './Upload';

const DisplayQuestion = () => {
    const [showUploadComponent, setShowUploadComponent] = useState(false); 
    const handleBack = () => {
        window.history.back(); 
    };

    const toggleUploadComponent = () => {
        setShowUploadComponent(!showUploadComponent); 
    };

    return  (
        <Fragment>
            <AppBar position="static" style={{ background: 'linear-gradient(139.62deg, #002B4F 0.57%, #12b6e9 100%, #002B4F)', height: '65px' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={handleBack} sx={{ borderRadius: '50%', backgroundColor: 'transparent', border: '1px solid white', marginRight: '1em','&:hover': { color: 'black' } }}>
                        <Tooltip title="Back" arrow>
                            <ArrowBackIcon sx={{ color: 'white', '&:hover': { color: 'black' } }} />
                        </Tooltip>
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1, color: 'white', textAlign: 'center' }}>
                        <Tooltip title="Create" arrow>
                            <Button component={Link} to="/DisplayQuestion" color="inherit" startIcon={<TrackChangesIcon />} sx={{ '&:hover .MuiSvgIcon-root': { color: 'black' } }}>
                                Create
                            </Button>
                        </Tooltip>
                        <Tooltip title="Track" arrow>
                            <Button component={Link} to="/track" color="inherit" startIcon={<MonitorIcon />} sx={{ '&:hover .MuiSvgIcon-root': { color: 'black' } }}>
                                Track
                            </Button>
                        </Tooltip>
                        <Tooltip title="Send" arrow>
                            <Button component={Link} to="/send" color="inherit" startIcon={<SendIcon />} sx={{ '&:hover .MuiSvgIcon-root': { color: 'black' } }}>
                                Send
                            </Button>
                        </Tooltip>
                        <Tooltip title="Assess" arrow>
                            <Button component={Link} to="/assess" color="inherit" startIcon={<AssessmentIcon />} sx={{ '&:hover .MuiSvgIcon-root': { color: 'black' } }}>
                                Assess
                            </Button>
                        </Tooltip>
                    </Typography>
                    <Tooltip title="Drafts" arrow>
                        <IconButton component={Link} to="/drafts" color="inherit" sx={{ '&:hover .MuiSvgIcon-root': { color: 'black' } , borderRadius: '50%', backgroundColor: 'transparent', border: '2px solid white', marginRight:"10px"}}>
                            <DraftsIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Preview" arrow>
                        <IconButton component={Link} to="/preview" color="inherit" sx={{  borderRadius: '50%', backgroundColor: 'transparent', border: '2px solid white', '&:hover .MuiSvgIcon-root': { color: 'black' } ,marginRight:"10px"}}>
                            <PreviewIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Upload" arrow>
                        <IconButton onClick={toggleUploadComponent} color="inherit" sx={{ '&:hover .MuiSvgIcon-root': { color: 'black' }, borderRadius: '50%', backgroundColor: 'transparent', border: '2px solid white' }}>
                            <UploadIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Upload open={showUploadComponent} onClose={toggleUploadComponent} /> 
        </Fragment>
    );
};

export default DisplayQuestion;
