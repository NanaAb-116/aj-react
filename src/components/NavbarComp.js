import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
  FaBars,
  FaFacebookF,
  FaSoundcloud,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';
import Home from './Home';
import News from './News';
import Video from './Videos';
import Bio from './Bio';
import Tour from './Tour';
import Contact from './Contact';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavbarComp() {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', navChangeColorHandler);
  });
  function navChangeColorHandler() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  }

  return (
    <Router>
      <div>
        <Navbar
          expand='lg'
          className={
            scrolled
              ? 'navbar fixed-top my-nav scroll'
              : 'navbar fixed-top my-nav'
          }
        >
          <Navbar.Brand className='AJ'>
            <Link to='/'>
              <h3>Nana A.J</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <FaBars className='hamburgerBars' />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <ul className='navbar-nav'>
                <li className='nav-item single_link '>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item single_link '>
                  <Link to='/news' className='nav-link'>
                    News
                  </Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/videos' className='nav-link'>
                    Videos
                  </Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/bio' className='nav-link'>
                    Bio
                  </Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/tour' className='nav-link'>
                    Tour
                  </Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/tour' className='nav-link'>
                    Merchandise
                  </Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/contact' className='nav-link'>
                    Contact
                  </Link>
                </li>
              </ul>
            </Nav>
            <div className=' nav_socials ml-auto'>
              <a
                target='blank'
                href='https://soundcloud.com/nana-a-j/sets/train-of-thought'
              >
                <FaSoundcloud className='mx-2' />
              </a>
              <a
                target='blank'
                href='https://www.facebook.com/atotheflippingj/'
              >
                <FaFacebookF className='mx-2' />
              </a>
              <a target='blank' href='https://www.instagram.com/nana_a.j/'>
                <FaInstagram className='mx-2' />
              </a>
              <a
                target='blank'
                href='https://twitter.com/atotheflippingj?s=20&t=jgDe3BM8MflcevUmnfSs5w'
              >
                <FaTwitter className='mx-2' />
              </a>
              <a
                target='blank'
                href='https://open.spotify.com/artist/1NKZ7szc37Mlo5wTwm2tHA?si=mohAOJDFQXqSiMkhDFVI7g'
              >
                <FaSpotify className='mx-2' />
              </a>
              <a
                target='blank'
                href='https://www.youtube.com/playlist?list=OLAK5uy_kKdgIi68Smtyjd8GrEc-jrad3q2kf5Q6s'
              >
                <FaYoutube className='mx-2' />
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/videos' element={<Video />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavbarComp;
