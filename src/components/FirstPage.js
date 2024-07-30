import React from 'react'
import './FirstPage.css';
import lo from '../img/lo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Fpnav from './Fpnav';

import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import s4 from '../img/s4.png';

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import b9 from '../img/b9.jpg';
import b10 from '../img/b10.jpg';
import b12 from '../img/b12.jpg';


const FirstPage = () => {
  const navigate  = useNavigate();


  
    const images = [s1, s2,s3, s4];
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleClick = (index) => {
      setCurrentImage(images[index]);
    };
  
  




  return (
    <div className='bodyoffirstpage'>
        <Fpnav/>
        <br></br>
        <br></br>
        <br></br>


    <section>
      <div className="ban">

        </div>

    </section>

    <section>
      <div>
        <h1 className='ban-headline'>Customize and extend your frontline
          platform <br></br>with workforce management system.
        </h1>
      </div>
      <br/>
      <div className='learn'>
       
         <h8 className='headline2'>Increase your organisation's performance with solutions that support frontline workers from shift scheduling to communication.</h8>
         <br/>
        <div id='lea'>
          <button type='button' className='learn-more'>Learn More</button>
          <button type='button' className='learn-more2' onClick={()=> navigate('/role')}>Get Started</button>
        </div>
       

      </div>
    </section>
   <section>
    <div>
      <h2 className='headline3'>Give your managers and workers the<br/> staff scheduling tools they need</h2>
      <p className='headline4'>Help your employees save time and increase your company’s productivity by streamlining <br/>processes with workforce management (WFM).</p>
    </div>
   </section>

   <section id='product1'>
   <div className='h'>
      <div className='head56'>
        <div><img src={b9} alt=""  className='b9'/></div>
        <h3 className='headline5'>Manage shift schedules seamlessly</h3>
        <p className='pp'>Gain real-time visibility into schedules built on worker availability, preference, skill, and labor laws</p>

      
      </div>
      <div className='head56'>
        <div><img src={b10} alt="" className='b9'/></div>
        <h3 className='headline5'>Enable employees with the self-service tools</h3>
        <p className='pp'>Cut the chaos out of scheduling—enable self-service tools for staff to own their schedules and focus on doing their best work.</p>

      </div>
      <div className='head56'>
        <div><img src={b12} alt=""  className='b9'/></div>
        <h3 className='headline5'>Enrich schedules with the right data</h3>
        <p className='pp'>Whether through employee inputted availability or data captured from workforce management systems, create optimized schedules for the business.</p>

     
      </div>
   </div>


      
   </section>

   <section className='product2'>
    <div>
      <h3 className='headline6'>What Shifts can do for you</h3>
      <p>Whether monitoring requests on-the-go or editing the team's schedule in the back office, staff scheduling <br/>software helps managers control who’s doing what, where, and when.</p>
    </div>
   </section>

   <section>
   <div className='j'>
    <div className='image'>
      <img src={currentImage} alt="" className='image1'/>
    </div>
      <div>
        <button className='option' onClick={() => handleClick(0)}>Cultivate your workspace</button>
        <button className='option' onClick={() => handleClick(1)}>Optimize productivity</button>
        <button className='option' onClick={() => handleClick(2)}>Connect your enterprise</button>
        <button className='option' onClick={() => handleClick(3)}>We parter the systems you use</button>
      </div>
    </div>

   </section>
   
   <div className='product3'>
    <div>
      <h1 className='footer'>Get started with Managemate team <br/>today</h1>
    </div>
    <h1 className='footer1'>Sign In</h1>
      
    <div className='send'>
      
      <button>Register</button>
    </div>

    <div id='row'>
      <h3 className='footer3'>Follow Managemate team</h3>
      <div id='icons'>
         <XIcon/> &nbsp;&nbsp;
        <InstagramIcon/> &nbsp;&nbsp;
        <LinkedInIcon/> &nbsp;&nbsp;
        <YouTubeIcon/>

      </div>
    </div>
    

   </div>
   
    
       
        </div>
  )
}

export default FirstPage