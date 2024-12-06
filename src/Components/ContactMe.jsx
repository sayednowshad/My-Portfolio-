import React from 'react'

const ContactMe = () => {
  return (
    <>
    <h2 className='contact'>Contact Me </h2>
    <div className="form-container">
  <form className="form">
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input required name="email" id="email" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="textarea">How Can We Help You?</label>
      <textarea required cols="50" rows="10" id="textarea" name="textarea"></textarea>       
      <button type="submit" className="form-submit-btn">Submit</button>
    </div>
  </form>
</div>

    
    </>
  )
}

export default ContactMe