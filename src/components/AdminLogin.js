import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link ,useNavigate} from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
function AdminLogin() {

  const [details, setdetails] = useState({email: "", password: "" })
  let navigate = useNavigate()
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginadmin", {
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
      //localStorage.setItem("studentEmail",details.email)
      //localStorage.setItem("authToken",json.authToken)
      
      navigate("/admindashboard");

    }
  }
  const onChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/e3/This_is_the_logo_of_NIT_Calicut.svg"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The NITC Team</h4>
            </div>

            

            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input name="email" value={details.email} placeholder="Enter email" onChange={onChange} />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input  type='password' name="password" value={details.password} placeholder="Enter password" onChange={onChange} />
          </FormGroup>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>Login</MDBBtn>
            </div>

            
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </form>
  );
}

export default AdminLogin;