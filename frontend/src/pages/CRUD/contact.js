import React, { useState } from "react";
import axios from "axios";
import Layout from "@/ui-components/layout";

const ArtistForm = () => {
  const [formData, setFormData] = useState({
    artist_name: "",
    expert_level: "",
    profession: "",
    location: "",
    // other fields
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/admin/artistsmgmt/artistbio/2/",
        formData,
        {
          headers: {
            Authorization: `Token fe5a1cd0018e74a5fa99e6b6b10f376b285c2252`,
          },
        }
      );

      // Handle success, reset form, or perform any necessary action
      console.log("New artist created:", response.data);
      setFormData({
        artist_name: "",
        expert_level: "",
        profession: "",
        location: "",
        // reset other fields if needed
      });
    } catch (error) {
      console.error("Error creating artist:", error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="display-4 text-primary m-5 text-center">Contact</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded">
              <div className="mb-3">
                <label htmlFor="artistName" className="form-label">
                  Location
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
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="expertLevel"
                  placeholder="Expert Level"
                  name="expert_level"
                  value={formData.expert_level}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profession" className="form-label">
                  Email
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
              {/* Other input fields as needed */}

              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
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
