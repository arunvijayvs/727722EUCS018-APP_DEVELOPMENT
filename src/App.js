import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AdminLogin from './components/AdminLogin';
import Schedule from './components/Schedule';
import LandingPage from './components/LandingPage';
import Circular from './components/Circular';
import StaffCircular from './components/StaffCircular';
import AllotedJobs from './components/AllotedJobs';
import RequestChange from './components/RequestChange';
import Help from './components/Help';
import StaffHelp from './components/StaffHelp';
import StaffsList from './components/StaffsList';
import AdminDashboard from './components/AdminDashboard';
import StaffDashboard from './components/StaffDashboard';
import FirstPage from './components/FirstPage';

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/role" element={<LandingPage/>}/>
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/circular" element={<Circular/>}/>
        <Route path="/requestchange" element={<RequestChange/>}/>
        <Route path="/staffcircular" element={<StaffCircular/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/staffhelp" element={<StaffHelp/>}/>
        <Route path="/staffslist" element={<StaffsList/>}/>
        <Route path="/allotedjobs" element={<AllotedJobs/>}/>
        <Route path="/admindash" element={<AdminDashboard/>}/>
        <Route path="/staffdash" element={<StaffDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;