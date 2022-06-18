import React from 'react';
import {
  FaFacebookF,
  FaSoundcloud,
  FaTwitter,
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from 'react-icons/fa';

function Contact() {
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
          <div className='row'>
            <div className='col-md-6 bookings'>
              <h3 className='mb-4'>Details</h3>
              <a href='#'>
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
              <form action='' className='contact-form'>
                <label>Name *</label>
                <br />
                <input
                  type='text'
                  id='fname'
                  placeholder='First Name'
                  required
                />
                <input
                  type='text'
                  id='lname'
                  placeholder='Last Name'
                  required
                />
                <br />
                <label htmlFor='mail'>Email</label>
                <br />
                <input type='email' id='mail' required />
                <br />
                <label htmlFor='message'>Message</label>
                <br />
                <textarea
                  name='message'
                  id='message'
                  rows='3'
                  cols='40'
                  required
                ></textarea>
                <br />
                <input
                  type='submit'
                  value='Send'
                  className='contact_form_send'
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
