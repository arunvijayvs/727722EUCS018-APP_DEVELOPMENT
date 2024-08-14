// import React from 'react';
// import Navbar from './Navbar';
// import './Help.css';

// const Help = () => {
//     return (
//         <div className='help-entire-page'>
//             <Navbar/>
//             <div className="help-content">
//                 <div className="help-container">
//                     <h1 className="help-title">Help & User Guide</h1>


                  
//                     <div id='division1'>
//                     <section className="help-section">
//                         <h2>Creating a Schedule (Only Admin)</h2>
//                         <p>
//                             To create a new schedule, click on the "New Schedule" button on the Home Page. You can then select the date, assign staff to shifts, and specify tasks for them.
//                         </p>
//                         <ol>
//                             <li>Navigate to the "Home" tab.</li>
//                             <li>Click on "New Schedule".</li>
//                             <li>Select the desired date.</li>
//                             <li>Assign staff to that date.</li>
//                             <li>Describe their tasks for each shift.</li>
//                             <li>Save your schedule by clicking "Save Schedule".</li>
//                         </ol>
//                     </section>
//                     </div>
                   


                    
//                     <div id='division1'>
//                     <section className="help-section">
//                         <h2>Staff Management (Only Admin)</h2>
//                         <p>
//                             Manage your staff by navigating to the "Staff" tab. Here you can view all the staff members who are registered in the application.
//                         </p>
//                     </section>
//                     </div>
                  



                    
//                     <div id='division2'>
//                     <section className="help-section">
//                         <h2>Changing Requests (Staff)</h2>
//                         <p>
//                             Staff can view and request changes to their assigned jobs by selecting the "Change Request" button on the 'Jobs Allotted' page.
//                         </p>
//                         <ul>
//                             <li>Go to the 'Jobs-Allotted' page from the App bar.</li>
//                             <li>Enter your Staff ID.</li>
//                             <li>View jobs assigned to you.</li>
//                             <li>If you want to request a change, click 'Change Request' and the admin will be notified.</li>
//                         </ul>
//                     </section>
//                     </div>
                    


                   



//                     <footer className="help-footer">
//                         <p>For further assistance, please contact our support team at support@managemate.com.</p>
//                     </footer>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Help;


import React, { useState } from 'react';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Navbar from './Navbar';
import './Help.css';

const Help = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className='help-entire-page'>
            <Navbar />
            <div className="help-content">
                <div className="help-container">
                    <h1 className="help-title">Help & User Guide</h1>

                    <div id='division1'>
                        <section className="help-section">
                            <h2 onClick={() => toggleSection('schedule')} className="help-section-title">
                                Creating a Schedule (Only Admin)
                                <ArrowDropDownCircleIcon
                                    className={`dropdown-icon ${openSection === 'schedule' ? 'open' : ''}`}
                                />
                            </h2>
                            {openSection === 'schedule' && (
                                <div className="help-section-content">
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
                                </div>
                            )}
                        </section>
                    </div>

                    <div id='division1'>
                        <section className="help-section">
                            <h2 onClick={() => toggleSection('staff')} className="help-section-title">
                                Staff Management (Only Admin)
                                <ArrowDropDownCircleIcon
                                    className={`dropdown-icon ${openSection === 'staff' ? 'open' : ''}`}
                                />
                            </h2>
                            {openSection === 'staff' && (
                                <div className="help-section-content">
                                    <p>
                                        Manage your staff by navigating to the "Staff" tab. Here you can view all the staff members who are registered in the application.
                                    </p>
                                </div>
                            )}
                        </section>
                    </div>

                    <div id='division2'>
                        <section className="help-section">
                            <h2 onClick={() => toggleSection('requests')} className="help-section-title">
                                Changing Requests (Staff)
                                <ArrowDropDownCircleIcon
                                    className={`dropdown-icon ${openSection === 'requests' ? 'open' : ''}`}
                                />
                            </h2>
                            {openSection === 'requests' && (
                                <div className="help-section-content">
                                    <p>
                                        Staff can view and request changes to their assigned jobs by selecting the "Change Request" button on the 'Jobs Allotted' page.
                                    </p>
                                    <ul>
                                        <li>Go to the 'Jobs-Allotted' page from the App bar.</li>
                                        <li>Enter your Staff ID.</li>
                                        <li>View jobs assigned to you.</li>
                                        <li>If you want to request a change, click 'Change Request' and the admin will be notified.</li>
                                    </ul>
                                </div>
                            )}
                        </section>
                    </div>

                    <footer className="help-footer">
                        <p>For further assistance, please contact our support team at support@managemate.com.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Help;
