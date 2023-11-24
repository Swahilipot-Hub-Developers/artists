import React from "react";
import Head from "next/head";
import Image from "next/image";

const images = [
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
  "/assets/images/projects/nicky.jpeg",
];

const imageStyle = {
  transition: "transform 0.3s ease-in-out",
};

const Portfolio = () => {
  return (
    <div className="bg-body-tertiary">
      <h5 className="display-4 text-primary m-5 text-center">Portfolio</h5>

      {/* Add a div to contain the buttons */}
      <div className="container text-center mb-4">
        <button className="btn btn-primary btn-lg mx-2">Current Works</button>
        <button className="btn btn-secondary btn-lg mx-2">Previous Works</button>
      </div>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {images.map((image, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <div>
                    <Image
                      className="bd-placeholder-img card-img-top"
                      src={image}
                      alt={`Image ${index + 1}`}
                      width={345}
                      height={240}
                      style={imageStyle}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
