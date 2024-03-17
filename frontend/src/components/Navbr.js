import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navbr() {
  const navigate = useNavigate();
  const handlelogout=()=>{
      localStorage.removeItem("authToken");
      localStorage.removeItem("studentEmail");
      localStorage.removeItem("companyEmail");
      navigate("/");

  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{border:"2px solid black"}}>
      <Container>
        <Navbar.Brand ><Link style={{ display: 'flex', marginRight: 10 }} to="/">PlacementCell</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {(localStorage.getItem("studentEmail"))
            ?
            <Nav.Link href='#'>
                <Link style={{ display: 'flex', marginRight: 10 }} to="/myappliedjobs">MyApplications</Link>
            </Nav.Link>
            :""
            }
            
            
            {(!localStorage.getItem("authToken"))
            ?
            <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link style={{ display: 'flex', marginRight: 10 }} to="/registration">Student Registration</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link style={{ display: 'flex', marginRight: 10 }} to="/login">Login</Link></NavDropdown.Item>
              
            </NavDropdown>
            :
            <Nav.Link  onClick={handlelogout}>Logout</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        
        <Nav.Link href='#'>
                <Link style={{ display: 'flex', marginRight: 10 }} to="/adminlogin">Admin</Link>
            </Nav.Link>
            <Nav.Link href='#'>
                <Link style={{ display: 'flex', marginRight: 10 }} to="/companylogin">CompanyLogin</Link>
            </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Navbr;