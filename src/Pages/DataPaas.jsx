import React from 'react'
import StudentAdd from '../component/Dashboard Components/userManage/StudentAdd';
import ListContainer from '../component/Dashboard Components/userManage/ListContainer';

const DataPaas = () => {
  
    const [userListData, setUserListData] = useState([
       
      ]);
    
      const handleAddUserToList = (newUserData) => {
     
        setUserListData((prevUserList) => [...prevUserList, newUserData]);
      };
    
      return (
        <div>
             <StudentAdd onAddUserToList={handleAddUserToList} />
          <ListContainer userListData={userListData} />
        </div>
      );
    };

export default DataPaas