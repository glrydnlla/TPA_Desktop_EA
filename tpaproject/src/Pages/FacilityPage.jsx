import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const FacilityPage = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>FacilityPage</div>
        <div>
            <Link to="/facility/view"><button>View</button></Link>
            <Link to="/facility/insert"><button>Insert</button></Link>
        </div>
        <Outlet/>
    </>
    
  )
}

export default FacilityPage
