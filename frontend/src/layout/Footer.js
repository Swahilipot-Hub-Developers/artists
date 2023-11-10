import Link from 'next/link'
//import { useEffect, useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear()

  
  return (
    <>
      {/*========== FOOTER ==========*/}
      <footer className="bg-primary-dark mt-7 border-top border-white-10">
        <div className="container">
          <div className="row content-space-1">
            <div className="col-12 col-lg-3 mb-7 mb-lg-0">
              <div className="mb-5">
                <Link className="navbar-brand" href="/" aria-label="Swahilipot Hub">
                  <img className="navbar-brand-logo" src="../logo/logo.png" alt="Swahilipot Hub Foundation"/>
                </Link>
              </div>
            </div>

            <div className="col-6 col-sm mb-7 mb-sm-0">
              <span className="text-cap text-primary-light">About Swahilipot</span>

              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <Link className="link-sm link-light" href="/about">About us</Link>
                </li>
                <li>
                  <Link className="link-sm link-light" href="/about/origin">Our Origin Story</Link>
                </li>
                <li>
                  <Link className="link-sm link-light" href="/about/sponsors">Our Partners</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm mb-7 mb-sm-0">
              <span className="text-cap text-primary-light">Departments</span>

              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <Link className="link-sm link-light" href="/departments/communications">Communication</Link>
                </li>
                <li>
                  <Link className="link-sm link-light" href="/departments/creatives">Creatives</Link>
                </li>
                <li>
                  <Link className="link-sm link-light" href="/departments/technology">Technology {/*<span class="badge bg-warning text-dark rounded-pill ms-2">We're hiring</span>*/}</Link>
                </li>
                <li>
                  <Link className="link-sm link-light" href="/departments/community">Community Experience</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm">
              <span className="text-cap text-primary-light">Legal</span>

              <ul className="list-unstyled list-py-1 mb-5">
                <li>
                  <a className="link-sm link-light" href="#">Terms of use</a>
                </li>
                <li>
                  <a className="link-sm link-light" href="#">Privacy policy <i class="bi-box-arrow-up-right ms-1"></i></a>
                </li>
              </ul>

              <span className="text-cap text-primary-light">Docs</span>

              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="#">Documentation</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-top border-white-10"></div>

          <div className="row align-items-md-end py-5">
            <div className="col-md mb-3 mb-md-0">
              <p className="text-white mb-0">© Swahilipot Hub Foundation. {year}. Mombasa, Kenya.</p>
            </div>

            <div className="col-md d-md-flex justify-content-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-icon btn-sm btn-soft-light rounded-circle" href="https://www.facebook.com/Swahilipothub/">
                    <i className="bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-icon btn-sm btn-soft-light rounded-circle" href="https://twitter.com/swahilipothub">
                    <i className="bi-twitter-x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-icon btn-sm btn-soft-light rounded-circle" href="https://www.linkedin.com/company/swahilipot-hub">
                    <i className="bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*<!-- ========== END FOOTER ========== -->*/}
    </>
  )
}

export default Footer
