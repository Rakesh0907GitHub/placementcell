import React, { useEffect, useState } from 'react'
import Navbr from '../components/Navbr'
import Crousel from '../components/Crousel'
import Footer from '../components/Footer'
import Cardg from '../components/Cardg'

export default function Home() {
  const [jobdata, setJobdata] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/displaydata", {
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
      setJobdata(data); // Set the entire array, not just the first element
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  // Call the function to load data
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      {console.log(localStorage.getItem("studentEmail"))}
      <Crousel />
      <div className='row mb-3 m-5'>
        {
          jobdata !== []
            ? jobdata.map((data) => {//data.name.toLowerCase().includes(search.toLOcaleLowerCase())
              return (

                <div key={data._id} className='col-12 col-md-6 col-lg-3 mb-4'>
                  <Cardg jobdetails={data} />
                </div>

              )
            })
            : <div>""""</div>
        }
      </div>

      <Footer />
    </div>
  )
}
