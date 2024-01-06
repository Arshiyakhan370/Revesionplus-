
import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import './StudentAdd.css';
const StudentAdd = () => {
  

  const [usertype, setUsertype] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
                            Usertype <span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <select
                            className="form-select1"
                            id="select-country1"
                            name="usertype"
                            value={usertype}
                            onChange={(e) => setUsertype(e.target.value)}
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
                            User Name<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="text"
                            id="basic-addon-name"
                            className="form-control1"
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
                            User Email<span className="text-danger ml-2 fs-4">*</span>
                          </label>
                          <input
                            type="email"
                            id="basic-default-email1"
                            className="form-control1"
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
                          <label className="form-label" htmlFor="basic-default-mobile">
                            User Mobile
                          </label>
                          <input
                            type="tel"
                            id="basic-default-mobile"
                            className="form-control1"
                            placeholder="9145780000"
                            name="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            aria-label="9145780000"
                            autoComplete="user-mobile"
                           
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter a valid mobile</div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-1 col-lg-4">
                        <label className="form-label" htmlFor="fp-default">
                          Set Inactivation Date<span className="text-danger ml-2 fs-4">*</span>
                        </label>
                        <Flatpickr
                          id="fp-default"
                          className="form-control1 flatpickr-basic flatpickr-input"
                          placeholder="YYYY-MM-DD"
                          options={{ dateFormat: 'Y-m-d' }}
                          value={expireDate}
                          onChange={(date) => setExpireDate(date[0])}
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
                            className="form-control1"
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
                    </div>
                    <div className='flex flex-row justify-between ml-8 mr-20'>
                    <button className="btn btn-gradient-success waves-effect waves-float waves-light w-[70px]" onClick={goBack} >
                           <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <button type="submit" className="btn btn-gradient-success waves-effect waves-float waves-light  w-[70px]">
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

export default StudentAdd