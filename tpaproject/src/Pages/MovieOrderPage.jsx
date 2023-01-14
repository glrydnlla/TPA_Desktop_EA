import React, { useState } from 'react';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const MovieOrderPage = () => {

  const navigate = useNavigate()
  // const [id, setId] = useState()

  // const viewStudio = async (id) => {
    
  //   navigate(`/movieOrder/view/studio/1`)
  // }

  return (
    <>
        {/* <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div> */}
        <NavBar/>
        <div>MovieOrderPage</div>
        <div>
            <button  onClick={navigate(`movieOrder/view/studio1`)}>Studio 1</button>
            {/* <Link to="/movieOrder/insert"><button>Insert</button></Link> */}
        </div>
        <Outlet/>
    </>
    
  )
}

export default MovieOrderPage
