import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { FolderOpen } from '@mui/icons-material';
import './RequestChange.css';

const RequestChange = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/requests/get')
            .then(response => setRequests(response.data))
            .catch(error => console.error('Error fetching requests:', error));
    }, []);

    const handleDeleteJob = async (task, staffId, id) => {
        console.log(task);
        console.log(staffId);
        await axios.delete(`http://localhost:8080/jobsalloted/delete?task=${encodeURIComponent(task)}&staffId=${staffId}`)
            .then(response => {
                if (response.status === 204) {
                    window.location.href = '/schedule';
                } else {
                    console.error('Error deleting job');
                }
            })
            .catch(error => console.error('Error deleting job:', error));

            await axios.delete(`http://localhost:8080/requests/delete`, { params: { id } })
            .then(response => {
              console.log('Request reverted successfully:', response.data);
              alert('Request reverted successfully.');
            })
            .catch(error => {
              console.error('Error reverting request:', error);
              alert('Error reverting request. Please try again.');
            });
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
                                    onClick={() => handleDeleteJob(request.task,request.staffId,request.id)}
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