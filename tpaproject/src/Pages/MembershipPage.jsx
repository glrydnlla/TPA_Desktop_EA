import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const MembershipPage = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>Membership Page</div>
        <div>
            <Link to="/membership/view"><button>View</button></Link>
            <Link to="/membership/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default MembershipPage
