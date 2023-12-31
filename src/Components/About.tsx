import React from 'react'
import '../Styles/About.css'

function About() {
  return (
    <section className="about-me-container" data-aos='fade-up' data-aos-duration="2000">
      <div className="about-me-wrapper">
        <div className="about-me-logo-wrapper">
          <img src="https://ik.imagekit.io/hs4gfzmpd/Me.webp?updatedAt=1704010833879" alt="about-me-logo" height={300} width={300}/>
        </div>
        <div className="about-me-content-wrapper">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cumque a nostrum ducimus ipsam doloremque. Harum natus ipsa, a sint saepe, quibusdam sed, quaerat repudiandae voluptas consequatur ea fugit vitae?</p>
        <span className='progress-bar'></span>
        </div>
        </div>
    </section>
  )
}

export default About