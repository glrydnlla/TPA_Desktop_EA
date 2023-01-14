import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import { NavBar } from '../Component/Navbar';

const TerminationLetterPage = () => {
  return (
    <>
        <NavBar/>
        <div>Termination Letter</div>
        <div>
            <Link to="/terminationletter/view/Pending">
              <button>View Pending Termination Letters</button>
            </Link>
            <Link to="/terminationletter/view/Accept">
              <button>View Accept Termination Letters</button>
            </Link>
            <Link to="/terminationletter/view/Revise">
              <button>View Revise Termination Letters</button>
            </Link>
            <Link to="/terminationletter/view/Reject">
              <button>View Reject Termination Letters</button>
            </Link>
            <Link to="/terminationletter/issue">
              <button>Issue Termination Letters</button>
            </Link>
            {/* <Link to="/warningletter/insert">Insert</Link> */}
        </div>
        <Outlet/>
    </>
  )
}

export default TerminationLetterPage