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
    <div className="container">
      <div className="row">
        <div>
          <h1 className="mb-4" style={{ color: "#5c8eb0" }}>
            Explore Our Featured Artists
          </h1>
        </div>
      </div>
      <div className="row align-items-end gx-2 gx-lg-3 mb-2 mb-lg-3">
        <div
          className="col-3 d-none d-md-block"
          style={{ marginBottom: "-5rem" }}
        >
          {artistsData.length > 0 && (
            <div className="card mb-3">
              <Image
                src={`http://127.0.0.1:8000${artistsData[0].photo}`}
                className="card-img-top img-fluid w-100"
                alt={artistsData[0].selected_artist_name}
                width={364}
                height={268}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {artistsData[0].selected_artist_name}
                </h5>
                <p className="card-text">{artistsData[0].profession}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-6 col-md-3">
          {artistsData.length > 1 && (
            <div className="card mb-3">
              <Image
                src={`http://127.0.0.1:8000${artistsData[1].photo}`}
                className="card-img-top img-fluid w-100"
                alt={artistsData[1].selected_artist_name}
                width={265}
                height={290}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {artistsData[1].selected_artist_name}
                </h5>
                <p className="card-text">{artistsData[1].profession}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-6 col-md-3">
          {artistsData.length > 2 && (
            <div className="card mb-3">
              <Image
                src={`http://127.0.0.1:8000${artistsData[2].photo}`}
                className="card-img-top img-fluid w-100"
                alt={artistsData[2].selected_artist_name}
                width={387}
                height={290}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {artistsData[2].selected_artist_name}
                </h5>
                <p className="card-text">{artistsData[2].profession}</p>
              </div>
            </div>
          )}
        </div>
        <div
          className="col-3 d-none d-md-block"
          style={{ marginBottom: "-5rem" }}
        >
          {artistsData.length > 3 && (
            <div className="card mb-3">
              <Image
                src={`http://127.0.0.1:8000${artistsData[3].photo}`}
                className="card-img-top img-fluid w-100"
                alt={artistsData[3].selected_artist_name}
                width={364}
                height={268}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {artistsData[3].selected_artist_name}
                </h5>
                <p className="card-text">{artistsData[3].profession}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* End Row */}
      <div className="row gx-2 gx-lg-3">
        <div className="col-6 col-md-3 offset-md-3">
          {artistsData.length > 4 && (
            <div className="card mb-3">
              <Image
                src={`http://127.0.0.1:8000${artistsData[4].photo}`}
                className="card-img-top img-fluid w-100"
                alt={artistsData[4].selected_artist_name}
                width={387}
                height={290}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {artistsData[4].selected_artist_name}
                </h5>
                <p className="card-text">{artistsData[4].profession}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-6 col-md-3">
          {artistsData.length > 5 && (
            <div className="card mb-3">
              <Image
                src={`http://127.0.0.1:8000${artistsData[5].photo}`}
                className="card-img-top img-fluid w-100"
                alt={artistsData[5].selected_artist_name}
                width={265}
                height={290}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {artistsData[5].selected_artist_name}
                </h5>
                <p className="card-text">{artistsData[5].profession}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* End Row */}
    </div>
  );
};

export default FeaturedArtists;
