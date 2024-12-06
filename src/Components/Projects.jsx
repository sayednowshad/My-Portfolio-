import React from 'react'

const Projects = (  {image1,image3,image4,image5,image6,image7,image8,tittle1,img1,img2, img3, img4,img5,img6, tittle2,tittle3,tittle4,tittle5,tittle6,tittle7,tittle8 , tit1 , tit2 , tit3 , tit4, tit5 , tit6 , repoLink , viewLink},

    {image2 ="mockuuups-macbook-pro-mockup-with-dynamic-splash-effect.png" } ,
    
    
 ) => {

  return (
    
    <>

    <h2 className='Project-tittle'> My UI / UX Projects </h2>

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

    {/* 7th  */}
    <div className="project-card">
      <img src={image7} alt={`${tittle7} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle7}
      </h3>

    <span className='abt-project'>  
       It is an Spark Shoe Design that i build on Figma and developed in React Successfully. Tis design gives an understanding about the Shoe model design. 
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

    {/* 8th  */}
    <div className="project-card">
      <img src={image8} alt={`${tittle8} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tittle8}
      </h3>

    <span className='abt-project'>  
       It is for the trading interface that it seems simple and attractive designs to showcase the online price in the current market. It is a widely range we can access  
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

                  {/* Web Design Projects */}

      <h2 className="Project-tittle"> My Front-End Projects </h2>

      {/* 1st Project */}

      <div className='project-container'>

        <div className="project-card">
      <img src={img1} alt={`${tit1} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tit1}
      </h3>

    <span className='abt-project'>  
       It is a Seat Selector that i used HTML , CSS , JS for the Dom manipulation for this website .
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


    <div className="project-card">
      <img src={img2} alt={`${tit2} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tit2}
      </h3>

    <span className='abt-project'>  
      Nike Shoe Project it is my first project that i did it shows the brand of the brands shoe never before ever after . Nike has achieved the importance of the branding in this market trends.
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


    <div className="project-card">
      <img src={img3} alt={`${tit3} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tit3}
      </h3>

    <span className='abt-project'>  

       Using the API of the Gemini i got an idea of the API working model and doing this i felt i created the Whole Project it was an great working to do this.

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


    <div className="project-card">
      <img src={img4} alt={`${tit4} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tit4}
      </h3>

    <span className='abt-project'>  
       E-commerce website that i cloned which i re-build it further modification and along with the more attractive design with the UI Using TailWindCss.
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


    <div className="project-card">
      <img src={img5} alt={`${tit5} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tit5}
      </h3>

    <span className='abt-project'>  
      I Build an AI - Assistant  that it takes input command from the Desktop it will work what we are command to it.
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


    <div className="project-card">
      <img src={img6} alt={`${tit6} Preview`} className='project-image' />

      <h3 className="project-tittle">
        {tit6}
      </h3>

    <span className='abt-project'>  
       YouTube Clone a funny thing i did on the first time i builded the YT clone Completly form Youtube It self i learned and i cloned it :) .   
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
    
      
      </div> {/* Container Ends */}

      </>
  )
 } 

export default Projects;