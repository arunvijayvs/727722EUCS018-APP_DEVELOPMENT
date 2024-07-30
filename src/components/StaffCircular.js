import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Info } from '@mui/icons-material'; // Import the Info icon
import Navbar from './StaffNavbar'; // Adjust the import path as needed
import './StaffCircular.css';

const StaffCircular = () => {
  const [circulars, setCirculars] = useState([]);
  const [selectedCircular, setSelectedCircular] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentCircular, setCurrentCircular] = useState(null);

  useEffect(() => {
    // Fetch circulars from backend
    const fetchCirculars = async () => {
      try {
        const response = await axios.get('http://localhost:8080/circular');
        setCirculars(response.data);
      } catch (error) {
        console.error('Error fetching circulars:', error);
      }
    };

    fetchCirculars();
  }, []);

  const handleCardClick = (circular) => {
    setCurrentCircular(circular);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCurrentCircular(null);
  };

  return (
    <div className='circularbody'>
      <Navbar />
      <br /><br /><br /><br /><br />
      <div elevation={3} className="container">
        <Typography variant="h4" className="heading">Circulars</Typography>
        <hr />
        <br /><br />
        {circulars.length === 0 ? (
  <div className="no-circulars">
    <Info className="no-circulars-icon" />
    <Typography variant="body1" className="no-circulars-message">
      No circulars are found to show.
    </Typography>
  </div>
) : (
  <div>
    {circulars.slice().reverse().map((circular) => (
      <Card key={circular.id} className="circularCard">
        <CardContent className="cardContent" onClick={() => handleCardClick(circular)}>
          <Typography variant="h6" className="cardHeading">{circular.heading}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
)}
      </div>

      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{currentCircular?.heading || 'Circular Details'}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{currentCircular?.body || 'No details available.'}</Typography>
          <Typography color="textSecondary" className="cardDate">Uploaded on: {currentCircular?.date}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StaffCircular;
