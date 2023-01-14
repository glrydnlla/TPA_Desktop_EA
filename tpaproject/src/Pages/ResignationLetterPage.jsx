import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const ResignationLetterPage = () => {
  return (
    <>
        <NavBar/>
        <div>Resignation Letter</div>
        <div>
            <Link to="/resignationletter/view/Pending">
              <button>View Pending Resignation Letters</button>
            </Link>
            <Link to="/resignationletter/view/Accept">
              <button>View Accept Resignation Letters</button>
            </Link>
            <Link to="/resignationletter/view/Revise">
              <button>View Revise Resignation Letters</button>
            </Link>
            <Link to="/resignationletter/view/Reject">
              <button>View Reject Resignation Letters</button>
            </Link>
            <Link to="/resignationletter/issue">
              <button>Issue Resignation Letters</button>
            </Link>
            {/* <Link to="/warningletter/insert">Insert</Link> */}
        </div>
        <Outlet/>
    </>
  )
}

export default ResignationLetterPage