import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const PromoPage = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>Promo Page</div>
        <div>
            <Link to="/promo/view"><button>View</button></Link>
            <Link to="/promo/insert"><button>Insert</button></Link>
            {/* <Link to="/food/updatestock"><button>Update</button></Link> */}
        </div>
        <Outlet/>
    </>
    
  )
}

export default PromoPage
