import React from 'react'
import Aboutpic from '../../images/freepik__a-whimsical-scene-of-a-caucasian-woman-with-a-lapt__93746.png'
import './About.css'
function About({ darkMode }) {
    return (
        <>
            <div className={`about ${darkMode ? "about-light" : "about-dark"}`}>
                <div className="about-left">
                    <h1 className='about-title'>Get to <span className='color'>know</span> me!</h1>
                    <p className='about-paragraph'>Hi, my name is <span className='highlights'>Kajal Saini.</span>
                        &nbsp;I specialize in building interactive web applications using modern technologies such as<span className='highlights'> React, Next.js, TypeScript, and JavaScript.</span>&nbsp;My goal is to create web experiences that are both visually appealing and technically robust.
                    </p>
                    <br />
                    <p className='about-paragraph'>
                        I have done an internship as a <span className='highlights'>Web Developer </span>which is a fintech startup. &nbsp;I love to create original projects with beautiful designs, you can check out some of my work in the projects section.
                    </p>
                    <br />
                    <p className='about-paragraph'>
                        I am open to new collaborations or work where I can contribute and grow.&nbsp; <span className='highlights'>Feel free to connect with me,</span> links are in the footer.&nbsp;
                        Apart from coding I love to do photography, you can check out some of my shots here <a href='https://www.linkedin.com/in/kajal-saini-849a9332a/'> Linkedin.</a>
                    </p>
                </div>
                <div className="about-right">
                    <img src={Aboutpic} alt="About" className='img' />
                </div>
            </div>
            <div className={`skills ${darkMode ? 'skills-light' : 'skills-dark'}`}>
                <h1 className="about-skills">Skills </h1>

                <div className={`skill ${darkMode ?'skill-dark':'skill-light'}`}>

                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>HTML & CSS</h3></div>
                            <button className="level">Advanced</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Javascript</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>React</h3></div>
                            <button className="level">Advanced</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Next js</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Node.js</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>MongoDB</h3></div>
                            <button className="level">Advanced</button>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-body">
                            <div className="about-skill"><h3>Django</h3></div>
                            <button className="level">Intermediate</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About