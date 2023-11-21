import React from 'react';

const ContactForm = () => {
  const iconStyle = {
    fontSize: '30px',
    color: '#03C04A',
    marginRight: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#03C04A',
    color: '#fff',
    fontSize: '1.5rem',
  };

  const bodyStyle = {
    backgroundColor: '#54626F',
    color: '#fff',
  };
  // style={bodyStyle}

  return (
    <main className='bg-body-tertiary'>
      <div class="page-header d-flex align-items-center">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h5 className="display-4 text-primary m-5 text-center">Contact</h5>
            </div>
          </div>
        </div>
      </div>
      <section id='contact' >
        <div className='container'>
          <div className='row gy-4 justify-content-center'>

            {/* Info Items */}
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0" style={iconStyle}></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0" style={iconStyle}></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0" style={iconStyle}></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row justify-content-center mt-4">
            <div className="col-lg-9">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">

                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>

                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>

                {/* Add space using Bootstrap spacing utility class (mt-3) */}
                <div className="mt-3"></div>

                <div className="text-center">
                  <button type="submit" className="btn" style={buttonStyle}>Send Message</button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactForm;
