//Hero.js

import Link from 'next/link';

const Hero = () => {
    return(
        <section id='heroproj'>
            <div className='heroproj-container' data-aos="fade-up" data-aos-delay="150" >
                <h1>"Elevating Talent, Empowering Artists: Your Journey Starts Here."
                </h1>
                <h2>Discover, Connect, Thrive.We are The Ultimate Hub for Artists and Creatives.
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