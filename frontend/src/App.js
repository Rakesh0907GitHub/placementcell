import React from 'react';
import Home from './screens/Home';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Registration from './components/Registration';
import Navbr from './components/Navbr';
import Login from './components/Login';
import MyappliedJobs from './components/MyappliedJobs';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import CompanyRegister from './components/CompanyRegister';
import CompanyLogin from './components/CompanyLogin';
import CompanyDashboard from './components/CompanyDashboard';
import ResumeCreate from './components/ResumeCreate';
import ViewResume from './components/ViewResume';
import CompanyAcceptedList from './components/CompanyAcceptedList';
function App() {
  return (
    <Router>
      <div >
        <Navbr />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/registration' element={<Registration />} />
          <Route exact path='/adminlogin' element={<AdminLogin />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/myappliedjobs' element={<MyappliedJobs />} />
          <Route exact path='/registercompany' element={<CompanyRegister />} />
          <Route exact path='/admindashboard' element={<AdminDashboard />} />
          <Route exact path='/companylogin' element={<CompanyLogin />} />
          <Route exact path='/companydashboard' element={<CompanyDashboard />} />
          <Route exact path='/resumecreate' element={<ResumeCreate />} />   {/*crated at the time of registration*/}
          <Route exact path='/viewresume' element={<ViewResume />} />
          <Route exact path='/companyacceptedlist' element={<CompanyAcceptedList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
