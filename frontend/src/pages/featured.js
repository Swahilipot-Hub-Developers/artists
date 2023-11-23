import Head from 'next/head';

const FeaturedArtists = () => {
  // Dummy data for featured artists
  const artists = [
    { id: 1, name: 'John Doe', profession: 'Painter', photo: '/artist1.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'Singer', photo: '/artist2.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'Singer', photo: '/artist2.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'Singer', photo: '/artist2.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'Singer', photo: '/artist2.jpg' },
    { id: 2, name: 'Jane Smith', profession: 'Singer', photo: '/artist2.jpg' },
    // To add more artists as needed
  ];

  return (
    <>
      <Head>
        <title>Featured Artists</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyZ5eJRM63Xs9E9KGdVXTt4u"
          crossOrigin="anonymous"
        />
        {/* Add your custom stylesheets here */}
      </Head>

      {/* Start Banner Area */}
      <section className="banner-area relative" id="home">
        <div className="container">
          {/* Start Header Area */}
          {/* ... (previous code) */}
          <div
            className="row fullscreen align-items-center justify-content-center"
            style={{
              height: '735px',
              background: 'linear-gradient(to right, #ffcc66, #ff6666)', // Adjust gradient colors
            }}
          >
            <div className="col-lg-10">
              <div className="banner-content text-center">
                <h1 className="text-uppercase text-white">Discover Featured Artists</h1>
                <p className="text-uppercase mx-auto">Explore the Diverse World of Art</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}

      {/* Start quote Area */}
      <section className="quote-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 quote-left">
              <h2 className="text-right">
                <span>Art</span> has the power to express emotions,<br />
                ignite inspiration, and transcend boundaries.
              </h2>
            </div>
            <div className="col-lg-6 col-sm-12 quote-right">
              <p className="text-left">
                Immerse yourself in the stories told through brushstrokes, melodies, and expressions. Each artist featured on this platform brings a unique perspective, a tale waiting to be discovered. Join us on a journey where creativity knows no bounds.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End quote Area */}

      {/* Start feature Area */}
      <section className="feature-area pb-100" id="feature">
        <div className="container">
          <div className="row">
            {artists.map((artist) => (
              <div key={artist.id} className="col-lg-4 col-md-4 no-padding single-img">
                <img src={artist.photo} className="image img-fluid" alt={artist.name} />
                <div className="middle">
                  <h2 className="text-uppercase text-white">{artist.name}</h2>
                  <p>{artist.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End feature Area */}
    </>
  );
};

export default FeaturedArtists;
