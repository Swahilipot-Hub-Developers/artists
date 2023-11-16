import Head from 'next/head';

const SignUpForm = () => {
  return (
    <>
      <Head>
        <title>SignUp</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyZ5eJRM63Xs9E9KGdVXTt4u"
          crossOrigin="anonymous"
        />
      </Head>

      <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="/logo/logo.png"
                          style={{ width: '185px' }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Join Swahilipot Hub Artists</h4>
                      </div>

                      <form>
                        <p>Create Your Account Here</p>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="First Name"
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            placeholder="Last Name"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>

                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="termsCheckbox"
                          />
                          <label className="form-check-label" htmlFor="termsCheckbox">
                            I agree to the <a href="#terms">terms and conditions</a>
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-3">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2"
                            type="button"
                          >
                            Sign Up
                          </button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <button type="button" className="btn btn-outline-danger">
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ background: 'linear-gradient(to right, #4A90E2, #1E467A)' }}>
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">"Unlock Your Canvas, Create Your Profile: Where Art Meets Identity."</h4>
                      <p className="small mb-0">
                        "Embark on a Journey Across All Artistic Horizons!
                        Unleash the full spectrum of your creativity, where each creation becomes a chapter in your
                        visual autobiography. Connect with a community that appreciates the vast tapestry of artistic 
                        expression, and be part of a platform that celebrates the beauty in every brushstroke,
                        photograph, lyric, or sculpture. Your artistic odyssey awaits—sign up today and let your
                        creativity thrive in a space where all forms of art find their voice and resonate in a 
                        harmonious symphony of self-expression."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
