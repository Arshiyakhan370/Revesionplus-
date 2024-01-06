import React, { Fragment } from 'react'
import './ListContainer.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import NavSideBar from './SideBarComponents/NavSideBar'

const FormAddUser = () => {
    
    const handleDelete = () => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this data!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            // Handle the confirmed delete action here
            Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
          }
        });
      };

   
    const userListData = [
        {
          name: 'aarabbanisadiq@hotmail.com',
          email: 'AArabbanisadiq@hotmail.com',
          role: 'IB Facilitator',
          mobile: '9667989159',
          expiryDate: '2023-10-14',
          id: 310,
        },
        {
            name: 'Dr. Abhay',
            email: 'Abhay.singh91286@gmail.com',
            role: 'IB Facilitator',
            mobile: '',
            expiryDate: '2023-10-14',
            id: 311,
          },
          {
            name: 'Afroz',
            email: 'afroz@ibglobalacademy.org',
            role: 'IB Facilitator',
            mobile: '9818805721',
            expiryDate: '2030-10-31',
            id: 312,
          },
          {
            name: 'Afroz',
            email: 'afroz@ibglobalacademy.org',
            role: 'IB Facilitator',
            mobile: '9818805721',
            expiryDate: '2030-10-31',
            id: 312,
          },
          {
            name: 'Dr. Abhay',
            email: 'Abhay.singh91286@gmail.com',
            role: 'IB Facilitator',
            mobile: '',
            expiryDate: '2023-10-14',
            id: 311,
          },
          {
            name: 'Dr. Abhay',
            email: 'Abhay.singh91286@gmail.com',
            role: 'IB Facilitator',
            mobile: '',
            expiryDate: '2023-10-14',
            id: 311,
          },
          {
            name: 'aarabbanisadiq@hotmail.com',
            email: 'AArabbanisadiq@hotmail.com',
            role: 'IB Facilitator',
            mobile: '9667989159',
            expiryDate: '2023-10-14',
            id: 310,
          },
          {
              name: 'Dr. Abhay',
              email: 'Abhay.singh91286@gmail.com',
              role: 'IB Facilitator',
              mobile: '',
              expiryDate: '2023-10-14',
              id: 311,
            },
            {
                name: 'aarabbanisadiq@hotmail.com',
                email: 'AArabbanisadiq@hotmail.com',
                role: 'IB Facilitator',
                mobile: '9667989159',
                expiryDate: '2023-10-14',
                id: 310,
              },
              {
                  name: 'Dr. Abhay',
                  email: 'Abhay.singh91286@gmail.com',
                  role: 'IB Facilitator',
                  mobile: '',
                  expiryDate: '2023-10-14',
                  id: 311,
                },
                {
                    name: 'aarabbanisadiq@hotmail.com',
                    email: 'AArabbanisadiq@hotmail.com',
                    role: 'IB Facilitator',
                    mobile: '9667989159',
                    expiryDate: '2023-10-14',
                    id: 310,
                  },
                  {
                      name: 'Dr. Abhay',
                      email: 'Abhay.singh91286@gmail.com',
                      role: 'IB Facilitator',
                      mobile: '',
                      expiryDate: '2023-10-14',
                      id: 311,
                    },
      ];
      
        const handleProfileClick = () => {
          // Implement logic for profile click
        };
      
        const handleUpdatePasswordClick = () => {
          // Implement logic for update password click
        };
      
        const handleDeleteClick = () => {
          // Implement logic for delete click
        };
      
        const handleEditClick = () => {
          // Implement logic for edit click
        };
    return (
        <Fragment>
              <div className="app-content content ">
    <div className="content-overlay"></div>
    <div className="header-navbar-shadow"></div>
       
 

    <div className="content-wrapper container-xxl p-0 ">
      <div className="content-header row"></div>
      <div className="content-body">
        <section id="responsive-datatable">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header border-bottom p-1">
                  <h4 className="card-title">User List</h4>
                  <Link
                    to="/add-user"
                    className="btn btn-round btn-gradient-primary float-end "
                  >
                    Add User
                  </Link>
                </div>
                <div className="card-datatable">
                  <div
                    id="datatable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer"
                  >
                      <div className="row">
  <div className="col-sm-12 col-md-6">
    <div className="d-flex align-items-center justify-content-between pt-4 pb-4" >
      <div className="dataTables_length" id="datatable_length float-left">
        <label>Show</label>
        <select
          name="datatable_length"
          aria-controls="datatable"
          // value={selectedValue}
          // onChange={handleSelectChange}
          className="form-select"
          style={{ width: '80px' }} 
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label>entries</label>
      </div>
      <div id="datatable_filter" className="dataTables_filter ms-3 float-right ml-56">
        <label>Search:</label>
        <input
          type="search"
          className="form-control"
          placeholder=""
          aria-controls="datatable"
        />
      </div>
    </div>
  </div>
</div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="dt-responsive table table-striped dataTable no-footer dtr-inline">
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '285px' }}
                                aria-label="Name: activate to sort column ascending"
                              >
                                Name
                              </th>
                              <th
                                className="sorting sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '241px' }}
                                aria-label="Email: activate to sort column descending"
                                aria-sort="ascending"
                              >
                                Email
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '104px' }}
                                aria-label="Role: activate to sort column ascending"
                              >
                                Role
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '63px' }}
                                aria-label="Mobile: activate to sort column ascending"
                              >
                                Mobile
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '56px' }}
                                aria-label="Expiry Date: activate to sort column ascending"
                              >
                                Expiry Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex="0"
                                aria-controls="datatable"
                                rowspan="1"
                                colspan="1"
                                style={{ width: '52px' }}
                                aria-label="Action: activate to sort column ascending"
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          {userListData.map((user, index) => (
                              <tr
                                key={user.id}
                                className={index % 2 === 0 ? 'even' : 'odd'}
                              >
                                <td className="dtr-control" tabIndex="0">
                                  {user.name}
                                </td>
                                <td className="sorting_1">{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.mobile}</td>
                                <td>{user.expiryDate}</td>
                                <td>
                                <div className="d-inline-flex">
        <Link
          className="pe-1 dropdown-toggle hide-arrow text-primary"
         to=""
          onClick={(e) => { e.preventDefault(); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash" onClick={handleDelete}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </Link>
        <div className="dropdown-menu dropdown-menu-end">
          <a href={`https://ibgakiosk.com/v2/users/profile-view/`} className="dropdown-item" onClick={handleProfileClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-file-text font-small-4 me-50"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Profile
          </a>
          <a href="javascript:;" className="dropdown-item" onClick={handleUpdatePasswordClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-file-text font-small-4 me-50"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Update Password
          </a>
          <a href={`https://ibgakiosk.com/v2/users/delete/`} className="dropdown-item delete-record" id="delete" onClick={handleDeleteClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2 font-small-4 me-50"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Delete
          </a>
        </div>
        <a href={`https://ibgakiosk.com/v2/users/edit/`} className="item-edit" onClick={handleEditClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit font-small-4"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </a>
      </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          </table>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col-sm-12 col-md-5">
                          <div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 83 entries</div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                          <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                          <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="datatable_previous">
                          <a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" className="page-link">Previous</a>
                          </li>
                          <li className="paginate_button page-item active"><a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                          </li>
                          <li className="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" className="page-link">2</a>
                          </li>
                          <li className="paginate_button page-item ">
                          <a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0" className="page-link">3</a>
                          </li>
                          <li className="paginate_button page-item ">
                          <a href="#" aria-controls="datatable" data-dt-idx="4" tabindex="0" className="page-link">4</a>
                          </li>
                          <li className="paginate_button page-item ">
                          <a href="#" aria-controls="datatable" data-dt-idx="5" tabindex="0" className="page-link">5</a>
                          </li>
                          <li className="paginate_button page-item disabled" id="datatable_ellipsis">
                          <a href="#" aria-controls="datatable" data-dt-idx="6" tabindex="0" className="page-link">…</a>
                          </li>
                          <li className="paginate_button page-item ">
                          <a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0" className="page-link">9</a>
                          </li>
                          <li className="paginate_button page-item next" id="datatable_next">
                          <a href="#" aria-controls="datatable" data-dt-idx="8" tabindex="0" className="page-link">Next</a>
                          </li>
                          </ul>
                          </div>
                          </div>
                          </div>
                          </div>
          
          
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
 </div>



        </Fragment>
    )
}



export default FormAddUser;