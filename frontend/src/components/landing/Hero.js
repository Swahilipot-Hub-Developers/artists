//Hero.js

import Link from 'next/link';

const Hero = () => {
    return(
        <section id='heroproj'>
            <div className='heroproj-container' data-aos="fade-up" data-aos-delay="150" >
                <h1>"Discover,Showcase, Connect, Thrive."
                </h1>
                <h2>
                "Exploring the boundless realms of creativity, our artists craft visions that transcend
                 boundaries. From the brushstroke to the melody, every creation is a testament to the endless
                 tapestry of human expression. Join us on a journey where art knows no limits, and imagination 
                 knows no bounds."
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