import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link,useNavigate } from 'react-router-dom';
import {
    Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { cleanup } from '@testing-library/react';


function CompanyRegister() {
    const [details, setdetails] = useState({ name: "", email: "", password: "", contact: "" })
    let navigate = useNavigate()
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/addcompany", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: details.name,email: details.email, password: details.password,contact: details.contact })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Details !")
        }
        else {
            navigate("/admindashboard");

        }

    }

    const onChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Company Registeration</p>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <Input name="name" value={details.name} placeholder="Enter name" onChange={onChange} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <Input name="email" value={details.email} placeholder="Enter email" onChange={onChange} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <Input name="password" value={details.password} placeholder="Enter password" onChange={onChange} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon className="fa fa-address-book me-3" size='lg' />
                                    <Input name="contact" value={details.contact} placeholder="Enter contact" onChange={onChange} />
                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </form>
    );
}

export default CompanyRegister;