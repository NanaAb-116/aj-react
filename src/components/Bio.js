import React, { useEffect } from 'react';

function Bio() {
  useEffect(() => {
    document.title = 'Bio | Nana A.J';
  }, []);
  return (
    <div>
      <section className='bio_section'>
        <div className='container-fluid bio'>
          <div className='row'>
            <div className='col-md-6 mx-auto bio_sec'>
              <h1 className='text-left text-light'>Biography</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='contact_form'>
        <div className='container'>
          <div className='row justify-content-center my-5'>
            <div className='col-sm-12 col-md-6'>
              <p>
                Nana A.J is a Berlin based Rap artist and producer from Accra,
                Ghana (West Africa). His music inspires and encourages. His
                genre fusion of Gospel, Hip Hop & Afrobeat is an artistic
                expression of who he is. <br />
                <br />
                Nana A.J embarked on his musical career as a teenager, releasing
                a couple of songs under his former stage name A.J. At a point in
                time, he realized he wanted to use his impact to make a positive
                change in the lives of people. Refusing to follow the trends of
                this world, he elevated his songwriting and birthed something
                special.
                <br />
                <br />
                His EPs “On The Low” and “Train of Thought” have been making
                waves ever since their release and are doing very well on online
                music platforms.
                <br />
                <br />
                As a passionate and energizing performer, Nana A.J is set to
                take Rap music to a different level with his life changing
                music, that speaks directly to the soul.
              </p>
            </div>
          </div>
          <div className='col-md-6'></div>
        </div>
      </section>
    </div>
  );
}

export default Bio;
