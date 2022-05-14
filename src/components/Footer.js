import React from 'react';
import {
  FaFacebookF,
  FaSoundcloud,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <section className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='footer_socials'>
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
            </div>
          </div>
          <div className='row'>
            <div className='col text-center'>
              <p>©Nana A.J 2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
