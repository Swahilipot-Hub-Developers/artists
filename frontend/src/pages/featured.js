
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedArtists = () => {
  return (
    <div>
      <Head>
        <title>Featured Artists</title>
      </Head>

      <header id="header-block">
        {/* Header content goes here */}
      </header>

      <main id="main-content" className="wrapper">
        <div className="container">
          <div className="single-area">
            <h1 className="page-title">Explore Our Featured Artists</h1>

            {/* Artist blocks */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* Artist 1 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Bahari Brush"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Bahari Brush</h2>
                    <p className="card-text"> Canvas Painter</p>
                  </div>
                </div>
              </div>

              {/* Artist 2 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Blue Band"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Blue Band</h2>
                    <p className="card-text">Afro-Pop Band</p>
                  </div>
                </div>
              </div>

              {/* Artist 3 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Drummer Beats"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Drummer Blue</h2>
                    <p className="card-text">Producer</p>
                  </div>
                </div>
              </div>

              {/* Artist 4 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Wale Nisi"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Wale Nisi</h2>
                    <p className="card-text">Contemporary Dance</p>
                  </div>
                </div>
              </div>

              {/* Artist 5 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Sauti Nene"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Sauti Nene</h2>
                    <p className="card-text">Swahili Rap</p>
                  </div>
                </div>
              </div>

              {/* Artist 6 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Dap Keys"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Dap Keys</h2>
                    <p className="card-text">Pianist</p>
                  </div>
                </div>
              </div>

              {/* Artist 7 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Kulturez"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Kulturez</h2>
                    <p className="card-text">Drummer</p>
                  </div>
                </div>
              </div>

              {/* Artist 8 */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Cula Gang"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Cula Gang</h2>
                    <p className="card-text">Pop/R&B Artist</p>
                  </div>
                </div>
              </div>

              {/* Artist 9  */}
              <div className="col mb-4">
                <div className="card h-100">
                  <Image
                    src=""
                    alt="Nimashe"
                    width={300}
                    height={300}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Nimashe</h2>
                    <p className="card-text">Urban Worship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="totop">
        <a href="" className="active">
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default FeaturedArtists;
