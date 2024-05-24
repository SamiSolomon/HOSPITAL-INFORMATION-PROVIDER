import React from 'react'

const Team = () => {
  return (
    <div className='team'>
      <p>
      Our team is made up of passionate healthcare professionals and
      innovative technologists who are dedicated to improving patient
      outcomes and streamlining medical device management. We come from
      diverse backgrounds, but we are united by our shared mission to
      revolutionize the healthcare industry.
    </p>
    <div className="team-highlights">
      <div className="highlight">
        <i className="fas fa-heartbeat"></i>
        <h4>Clinical Expertise</h4>
        <p>
          Our team includes experienced clinicians and medical device
          specialists who understand the unique challenges and needs of
          healthcare providers.
        </p>
      </div>
      <div className="highlight">
        <i className="fas fa-code"></i>
        <h4>Technical Prowess</h4>
        <p>
          Our developers and engineers are at the forefront of
          cutting-edge technologies, ensuring our solutions are
          state-of-the-art and user-friendly.
        </p>
      </div>
      <div className="highlight">
        <i className="fas fa-hands-helping"></i>
        <h4>Collaborative Spirit</h4>
        <p>
          We believe in the power of teamwork and collaboration,
          working closely with our clients to understand their needs
          and deliver tailored solutions.
        </p>
      </div>
    </div>
  </div>
 
     
  )
}

export default Team
