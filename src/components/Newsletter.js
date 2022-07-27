import React, { useState } from 'react';
import { collection, getDocs, addDoc } from '@firebase/firestore';

import { db } from '../firebase-config';

function Newsletter() {
  const [email, setEmail] = useState('');

  // collection ref
  const colRef = collection(db, 'newsletter');
  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
      let form = [];
      snapshot.docs.forEach((doc) => {
        form.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  const hadleSubmit = (e) => {
    e.preventDefault();
    addDoc(colRef, { email });
    setEmail('');
  };

  return (
    <section className='newsletter'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 ml-auto'>
            <form className='newsletterform'>
              <h1>New music coming soon!</h1>
              <p>Sign up to be amongst the first to hear it.</p>
              <input
                className='email-input'
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type='submit'
                className='signup-btn'
                onClick={hadleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
