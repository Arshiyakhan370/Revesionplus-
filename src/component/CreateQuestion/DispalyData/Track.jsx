import React, { Fragment } from 'react';
import { Box, Alert } from '@mui/material';
import DisplayQuestion from './DisplayQuestion';
// import SettingsPanel from './SettingsPanels';
import TrackMainPage from './TrackMainPage';
// import SettingsPanels from './SettingsPanels';

const Track = () => {
    return (
        <Fragment>
        <DisplayQuestion/>
        <Box mt={2} mx={2}>
            <Alert severity="warning">
            Customize the settings, pick the students for the assessment, and complete by publishing.
                {/* Choose the appropriate settings, select students who should take this assessment and then publish this assessment. */}
            </Alert>
            <TrackMainPage/>
        </Box>
        </Fragment>
    );
};

export default Track;
