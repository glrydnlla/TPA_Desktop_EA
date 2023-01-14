import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const FoodPage = () => {

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>Food Page</div>
        <div>
            <Link to="/food/view"><button>View</button></Link>
            <Link to="/food/insert"><button>Insert</button></Link>
            {/* <Link to="/food/updatestock"><button>Update</button></Link> */}
        </div>
        <Outlet/>
    </>
    
  )
}

export default FoodPage
