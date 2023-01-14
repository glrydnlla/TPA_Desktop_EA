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
        <div>Movie Schedule</div>
        <div>
            <Link to="/movieSchedule/view/pending"><button>View Pending Movie</button></Link>
            <Link to="/movieSchedule/view/generated"><button>View Generated Movie</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default EmployeePage
