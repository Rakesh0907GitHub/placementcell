import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { cleanup } from '@testing-library/react';
import { useNavigate} from 'react-router-dom';


function Registration() {
  let navigate = useNavigate()
  const [details, setdetails] = useState({ name: "", rollno: "", email: "", password: "" })
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: details.name, rollno: details.rollno,email:details.email,password:details.password})
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Details !")
    }
    else{
      navigate("/resumecreate");
    }
  }

  const onChange = (event) => {
    setdetails({ ...details, [event.target.name]: event.target.value });
  }

  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>
                <form onSubmit={handleFormSubmit}>
                  <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                    <h3 className="mb-5 text-uppercase fw-bold">Student registration form</h3>

                    <MDBRow>

                      <MDBCol md='6'>
                        <FormGroup>
                          <Label for="examplename">FullName</Label>
                          <Input name="name" value={details.name} placeholder="Enter Fullname" onChange={onChange} />
                        </FormGroup>
                      </MDBCol>

                      <MDBCol md='6'>
                        <FormGroup>
                          <Label for="exampleEmail">Roll-no</Label>
                          <Input type="rollno" name="rollno" value={details.rollno} id="examplecontact" placeholder="Institute rollno" onChange={onChange} />
                        </FormGroup>
                      </MDBCol>

                    </MDBRow>


                    

                    <MDBRow>

                      <MDBCol md='6'>
                      </MDBCol>

                      <MDBCol md='6'>
                      </MDBCol>

                    </MDBRow>


                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input name="email" value={details.email} placeholder="Enter email" onChange={onChange} />
                    </FormGroup>

                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input name="password" value={details.password} placeholder="Enter password" onChange={onChange} />
                    </FormGroup>
                    <div className="d-flex justify-content-center pt-3" style={{ content: "center" }}>
                      <MDBBtn color='light' size='lg' onClick={cleanup}>Reset all</MDBBtn>
                      <MDBBtn type='submit' className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                    </div>
                    <Link to="/login" className='m-3 btn btn-danger'>Already User ?</Link>
                  </MDBCardBody>
                </form>
              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Registration;