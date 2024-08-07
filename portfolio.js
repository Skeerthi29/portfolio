// Portfolio.js
import aits from './aits.jpg';


import React from 'react';
import './style.css'; // Assuming style.css is in the same directory

const Portfolio = () => {
  return (
    <div className="bgimg">
      <nav>
        <ul>
          <li><a href="#home" className="logo">Sankeerthana.</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About me</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="home" className="main">
        <div className="text">
          <h2>HEY THERE!</h2>
          <h1 style={{ margin: '5px' }}>I am <span className="Special">S.Sankeerthana</span></h1>
          <pre style={{ fontFamily: 'Times New Roman, Times, serif' }}>But you can call me --<span className="Special"><b> Keerthi
            </b></span></pre>
          <p><b>I'm currently a student at Annmacharaya institution.</b></p>
          <br /><a href="sanaresume 1.docx" download>Download CV</a>
        </div>
        <div className="textcol">
          <img src="sana.jpg" alt="keerthi"/>
        </div>
      </div>
      <section id="aboutme" className="aboutme">
        <h1>About Me</h1>
        <p style={{ textAlign: 'justify' }}>I'm Sana Sankeerthana pursuing Bachelor of Technology in <span className="special">Annmacharaya institution of technology and sciences</span> in the stream of <span className="Special">&nbsp;Electronics and Communiction Engineering.</span> I am passionate about knowing</p>
        <p> new things in the world and I am also passionate about coding. Self-motivated, highly passionate, and hardworking fresh mind looking for an opportunity to work in a challenging organization to utilize and </p>
        <p>enhance my skills and knowledge to work for the growth of the organization.</p>
        <ul>
          <li>From - Mydhukur, India</li>
          <li>Lives in - Siddareddypalli, India</li>
          <li>Age - 20</li>
          <li>Gender - Female</li>
        </ul>
      </section>
      <section id="Education" className="edu">
        <h1>Education</h1>
        <div className="time">
          <div className="con lef">
            <img src="apms.jpg" alt="School Education" />
            <div className="text-box">
              <h2><span className="Special">School Education</span></h2>
              <small>2018-2019</small>
              <p>I Completed my School Education at Srivedavyasa High School, Mydhukur</p>
              <p>I got 9.7 CGPA in my School Education.</p>
              <span className="lef-arr"></span>
            </div>
          </div>
          <div className="con rig">
            <img src="apms.jpg" alt="Intermediate Education" />
            <div className="text-box">
              <h2><span className="special">Intermediate MPC (Maths, Physics, Chemistry)</span></h2>
              <small>2019-2021</small>
              <p>I Completed my Intermediate Education at Medha Junior College, Mydhukur.</p>
              <p>I got 8.9 CGPA in my Intermediate Education.</p>
              <span className="rig-arr"></span>
            </div>
          </div>
          <div className="con lef">
            <img src="aits.jpg" alt="Bachelor's Education" />
            <div className="text-box">
              <h2><span className="special">B.Tech (Electronics and Communication Engineering)</span></h2>
              <small>2021-2025</small>
              <p>I am pursuing my Bachelor's Education at ANNMACHARAYA INSTITUTION OF TECHNOLOGY AND SCIENCES, RAJAMPETA.</p>
              <p>I got 8.46 CGPA in my Bachelor's Education.</p>
              <span className="lef-arr"></span>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <h1> Skills</h1>
        <div className="skillcon">
    
            <div class="skillcon">
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="c.jpg" class="skill-icon"/>
                        </div>
                        <h3>C Language</h3>
                    </div>

                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="python.png" class="skill-icon"/>
                        </div>
                        <h3>Python programming</h3>
                    </div>
                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="java.png" class="skill-icon"/>
                        </div>
                        <h3>Java programming</h3>
                    </div>
                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="c++.png" class="skill-icon"/>
                        </div>
                        <h3>C++ Language</h3>
                    </div>

                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="html.png" class="skill-icon"/>
                        </div>
                        <h3>HTML & CSS</h3>
                    </div>
 
                </div>
                <div class="skillbox">
                    <div class="skilltit">
                        <div class="skillimg">
                            <img src="javascrpit.jpg" class="skill-icon"/>
                        </div>
                        <h3>JavaScript Language</h3>
                    </div>

                </div>
            </div>
        
        </div>
      </section>
      <footer id="contact">
        <h1><span className="special">Get In Touch</span></h1>
        <address>
          <div className="add">
            <div className="contact">
              <h2><span className="special">Where to find me</span></h2><hr />
              <p>Address: 1/158,<br /> Siddareddypalli,<br /> Mydhukur,<br /> Kadapa(D),<br /> Andhra Pradesh state.</p>
            </div>
            <div className="contact">
              <h2><span className="special">Contact me</span></h2><hr />
              <p><b>Email:</b> <a href="keerthireddy9959@gmail.com">keerthireddy9959@gmail.com</a></p>
              <p><b>Phone:</b> <a href="tel:+91 7995126759">7995126759</a></p>
            </div>
          </div>
          <p><b>&copy; 2024 My portfolio</b></p>
        </address>
      </footer>
    </div>
  );
}

export default Portfolio;