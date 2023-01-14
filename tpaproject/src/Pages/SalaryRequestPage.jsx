import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const SalaryRequest = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>Salary Request</div>
        <div>
            <Link to="/salaryRequest/view"><button>View</button></Link>
            <Link to="/salaryRequest/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default SalaryRequest
