import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { TextField, Button, Paper, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [staff, setStaff] = useState([]);
  const [jobAllocation, setJobAllocation] = useState({ staffIndex: null, shift: '', task: '', description: '' });
  const [jobDetailDialogOpen, setJobDetailDialogOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/staffs')
      .then(response => {
        const staffData = response.data.map(staff => ({
          id: staff.id,
          name: `${staff.firstname} ${staff.lastname}`,
          department: staff.department,
          shifts: {} 
        }));
        setStaff(staffData);
      })
      .catch(error => {
        console.error('Error fetching staff data:', error);
      });
  }, []);

  useEffect(() => {
    if (staff.length > 0) {
      fetchTasksForDate(selectedDate);
    }
  }, [selectedDate, staff]);

  const fetchTasksForDate = (date) => {
    axios.get(`http://localhost:8080/jobs-alloted?date=${date}`)
      .then(response => {
        const tasks = response.data;
        const updatedStaff = staff.map(staffMember => {
          const staffTasks = tasks.filter(task => task.staffId === staffMember.id);
          const shifts = staffTasks.reduce((acc, task) => {
            acc[task.shift] = { task: task.task, description: task.description };
            return acc;
          }, {});
          return { ...staffMember, shifts };
        });
        setStaff(updatedStaff);
      })
      .catch(error => {
        console.error('Error fetching tasks for date:', error);
        clearShifts(); 
      });
  };

  const handleShiftClick = (index, shift) => {
    const shiftDetails = staff[index].shifts[shift] || { task: '', description: '' };
    setJobAllocation({ staffIndex: index, shift, task: shiftDetails.task, description: shiftDetails.description });
    setJobDetailDialogOpen(true);
  };

  const handleTaskChange = (e) => {
    setJobAllocation({ ...jobAllocation, task: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setJobAllocation({ ...jobAllocation, description: e.target.value });
  };

  const saveTask = () => {
    const updatedStaff = [...staff];
    const staffMember = updatedStaff[jobAllocation.staffIndex];
    staffMember.shifts[jobAllocation.shift] = {
      date: selectedDate,
      task: jobAllocation.task,
      description: jobAllocation.description,
      staffId: staffMember.id
    };

    axios.post('http://localhost:8080/jobs-alloted', {
      staffId: staffMember.id,
      staffName: staffMember.name,
      department: staffMember.department,
      shift: jobAllocation.shift,
      date: selectedDate,
      task: jobAllocation.task,
      description: jobAllocation.description,
    }).then(response => {
      console.log('Job allocated successfully');
    }).catch(error => {
      console.error('Error allocating job:', error);
    });

    setStaff(updatedStaff);
    setJobDetailDialogOpen(false);
  };

  const clearShifts = () => {
    setStaff(staff.map(s => ({
      ...s,
      shifts: {}
    })));
  };

  return (
    <div className='scheduleentire-page'>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className='schedulebody'>
        <div className='fixedtopschedule'>
        <h1>Schedule</h1>
        <hr></hr>
        <p>Allot jobs for the Staffs of various department. Select Date and allot tasks for staffs on cells representing shifts.</p>
        </div>
        <br></br>
        <br></br>
        <div className='row'>
          <Paper className='date-picker-container' elevation={3} sx={{padding:3}}>
            <Typography variant="h6">Select Date</Typography>
            <TextField
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                inputProps: { min: new Date().toISOString().slice(0, 10) },
              }}
            />
          </Paper>
        </div>

        <Paper className='table' elevation={3}>
          <Grid container className='row header'>
            <Grid item xs={3} className='headblock'>Staff Name</Grid>
            <Grid item xs={3} className='headblock'>Morning (7am-12pm)</Grid>
            <Grid item xs={3} className='headblock'>Afternoon (12pm-17pm)</Grid>
            <Grid item xs={3} className='headblock'>Evening (17pm-22pm)</Grid>
          </Grid>
          {staff.map((staffMember, index) => (
            <Grid container className='row' key={index}>
              <Grid item xs={3} className='block'>{staffMember.name}</Grid>
              <Grid 
                item xs={3} className='block' 
                onClick={() => handleShiftClick(index, 'morning')}
              >
                {staffMember.shifts.morning?.task || ''}
              </Grid>
              <Grid 
                item xs={3} className='block'
                onClick={() => handleShiftClick(index, 'afternoon')}
              >
                {staffMember.shifts.afternoon?.task || ''}
              </Grid>
              <Grid 
                item xs={3} className='block' 
                onClick={() => handleShiftClick(index, 'evening')}
              >
                {staffMember.shifts.evening?.task || ''}
              </Grid>
            </Grid>
          ))}
        </Paper>

        <Dialog open={jobDetailDialogOpen} onClose={() => setJobDetailDialogOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle>Job Details</DialogTitle>
          <DialogContent>
            <TextField
              label="Task Description"
              value={jobAllocation.task}
              onChange={handleTaskChange}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Description"
              value={jobAllocation.description}
              onChange={handleDescriptionChange}
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={saveTask} color="primary">Save</Button>
            <Button onClick={() => setJobDetailDialogOpen(false)} color="secondary">Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Schedule;







