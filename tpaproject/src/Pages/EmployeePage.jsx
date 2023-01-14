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
        <div>EmployeePage</div>
        <div>
            <Link to="/employee/view"><button>View</button></Link>
            <Link to="/employee/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default EmployeePage
