import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
  FaBars,
  FaFacebookF,
  FaSoundcloud,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

function NavbarComp() {
  const [open, setOpen] = useState(false);

  const mobile = { marginBottom: '' };
  const notMobile = { marginBottom: '-5rem' };
  const hamburgerHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className='my-nav' style={open ? mobile : notMobile}>
        <div className='AJ'>
          <Link to='/'>
            <img src='/images/Untitled-1.png' alt='' />
          </Link>
        </div>
        <FaBars className='hamburgerBars' onClick={hamburgerHandler} />
        <div className={open ? 'nav-menu active-menu' : 'nav-menu'}>
          <ul>
            <li className='single_link '>
              <Link to='/' className='nav-item' onClick={hamburgerHandler}>
                Home
              </Link>
            </li>
            <li className='single_link '>
              <Link to='/news' className='nav-item' onClick={hamburgerHandler}>
                News
              </Link>
            </li>
            <li className='single_link'>
              <HashLink
                to='/#videos'
                className='nav-item'
                onClick={hamburgerHandler}
              >
                Videos
              </HashLink>
            </li>
            <li className='single_link'>
              <Link to='/bio' className='nav-item' onClick={hamburgerHandler}>
                Bio
              </Link>
            </li>
            <li className='single_link'>
              <Link to='/tour' className='nav-item' onClick={hamburgerHandler}>
                Tour
              </Link>
            </li>
            {/* <li className='single_link'>
                <Link to='/tour' className='nav-item'>
                  Merchandise
                </Link>
              </li> */}
            <li className='single_link'>
              <Link
                to='/contact'
                className='nav-item'
                onClick={hamburgerHandler}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className=' nav_socials'>
            <a
              target='blank'
              href='https://soundcloud.com/nana-a-j/sets/train-of-thought'
            >
              <FaSoundcloud className='mx-2' />
            </a>
            <a target='blank' href='https://www.facebook.com/atotheflippingj/'>
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
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
