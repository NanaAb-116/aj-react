import React, { useState } from 'react';
import { collection, getDocs, addDoc } from '@firebase/firestore';

import { db } from '../firebase-config';

function ContactForm() {
  const [person, setPerson] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  });
  const [people, setPeople] = useState([]);

  // collection ref
  const colRef = collection(db, 'AJ-form');
  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
      let form = [];
      snapshot.docs.forEach((doc) => {
        form.push({ ...doc.data(), id: doc.id });
      });
      // console.log(form);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const shadleSubmit = (e) => {
    e.preventDefault();

    if ((person.email, person.firstName, person.lastName, person.message)) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      setPerson({ email: '', firstName: '', lastName: '', message: '' });
      //   console.log(person);
    }

    addDoc(colRef, { person });
  };

  return (
    <div>
      <form className='contact-form' onSubmit={shadleSubmit}>
        <label htmlFor='email' className='required'>
          Email
        </label>
        <br />
        <input
          type='email'
          id='email'
          name='email'
          className='email'
          value={person.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='fName' className='required'>
          First Name
        </label>
        <br />
        <input
          type='text'
          id='fName'
          name='firstName'
          className='fName'
          value={person.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='lName' className='required'>
          Last Name
        </label>
        <br />
        <input
          type='text'
          id='lName'
          name='lastName'
          className='lName'
          value={person.lastName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='message' className='required'>
          Message
        </label>
        <br />
        <input
          type='text'
          id='message'
          name='message'
          className='message'
          value={person.message}
          onChange={handleChange}
        />
        <br />
        <button type='submit' className='submit-btn'>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
