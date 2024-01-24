import React, { Fragment } from 'react'
import Nav from '../component/PracticeAssignment/Nav'
import FilterForm from '../component/createAssignment/FilterForm'
import Navbar1 from '../component/Dashboard Components/Buttons1'
import AssignmentCreate from '../component/StudentDashboard/AssignmentCreate'
import Assignment from '../component/createAssignment/Assignment'

const FilterFormAndQuestion = () => {
  return (
    <Fragment>
        <Nav/>
        <Navbar1/>
        <FilterForm/>
        {/* <AssignmentCreate/> */}
        <Assignment/>
    </Fragment>
  )
}

export default FilterFormAndQuestion