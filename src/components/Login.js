import React,{useState} from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Link ,useNavigate} from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

function Login() {
  const [details, setdetails] = useState({email: "", password: "" })
  let navigate = useNavigate()
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
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
      localStorage.setItem("studentEmail",details.email)
      localStorage.setItem("authToken",json.authToken)
      
      navigate("/");

    }
  }

  const onChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  }
  return (
    <form onSubmit={handleFormSubmit}>
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input name="email" value={details.email} placeholder="Enter email" onChange={onChange} />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input name="password" value={details.password} placeholder="Enter password " onChange={onChange} />
          </FormGroup>


          

          <MDBBtn className="mb-4 w-100" size="lg" type='submit'>Sign in</MDBBtn>

          

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </form>
  );
}

export default Login;