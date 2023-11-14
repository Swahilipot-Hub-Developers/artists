import React from 'react';

const Footer = () => {
  const footerNavs = [
    {
      href: 'javascript:void()',
      name: 'About',
    },
    {
      href: 'javascript:void()',
      name: 'Blog',
    },
    {
      href: 'javascript:void()',
      name: '',
    },
    {
      href: 'javascript:void()',
      name: 'Team',
    },
    {
      href: 'javascript:void()',
      name: 'Careers',
    },
    {
      href: 'javascript:void()',
      name: 'Support',
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-3 max-w-screen-xl mx-auto md:px-8 text-center">
      <div className="container">
        <img src="/logo/logo.png" className="w-50 mx-auto mb-4 max-w-full" alt="Swahilipot Hub Logo" />
        <p className="lead">
          Elevating Our artists through Streamlined management and amplifying creativity with our
          artist-centric platform.
        </p>
      </div>
      <ul className="list-unstyled d-flex flex-wrap justify-content-center mt-4">
        {footerNavs.map((item, idx) => (
          <li key={idx} className="mr-3 mb-2">
            <a href={item.href} className="text-decoration-none hover:text-gray-800">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="container mt-4">
        <div className="mb-4">
          &copy; 2023 Swahilipot Hub Artists. All rights reserved.
        </div>
        <ul className="list-inline mb-0 d-flex justify-content-center">
          <li className="list-inline-item">
            <a href="javascript:void()">
              <img src="/socials/facebook.svg" alt="Facebook" className="w-6 h-6 text-blue-400" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void()">
              <img src="/socials/instagram.svg" alt="Instagram" className="w-6 h-6 text-blue-400" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void()">
              <img src="/socials/twitterx.svg" alt="Twitter(X)" className="w-6 h-6 text-blue-400" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="javascript:void()">
              <img src="/socials/youtube.svg" alt="Youtube" className="w-6 h-6 text-blue-400" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
