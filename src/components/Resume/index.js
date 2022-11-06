import React from 'react';
import resumeImage from '../../assets/images/Resume.jpg'
import Project from '../Project';
function Resume(props) {

  return (
    <section id="work" className="work">
      <h2 className="work-leftside">Services</h2>
      <div >
        <div className="">
        <br></br>
        <br></br>        <br></br>
        <br></br>        <br></br>
        <br></br>
        <ul>
        <li>Home Cinema</li>
        <li>Whole House Audio</li>
        <li>Whole House HD Video</li>
        <li>High Performance Home Network w/Seemless Wifi</li>
        <li>Reference Video Calibration</li>
        <li>Home Automation w/Bespoke GUI</li>
        <li>CD Collection Ripping/Duplication</li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
