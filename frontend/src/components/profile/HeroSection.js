import Link from 'next/link';

const Hero = () => {
    return (
        <section id='hero'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6 text-center'>
                        <br />
                        <h2>I'm <span>Jenny Wilson</span> a Professional Photographer from New York City</h2>
                        <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
                        <Link href="contact.html" className="btn btn-primary btn-lg mx-2">Available for hire</Link>
                    </div>

                    {/* Right Column with Artist Picture */}
                    <div className='col-lg-6'>
                        <div className="card">
                            <img src="/assets/images/projects/nicky.jpeg" className="card-img-top" alt="Artist Picture" />
                            <div className="card-body">
                                <h5 className="card-title">Artist Name</h5>
                                {/* Add more details about the artist if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
