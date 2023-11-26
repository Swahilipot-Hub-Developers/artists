import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedArtists = () => {
  const [artistsData, setArtistsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/featured-artists"
        );
        if (response.status === 200) {
          setArtistsData(response.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main id="main-content" className="wrapper">
        <div className="container">
          <div>
            <h1 className="mb-4">Explore Our Featured Artists</h1>
          </div>
          <div className="single-area">
            {/* Artist blocks */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {artistsData.map((artist, index) => (
                <div className="col mb-4" key={index}>
                  <div className="card h-100">
                    {/* Add logic to display the photo if available */}
                    {artist.photo && (
                      <Image
                        src={`http://127.0.0.1:8000${artist.photo}`} 
                        className="card-img-top"
                        width={300}
                        height={300}
                        alt={artist.selected_artist_name}
                      />
                    )}
                    <div className="card-body">
                      <h2 className="card-title">
                        {artist.selected_artist_name}
                      </h2>
                      <p className="card-text">{artist.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturedArtists;
