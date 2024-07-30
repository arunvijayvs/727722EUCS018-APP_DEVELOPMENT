import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffNavbar from './StaffNavbar';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import './AllotedJobs.css';

const AllotedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [staffId, setStaffId] = useState('');

  useEffect(() => {
    // Fetch all jobs
    axios.get('http://localhost:8080/jobs-alloted')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  const handleStaffIdChange = (e) => {
    setStaffId(e.target.value);
  };

  const filterJobs = () => {
    // Filter jobs based on entered staff ID
    const filtered = jobs.filter(job => job.staffId === staffId);
    setFilteredJobs(filtered);
  };

  const handleRequestChange = (job) => {
    // Send the job data to the request change endpoint
    axios.post('http://localhost:8080/requests', job)
      .then(response => {
        console.log('Change request submitted successfully:', response.data);
        alert('Change request submitted successfully.');
      })
      .catch(error => {
        console.error('Error submitting change request:', error);
        alert('Error submitting change request. Please try again.');
      });
  };

  const handleRevertRequest = (jobId) => {
    // Send a DELETE request to remove the job change request
    axios.delete(`http://localhost:8080/requests/${jobId}`)
      .then(response => {
        console.log('Request reverted successfully:', response.data);
        alert('Request reverted successfully.');
      })
      .catch(error => {
        console.error('Error reverting request:', error);
        alert('Error reverting request. Please try again.');
      });
  };

  const addJobToCalendar = (job) => {
    const eventTitle = encodeURIComponent(`Job: ${job.task}`);
    const eventDescription = encodeURIComponent(`Shift: ${job.shift}, Department: ${job.department}`);
    let startTime, endTime;
  
    switch (job.shift.toLowerCase()) {
      case 'morning':
        startTime = 'T070000';
        endTime = 'T115900';
        break;
      case 'afternoon':
        startTime = 'T120000';
        endTime = 'T165900';
        break;
      case 'evening':
        startTime = 'T170000';
        endTime = 'T215900';
        break;
      default:
        startTime = 'T000000';
        endTime = 'T235900';
    }
  
    const startDate = new Date(job.date).toISOString().split('T')[0].replace(/-/g, '');
    const endDate = startDate; // The event is within a single day
  
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}${startTime}/${endDate}${endTime}&details=${eventDescription}`;
    window.open(calendarUrl, '_blank');
  };
  
  

  return (
    <div className='allotedjobsbody'>
      <StaffNavbar />
      <br /><br />
      <br /><br />
      <br /><br />
      <Container maxWidth="md">
        <div elevation={3} sx={{ 
            padding: 4, 
            marginTop: 0,
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/04/01/12/48/time-4095294_1280.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:100,
            borderRadius: 5
          }}>
          <Typography variant="h4" sx={{color:'white'}}  gutterBottom>
            Alloted Jobs
          </Typography>
          <hr />
          <br />
          <Box display="flex" alignItems="center" marginBottom={2} sx={{backgroundColor:'gainsboro', width:400, height:50, padding:2}}>
            <TextField
              label="Enter your staff ID"
              variant="outlined"
              value={staffId}
              onChange={handleStaffIdChange}
              sx={{ marginRight: 2 }}
            />
            <Button variant="contained" color="primary" sx={{backgroundColor:'white', color:'black'}} onClick={filterJobs}>
              View Jobs
            </Button>
          </Box>
          <br />
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Paper key={index} elevation={2} sx={{ padding: 3, marginBottom: 2 }}>
                <Typography variant="h6">{job.task}</Typography>
                <Typography>Date: {job.date}</Typography>
                <Typography>Shift: {job.shift}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRequestChange(job)}
                  sx={{ marginTop: 1, marginRight: 1 }}
                >
                  Request Change
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleRevertRequest(job.id)}
                  sx={{ marginTop: 1, marginRight: 1 }}
                >
                  Revert Request
                </Button>
                {/* Add to Google Calendar button */}
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => addJobToCalendar(job)}
                  sx={{ marginTop: 1 }}
                >
                  Add to Google Calendar
                </Button>
              </Paper>
            ))
          ) : (
            <Typography sx={{color:'white'}}>No jobs allocated.</Typography>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllotedJobs;
