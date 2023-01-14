import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const LeaveRequestPage = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>LeaveRequestPage</div>
        <div>
            <Link to="/leaveRequest/view"><button>View</button></Link>
            <Link to="/leaveRequest/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default LeaveRequestPage
