import React, { useEffect } from 'react';
import Newsletter from './Newsletter';

import Videos from './Videos';

function Home() {
  useEffect(() => {
    document.title = 'Home | Nana A.J';
  }, []);
  return (
    <>
      <section className='home_section'>
        <div className='container-fluid home'>
          <div className='row'>
            <div className='col-md-12 main_sec'>
              <h3 className='text-center text-light'>COOL DOWN - OUT NOW</h3>
            </div>
            <div className='row mx-auto w-75'>
              <div className='col-md-4 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://bfan.link/cool-down-1'
                >
                  <button
                    type='button'
                    className='btn btn-outline-light my-2 p-3 w-100'
                  >
                    Cool Down
                  </button>
                </a>
              </div>
              <div className='col-md-4 text-center'>
                <a
                  target='_blank'
                  href='https://linktr.ee/nana_a.j'
                  rel='noopener noreferrer'
                >
                  <button
                    type='button'
                    className='btn btn-outline-light my-2 p-3 w-100'
                  >
                    Train of Thought
                  </button>
                </a>
              </div>
              <div className='col-md-4 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://lnk.pedalrecords.com/round-and-round'
                >
                  <button
                    type='button'
                    className='btn btn-outline-light my-2 p-3 w-100'
                  >
                    Round And Round
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video  */}
      <section id='videos'>
        <Videos />
      </section>
      <Newsletter />
    </>
  );
}

export default Home;
