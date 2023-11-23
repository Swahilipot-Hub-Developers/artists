import Head from 'next/head';
import Layout from '@/layout/Layout';

const UpcomingEventsPage = () => {
  // Dummy data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Art Exhibition: Colors of Creativity',
      date: 'November 25, 2023',
      location: 'Swahilipot Hub Gallery',
      description: 'Join us for an inspiring art exhibition showcasing a vibrant array of creative expressions.',
    },
    {
      id: 2,
      title: 'Music Festival: Harmony in Diversity',
      date: 'December 10, 2023',
      location: 'Outdoor Amphitheater',
      description: 'Experience the magic of music as diverse artists come together to create a harmonious celebration of unity.',
    },
    {
      id: 3,
      title: 'Art Exhibition: Colors of the World',
      date: '2023-12-15',
      location: 'Art Gallery XYZ',
    },
    {
      id: 4,
      title: 'Concert in the Park: Music Fusion',
      date: '2023-12-20',
      location: 'City Park Amphitheater',
    },
    {
      id: 5,
      title: 'Workshop: Digital Art Masterclass',
      date: '2023-12-25',
      location: 'Creative Hub Studios',
    },
    // Add more events as needed
  ];

  return (
    <Layout>
      <Head>
        <title>Upcoming Events</title>
      </Head>

      <section className="container py-5">
        <h1 className="mb-4">Upcoming Events</h1>

        <div className="row">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {event.date}<br />
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="card-text">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default UpcomingEventsPage;
