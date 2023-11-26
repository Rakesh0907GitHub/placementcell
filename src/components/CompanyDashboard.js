import React,{useState,useEffect} from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link,useNavigate } from "react-router-dom";
import AppliedStudents from './AppliedStudents';


export default function CompanyDashboard(args) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  let navigate = useNavigate()

  const [credentials, setcredentials] = useState({name:"",CategoryName:"",description:""})
  const handleFormSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createjobs", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name,CategoryName: credentials.CategoryName,
        description: credentials.description})
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Details !")
    }
    else
    {
      navigate("/companydashboard");

    }
    navigate("/companydashboard");
  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }


  const [details, setdetails] = useState([])
  const fetchCompany = async () => {
    console.log(localStorage.getItem('companyEmail'))
    const response = await fetch("http://localhost:5000/api/loadCompanyDetails", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: localStorage.getItem('companyEmail')
  })
});


  const json = await response.json();
    console.log(json)
    setdetails(json)
  }




  //load applied students
  const [jobdata, setjobdata] = useState([])
    const loadData = async () => {
        
      try {
        const response = await fetch("http://localhost:5000/displayappliedjobs", {
          method: "GET", // Change to GET method
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        setjobdata(data); // Set the entire array, not just the first element
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };



    useEffect(() => {
      loadData();
    }, [jobdata]); // Reload when the status changes
  
    
    useEffect(() => {
      fetchCompany();
    }, []); // Run once on component mount
    


  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
     

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{localStorage.getItem("companyEmail")}</p>
                {details !== []
                      ?
                      details.adminData ?
                        <div>
                          <MDBCardText className="text-muted">{details.adminData.name}</MDBCardText>
                        </div>
                        : ""
                      : ""
                    }
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={toggle}>POST JOB</MDBBtn>
                  
                  <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Add Job here</ModalHeader>
                    <ModalBody>


                      <Form onSubmit={handleFormSubmit}>
                        <FormGroup>
                          <Label for="examplename">Name</Label>
                          <Input name="name" value={credentials.name} placeholder="Company Name must be same as Regesterd name"  onChange={onChange}/>
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampletext">CategoryName</Label>
                          <Input  name="CategoryName" value={credentials.CategoryName}  placeholder="Role"  onChange={onChange}/>
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Short description about Role</Label>
                          <Input type="name" name="description" value={credentials.description} id="examplecontact" placeholder="Deescription about role" onChange={onChange}/>
                        </FormGroup>
                        <Button type="submit" onClick={toggle}>Submit</Button>
                      </Form>
                      
                    </ModalBody>  
                    <ModalFooter>
                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>



                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              {
            /*<Link style={{ display: 'flex', marginRight: 10 }} to="/companyacceptedlist">Accepted List</Link>
              */}</MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  {details !== []
                      ?
                      details.adminData ?
                        
                      <div>
                          <MDBCardText className="text-muted">{details.adminData.name}</MDBCardText>
                          
                            {localStorage.setItem("companyname",details.adminData.name)}
                            </div>   
                        : ""
                      : ""
                    }
                    
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  {details !== []
                      ?
                      details.adminData ?
                        
                          <MDBCardText className="text-muted">{details.adminData.email}</MDBCardText>
                        
                        : ""
                      : ""
                    }
                    
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  {details !== []
                      ?
                      details.adminData ?
                          <MDBCardText className="text-muted">{details.adminData.contact}</MDBCardText>
                          
                        : ""
                      : ""
                    }
                    
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
            {
    jobdata !== []
        ? jobdata.map((data) => {
          
            if (data.name === localStorage.getItem("companyname") ) {
                return (
                    <div key={data._id}>
                        <AppliedStudents  status={data.email} studentdetails={data}/>
                        
                    </div>
                );
            }
            return null; // Return null for items that don't match the condition.
        })
        : ""
}
              
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
