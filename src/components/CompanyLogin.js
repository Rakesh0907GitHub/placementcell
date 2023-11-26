import React,{useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link ,useNavigate} from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
function CompanyLogin() {
    const [details, setdetails] = useState({email: "", password: "" })
  let navigate = useNavigate()
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/logincompany", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: details.email, password: details.password})
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Details !")
    }
    else
    {
      localStorage.setItem("companyEmail",details.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("companyEmail"))
      navigate("/companydashboard");

    }
  }
  const onChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  }
  return (
    <form onSubmit={handleFormSubmit}>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Hii Team</p>
          </div>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input name="email" value={details.email} placeholder="Enter email" onChange={onChange} />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input name="password" value={details.password} placeholder="Enter password" onChange={onChange} />
          </FormGroup>

          
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

      
    </MDBContainer>
    </form>
  );
}

export default CompanyLogin;
