import React from 'react'
import './StaffDashboard.css';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StaffNavbar from './StaffNavbar';
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
        <StaffNavbar />
        <br></br>
        <br></br>
        <br></br>
        <div>
          <div className='firstportion'>
            <div id='asdfghjk'>
              Welcome Back!
            </div>
            <div id='sample'>
              <div id='dashtop'>
                <div id='topcontent'>
                <p><b> View your assigned tasks, stay updated with the latest announcements, and manage your work schedule with ease.</b></p>
                <p> Check for any shift changes, and stay connected with your TEAM.</p>
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
                    <h3>View Tasks</h3> 
                    View tasks alloted to you by Team lead. All you need to do is just enter your Identification number.
                </div>
                <div id='imgone'>
                    <div id='first'>
                        <img id='firstimg' src='https://media.istockphoto.com/id/1256253332/vector/noisy-big-megaphone.jpg?s=1024x1024&w=is&k=20&c=_qy9CBH2gVVUJkrVV6_EAHvcL9za_WLE6JG5u1BN3n8='></img>
                    </div>
                    <br></br>
                    <h3>View Announcements</h3> 
                    View Announcements made by your Team lead/ admin in just a click
                </div>
                <div id='imgone'>
                    <div id='first'>
                        <img id='firstimg' src='https://sf16-va.tiktokcdn.com/obj/eden-va2/nb-shivsn-ryhs/ljhwZthlaukjlkulzlp/lark-topics/business-communication/how-to-ask-for-a-change-in-work-schedule-professionally.webp'></img>
                    </div>
                    <br></br>
                    <h3>Shift change Requests</h3> 
                    You can request for change in shift for the job alloted to you. Your team lead will receive your request.
                </div>
        </div>
        <br></br>
    </div>
    </div>
  )
}