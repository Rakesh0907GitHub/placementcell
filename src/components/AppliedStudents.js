import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import ResumeButton from './ResumeButton';
import image from '../NITCimages/3d avatar.png'

export default function AppliedStudents(props) {

  localStorage.setItem("studenEmailresume",props.studentdetails.studentEmail);
  const handleAccept = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/updateStatus", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ studentEmail: props.studentdetails.studentEmail, studentName: props.studentdetails.studentName, name: props.studentdetails.name, role: props.studentdetails.role })  //name means company name
    });
    const json = await response.json()
    console.log(json);
    toast.success("Accepted Successfully ..!")

  };
  const [studentresume, setstudentresume] = useState([])
  const handleViewResume = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/viewstudentsresume", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ studentEmail: props.studentdetails.studentEmail })  //name means company name
    });
    const json = await response.json()
    console.log(json);
    setstudentresume(json);

  };
  

  
  



  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>resume</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{props.studentdetails.studentName}</p>
                <p className='text-muted mb-0'>{props.studentdetails.studentEmail}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{props.studentdetails.role}</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>






          {/*Model for view resume*/}
          <td>
            
            <MDBBtn color='light' rounded size='sm' onClick={handleViewResume} >
            
              <ResumeButton resume={studentresume} />
            </MDBBtn>
          </td>









          <td>


            <MDBBtn pill rounded onClick={handleAccept} >
            <ToastContainer/>
              {props.studentdetails.status}
            </MDBBtn>

          </td>
        </tr>

      </MDBTableBody>
    </MDBTable>
  );
}