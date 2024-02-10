import React, { useState } from "react";
import { addUser } from "../store/UseListSlice";
import { useDispatch, useSelector } from "react-redux"
import StudentAdd from "../component/Dashboard Components/userManage/StudentAdd";
import ListContainer from "../component/Dashboard Components/userManage/ListContainer";


const UserdataAdded = () => {
 

  
    const dispatch = useDispatch();
    const userListData = useSelector((state) => state.userList);
  
    const addStudent = (user) => {
      dispatch({ type: "ADD_USER", payload: user });
    };
  // const addStudent = (userListDataAdd) => {
  //   setUserListData([...userListData, { ...userListDataAdd, id: userListData.length + 1 }]);
  // };
  
  return (
    <div>
      <StudentAdd addStudent={addStudent} />
        {userListData && userListData.length > 0 && (
        <ListContainer userListData={userListData} />
      )}
    
    </div>
  );
};



export default UserdataAdded