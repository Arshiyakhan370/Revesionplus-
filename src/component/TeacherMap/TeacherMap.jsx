import React, { useState } from 'react';
import './TeacherMap.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const TeacherMap = () => {
    const [teacherId, setTeacherId] = useState('');
    const [boardId, setBoardId] = useState('');
    const [sourceId, setSourceId] = useState('');
  
    const teacherOptions = [
     
      { value: '2', label: 'xyz [sakzishu]' },
      { value: "2",   label: "xyz  [sakzishu]"},
      { value: "3",   label: "yz  [teacher]"},
      { value: "4",   label: "yz  [igcse]"},
      { value: "6",   label: "yz  [ss]"},
      { value: "7",   label: "yz  [physics]"},
      { value: "8",   label: "r. Shankar Jha  [jhajishankar@gmail.com]"},
      { value: "10",   label: "Mr. S. Singh  [bshyamendra@gmail.com]"},
      { value: "12",   label: "Mr Rahul Khewadia  [khewadiarahul@gmail.com]"},
      { value: "12",  label: "Mr Rahul Khewadia  [khewadiarahul@gmail.com]"},
      { value: "12",   label: "Mr Rahul Khewadia  [khewadiarahul@gmail.com]"},
      { value: "15",   label: "xyz  [shiveshs]"},
      { value: "16",   label: "Mr Sanjay Singh  [scholarnd@gmail.com]"},
      { value: "17",   label: "xyz  [tanyab]"},
      { value: "18",   label: "xyz  [saritam]"},
      { value: "20",   label: "xyz  [Hareram]"},
      { value: "24",   label: "Mr. Harish Singh  [Singhharish662@gmail.com]"},
      { value: "27",   label: "Mr Azam Khan  [azam.iase@gmail.com]"},
      { value: "28",   label: "Mr. Jay Prakash  [jayprakash@ibglobalacademy.org]"},
      { value: "29",   label: "Mr Shahbaz Shirazi  [shirazijnu@gmail.com]"},
      { value: "30",   label: "Mr. Quyamuddin  [nizami.delhi@gmail.com] "},
      { value: "32",   label: "Anjali Rathi  [Anjali.rathi@ymail.com]"},
      { value: "34",   label: "Uggarsain Bhardwaj  [uggarsain25bhardwaj@gmail.com]"},
      { value: "36",   label: "xyz  [RatheeRaj]"},
      { value: "37",   label: "Sarita Mittal  [saritamitt@gmail.com]"},
      { value: "38",   label: "Moin Ahmed  [moin_alig@yahoo.com]"},
     
      { value: "39",   label: "Priyanka  [Priyanka123]"},
      { value: "39",   label: "Priyanka  [Priyanka123]"},
      { value: "40",   label: "Mrs. Sandhya Singh  [sandhyashdelnew@gmail.com]"},
      { value: "41",   label: "Mr. Hari Shankar Kumar  [Hari@ibglobalacademy.org]"},
      { value: "42",   label: "Musabani  [musabani@gmail.com]"},
      { value: "43",   label: "Mohd Sagheer Ahmad  [sagheer@ibglobalacademy.org]"},
      { value: "44",   label: "xyz  [Rundstedt]"},
      { value: "45",   label: "Dr Palash Chakraborty  [p_chakraborti@yahoo.co.in]"},
      { value: "46",   label: "Saksham Kaushik  [sakshamkaushik2006@gmail.com]"},
      { value: "47",   label: "Shiv Batra  [shivbatra2004@gmail.com]"},
      { value: "48",   label: "Shiv Batra-Student  [batrashiv63@gmail.com]"},
      { value: "49",   label: "Jasleen Singh Gill  [Jasleensinghgill@gmail.com]"},
      { value: "52",   label: "Muhammad Akram  [akram@ibglobalacademy.org]"},
      { value: "53",   label: "Sarfraz Javed  [sarfrazjavedjmi@gmail.com]"},
      { value: "54",   label: "Manoj Kumar  [manoj.writer25@gmail.com]"},
      { value: "56",   label: "Pankaj Kumar sharma  [pankaj@ibglobalacademy.org]"},
      { value: "57",   label: "Shahid Javed  [shahid@ibglobalacademy.org]"},
      { value: "58",   label: "Test Teacher  [pankajk846@gmail.com]"},
      { value: "59",   label: "Swati Dudhani  [swati.dudhani89@gmail.com]"},
      { value: "60",   label: "Andeep Kaur  [andeepgulati@gmail.com]"},
      { value: "61",   label: "INDRANI SINHA  [indranisinha_2007@rediffmail.com]"},
      { value: "62",   label: "  MINAKSHI GROVER  [minakshi1401@gmail.com]"},
      { value: "63",   label: "ZIA RAZAQUI  [ziarajaki96755@gmail.com]"},
      { value: "64",   label: "NAINA VAISH  [vaish.naina@yahoo.co.in]"},
    ];
  
    const boardOptions = [
      { value: '1', label: 'IB' },
      { value: '2', label: 'IGCSE' },
    ];
  
    const subjectOptions = [
      { value: '1', label: 'Subject 1' },
      { value: '2', label: 'Subject 2' },

    ];
    const teacherData = [
        { id: 2, name: 'xyz', board: '', subject: '' },
        { id: 3, name: 'xyz', board: '', subject: '' },
        { id: 3, name: 'xyz', board: '', subject: '' },
          { id: 4, name:"Mr. Shankar Jha", board: '', subject: '' },
          { id: 5, name:"Mr. S. Singh", board: '', subject: '' },
          { id: 6, name:"Mr Rahul Khewadia", board: '', subject: '' },
          { id: 7, name:"Mr Sanjay Singh", board: '', subject: '' },
          { id: 8, name:"xyz", board: '', subject: '' },
          { id: 9, name:"xyz", board: '', subject: '' },
          { id: 10, name:"xyz", board: '', subject: '' },
          { id: 11, name:"Mr. Harish Singh", board: '', subject: '' },
          { id: 12, name:"Mr Azam Khan", board: '', subject: '' },
          { id: 13, name:"Mr. Jay Prakash", board: '', subject: '' },
          { id: 14, name:"Mr Shahbaz Shirazi", board: '', subject: '' },
          { id: 15, name:"Mr. Quyamuddin", board: '', subject: '' },
          { id:16 , name:"Anjali Rathi", board: '', subject: '' },
          { id: 17, name:"Uggarsain Bhardwaj", board: '', subject: '' },
          { id:18, name:"xyz", board: '', subject: '' },
          { id:19, name:"Sarita Mittal", board: '', subject: '' },
          { id: 20, name:"Moin Ahmed", board: '', subject: '' },
          { id: 21, name:"Priyanka", board: '', subject: '' },
          { id: 22, name:"Mrs. Sandhya Singh", board: '', subject: '' },
          { id:23 , name:"Mr. Hari Shankar Kumar", board: '', subject: '' },
          { id:24 , name:"Musabani", board: '', subject: '' },
          { id:25 , name:"Mohd Sagheer Ahmad", board: '', subject: '' },
          { id: 26, name:"xyz", board: '', subject: '' },
          { id:27 , name:"Dr Palash Chakraborty", board: '', subject: '' },
          { id:28 , name:"Saksham Kaushik", board: '', subject: '' },
          { id: 29, name:"Shiv Batra", board: '', subject: '' },
           { id: 30, name:"Shiv Batra-Student", board: '', subject: '' },
          { id:31 , name:"Jasleen Singh Gill", board: '', subject: '' },
          { id: 32, name:"Muhammad Akram", board: '', subject: '' },
          { id:33 , name:"Sarfraz Javed", board: '', subject: '' },
          { id:34 , name:"Manoj Kumar", board: '', subject: '' },
          { id:35, name:"Pankaj Kumar sharma", board: '', subject: '' },
          { id: 36, name:"Shahid Javed", board: '', subject: '' },
          { id: 37, name:"Test Teacher", board: '', subject: '' },
          { id: 39, name:"Swati Dudhani", board: '', subject: '' },
          { id: 38, name:"Andeep Kaur", board: '', subject: '' },
          { id:40 , name:"INDRANI SINHA", board: '', subject: '' },
          { id: 41, name:"  MINAKSHI GROVER", board: '', subject: '' },
          { id: 42, name:"ZIA RAZAQUI", board: '', subject: '' },
          { id: 43, name:"NAINA VAISH", board: '', subject: '' },
      ];
    
     
    
      const handleEdit = (id) => {
       
        console.log(`Edit teacher with id: ${id}`);
      };
    
    const handleSubmit = (e) => {
      e.preventDefault();
     
    };
  
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
       
          Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
        }
      });
    };  
    const goBack = () => {
      window.history.back();
    };

 
  return (
    <div className="content-wrapper container-xxl p-0">
      <div className="content-body">
        <section className="bootstrap-select">
          <div className="row2">
           
            <div className="col-md-12 col-12">
              <div className="card2 ">
                <div className="card-header border-bottom">
                  <h4 className="card-title">Teacher Subject Mapping</h4>
                </div>
                <div className="card-body pt-2">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" value="i3yWk470KUcPPTZkbqfEobvfhZFiIDZAHBE0nfsh" />
                    <div className="row2 ">
                      <div className="col-md-3 col-md-6 col-12 ">
                        <label className="form-label" htmlFor="select2-multiple">Teacher</label>
                        <div className="position-relative">
                          <select
                            className="select2 form-select select2-hidden-accessible"
                            id="select2-multiple"
                            name="teacher_id"
                            required=""
                            value={teacherId}
                            onChange={(e) => setTeacherId(e.target.value)}
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <optgroup label="Teacher List">
                              {teacherOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="board">Board</label>
                          <select
                            className="form-select"
                            id="boardID-st"
                            name="boardID"
                            value={boardId}
                            onChange={(e) => setBoardId(e.target.value)}
                          >
                            <option value="">Select Board Types</option>
                            {boardOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12">
                        <div className="mb-1">
                          <label className="form-label" htmlFor="sourceName">Subject Name</label>
                          <select
                            className="form-select"
                            id="sourceID-st"
                            name="sourceID"
                            value={sourceId}
                            onChange={(e) => setSourceId(e.target.value)}
                          >
                            <option>select board first</option>
                            {subjectOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                      <div className='flex flex-row justify-between mt-8'>
                    <button className="btn btn-gradient-success waves-effect waves-float waves-light w-[70px]" onClick={goBack} >
                           <i className="fas fa-arrow-left"></i> Back
                    </button>
                        <button
                          type="submit"
                          className="btn btn-gradient-success waves-effect waves-float waves-light me-1"
                        >
                          Submit
                        </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="col-12">
              <div className="card2 ">
                <div className="card-datatable ">
                  <table className="datatables-ajax table table-striped table-responsive">
                  <thead>
        <tr>
          <th>Teacher Name</th>
          <th>Board Name</th>
          <th>Subject Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {teacherData.map((teacher) => (
          <tr key={teacher.id}>
            <td>{teacher.name}</td>
            <td>{teacher.board}</td>
            <td>{teacher.subject}</td>
            <td>
              <Link
              to=""
                className="item-trash text-danger circle"
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Delete"
                onClick={() => handleDelete(teacher.id)}
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </Link>
              &nbsp;&nbsp;
              <a
                href={`https://ibgakiosk.com/v2/assessment-teachermap/teacher-map/edit/${teacher.id}`}
                className="item-edit text-info circle"
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Edit"
                onClick={() => handleEdit(teacher.id)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  

  )
}

export default TeacherMap;