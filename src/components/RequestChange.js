import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { FolderOpen } from '@mui/icons-material';
import './RequestChange.css';

const RequestChange = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/requests')
            .then(response => setRequests(response.data))
            .catch(error => console.error('Error fetching requests:', error));
    }, []);

    const handleDeleteJob = (jobId) => {
        axios.delete(`http://localhost:8080/jobs-alloted/${jobId}`)
            .then(response => {
                if (response.status === 200) {
                    setRequests(requests.filter(request => request.id !== jobId));
                    window.location.href = '/schedule';
                } else {
                    console.error('Error deleting job');
                }
            })
            .catch(error => console.error('Error deleting job:', error));
    };

    return (
        <div className='requestentirebody'>
            <Navbar />
            <br /><br /><br /><br />
            <div className="request-change-page">
                <h1 className="page-title">Change Requests</h1>
                {requests.length === 0 ? (
                    <div className="no-requests">
                        <FolderOpen className="no-requests-icon" />
                        <p>No requests are made by staff to change shifts.</p>
                    </div>
                ) : (
                    <div className="requests-list">
                        {requests.map(request => (
                            <div key={request.id} className="request-item">
                                <p><strong>Staff Name:</strong> {request.staffName}</p>
                                <p><strong>Department:</strong> {request.department}</p>
                                <p><strong>Shift:</strong> {request.shift}</p>
                                <p><strong>Date:</strong> {request.date}</p>
                                <p><strong>Task:</strong> {request.task}</p>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteJob(request.id)}
                                >
                                    Delete Job
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestChange;
