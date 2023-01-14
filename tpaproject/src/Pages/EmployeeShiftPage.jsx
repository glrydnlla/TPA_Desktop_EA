import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const EmployeePage = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>Employee Shift Page</div>
        <div>
            <Link to="/employeeShift/view"><button>View</button></Link>
            <Link to="/employeeShift/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default EmployeePage
