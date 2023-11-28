import React, { useState, useEffect } from "react";

import Link from "next/link";

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from your Django API
    fetch("http://localhost:8000/api/items/")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const originalArtists = [
    {
      name: "Safari Serengeti",
      profession: "Acrylic Wildlife Muralist",
      class: "filter-visual-artists",
    },
    {
      name: "Pwani Pixel",
      profession: "Swahili Digital Artisan",
      class: "filter-visual-artists",
    },
    {
      name: "Bahari Brush",
      profession: "Oceanic Realism Illustartor",
      class: "filter-visual-artists",
    },
    {
      name: "Pwani Pixel",
      profession: "Swahili Digital Artisan",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-literary-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-sound-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-sound-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-literary-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-performing-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-visual-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-visual-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-visual-artists",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    {
      name: "Chris Achinga",
      profession: "Software Engineer",
      class: "filter-fashion-designs",
    },
    // ... (your original list of artists)
  ];

  const [artists, setArtists] = useState(
    originalArtists.map((artist) => ({
      ...artist,
      likeCount: 0,
      commentCount: 0,
      showCommentInput: false,
    }))
  );
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = () => {
    const filteredArtists = originalArtists.filter(
      (artist) =>
        artist.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        artist.profession.toLowerCase().includes(searchValue.toLowerCase())
    );
    setArtists(filteredArtists);
  };

  const handleSearch = () => {
    setSearchValue("");
    setArtists(originalArtists);
  };

  const [showCommentInput, setShowCommentInput] = useState(false);

  // const toggleCommentInput = (index) => {
  //   const updatedArtists = artists.map((artist, i) =>
  //     i === index
  //       ? { ...artist, showCommentInput: !artist.showCommentInput }
  //       : artist
  //   );
  //   setArtists(updatedArtists);
  // };

  // Function to increment like count for a specific artist
  const handleLike = (index) => {
    const updatedArtists = artists.map((artist, i) =>
      i === index ? { ...artist, likeCount: artist.likeCount + 1 } : artist
    );
    setArtists(updatedArtists);
  };

  const incrementCommentCount = (index) => {
    const updatedArtists = artists.map((artist, i) =>
      i === index
        ? { ...artist, commentCount: artist.commentCount + 1 }
        : artist
    );
    setArtists(updatedArtists);
  };

  return (
    <>
      <main id="main">
        <section id="portfolio" className="section-bg">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3 className="section-title">Our Artists</h3>
            </header>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-14">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-visual-artists">Visual Artists</li>
                  <li data-filter=".filter-performing-artists">
                    Perfoming Artists
                  </li>
                  <li data-filter=".filter-literary-artists">
                    literary Artists
                  </li>
                  <li data-filter=".filter-fashion-designs">Fashion Designs</li>
                  <li data-filter=".filter-sound-artists">Sound Artists</li>
                </ul>
              </div>
            </div>

            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                    <input
                      style={{
                        width: "300px",
                        height: "50px",
                        padding: "5px",
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Search Artists..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyUp={handleKeyUp}
                    />
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-primary btn-lg mb-2"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {artists.map((artist, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 portfolio-item ${artist.class}`}
                >
                  <div className="portfolio-wrap">
                    <figure>
                      <Link href="/profile">
                        <img
                          src="assets/images/projects/Image_30.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </Link>
                    </figure>
                    {/* Comment Section */}
                    <div
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      {/* Single Comment */}
                      <div
                        style={{
                          borderBottom: "1px solid #eee",
                          paddingBottom: "10px",
                        }}
                      >
                        {/* Like & Comment buttons */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => handleLike(index)}
                          >
                            <i className="bi bi-hand-thumbs-up"></i>{" "}
                            <span className="like-count">
                              {artist.likeCount}
                            </span>{" "}
                            Likes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => {
                              const updatedArtists = [...artists];
                              updatedArtists[index].showCommentInput =
                                !updatedArtists[index].showCommentInput;
                              setArtists(updatedArtists);
                            }}
                          >
                            <i className="bi bi-chat"></i>{" "}
                            <span className="comment-count">
                              {artist.commentCount}
                            </span>{" "}
                            Comments
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                          >
                            <i className="bi bi-share"></i> Share
                          </button>
                        </div>
                        <div className="portfolio-info">
                          <h4>{artist.name}</h4>
                          {/* <hr
                            style={{ borderTop: "2px solid ", width: "100%" }}
                          ></hr> */}
                          <p>{artist.profession}</p>
                        </div>
                        {/* Comment input */}
                        <div
                          style={{
                            display: artist.showCommentInput ? "block" : "none", // Use artist's showCommentInput state
                            marginTop: "10px",
                          }}
                        >
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              incrementCommentCount(index);
                            }}
                          >
                            <div className="mb-3">
                              <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Write a comment..."
                              ></textarea>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              <button type="submit" className="btn btn-primary">
                                Post
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* Repeat this structure for multiple comments */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container mt-5">
          <h1 className="mb-4">Artists</h1>
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  {/* Add logic to display the photo if available */}
                  {item.photo && (
                    <img
                      src={`${item.photo}`}
                      className="card-img-top"
                      alt={item.name}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-title">{item.type}</h6>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
