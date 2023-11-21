//Hero.js

import Link from 'next/link';

const Hero = () => {
    return(
        <section id='heroproj'>
            <div className='heroproj-container' data-aos="fade-up" data-aos-delay="150" >
                <h1>"Discover,Showcase, Connect, Thrive."
                </h1>
                <h2>
                    Join us on a journey where art knows no bounds,<br /> and limitless imagination with our artists.
                </h2>
            <div className='d-flex'>
                    <Link href='#portfolio' className='btn-get-started scrollto'>
                        View Artists
                    </Link>
                </div>
            </div>
        </section>
       
    );
};

export default Hero;