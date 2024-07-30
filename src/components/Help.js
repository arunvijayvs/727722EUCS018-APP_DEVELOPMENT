import React from 'react';
import Navbar from './Navbar';
import './Help.css';

const Help = () => {
    return (
        <div className='help-entire-page'>
            <Navbar/>
            <div className="help-content">
                <div className="help-container">
                    <h1 className="help-title">Help & User Guide</h1>

                    <section className="help-section">
                        <h2>Creating a Schedule (Only Admin)</h2>
                        <p>
                            To create a new schedule, click on the "New Schedule" button on the Home Page. You can then select the date, assign staff to shifts, and specify tasks for them.
                        </p>
                        <ol>
                            <li>Navigate to the "Home" tab.</li>
                            <li>Click on "New Schedule".</li>
                            <li>Select the desired date.</li>
                            <li>Assign staff to that date.</li>
                            <li>Describe their tasks for each shift.</li>
                            <li>Save your schedule by clicking "Save Schedule".</li>
                        </ol>
                    </section>

                    <section className="help-section">
                        <h2>Changing Requests (Staff)</h2>
                        <p>
                            Staff can view and request changes to their assigned jobs by selecting the "Change Request" button on the 'Jobs Allotted' page.
                        </p>
                        <ul>
                            <li>Go to the 'Jobs-Allotted' page from the App bar.</li>
                            <li>Enter your Staff ID.</li>
                            <li>View jobs assigned to you.</li>
                            <li>If you want to request a change, click 'Change Request' and the admin will be notified.</li>
                        </ul>
                    </section>

                    <section className="help-section">
                        <h2>Staff Management (Only Admin)</h2>
                        <p>
                            Manage your staff by navigating to the "Staff" tab. Here you can view all the staff members who are registered in the application.
                        </p>
                    </section>

                    <footer className="help-footer">
                        <p>For further assistance, please contact our support team at support@managemate.com.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Help;
