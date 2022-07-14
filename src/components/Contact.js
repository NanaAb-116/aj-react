import React, { useEffect } from 'react';
import {
  FaFacebookF,
  FaSoundcloud,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';
import ContactForm from './ContactForm';

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Nana A.J';
  }, []);
  return (
    <div>
      <section className='contact_section'>
        <div className='container-fluid contact'>
          <div className='row'>
            <div className='col-md-6 mx-auto contact_sec'>
              <h1 className='text-left text-light'>CONTACT</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='contact_form'>
        <div className='container'>
          <div className='row my-5'>
            <div className='col-md-6 bookings'>
              <h3 className='mb-4'>Details</h3>
              <a href='mailto:nanaaj007@gmail.com'>
                <p>BOOKINGS</p>
              </a>
              <div className='mt-5 bookings-social'>
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
            </div>
            <div className='col-md-6'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
