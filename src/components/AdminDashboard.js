import React from 'react'
import './AdminDashboard.css';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Navbar from './Navbar';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function AdminDashboard() {
  return (
    <div className='dashentire'>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <div>
          <div className='firstportion'>
            <div id='asdfghjk'>
              Welcome Admin!
            </div>
            <div id='sample'>
              <div id='dashtop'>
                <div id='topcontent'>
                <p>Manage and oversee all staff operations efficiently. From scheduling tasks to handling staff requests, this dashboard gives you the control to streamline your organization's workflow.</p>
                <p>You can create tasks for staffs, make Announcements, view staff details, and manage shift change requests.</p>
                </div>
              </div>
            </div>
            </div>
            <br></br>
            <div id='dashbottom'>
                <div id='imgone'>
                    <div id='first'>
                        <img id='firstimg' src='https://t4.ftcdn.net/jpg/03/15/45/65/360_F_315456588_8hFOQNzEsh567C5vJzfQTo0doTSjX7WV.jpg'></img>
                    </div>
                    <br></br>
                    <h3>Manage Schedules</h3> 
                    Create tasks for your Staffs, allot them eith tasks in different shifts.
                </div>
                <div id='imgone'>
                    <div id='first'>
                        <img id='firstimg' src='https://media.istockphoto.com/id/1256253332/vector/noisy-big-megaphone.jpg?s=1024x1024&w=is&k=20&c=_qy9CBH2gVVUJkrVV6_EAHvcL9za_WLE6JG5u1BN3n8='></img>
                    </div>
                    <br></br>
                    <h3>Make Announcements</h3> 
                    Make Announcements and circulars, to be viewed by our company staffs.
                </div>
                <div id='imgone'>
                    <div id='first'>
                        <img id='firstimg' src='https://sf16-va.tiktokcdn.com/obj/eden-va2/nb-shivsn-ryhs/ljhwZthlaukjlkulzlp/lark-topics/business-communication/how-to-ask-for-a-change-in-work-schedule-professionally.webp'></img>
                    </div>
                    <br></br>
                    <h3>Manage Requests</h3> 
                    Manage requests made by staffs on changing any job shifts alloted to them.
                </div>
        </div>
        <br></br>
    </div>
    </div>
  )
}