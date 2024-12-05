import React from 'react'

const About = () => {
  return (
    <>
    
    <div className="about-contain">

        <h3 className="head-about">About Me </h3>

        <p className="about-me">

        I'm a <b>Frontend Developer</b>  & <b> UI/UX Designer </b> with <b> Strong Problem-solving </b>  skills, having solved 150+ LeetCode problems. <br/> I worked at <b>Gyantrix Private Limited</b> and contributed to several real-world projects. Additionally, I've participated in multiple OverNight Hackathon's, where I was selected and recognized for my technical and design expertise. 

        </p>
    </div>
    
    </>
  )
}


export function Skills() {
  return (

    <>
    <h2 className='glitch' data-text="Skills"> Skills </h2>

    <div className="skills-section">
      <div className="skills-card">
        <h4 className="skills-title">FrontEnd Development</h4>
        <div className="skills-list">
          <span className="skill-item">React Js</span>
          <span className="skill-item">HTML</span>
          <span className="skill-item">Three.Js</span>
          <span className="skill-item">CSS</span>
          <span className="skill-item">TailWind</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">Bootstrap</span>
          <span className="skill-item">React-Bootstrap</span>
        </div>
      </div>

      <div className="skills-card">
        <h4 className="skills-title">UI / UX  </h4>
        <div className="skills-list">
          <span className="skill-item">Figma</span>
          <span className="skill-item">Framer</span>
          <span className="skill-item">Sketch</span>
          <span className="skill-item">WireFraming</span>
          <span className="skill-item">Prototype</span>
          <span className="skill-item">Balsamiq</span>
          <span className="skill-item">Adobe XD</span>
          <span className="skill-item">...more</span>
          
        </div>
      </div>


      <div className="skills-card">
        <h4 className="skills-title">Programming Languages </h4>
        <div className="skills-list">
          <span className="skill-item">C </span>
          <span className="skill-item">JAVA <b>[Core]</b> </span>
          <span className="skill-item">Python </span>
          <span className="skill-item">JavaScript </span>
          
        </div>
      </div>

      <div className="skills-card">
        <h4 className="skills-title">Version Control & Deployment </h4>
        <div className="skills-list">

          <span className="skill-item"> Git </span>
          <span className="skill-item">GitHub </span>
          <span className="skill-item">GitLab </span>
          <span className="skill-item">Netlify </span>
          <span className="skill-item">Vercel </span>
          
        </div>
      </div>

      <div className="skills-card">
        <h4 className="skills-title">Problem Solving #DSA  </h4>
        <div className="skills-list">

          <span className="skill-item"> HackerRank <b>(50+)</b>  </span>
          <span className="skill-item">GFG <b>(130+) </b>  </span>
          <span className="skill-item">LeetCode <b> (150+)</b>  </span>
          
        </div>
      </div>

    </div>
    </>
  )
}

export default About