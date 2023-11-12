import React, { useState } from "react";

const Portfolio = () => {
  const [artists, setArtists] = useState([
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-visual-artists" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-performing-artists"},
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-literary-artists" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-fashion-designs" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-sound-artists" },
    { name: "Chris Achinga", profession: "Software Engineer" , class: "filter-sound-artists"},
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-fashion-designs" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-literary-artists" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-performing-artists"},
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-performing-artists"},
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-performing-artists"},
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-visual-artists" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-visual-artists" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-visual-artists" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-fashion-designs" },
    { name: "Chris Achinga", profession: "Software Engineer", class: "filter-fashion-designs" },
  ]);

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
                    All{" "}
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
                    />
                  </div>
                </form>
                <button type="button" className="btn btn-primary btn-lg mb-2">
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
             <div key={index} className={`col-lg-4 col-md-6 portfolio-item ${artist.class}`}>
                  <div className="portfolio-wrap">
                    <figure>
                      <img
                        src="assets/images/projects/Image_30.jpg"
                        className="img-fluid"
                        alt=""
                      ></img>
                    </figure>
                    <div className="portfolio-info">
                      <h4>{artist.name}</h4>
                      <p>{artist.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
