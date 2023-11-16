import Head from 'next/head';

const ArtistPortfolio = () => {
  return (
    <>
      <Head>
        <title>Artist Portfolio</title>
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
                  <div className="col-lg-4">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="/artist-profile-image.jpg"
                          className="img-fluid rounded-circle"
                          alt="Artist Profile"
                          style={{ width: '150px', height: '150px' }}
                        />
                        <h4 className="mt-3 mb-2">Artist Name</h4>
                      </div>

                      <div className="mb-4">
                        <h5>Bio</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>

                      <div className="mb-4">
                        <h5>Contact</h5>
                        <p>Email: artist@example.com</p>
                        <p>Phone: +123 456 7890</p>
                      </div>

                      <div>
                        <h5>Social Media</h5>
                        <p>
                          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </p>
                        <p>
                          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-5 pb-1">Portfolio</h4>
                      </div>

                      <div className="row">
                        {/*portfolio item */}
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/img/monalisa.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">The Monalisa</h5>
                              <p className="card-text">Description Here
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 2</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 3</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 3</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 4</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 5</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 6</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 7</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card">
                            <img
                              src="/portfolio-item1.jpg"
                              className="card-img-top"
                              alt="Portfolio Item 1"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Artwork 8</h5>
                              <p className="card-text">Description of the artwork.</p>
                            </div>
                          </div>
                        </div>
                        {/* Repeat the above block for each portfolio item */}
                      </div>
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

export default ArtistPortfolio;
