import React from 'react'

const Projects = (  {image1,image3,image4,image5,image6,tittle1, tittle2,tittle3,tittle4,tittle5,tittle6 , repoLink , viewLink},

    {image2 ="mockuuups-macbook-pro-mockup-with-dynamic-splash-effect.png" } ,
    
    
 ) => {

  return (
    
    <>

    <h3 className='Project-tittle'>My Projects </h3>

    <div className='project-container'>

    
    <div className="project-card">
      <img src={image1} alt={`${tittle1} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle1}
      </h3>

    <span className='abt-project'>
       This for the Educational Platform with <b>Stunning</b> User Interface that easily and smooth coloring and font size
       </span> 

      <div className="projects-buttons">

        <a href={viewLink} target="_blank" rel="noopener noreferrer" className='project-butt'>
          View
        </a>

        <a href={repoLink} target='_blank' rel='noopener noreferrer' className='project-butt'>
          Try Now!
        </a>

      </div>
    </div>

    {/* 2nd */}

    <div className="project-card">
      <img src={image2} alt={`${tittle2} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle2}
      </h3>

    <span className='abt-project'>
      This is an User Experience design which i did using the scrolling animation and moving effect to do this Design </span> 

      <div className="projects-buttons">

        <a href={viewLink} target="_blank" rel="noopener noreferrer" className='project-butt'>
          View
        </a>

        <a href={repoLink} target='_blank' rel='noopener noreferrer' className='project-butt'>
        Try Now!
        </a>

      </div>
    </div>

    {/* 3rd */}

    <div className="project-card">
      <img src={image3} alt={`${tittle3} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle3}
      </h3>

    <span className='abt-project'>
      My favorite <b> GAMING CONSOLE </b> i designed it was an amazing design it consists of the multiple page inside of the page itself and it gave boosting when i spent time to design this.    </span> 

      <div className="projects-buttons">

        <a href={viewLink} target="_blank" rel="noopener noreferrer" className='project-butt'>
          View
        </a>

        <a href={repoLink} target='_blank' rel='noopener noreferrer' className='project-butt'>
        Try Now!
        </a>

      </div>
    </div>

    {/* 4th */}



    <div className="project-card">
      <img src={image4} alt={`${tittle4} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle4}
      </h3>

    <span className='abt-project'>
      It is an Educational Learning Platform it design the simplicity and Creativity through this design </span> 

      <div className="projects-buttons">

        <a href={viewLink} target="_blank" rel="noopener noreferrer" className='project-butt'>
          View
        </a>

        <a href={repoLink} target='_blank' rel='noopener noreferrer' className='project-butt'>
        Try Now!
        </a>

      </div>
    </div>

    {/* 5th  */}

    <div className="project-card">
      <img src={image5} alt={`${tittle5} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle5}
      </h3>

    <span className='abt-project'>
    <b> Masterolio </b> is an Website which my First  <b>Over Night Hackathon </b> i spent this to re-create this whole website . It is a beginning of journey through this design i which i had made </span> 

      <div className="projects-buttons">

        <a href={viewLink} target="_blank" rel="noopener noreferrer" className='project-butt'>
          View
        </a>

        <a href={repoLink} target='_blank' rel='noopener noreferrer' className='project-butt'>
        Try Now!
        </a>

      </div>
    </div>


    {/* 6th  */}

    <div className="project-card">
      <img src={image6} alt={`${tittle6} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle6}
      </h3>

    <span className='abt-project'>  
       Fruits Landing Page design it describes about the animation scrolling and also Stunning design which i did using Figma and Adobe XD using wWreFraming
       </span> 

      <div className="projects-buttons">

        <a href={viewLink} target="_blank" rel="noopener noreferrer" className='project-butt'>
          View
        </a>

        <a href={repoLink} target='_blank' rel='noopener noreferrer' className='project-butt'>
        Try Now!
        </a>

      </div>
    </div>

    </div> {/* Ending Container */}

    </>
  )
}

export default Projects;