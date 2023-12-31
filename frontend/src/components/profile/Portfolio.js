import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const media = [
  { type: "image", path: "/assets/images/projects/nicky.jpeg" },
  { type: "image", path: "/assets/images/projects/nicky.jpeg" },
  {
    type: "video",
    path: "https://www.youtube.com/embed/413US-VfMmM?si=epG1UhhqFaBQkmSU",
  },
  { type: "image", path: "/assets/images/projects/nicky.jpeg" },
  {
    type: "video",
    path: "https://www.youtube.com/embed/TrWLRLcHE5s?si=H8j0RVNJojCQ0sQz",
  },
  { type: "image", path: "/assets/images/projects/nicky.jpeg" },
  {
    type: "video",
    path: "https://www.youtube.com/embed/tQ8_4pEpauU?si=AbhGVJs7zqMlpiQj",
  },
  { type: "image", path: "/assets/images/projects/nicky.jpeg" },
  { type: "image", path: "/assets/images/projects/nicky.jpeg" },
];

const imageStyle = {
  transition: "transform 0.3s ease-in-out",
};

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-body-tertiary" id="portfolio">
      <h5 className="display-4 text-primary m-5 text-center">Portfolio</h5>
      <p
        className="text-center mt-4 mb-5"
        style={{ fontSize: "1.25rem", lineHeight: "1.6" }}
      >
        Welcome to my portfolio showcasing a collection of my recent projects. <br />
        Feel free to explore and filter between different categories to view my
        current and previous works.
      </p>
      <div className="container text-center mb-4">
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Responsive Buttons"
        >
          <button type="button" className="btn btn-primary mx-2">
            All
          </button>
          <button type="button" className="btn btn-info mx-2">
            Current Works
          </button>
          <button type="button" className="btn btn-secondary mx-2">
            Previous Works
          </button>
        </div>
      </div>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {media.map((item, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  {item.type === "image" ? (
                    <div>
                      <Image
                        className="bd-placeholder-img card-img-top"
                        src={item.path}
                        alt={`Image ${index + 1}`}
                        width={345}
                        height={240}
                        style={{
                          ...imageStyle,
                          transform:
                            hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                        }}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={handleMouseOut}
                      />
                    </div>
                  ) : (
                    <iframe
                      title={`Video ${index + 1}`}
                      width="345"
                      height="240"
                      src={item.path}
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        ...imageStyle,
                        transform:
                          hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                      }}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={handleMouseOut}
                    ></iframe>
                  )}
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
