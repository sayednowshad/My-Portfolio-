import React from 'react'

const Certifications = () => {


  const images = [
    "badge.png",
    "achieve-2.jpg",
    "gssoc.png",
    "certi.png", // Add more image paths as needed
  ];

  return (
    <>

    <h2 className='Achieve'> Achievements  </h2>

    <div className="container">

      {images.map((image, index) => (

        <div className="card" key={index}>

          <img src={image} alt={`Card ${index + 1}`} />

        </div>

      ))}

    </div>

    </>
  )
}

export default Certifications