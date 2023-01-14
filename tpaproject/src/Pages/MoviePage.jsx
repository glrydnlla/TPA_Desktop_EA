import React, {useState} from 'react';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const WarningLetterPage = () => {

  const viewFilteredDataByStatus = async () => {
      
  }

  const [updatedStatus, setUpdatedStatus] = useState("Pending");

  const selectedID = "0000";
  const navigate = useNavigate()

  return (
    <>
        <NavBar/>
        <div>Warning Letter</div>
        <div>
          {/* <select name="" id="" defaultValue={selectedID} onChange={(event) => {
              console.log("status"+event.target.value)
              setUpdatedStatus(event.target.value)
              // sessionStorage.setItem("viewWarningLetterStatus", updatedStatus)
          }}>
              <option value="Pending" id='0000'>Pending</option>
              <option value="Revise" id='1111'>Revise</option>
              <option value="Accept" id='2222'>Accept</option>
              <option value="Reject" id='3333'>Reject</option>
          </select> */}
            <Link to="/movie/view">
              <button>View All Movie</button>
            </Link>
            <Link to="/movie/insert">
              <button>Insert Movie</button>
            </Link>
            {/* <Link to="/warningletter/insert">Insert</Link> */}
        </div>
        <Outlet/>
    </>
    
  )
}

export default WarningLetterPage
