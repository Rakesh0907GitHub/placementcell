import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import {
    Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom';

function ResumeCreate() {
    const [details, setdetails] = useState({ firstname: "", email: "", location: "" ,pin: "" ,linkedin: "" ,contact: "" ,currentinstitute: "" ,currentpassingyear: "" ,currentpoints: "" ,lastinstitute: "" ,lastpassingyear: "",lastpoints: "" ,projectone: "" ,descriptionone: "" ,projecttwo: "",descriptiontwo:"",projectthree:"",descriptionthree:"",skills:"",achievement:"" })
    let navigate = useNavigate()
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createresume", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname: details.firstname,email: details.email, location: details.location,pin: details.pin,linkedin: details.linkedin,contact:details.contact,currentinstitute:details.currentinstitute,currentpassingyear:details.currentpassingyear,currentpoints:details.currentpoints,lastinstitute:details.lastinstitute,lastpassingyear:details.lastpassingyear,lastpoints:details.lastpoints,projectone:details.projectone,descriptionone:details.descriptionone,projecttwo:details.projecttwo,descriptiontwo:details.descriptiontwo,projectthree:details.projectthree,skills:details.skills,achievement:details.achievement})
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter Valid Details !")
        }
        else {
            navigate("/login");

        }

    }
    const onChange = (event) => {
        setdetails({ ...details, [event.target.name]: event.target.value });
    }
    return (
        <form onSubmit={handleFormSubmit}>
        <MDBContainer fluid>

            <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

            <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                <MDBCardBody className='text-center'>

                    <h2 className="fw-bold">Create Resume</h2>


                </MDBCardBody>
                <MDBContainer fluid className='h-custom'>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12' className='m-5'>

                            <MDBCard className='card-registration card-registration-2' style={{ borderRadius: '15px' }}>

                                <MDBCardBody className='p-0'>

                                    <MDBRow>

                                        <MDBCol md='4' className='p-5 bg-white' style={{border:"2px solid black"}}>

                                            <h3 className="fw-normal mb-5" style={{ color: 'black' }}>General Infomation</h3>


                                            <MDBRow>

                                                <MDBCol md='12'>
                                                    <FormGroup>
                                                        <Label for="examplefirstname">FullName</Label>
                                                        <Input name="firstname" value={details.firstname} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>

                                            </MDBRow>


                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input name="email" value={details.email } placeholder="with a placeholder" onChange={onChange} />
                                            </FormGroup>

                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="examplelocation">Location</Label>
                                                        <Input name="location" value={details.location} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>

                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="examplePIN">Postel PIN</Label>
                                                        <Input name="pin" value={details.pin} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>

                                                </MDBCol>
                                                <FormGroup>
                                                    <Label for="exampleLinkedin">LinkedinURL</Label>
                                                    <Input name="linkedin" value={details.linkedin} placeholder="with a placeholder" onChange={onChange} />
                                                </FormGroup>
                                            </MDBRow>
                                            <FormGroup>
                                                <Label for="examplecontact">Contact No</Label>
                                                <Input name="contact" value={details.contact} placeholder="with a placeholder" onChange={onChange} />
                                            </FormGroup>
                                        </MDBCol>


                                        <MDBCol md='4' className='p-5 bg-black'>

                                            <h3 className="fw-normal mb-5 text-white" style={{ color: '#4835d4' }}>Educational Information</h3>
                                            <MDBRow style={{border:"2px solid white", borderRadius:"10px"}}>

                                            <Label for="example" style={{color:'white'}}>Current Education</Label>
                                                <MDBCol md='12'>
                                                    <FormGroup>
                                                        <Label for="exampleinstitute" style={{color:'white'}}>Institute</Label>
                                                        <Input name="currentinstitute" value={details.currentinstitute} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampleyear" style={{color:'white'}}>Passing Year</Label>
                                                        <Input name="currentpassingyear" value={details.currentpassingyear} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="examplecgpi" style={{color:'white'}}>CGPI</Label>
                                                        <Input name="currentpoints" value={details.currentpoints} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                            </MDBRow>
                                         
                                         
                                            <MDBRow style={{marginTop:"5px",border:"2px solid white", borderRadius:"10px"}}>

                                            <Label for="examplelasteducation" style={{color:'white'}}>Last Education</Label>
                                                <MDBCol md='12'>
                                                    <FormGroup>
                                                        <Label for="examplelastinstitute" style={{color:'white'}}>Institute</Label>
                                                        <Input name="lastinstitute" value={details.lastinstitute} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="examplelastyear" style={{color:'white'}}>Passing Year</Label>
                                                        <Input name="lastpassingyear" value={details.lastpassingyear} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="examplecgpi" style={{color:'white'}}>CGPI</Label>
                                                        <Input name="lastpoints" value={details.lastpoints} placeholder="with a placeholder" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                            </MDBRow>

                                            

                                        </MDBCol>

                                        <MDBCol md='4' className='p-5 bg-white' style={{border:"2px solid black"}}>

                                            <h3 className="fw-normal mb-5" style={{ color: 'black' }}>Technical Information</h3>


                                            <MDBRow>

                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampleprojectone">Project1</Label>
                                                        <Input name="projectone" value={details.projectone} placeholder="project" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampledescriptionone">description</Label>
                                                        <Input name="descriptionone" value={details.descriptionone} placeholder="About Project" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampleprojecttwo">Project2</Label>
                                                        <Input name="projecttwo" value={details.projecttwo} placeholder="Optional" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampledescriptiontwo">description</Label>
                                                        <Input name="descriptiontwo" value={details.descriptiontwo} placeholder="Optional" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampleprojectthree">Project3</Label>
                                                        <Input name="projectthree" value={details.projectthree} placeholder="Optional" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>

                                                <MDBCol md='6'>
                                                    <FormGroup>
                                                        <Label for="exampledescriptionthree">description</Label>
                                                        <Input name="descriptionthree" value={details.descriptionthree} placeholder="Optional" onChange={onChange} />
                                                    </FormGroup>
                                                </MDBCol>
                                            </MDBRow>


                                            <FormGroup>
                                                <Label for="exampleSkills">Skills</Label>
                                                <Input name="skills" value={details.skills} placeholder="with a placeholder" onChange={onChange} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleachievemts">Achievements</Label>
                                                <Input name="achievement" value={details.achievement} placeholder="About Achievements" onChange={onChange} />
                                            </FormGroup>

                                            
                                        </MDBCol>
                                    </MDBRow>


                                </MDBCardBody>

                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <MDBBtn color='dark' size='lg'>Create</MDBBtn>
            </MDBCard>
            
        </MDBContainer>
        </form>
    );
}

export default ResumeCreate;