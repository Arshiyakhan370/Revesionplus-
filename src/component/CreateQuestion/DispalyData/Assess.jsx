import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem,Typography, InputLabel, FormControl, Switch, SvgIcon, Grid, Box, LinearProgress, Tooltip, Popover } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import DisplayQuestion from './DisplayQuestion';
// import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import UnpublishIcon from '@mui/icons-material/Block';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ExportModal from './ExportModal';
import ExportExelModal from './ExportExelModal';
const Assess = () => {
  const [search, setSearch] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [criteria, setCriteria] = React.useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isExportModalOpen1, setIsExportModalOpen1] = useState(false);

  
  const handleOpenExportModal1 = () => {
    setIsExportModalOpen1(true);
  };

  
  const handleCloseExportModal1 = () => {
    setIsExportModalOpen1(false);
  };

  const handleExportToExcel1 = () => {
    console.log('Exporting to Excel...');
  };
  const handleOpenExportModal = () => {
    setIsExportModalOpen(true);
  };

  
  const handleCloseExportModal = () => {
    setIsExportModalOpen(false);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePublishAll = () => {
  };

  const handleUnpublishAll = () => {
  
  };

  const handleExportToPDF = () => {
    
  };

 

  const handleConvertToNewSubmit = () => {
    
  };

  const handleConvertToAchievementLevel = () => {
   
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCriteriaChange = (event) => {
    setCriteria(event.target.value);
  };

  const submissions = [
    {
      id: 1,
      name: 'MD KHAN',
      gradingProgress: 100,
      total: 1,
      overall: 'A1',
      equivalentLevel: 'A8',
      onePointOne: 'A1',
    },
   
  ];

  return (
    <div>
      <DisplayQuestion />
      <div className="mainFilterComponent_experience_user mainFilter">
        <div className="ant-row">
          <div className="ant-col-24">
            <div className="ant-space ant-space-horizontal ant-space-align-center flex justify-center mt-4" style={{ gap: 10 }}>
              <div className="ant-col">
                <TextField
                  placeholder="Search"
                  value={search}
                  size="small"
                  onChange={handleSearchChange}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <Button variant="contained" sx={{ marginRight: '-14px' }} color="primary" onClick={() => console.log(search)}>
                        <SearchIcon />
                      </Button>
                    ),
                  }}
                />
              </div>

              <div className="ant-col">
                <FormControl size="small" variant="outlined" style={{ width: '150px' }}>
                  <InputLabel>Status</InputLabel>
                  <Select value={status} onChange={handleStatusChange} label="Status">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="ant-col">
                <FormControl size="small" variant="outlined" style={{ width: '150px' }}>
                  <InputLabel>Select Criteria</InputLabel>
                  <Select value={criteria} onChange={handleCriteriaChange} label="Select Criteria">
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className='flex justify-center mt-8' >
      <LinearProgress
  variant="determinate"
  value={100}
  sx={{ height: '6px' }}
  color="success" 
/>

    <div>
     <Button
          variant="outlined"
          onClick={handlePopoverOpen}
          aria-describedby={anchorEl ? 'popover' : undefined}
        >
          Actions
        </Button>
      <Popover
        id="popover"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
       
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>
        <div>
          <Button variant="text" onClick={handlePublishAll}>
            <PublishIcon />
            Publish all results
          </Button>
          </div>
          <div>
          <Button variant="text" onClick={handleUnpublishAll}>
            <UnpublishIcon />
            Unpublish all results
          </Button>
          </div>
          <div>
          <Button variant="text" onClick={handleOpenExportModal}>
            <PictureAsPdfIcon />
            Export all to PDF
          </Button>
          <ExportModal open={isExportModalOpen} handleClose={handleCloseExportModal} /> 
          </div>
          <div>
          <Button onClick={handleOpenExportModal1}>
  <InsertDriveFileIcon />
  Export all to Excel
</Button>
<ExportExelModal open={isExportModalOpen1} handleClose={handleCloseExportModal1} handleExport={handleExportToExcel1} />

          </div>
          <div>
          <Button variant="text" onClick={handleConvertToNewSubmit}>
            <AssignmentTurnedInIcon />
            Convert to new submit
          </Button>
          </div>
          <div>
          <Button variant="text" onClick={handleConvertToAchievementLevel}>
            <AssignmentTurnedInIcon />
            Convert to achievement level
          </Button>
          </div>
        </Typography>
      </Popover>       
          </div>
          </div>
          </div>
      <div className="table-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div className="ant-table-header justify-center" style={{ overflow: 'hidden' }}>
          <table style={{ tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '250px' }} />
              <col style={{ width: '100px' }} />
              <col style={{ width: '80px' }} />
              <col style={{ width: '100px' }} />
              <col style={{ width: '150px' }} />
              <col style={{ width: '150px' }} />
              <col style={{ width: '0px' }} />
              <col style={{ width: '8px' }} />
            </colgroup>
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell exp-users-full-height-column student-name ant-table-cell-fix-left ant-table-column-has-sorters" style={{ position: 'sticky', left: '0px' }}>
                  <div className="ant-table-column-sorters">
                    <span className="ant-table-column-title">
                      <span className="student-name-column-header-actions">
                        <span>Submissions <span className="ant-tag css-lbx8ul">1</span></span>
                      </span>
                    </span>
                    <span className="ant-table-column-sorter ant-table-column-sorter-full">
                      <span className="ant-table-column-sorter-inner" aria-hidden="true">
                        <span role="img" aria-label="caret-up" className="anticon anticon-caret-up">
                          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                          </svg>
                        </span>
                        <span role="img" aria-label="caret-down" className="anticon anticon-caret-down">
                          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                </th>
                <th className="ant-table-cell exp-users-full-height-column grading-progress ant-table-cell-fix-left ant-table-cell-fix-left-last ant-table-column-has-sorters" style={{ position: 'sticky', left: '250px' }}>
                  <div className="ant-table-column-sorters">
                    <span className="ant-table-column-title">Grading Progress</span>
                    <span className="ant-table-column-sorter ant-table-column-sorter-full">
                      <span className="ant-table-column-sorter-inner" aria-hidden="true">
                        <span role="img" aria-label="caret-up" className="anticon anticon-caret-up">
                          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                          </svg>
                        </span>
                        <span role="img" aria-label="caret-down" className="anticon anticon-caret-down">
                          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                </th>
                <th className="ant-table-cell exp-users-full-height-column" style={{ textAlign: 'center' }}>Uploads</th>
                <th className="ant-table-cell exp-users-full-height-column ant-table-column-has-sorters" style={{ textAlign: 'center' }}>
                  <div className="ant-table-column-sorters">
                    <span className="ant-table-column-title">
                      <div className="ant-space css-lbx8ul ant-space-vertical" style={{ gap: 0 }}>
                        <div className="ant-space-item"><span>Total</span></div>
                        <div className="ant-space-item"><span>1</span></div>
                      </div>
                    </span>
                    <span className="ant-table-column-sorter ant-table-column-sorter-full">
                      <span className="ant-table-column-sorter-inner" aria-hidden="true">
                        <span role="img" aria-label="caret-up" className="anticon anticon-caret-up">
                          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                          </svg>
                        </span>
                        <span role="img" aria-label="caret-down" className="anticon anticon-caret-down">
                          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                </th>
                <th className="ant-table-cell exp-users-full-height-column">Overall</th>
                <th className="ant-table-cell exp-users-full-height-column">Equivalent Level</th>
                <th className="ant-table-cell exp-users-full-height-column" style={{ textAlign: 'center' }}>1.1</th>
                <th className="ant-table-cell ant-table-selection-column">
                  <div className="ant-checkbox-wrapper">
                    <span className="ant-checkbox">
                      <input type="checkbox" className="ant-checkbox-input" value="" />
                      <span className="ant-checkbox-inner"></span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {submissions.map((submission) => (
                <tr data-row-key={submission.id} key={submission.id} className="ant-table-row ant-table-row-level-0">
                  <td className="ant-table-cell exp-users-full-height-column student-name ant-table-cell-fix-left ant-table-cell-fix-left-last" style={{ position: 'sticky', left: '0px' }}>
                    <div className="ant-space css-lbx8ul ant-space-vertical" style={{ gap: 0 }}>
                      <div className="ant-space-item">
                        <span className="css-lbx8ul student-name-column-header-actions">
                          <span>{submission.name}</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="ant-table-cell exp-users-full-height-column grading-progress ant-table-cell-fix-left ant-table-cell-fix-left-last" style={{ position: 'sticky', left: '250px' }}>
                    <span>{submission.gradingProgress}%</span>
                  </td>
                  <td className="ant-table-cell exp-users-full-height-column" style={{ textAlign: 'center' }}>
                    <span>1</span>
                  </td>
                  <td className="ant-table-cell exp-users-full-height-column" style={{ textAlign: 'center' }}>
                    <span>{submission.total}</span>
                  </td>
                  <td className="ant-table-cell exp-users-full-height-column">
                    <span>{submission.overall}</span>
                  </td>
                  <td className="ant-table-cell exp-users-full-height-column">
                    <span>{submission.equivalentLevel}</span>
                  </td>
                  <td className="ant-table-cell exp-users-full-height-column" style={{ textAlign: 'center' }}>
                    <span>{submission.onePointOne}</span>
                  </td>
                  <td className="ant-table-cell ant-table-selection-column">
                    <div className="ant-checkbox-wrapper">
                      <span className="ant-checkbox">
                        <input type="checkbox" className="ant-checkbox-input" value="" />
                        <span className="ant-checkbox-inner"></span>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Grid container direction="row" sx={{ mt: "20px" }} style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
  <Grid item xs={6} sx={{mt:'4'}}>
    <div className="ant-col css-lbx8ul" style={{ flex: '1 1 auto' }}>
      <Switch
        className="anonymous-grading-switch css-lbx8ul"
        size="small"
        defaultChecked
      />
      Change name format
    </div>
  </Grid>
  <Grid item xs={6} style={{marginRight:'20px', marginTop:'20px'}}>
    <div className="legend flex justify-between">
      <div className="legend-row flex justify-between">
        <SvgIcon viewBox="0 0 1024 1024" fontSize="medium">
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"/>
        </SvgIcon>
        <div className="legend-label ml-2 mb-2">Unattempted</div>
        <Box className="color-box color-box-unattempted" width={20} height={20}></Box>
      </div>
      <div className="legend-row flex justify-between">
      <div className="h-6 w-6 bg-sky-300 border border-sky-800"></div>

        <div className="legend-label mb-2 ml-2">Ungraded</div>
      </div>
      <div className="legend-row flex justify-between">
        <div className="h-6 w-6  bg-red-300"></div>
        <div className="legend-label ml-2 mb-2">0-25</div>
      </div>
      <div className="legend-row flex justify-between" >
        <div className="h-6 w-6  bg-orange-300"></div>
        <div className="legend-label ml-2 mb-2">25-50</div>
      </div>
      <div className="legend-row flex justify-between">
        <div className=" h-6 w-6  bg-yellow-300"></div>
        <div className="legend-label ml-2 mb-2">50-75</div>
      </div>
      <div className="legend-row flex justify-between">
        <div className=" h-6 w-6  bg-lime-300 "></div>
        <div className="legend-label ml-2 mb-2">75-100</div>
      </div>
    </div>
  </Grid>
</Grid>

    </div>
  );
};

export default Assess;
