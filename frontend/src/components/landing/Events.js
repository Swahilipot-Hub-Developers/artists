import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const UpcomingEventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/events/');
        setUpcomingEvents(response.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className="bg-body-tertiary">
      <section className="container py-5">
        <h1 className="mb-4">Upcoming Events</h1>

        <div className="row">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {event.time}
                    <br />
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="card-text">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UpcomingEventsPage;
