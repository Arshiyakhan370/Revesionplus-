import React from 'react';
import { Modal, Typography, Grid, TextField, Button, Box, Checkbox,  } from '@mui/material';
import { Space,Tag, } from 'antd';
const CreateSubmitModel = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="ant-modal-content">
        <button type="button" aria-label="Close" className="ant-modal-close" onClick={handleClose}>
          <span className="ant-modal-close-x">
            <span role="img" aria-label="close" className="anticon anticon-close ant-modal-close-icon">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </span>
          </span>
        </button>
        <div className="ant-modal-header">
          <Typography variant="h6" id="modal-title">Create submissions</Typography>
        </div>
        <div className="ant-modal-body">
          <div className="ant-select select-students css-lbx8ul ant-select-single ant-select-show-arrow ant-select-show-search" style={{ width: '100%' }}>
            <div className="ant-select-selector">
              <input type="search" autoComplete="off" className="ant-select-selection-search-input" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="rc_select_16_list" aria-autocomplete="list" aria-controls="rc_select_16_list" aria-activedescendant="rc_select_16_list_0" value="" id="rc_select_16" />
              <span className="ant-select-selection-placeholder">Search for students</span>
            </div>
            <span className="ant-select-arrow" unselectable="on" aria-hidden="true" style={{ userSelect: 'none' }}>
              <span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.3-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg>
              </span>
            </span>
          </div>
          <Checkbox disabled className="select-all-mapped-students-checkbox css-lbx8ul" />
          <label className="ant-checkbox-wrapper ant-checkbox-wrapper-disabled select-all-mapped-students-checkbox css-lbx8ul">
            <span className="ant-checkbox css-lbx8ul ant-checkbox-disabled">
              <input className="ant-checkbox-input" disabled type="checkbox" />
              <span className="ant-checkbox-inner"></span>
            </span>
            <span> Select all mapped students</span>
          </label>
        </div>
        <div className="ant-modal-footer">
          <div className="ant-row create-submissions-modal-footer css-lbx8ul">
            <div className="ant-col ant-col-12 students-count css-lbx8ul">
              <Tag className="css-lbx8ul">0 Students selected</Tag>
            </div>
            <div className="ant-col ant-col-12 action-buttons css-lbx8ul">
              <Space className="css-lbx8ul" direction="horizontal" size={8}>
                <Button variant="contained" className="ant-btn-primary" disabled>Create submissions</Button>
                <Button variant="contained">Cancel</Button>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}



export default CreateSubmitModel