import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedArtists = () => {
  const [artistsData, setArtistsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/featured-artists');
        if (response.status === 200) {
          setArtistsData(response.data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main id="main-content" className="wrapper">
        <div className="container">
          <div className="single-area">
            <h1 className="page-title">Explore Our Featured Artists</h1>

            {/* Artist blocks */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {artistsData.map((artist, index) => (
                <div className="col mb-4" key={index}>
                  <div className="card h-100">
                    <Image
                      src={artist.photo}
                      alt={artist.alt}
                      width={300}
                      height={300}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h2 className="card-title">{artist.name}</h2>
                      <p className="card-text">{artist.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div id="totop" className="d-flex justify-content-center mt-4">
        {/* Centered "Back To Top" button */}
        <a href="#" className="active">
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default FeaturedArtists;
