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
          <div className='row my-5'>
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
              <form
                className='contact-form'
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor='email' className='required'>
                  Email
                </label>
                <br />
                <input type='email' id='email' className='email' />
                <br />
                <label htmlFor='fName' className='required'>
                  First Name
                </label>
                <br />
                <input type='text' id='fName' className='fName' />
                <br />
                <label htmlFor='lName' className='required'>
                  Last Name
                </label>
                <br />
                <input type='text' id='lName' className='lName' />
                <br />
                <label htmlFor='message' className='required'>
                  Message
                </label>
                <br />
                <input type='text' id='message' className='message' />
                <br />
                <button type='submit' className='submit-btn'>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
