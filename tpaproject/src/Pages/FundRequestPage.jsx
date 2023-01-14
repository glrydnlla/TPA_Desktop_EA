import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const FundRequest = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>FundRequest</div>
        <div>
            <Link to="/fundRequest/view"><button>View</button></Link>
            <Link to="/fundRequest/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default FundRequest
