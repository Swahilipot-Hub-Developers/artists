import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/ui-components/layout";

const ArtistForm = () => {
  const [formData, setFormData] = useState({
    artist_name: "",
    expert_level: "",
    profession: "",
    location: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/artist-bio/",
          {
            headers: {
              Authorization: `Token fe5a1cd0018e74a5fa99e6b6b10f376b285c2252`,
            },
          }
        );
        // Assuming response.data contains the artist's bio data
        const artistData = response.data;

        // Set the fetched data into the form state
        setFormData({
          artist_name: artistData.artist_name,
          expert_level: artistData.expert_level,
          profession: artistData.profession,
          location: artistData.location,
          description: artistData.description,
        });
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtistData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        "http://127.0.0.1:8000/api/artist-bio/",
        formData,
        {
          headers: {
            Authorization: `Token fe5a1cd0018e74a5fa99e6b6b10f376b285c2252`,
          },
        }
      );

      // Handle success
      setSuccessMessage("Update successful!"); // Set success message

      // Reset success message after a few seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // Reset after 3 seconds
    } catch (error) {
      console.error("Error creating artist:", error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="display-4 text-primary m-5 text-center">About</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded">
              <div className="mb-3">
                <label htmlFor="artistName" className="form-label">
                  Artist Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="artistName"
                  placeholder="Artist Name"
                  name="artist_name"
                  value={formData.artist_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="expertLevel" className="form-label">
                  Expert Level
                </label>
                <select
                  className="form-control form-control-lg"
                  id="expertLevel"
                  name="expert_level"
                  value={formData.expert_level}
                  onChange={handleChange}
                >
                  <option value="">Select Expert Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="profession" className="form-label">
                  Profession
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="profession"
                  placeholder="Profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="location"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control form-control-lg"
                  id="description"
                  placeholder="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-secondary btn-lg">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArtistForm;
