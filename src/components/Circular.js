import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Box } from '@mui/material';
import { Close as CloseIcon, Add as AddIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import Navbar from './Navbar';
import './Circular.css';

const Circular = () => {
  const [circulars, setCirculars] = useState([]);
  const [newCircular, setNewCircular] = useState({ heading: '', body: '' });
  const [selectedCircular, setSelectedCircular] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false); // State for confirmation dialog

  const fetchCirculars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/circular');
      setCirculars(response.data);
    } catch (error) {
      console.error('Error fetching circulars:', error);
    }
  };

  useEffect(() => {
    fetchCirculars();
  }, []);

  const handleCreateCircular = async () => {
    if (newCircular.heading.trim() && newCircular.body.trim()) {
      const currentDateTime = new Date().toLocaleString();
      const circularData = { ...newCircular, date: currentDateTime };
  
      try {
        await axios.post('http://localhost:8080/circular', circularData);
        setNewCircular({ heading: '', body: '' });
        setDialogOpen(false);
        fetchCirculars();
        setConfirmationDialogOpen(true); // Open the confirmation dialog
      } catch (error) {
        console.error('Error creating circular:', error);
      }
    }
  };

  const handleCardClick = (circular) => {
    setSelectedCircular(circular);
    setViewDialogOpen(true);
  };

  return (
    <div className='circularbody'>
      <Navbar />
  
      <div className='circularinside'>
        
        <div className="circularcontainer">
          <Typography variant="h4" className="circularheading">Circulars</Typography>
          <hr />
          <br />
          <button variant="contained" onClick={() => setDialogOpen(true)} className="createcircularButton">
            New Circular
            <AddIcon />
          </button>
          <br />
          
          <div>
            {circulars.length > 0 ? (
              circulars.slice().reverse().map((circular) => (
                <Card key={circular.id} className="circularCard" onClick={() => handleCardClick(circular)}>
                  <CardContent className="circularcardContent">
                    <Typography variant="h6" className="circularcardHeading">{circular.heading}</Typography>
                    <Typography color="textSecondary" className="circularcardDate">Uploaded on: {circular.date}</Typography>
                  </CardContent>
                  
                </Card>
              ))
            ) : (
              <div className="noCirculars">
                <br />
                <br />
                <Typography variant="h5" sx={{ color: 'white', padding: 5 }}>No Circulars Found</Typography>
              </div>
            )}
          </div>
      
        </div>

        {/* Dialog for creating a new circular */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
          <DialogTitle>
            Create New Circular
            <IconButton
              aria-label="close"
              onClick={() => setDialogOpen(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              label="Circular Heading"
              value={newCircular.heading}
              onChange={(e) => setNewCircular({ ...newCircular, heading: e.target.value })}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Circular Body"
              value={newCircular.body}
              onChange={(e) => setNewCircular({ ...newCircular, body: e.target.value })}
              fullWidth
              multiline
              rows={4}
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleCreateCircular} color="primary">
              Circulate
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog for viewing circular details */}
        <Dialog open={viewDialogOpen} onClose={() => setViewDialogOpen(false)} fullWidth maxWidth="sm">
          <DialogTitle>
            Circular Details
            <IconButton
              aria-label="close"
              onClick={() => setViewDialogOpen(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="h6" gutterBottom>{selectedCircular?.heading}</Typography>
            <Typography variant="body1" gutterBottom>{selectedCircular?.body}</Typography>
            <Typography color="textSecondary" variant="caption">Uploaded on: {selectedCircular?.date}</Typography>
          </DialogContent>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog open={confirmationDialogOpen} onClose={() => setConfirmationDialogOpen(false)}>
          <DialogTitle sx={{ textAlign: 'center' }}>
            Circular Generated Successfully
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
              <CheckCircleIcon sx={{ fontSize: 60, color: 'green' }} />
            </Box>
            <Typography sx={{ textAlign: 'center' }}>
              Your circular has been successfully generated.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmationDialogOpen(false)} sx={{ margin: '0 auto', display: 'block' }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Circular;
