import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardg(props) {
  const handleApplyJob= async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/appliedbystudent", {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ name: props.jobdetails.name, role: props.jobdetails.CategoryName,studentEmail:localStorage.getItem("studentEmail")})
    });
    const json = await response.json()
    console.log(json);
    if(!json.success)
        {
          alert("Enter Valid Details")
        }
        else{
            toast.success("Applied Successfully ..!")
        }
  }

  
  return (
    <div>
    <Card border="primary" style={{ margin:"5px",width: '17rem', border:"2px solid black"}}>
        <Card.Header>{props.jobdetails.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.jobdetails.CategoryName}</Card.Title>
        <Card.Text>
          {props.jobdetails.description}
        </Card.Text>
        <Button variant="primary" onClick={handleApplyJob}>
        <ToastContainer/>
          Apply
          </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardg;