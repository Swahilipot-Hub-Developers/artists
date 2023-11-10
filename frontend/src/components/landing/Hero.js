//Hero.js

import Link from 'next/link';

const Hero = () => {
    return(
        <section id='heroproj'>
            <div className='heroproj-container' data-aos="fade-up" data-aos-delay="150" >
                <h1>Our Artists</h1>
                <h2>Below are some of our artists</h2>
                <div className='d-flex'>
                    <Link href='portfolio/Portfolio' className='btn-get-started scrollto'>
                        View Artists
                    </Link>
                </div>
            </div>
        </section>
       
    );
};

export default Hero;