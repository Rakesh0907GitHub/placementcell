import React, { useState, useEffect } from 'react'

import 
{
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
export default function MyappliedJobs() {
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
    }, [[jobdata]])
    return (
    <div>MyappliedJobs

    {
    jobdata !== []
        ? jobdata.map((data) => {
            if (data.studentEmail === localStorage.getItem("studentEmail")) {
                return (
                    <div key={data._id}>
                        <Card body>
                            <CardTitle>{data.name}</CardTitle>
                            <CardText>{data.role}</CardText>
                            <CardText>{data.date}</CardText>
                            <Button>{data.status}</Button>
                        </Card>
                    </div>
                );
            }
            return null; // Return null for items that don't match the condition.
        })
        : ""
}

        </div>
    )
}
