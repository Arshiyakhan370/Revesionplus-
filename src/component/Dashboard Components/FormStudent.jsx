
import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import './StudentAdd.css';
import './FormStudent.css';
const FormStudent = () => {
    const [teacher, setTeacher] = useState('');
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [inactiveDate, setInactiveDate] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  const handleProfilePicChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePic(selectedFile);
  
    
    const reader = new FileReader();
    reader.onloadend = () => {
   
    };
    reader.readAsDataURL(selectedFile);
  };
  const goBack = () => {
    
    window.history.back();
  };
  return (
 
    <div className="content-wrapper container-xxl p-0">
      <div className="content-header row1"></div>
      <div className="content-body">
        <section className="bs-validation">
          <div className="row1">
           
            <div className="col-md-12 col-12">
              <div className="card1">
                <div className="card-header">
                  <h4 className="card-title">Add User</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value="NXmxb0OI9supdjDcdwh44gsIlBKhmEsv3HuyCYjO" />
                    <div className="row1">
                      <div className="col-md-6 col-lg-4 ">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="select-country1">
                          teacher <span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <select
                            className="form-select2 "
                            id="select-country1"
                            name="usertype"
                            value={teacher}
                            onChange={(e) => setTeacher(e.target.value)}
                            required
                          >
                            <option value="">Select UserType</option>
                            <option value="SuperAdmin">SuperAdmin</option>
                            <option value="Admin">Admin</option>
                            <option value="IB Facilitator">IB Facilitator</option>
                            <option value="Assignment Editor/IB Facilitator">Assignment Editor/IB Facilitator</option>
                          </select>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please select usertype</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="basic-addon-name">
                             Name<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="text"
                            id="basic-addon-name"
                            className="form-control2 pl-[2rem] pr-[2rem]"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            aria-label="Name"
                            aria-describedby="basic-addon-name"
                            autoComplete="user-name"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="basic-default-email1">
                             Email<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="email"
                            id="basic-default-email1"
                            className="form-control2"
                            placeholder="john.doe@email.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="john.doe@email.com"
                            autoComplete="user-email"
                            required
                          />

                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter a valid email</div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="basic-addon-name">
                            Parent Name<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="text"
                            id="basic-addon-name"
                            className="form-control2"
                            placeholder="Name"
                            name="name"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            aria-label="Name"
                            aria-describedby="basic-addon-name"
                            autoComplete="user-name"
                            required
                          />
                          </div>
                          </div> <div className="col-md-6 col-lg-4">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="basic-default-email1">
                            Parent Email<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="email"
                            id="basic-default-email1"
                            className="form-control2"
                            placeholder="john.doe@email.com"
                            name="email"
                            value={parentEmail}
                            onChange={(e) => setParentEmail(e.target.value)}
                            aria-label="john.doe@email.com"
                            autoComplete="user-email"
                            required
                          />

                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter a valid email</div>
                        </div>
                      </div>
                     
                      <div className="col-md-6 mb-1 col-lg-4">
                        <label className="form-label" htmlFor="fp-default">
                          Set Inactivation Date<span className="text-danger ml-2 fs-4">*</span>
                        </label>
                        <Flatpickr
                          id="fp-default"
                          className="form-control2 flatpickr-basic flatpickr-input"
                          placeholder="YYYY-MM-DD"
                          options={{ dateFormat: 'Y-m-d' }}
                          value={inactiveDate}
                          onChange={(date) => setInactiveDate(date[0])}
                        />
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div className="mb-2">
                          <label className="form-label" htmlFor="basic-default-password1">
                            User Password<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="password"
                            id="basic-default-password1"
                            className="form-control2"
                            placeholder="············"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="user-password"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your password.</div>
                        </div>
                      </div>
                    
                    <div className="col-md-6 col-lg-4">
  <div className="mb-2">
  <label className="form-label" htmlFor="profile-pic">
    Profile Picture<span className="text-danger ml-2 fs-4">*</span>
  </label>
  <div className="d-flex align-items-center">
   
    <input
      type="file"
      id="profile-pic"
      className="form-control2 "
      name="profilePic"
      accept="image/*"
      onChange={(e) => handleProfilePicChange(e)}
      required
    />
    
  </div>
  <div className="valid-feedback">Looks good!</div>
  <div className="invalid-feedback">Please choose a profile picture.</div>
</div>
</div>
 {profilePic && (
      <img
        src={URL.createObjectURL(profilePic)}
        alt="Profile Preview"
        className="img-fluid img-thumbnail rounded-circle me-3"
        style={{ maxWidth: '100px', maxHeight: '100px' }}
      />
    )}
    {!profilePic && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        className="bi bi-person-circle mt-10"
        viewBox="0 0 16 16"
      >
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.34 11.46C4.54 10.61 6.77 10 8 10s3.46.61 5.34 1.46A7 7 0 0 0 8 1z" />
        <path
          fillRule="evenodd"
          d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
        />
      </svg>
    )}
</div>
<div className='flex flex-row justify-between mt-8 ml-8 mr-10'>
                    <button className="btn btn-gradient-success waves-effect waves-float waves-light w-[90px]" onClick={goBack} >
                           <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <button type="submit" className="btn btn-gradient-success waves-effect waves-float waves-light  w-[90px]">
                      Add
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Bootstrap Validation */}
          </div>
        </section>
      </div>
    </div>
 
  )
}




export default FormStudent;