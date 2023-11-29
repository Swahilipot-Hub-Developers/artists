import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        'assets/images/projects/homepage1.jpg',
        'assets/images/projects/homepage2.jpg',
        'assets/images/projects/homepage3.jpg',
        'assets/images/projects/homepage4.jpg',
        'assets/images/projects/homepage5.jpg',
        'assets/images/projects/homepage6.jpg',
        // Add more image paths as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageContainerStyle = {
        width: '100%',
        height: '100%',
        backgroundImage: `url("${images[currentImageIndex]}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: 0,
    };

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [currentImageIndex, images.length]);

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
