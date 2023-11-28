// Hero.js

import Link from 'next/link';
import React, { useState } from 'react';

const Hero = () => {
    const imageContainerStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: 'url("assets/images/projects/Image_30.jpg")',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: 0,
    };

    return (
        <section id='heroproj' className='sectionStyle'>
            <div className='heroproj-overlay'></div>
            <div className='heroproj-image' style={imageContainerStyle}></div>
            <div className='heroproj-container' data-aos="fade-up" data-aos-delay="150">
                <h1>"Discover, Showcase, Connect, Thrive."</h1>
                <h2>
                    Join us on a journey where art knows no bounds,<br /> and limitless imagination with our artists.
                </h2>
                <div className='d-flex'>
                    <a href='#portfolio' className='btn-get-started scrollto'>
                        View Artists
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
