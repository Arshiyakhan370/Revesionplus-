import React, { useState } from 'react'
import Modal from 'react-modal';
import './Library.css'
const Library = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleCriteriaChange = (e) => {
    setSelectedCriteria(e.target.value);
  };

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  

  return (
    
    
        
        <div className="ant-modal-content w-[1000px] h-[500px] ml-[23%] mt-16 ">
      <button type="button" aria-label="Close" className="ant-modal-close" onClick={openModal}>
        <span className="ant-modal-close-x">
          <span role="img" aria-label="close" className="anticon anticon-close ant-modal-close-icon">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </span>
        </span>
      </button>
      <div  >
        <h1 className="  text-left pt-4 text-[14px] ml-4 text-black"> Add from Library - Product Design</h1>
      </div>
      <div className="container flex flex-row justify-between ml-16">
      <div className="row">
        <div className="col-8">
          <div className="row custom-main-crud-list-header">
            <div className="col-10">
              <div className="d-flex align-items-center gap-2">
                <div className="input-group  flex flex-row">
                  <input type="text" className="form-control1 "  placeholder="Search" />
                  <button type="button" className="mt-1  ml-[-50px] ant-btn css-14mf4t4 ant-btn-primary ant-input-search-button" style={{}}>
            <span className="ant-btn-icon">
              <span role="img" aria-label="search" className="anticon anticon-search">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </span>
            </span>
          </button>
                 
                </div>
                <div className="text-muted">0 item found</div>
              </div>
            </div>
          </div>
        </div>
          </div>

          {/* Right side - Select Form */}
          <div className="row" style={{ flex: 1 ,marginLeft:'40px' }}>
          <div className='text-right'>
          <button type="button" className=" border border-gray-900 w-24 text-center h-10 ">
              <span class="d-flex align-items-center text-center">
                <span role="img" aria-label="undo" class="anticon anticon-undo ml-2 ">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="undo" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z">
                  </path>
                  </svg>
                </span>
                <span class="ms-2">Reset</span>
              </span>
            </button>
            </div>
            <div className="form-group ml-56">
              <label htmlFor="form-select1">Criteria</label>
              <select
                id="criteriaSelect"
                className="form-control5"
                value={selectedCriteria}
                onChange={handleCriteriaChange}
              >
                <option value="criteriaOption1">Criteria Option 1</option>
                <option value="criteriaOption2">Criteria Option 2</option>
                <option value="criteriaOption3">Criteria Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="form-group ml-56">
              <label htmlFor="form-select1">Item</label>
              <select
                id="itemSelect"
                className="form-control5"
                value={selectedItem}
                onChange={handleItemChange}
              >
                <option value="itemOption1">Item Option 1</option>
                <option value="itemOption2">Item Option 2</option>
                <option value="itemOption3">Item Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <label className=" ml-56">Authors</label>
            <div className="form-check ml-56">
           
              <input
                type="checkbox"
                className="form-check-input"
                id="myCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="myCheckbox">
                me
              </label>
              {/* <div className="form-select1 ml-56"> */}
              
              <select
                id="itemSelect"
                className="form-control5"
                value={selectedItem}
                onChange={handleItemChange}
              >
                <option value="itemOption1">Authors</option>
                <option value="itemOption2">Item Option 2</option>
                <option value="itemOption3">Item Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Add additional form-related components as needed */}
          </div>
        </div>
            </div>
           
   
  );
};



 
 
    



export default Library