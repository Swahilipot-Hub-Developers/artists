import Layout from "@/ui-components/layout";
import React, { useState } from "react";

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentVideos, setCurrentVideos] = useState([]);
  const [previousPhotos, setPreviousPhotos] = useState([]);
  const [previousVideos, setPreviousVideos] = useState([]);
  const [currentDescription, setCurrentDescription] = useState("");
  const [previousDescription, setPreviousDescription] = useState("");

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const handlePhotoChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    if (selectedType === "current") {
      setCurrentPhotos([...currentPhotos, ...fileArray]);
    } else if (selectedType === "previous") {
      setPreviousPhotos([...previousPhotos, ...fileArray]);
    }
  };

  const handleVideoChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    if (selectedType === "current") {
      setCurrentVideos([...currentVideos, ...fileArray]);
    } else if (selectedType === "previous") {
      setPreviousVideos([...previousVideos, ...fileArray]);
    }
  };

  const handleCurrentDescriptionChange = (event) => {
    setCurrentDescription(event.target.value);
  };

  const handlePreviousDescriptionChange = (event) => {
    setPreviousDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    if (selectedType === "current") {
      // Handle current works submission
      console.log("Current Photos:", currentPhotos);
      console.log("Current Videos:", currentVideos);
      console.log("Current Description:", currentDescription);
      // Reset fields after submission if needed
      setCurrentPhotos([]);
      setCurrentVideos([]);
      setCurrentDescription("");
    } else if (selectedType === "previous") {
      // Handle previous works submission
      console.log("Previous Photos:", previousPhotos);
      console.log("Previous Videos:", previousVideos);
      console.log("Previous Description:", previousDescription);
      // Reset fields after submission if needed
      setPreviousPhotos([]);
      setPreviousVideos([]);
      setPreviousDescription("");
    }
    // Add logic to send the data wherever necessary
  };

  return (
    <Layout>
      <div className="" id="portfolio">
        <h5 className="display-4 text-primary m-5 text-center">Portfolio</h5>
        <div className="container text-center mb-4">
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="Responsive Buttons"
          >
            <button
              type="button"
              className="btn btn-info mx-2"
              onClick={() => handleTypeSelection("current")}
            >
              Current Works
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => handleTypeSelection("previous")}
            >
              Previous Works
            </button>
          </div>
        </div>

        {selectedType && (
          <div className="container">
            <form onSubmit={handleSubmit}>
              {selectedType === "current" && (
                <div className="mb-4">
                  <h1>Add current photos below:</h1>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                  />
                  <div className="mt-4">
                    <label htmlFor="currentDescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="currentDescription"
                      rows="3"
                      value={currentDescription}
                      onChange={handleCurrentDescriptionChange}
                    ></textarea>
                  </div>

                  <h1 className="mt-4">Add current videos below:</h1>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoChange}
                  />
                  <div className="mt-4">
                    <label
                      htmlFor="currentVideoDescription"
                      className="form-label"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="currentVideoDescription"
                      rows="3"
                      value={currentDescription}
                      onChange={handleCurrentDescriptionChange}
                    ></textarea>
                  </div>
                </div>
              )}
              {selectedType === "previous" && (
                <div className="mb-4">
                  <h1>Add previous photos below:</h1>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoChange}
                  />
                  <div className="mt-4">
                    <label htmlFor="previousDescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="previousDescription"
                      rows="3"
                      value={previousDescription}
                      onChange={handlePreviousDescriptionChange}
                    ></textarea>
                  </div>

                  <h1 className="mt-4">Add previous videos below:</h1>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoChange}
                  />
                  <div className="mt-4">
                    <label
                      htmlFor="previousVideoDescription"
                      className="form-label"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="previousVideoDescription"
                      rows="3"
                      value={previousDescription}
                      onChange={handlePreviousDescriptionChange}
                    ></textarea>
                  </div>
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Portfolio;
