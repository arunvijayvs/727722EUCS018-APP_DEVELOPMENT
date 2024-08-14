import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Avatar, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import './StaffsList.css';

const StaffsList = () => {
  const [staffs, setStaffs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentStaffId, setCurrentStaffId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setStaffs(response.data);
      })
      .catch(error => {
        console.error('Error fetching staff data:', error);
      });
  }, []);

  const handleAvatarClick = (staffId) => {
    setCurrentStaffId(staffId);
    setOpenDialog(true);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic
      console.log(`Uploading file for staff ID: ${currentStaffId}`);
      setSelectedFile(null);
      setOpenDialog(false);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div className='staffslistbody'>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="layout">
        <div className="left-section">
          <h1>Staffs List</h1>
          <p>This is our staff list across various department.</p>
        </div>
        <div className="right-section">
          <Grid container spacing={3}>
            {staffs.map((staff) => (
              <Grid item xs={12} sm={6} md={4} key={staff.id}>
                <Card className="staff-card">
                  <CardMedia>
                    <Avatar
                      alt={`${staff.firstName} ${staff.lastName}`}
                      src=""
                      className="staff-avatar"
                      onClick={() => handleAvatarClick(staff.id)}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 1000000000 }}>{`${staff.firstName} ${staff.lastName}`}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Department: {staff.department}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Email: {staff.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Phone: {staff.phoneNo}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Upload Photo</DialogTitle>
        <DialogContent>
          <input type="file" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpload} color="primary" disabled={!selectedFile}>
            Upload
          </Button>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StaffsList;