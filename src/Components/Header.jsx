import React from 'react';


const Header = () => {
  return (

    <>
        <img src="/SayedIcon.png" alt="Sayed Icon" className="header-image" />

      <div className='Header-container'>
        <h1 className="name"> Hello I'm SAYED NOWSHAD </h1>

        <div className="About-me">
          <p className='highlight first'><b> FrontEnd Developer - </b> </p>
          <p className='highlight second'><b>UI / UX Designer - </b> </p>
          <p className='highlight third'><b>DSA in JAVA</b></p>
        </div>
      </div>

     
    <button className='Resume' >Download Resume</button> 

    <div className="follow-me">

        <p className='text'>Follow me : </p>
        <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/25.jpg" alt="imgae" className='img'/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="image" className='img'/>
        
    </div>

    </>

  );
};

export default Header;
