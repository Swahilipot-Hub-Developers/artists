import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Hero = () => {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/artist-bio/",
          {
            headers: {
              Authorization: `Token fe5a1cd0018e74a5fa99e6b6b10f376b285c2252`, // Set the token in the Authorization header
            },
          });
        setArtist(response.data);
      } catch (error) {
        console.error("Error fetching artist data", error);
      }
    };
    fetchArtist();
  }, []);
  return (
    <section id="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <br />
            <h2>
              Hello 👋, I'm <span>{artist.artist_name}</span> a {artist.expert_level}<br />
              {artist.profession} from {artist.location}
            </h2>
            <p>
              {/* {artist.description} */}
              Blanditiis praesentium aliquam illum tempore incidunt debitis
              dolorem magni est deserunt sed qui libero. Qui voluptas
              amet.Blanditiis praesentium aliquam illum tempore incidunt debitis
              dolorem magni est deserunt sed qui libero. Qui voluptas
              amet.Blanditiis praesentium aliquam illum tempore incidunt debitis
              dolorem magni est deserunt sed qui libero. Qui voluptas amet.
            </p>
            <Link href="/artistProfile/contact" className="btn btn-primary btn-lg mx-2">
              Available for hire
            </Link>
            <br />
            <br />
          </div>

          {/* Right Column with Artist Picture */}
          <div className="col-lg-6">
            <div className="card">
              <img
                src={artist.photo}
                className="card-img-top"
                alt="Artist Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
