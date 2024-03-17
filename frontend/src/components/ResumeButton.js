import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import ViewResume from './ViewResume';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { Container } from 'reactstrap';


export default function ResumeButton(props) {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleOpen = () => setTopRightModal(!topRightModal);



  return (
    <>

      
      <button type="button" class="btn btn-outline-info" data-mdb-ripple-color="dark" onClick={toggleOpen}>Resume</button>
      <MDBModal
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        onHide={setTopRightModal}
      >

        <MDBContainer className="py-5 h-100">

          <MDBRow className="justify-content-center align-items-center h-100">

            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBBtn color='none' style={{ alignItems: 'right' }} className='btn-close btn-close-white' onClick={toggleOpen}></MDBBtn>
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ backgroundColor: '#2a696d', borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">{props.resume.firstname}</MDBTypography>
                    <MDBCardText>{props.resume.location}</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">

                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">General Information</MDBTypography>
                      <hr className="mt-0 mb-4" />

                      <MDBCardBody className="p-0">
                        <MDBListGroup flush className="rounded-3">
                          <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fas icon="user fa-lg text-warning" />
                            <MDBCardText>{props.resume.firstname}</MDBCardText>
                          </MDBListGroupItem>
                          <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fas icon="envelope-square" style={{ color: '#333333' }} />
                            <MDBCardText>{props.resume.email}</MDBCardText>
                          </MDBListGroupItem>
                          <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fas icon="globe" style={{ color: '#55acee' }} />
                            <MDBCardText>{props.resume.location}</MDBCardText>
                          </MDBListGroupItem>
                          <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fas icon="location-arrow" style={{ color: '#ac2bac' }} />
                            <MDBCardText>{props.resume.pin}</MDBCardText>
                          </MDBListGroupItem>
                          <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fab icon="fa-brands fa-linkedin" style={{ color: '#3b5998' }} />
                            <MDBCardText>linkedin</MDBCardText>
                          </MDBListGroupItem>
                        </MDBListGroup>
                      </MDBCardBody>


                      <MDBTypography tag="h6">Educational Information</MDBTypography>
                      <hr className="mt-0 mb-1" />
                      


                      <div>
                      Current Education
                      
                      <MDBCardBody style={{border:"2px solid black"}}>
                        <MDBRow>
                          <MDBCol sm="8">
                            <MDBCardText>Institute</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="4">
                            <MDBCardText className="text-muted">{props.resume.currentinstitute}</MDBCardText>



                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">
                            <MDBCardText>passing year</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="4">
                            <MDBCardText className="text-muted">{props.resume.currentpassingyear}</MDBCardText>


                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">
                            <MDBCardText>CGPI</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="4">
                            <MDBCardText className="text-muted">{props.resume.currentpoints}</MDBCardText>


                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                      
                      Past Education
                      <MDBCardBody style={{border:"2px solid black"}}>
                        <MDBRow>
                          <MDBCol sm="8">
                            <MDBCardText>Institute</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="4">
                            <MDBCardText className="text-muted">{props.resume.lastinstitute}</MDBCardText>



                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">
                            <MDBCardText>passing year</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="4">
                            <MDBCardText className="text-muted">{props.resume.lastpassingyear}</MDBCardText>


                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="8">
                            <MDBCardText>CGPI</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="4">
                            <MDBCardText className="text-muted">{props.resume.lastpoints}</MDBCardText>


                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                      </div>
                      







                      <MDBTypography tag="h6" className="mt-0 mt-4">Technical Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      Projects

                      <div>
                      <MDBTypography tag="h4" >{props.resume.projectone}</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                      {props.resume.descriptionone} <span className="mx-2"></span> <a href="#!"></a>
                      </MDBCardText>
                      <MDBTypography tag="h4">{props.resume.projecttwo}</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                      {props.resume.descriptiontwo} <span className="mx-2"></span> <a href="#!"></a>
                      </MDBCardText>
                      <MDBTypography tag="h4">{props.resume.projectthree}</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                      {props.resume.descriptionthree} <span className="mx-2"></span> <a href="#!"></a>
                      </MDBCardText>
                      </div>
                      
                      <div>
                      <hr className="mt-0 mb-1" />
                      <MDBTypography tag="h6" className="mt-0 mt-2">Skills</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      {props.resume.skills}
                      <hr className="mt-1 mt-2" />
                      <MDBTypography tag="h6" className="mt-0 mt-2">Achivements</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      {props.resume.achievement}
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBModal>
    </>
  );
}
