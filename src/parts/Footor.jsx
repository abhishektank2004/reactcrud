import React from 'react'

function Footor() {
  return (
    <>
    <br/>
      <footer className="footer">
        <div className="container-fluid bg-dark text-white">
          <div className="row gy-4">
            {/* Company Info */}
            <div className="col-md-4">
              <h5>Tank's Constructions</h5>
              <p>
                RK Constructions is led by experienced technocrats and engineers, 
                well-known across the state of Telangana. Our clients in the private 
                sector count on us to take on the most complex challenges.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p><strong>Call Us:</strong><br/> 040 40072414 <br/> +91 9502136101</p>
              <p><strong>Email:</strong><br/> <a href="mailto:info@rkconstructions.co.in">info@rkconstructions.co.in</a></p>
              <p>
                <strong>Address:</strong><br/> 
                #2-5-19/6/A, Flat No. 103, Elite Residency,<br/>
                Near Pillar No. 182, Attapur, Hyderabad-500048.
              </p>
            </div>

            {/* Google Map */}
            <div className="col-md-4">
              <h5>Location</h5>
              <div className="google-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.404789336368!2d78.447289!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d7b606ddd7%3A0x10fa1c37f6d33df8!2sRK%20Constructions!5e0!3m2!1sen!2sin!4v1702800000000" 
                  allowFullScreen
                  loading="lazy"
                  style={{ width: '100%', height: '200px', border: '0' }}
                  title="RK Constructions Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <p className="mb-0">
                &copy; 2024 RK Constructions | Designed & Developed By 
                <span className="text-warning"> HAQS DEVELOPER</span>
              </p>
              {/* Social Media Links */}
              <div className="social-icons mt-2">
                <a href="#" className="text-light mx-2"><i className="bi bi-facebook">f</i></a>
                <a href="#" className="text-light mx-2"><i className="bi bi-linkedin">l</i></a>
                <a href="#" className="text-light mx-2"><i className="bi bi-twitter">t</i></a>
                <a href="#" className="text-light mx-2"><i className="bi bi-instagram">i</i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footor
