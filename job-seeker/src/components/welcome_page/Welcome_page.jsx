import React, { useEffect } from 'react';
import video1 from '../../assets/welcome.mp4';
import './welcome_page.css'; 


import { Link } from 'react-router-dom';

const Welcome_page = () => {
  return (
    <>
    
    <section className='home'>
      <div className='overlay'></div>
      <video src={video1} muted autoPlay loop type="welcome/mp4"></video>

    
      <div className="titleDiv">
        <h1 data-aos="fade-up" className="homeTitle">
        First step towards your Dream
        </h1>
      </div>

     
      <div className="homeContent container">
      <h4>Lets get started</h4>
      
        <div className="signupDiv">

       <Link to="/signup">  <button className="btn btn-primary signupBtn" type="button">
            Sign Up
          </button> </Link> 
        </div>
      </div>
    </section>
  
  </>
  );
};

export default Welcome_page;
