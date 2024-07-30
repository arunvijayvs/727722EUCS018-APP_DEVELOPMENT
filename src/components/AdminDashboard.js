import React from 'react'
import './AdminDashboard.css';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Navbar from './Navbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function AdminDashboard() {
  return (
    <div className='dashentire'>
        <Navbar />
        <br></br>
        <br></br>
            <br></br><br></br>
        <div>
            <div id='asdfghjk'>
            Dashboard&nbsp;
            </div>
            <div id='sample'>
        <div id='dashtop'>
   
                <div id='one'>&nbsp;&nbsp;<PersonIcon fontSize='large'/> &nbsp;No. of Employees<br></br><br></br>
                &nbsp;&nbsp;Total Employees:18  &nbsp;&nbsp;<ArrowCircleRightIcon fontSize='medium'/>
                </div>

                <div id='two'>&nbsp;&nbsp;<TrackChangesIcon fontSize='large'/>&nbsp;No. of Shifts<br></br><br></br>
                &nbsp;&nbsp;Total Number of Shifts:12&nbsp;&nbsp;<ArrowCircleRightIcon fontSize='medium'/>
                </div>

                <div id='three'>&nbsp;&nbsp;<CalendarMonthIcon fontSize='large'/>&nbsp;Weekly Schedule<br></br><br></br>
                &nbsp;&nbsp;View Weekly Schedule&nbsp;&nbsp;<ArrowCircleRightIcon fontSize='medium'/>
                </div>

                <div id='four'>&nbsp;&nbsp;<CalendarMonthIcon fontSize='large'/>&nbsp;Day's Schedule<br></br><br></br>
                &nbsp;&nbsp;View Today's Schedule&nbsp;&nbsp;<ArrowCircleRightIcon fontSize='medium'/>
                </div>

        </div>
        </div>

<br></br>
<br></br>
<br></br>
        <div id='dashbottom'>
            <div id='imgone'>
                <div id='first'>
                    <img id='firstimg' src='https://images.ctfassets.net/w8fc6tgspyjz/1v8RQ7znf7vcWrMfcJwWWj/fca4dd110a6d65a6ece465d4247bf334/layout-item-block__graphic-1.png?fm=avif&q=50&w=800'></img>

                </div>
                <br></br>
               <h3>Company Objectives</h3> 
Build portfolios that link your company’s initiatives, so you always know where things stand.
            </div>
            <div id='imgone'>
                <div id='first'>
                    <img id='firstimg' src='https://images.ctfassets.net/w8fc6tgspyjz/5IkuES1QjFCcgJqaX34o9U/d387672dda614a1e0f51f91dc1958f35/item__body-2.png?fm=avif&q=50&w=800'></img>

                </div>
                <br></br>
                <h3>Company Objectives</h3> 
Build portfolios that link your company’s initiatives, so you always know where things stand.
            </div>
            <div id='imgone'>
                <div id='first'>
                    <img id='firstimg' src='https://images.ctfassets.net/xjcz23wx147q/6UJdid8SxioBgYnV9wzoii/f21ae3b6c3ccb2fa4900d6cf09178bf8/purple_ui_border_2x.webp '></img>

                </div>
                <br></br>
                <h3>Company Objectives</h3> 
Build portfolios that link your company’s initiatives, so you always know where things stand.
            </div>
            
        </div>
    </div>
    </div>
  )
}