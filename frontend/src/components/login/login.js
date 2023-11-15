import Head from 'next/head';

const LoginForm = () => {
  return (
    <>
      <Head>
        <title>Login</title>
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
                        <h4 className="mt-1 mb-5 pb-1">Sign In</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-3">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-2"
                            type="button"
                          >
                            Log in
                          </button>
                          <div className="d-flex justify-content-between align-items-center">
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                            <button type="button" className="btn btn-link">
                              Create new account
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ background: 'linear-gradient(to right, #4A90E2, #1E467A)' }}>
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">"Welcome Back"</h4>
                      <p className="small mb-0">
                        Immerse yourself in the vibrant world of art, celebrate creativity in all its forms. Experience captivating performances of dance, music, 
                        and poetry as we showcase the rich tapestry of artistic expression within our community.
                        Prepare to be inspired and amazed.
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

export default LoginForm;
