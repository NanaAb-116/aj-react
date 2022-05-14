import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
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
import { FaBars } from 'react-icons/fa';

function NavbarComp() {
  return (
    <Router>
      <div>
        <Navbar expand='lg' fixed='top'>
          <Navbar.Brand>
            <Link className='logo' to='/'>
              <h3>Nana A.J</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle id='hamburger-btn' aria-controls='basic-navbar-nav'>
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <ul className='navbar-nav'>
                <li className='nav-item single_link'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/news'>News</Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/'>Videos</Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/bio'>Bio</Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/tour'>Tour</Link>
                </li>
                <li className='nav-item single_link'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </Nav>
            <div className=' nav_socials ml-auto'>
              <a
                target='blank'
                href='https://soundcloud.com/nana-a-j/sets/train-of-thought'
              >
                <FaSoundcloud />
              </a>
              <a
                target='blank'
                href='https://www.facebook.com/atotheflippingj/'
              >
                <FaFacebookF />
              </a>
              <a target='blank' href='https://www.instagram.com/nana_a.j/'>
                <FaInstagram />
              </a>
              <a
                target='blank'
                href='https://twitter.com/atotheflippingj?s=20&t=jgDe3BM8MflcevUmnfSs5w'
              >
                <FaTwitter />
              </a>
              <a
                target='blank'
                href='https://open.spotify.com/artist/1NKZ7szc37Mlo5wTwm2tHA?si=mohAOJDFQXqSiMkhDFVI7g'
              >
                <FaSpotify />
              </a>
              <a
                target='blank'
                href='https://www.youtube.com/playlist?list=OLAK5uy_kKdgIi68Smtyjd8GrEc-jrad3q2kf5Q6s'
              >
                <FaYoutube />
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/video' element={<Video />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default NavbarComp;
