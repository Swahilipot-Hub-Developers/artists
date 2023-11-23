import Head from 'next/head';

const UpcomingEvents = () => {
  // Dummy data for upcoming events
  const events = [
    { id: 1, name: 'Art Exhibition', date: 'November 15, 2023', location: 'Art Gallery' },
    { id: 2, name: 'Music Festival', date: 'December 5, 2023', location: 'City Park' },
    { id: 3, name: 'Photography Workshop', date: 'January 10, 2024', location: 'Studio XYZ' },
    // Add more events as needed
  ];

  return (
    <>
      <Head>
        <title>Upcoming Events</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyZ5eJRM63Xs9E9KGdVXTt4u"
          crossOrigin="anonymous"
        />
        {/* Add your custom stylesheets here */}
      </Head>

    
      <section className="banner-area relative" id="home">
        <div className="container">
          
          <div
            className="row fullscreen align-items-center justify-content-center"
            style={{
              height: '735px',
              background: 'linear-gradient(to right, #66ccff, #6699ff)', // Adjust gradient colors
            }}
          >
            <div className="col-lg-10">
              <div className="banner-content text-center">
                <h1 className="text-uppercase text-white">Explore Upcoming Art Events</h1>
                <p className="text-uppercase mx-auto">Mark Your Calendar for Creativity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="quote-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 quote-left">
              <h2 className="text-right">
                <span>Art</span> brings people together,<br />
                and upcoming events are the perfect place to connect.
              </h2>
            </div>
            <div className="col-lg-6 col-sm-12 quote-right">
              <p className="text-left">
                Stay informed about the latest art exhibitions, music festivals, and creative workshops happening around you. Join us in celebrating the diverse and vibrant world of art through these upcoming events.
              </p>
            </div>
          </div>
        </div>
      </section>
   
      <section className="feature-area pb-100" id="feature">
        <div className="container">
          <div className="row">
            {events.map((event) => (
              <div key={event.id} className="col-lg-4 col-md-4 no-padding single-img">
                <div className="middle">
                  <h2 className="text-uppercase text-white">{event.name}</h2>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
