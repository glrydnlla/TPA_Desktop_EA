import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
// import { Link } from 'react-router-dom';

export function NavBar() {
    const logout = async () => {
        await signOut(auth);        
    }  

    if (sessionStorage.getItem("currentRole") === "Manager") 
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/employee">Employee</Nav.Link>
            <Nav.Link href="/warningletter">Warning Letter</Nav.Link>
            <Nav.Link href="/terminationletter">Termination Letter</Nav.Link>
            <Nav.Link href="/resignationletter">Resignation Letter</Nav.Link>
            <Nav.Link href="/movie">Movie</Nav.Link>
            <Nav.Link href="/externalParties">External Parties</Nav.Link>
            <Nav.Link href="/fundRequest">Fund Request</Nav.Link>
            <Nav.Link href="/food">Food</Nav.Link>
            <Nav.Link href="/promo">Promo</Nav.Link>
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/leaveRequest">Leave Request</Nav.Link>
            <Nav.Link href="/salaryRequest">Salary Request</Nav.Link>
            <Nav.Link href="/facility">Facility</Nav.Link>
            <Nav.Link href="/employeeShift">Employee Shift</Nav.Link>
            <Nav.Link href="/movieSchedule">Generate Schedule</Nav.Link>
            <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
            {/* <Link to="/login" onClick={logout}>Logout</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavBar;
