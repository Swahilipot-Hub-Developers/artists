import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const artistsData = [
  {
    imageSrc: '/featured/bahari-brush.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/blue-band.jpg',
    alt: 'Blue Band',
    name: 'Blue Band',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/producer.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/Wale-Nisi.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/sauti-nene.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/dap-keys.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/drummer-blue.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/cula-gang.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
  {
    imageSrc: '/featured/nimashe.jpg',
    alt: 'Bahari Brush',
    name: 'Bahari Brush',
    profession: 'Canvas Painter',
  },
];

const FeaturedArtists = () => {
  return (
    <div>
      <main id="main-content" className="wrapper">
        <div className="container">
          <div className="single-area">
            <h1 className="page-title">Explore Our Featured Artists</h1>

            {/* Artist blocks */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {artistsData.map((artist, index) => (
                <div className="col mb-4" key={index}>
                  <div className="card h-100">
                    <Image
                      src={artist.imageSrc}
                      alt={artist.alt}
                      width={300}
                      height={300}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h2 className="card-title">{artist.name}</h2>
                      <p className="card-text">{artist.profession}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div id="totop" className="d-flex justify-content-center mt-4">
        {/* Centered "Back To Top" button */}
        <a href="#" className="active">
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default FeaturedArtists;
