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
              <h3 className='text-center text-light'>
                WE GO DEY COOL EP - OUT SOON
              </h3>
            </div>
            <div className='row mx-auto w-75'>
              <div className='col-md-4 text-center'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://url2734.distrokid.com/ls/click?upn=gIy05sl-2BkeX0Wcl7-2B1nYOTQWWeGlFhShnhnCU8f1UBBJPovzwgAWk8HjiJtxXgr-2FjIW5f5c6ptJKo5WVGFP59TgXPkmRfvD-2FzP6Ep07Us-2BQoxXygNsWbbN0zbjkBZ3YpIvFXfQh76AMyi7qYJqjW43DuYWFjOXhqE-2FMA7kMZG7k-3DFqZG_lL0iJKJF1ML31xJr4YvB-2Bn0YbmhYi4O106fmUcp-2FbrFlxsLI-2BYQ2Xmz-2B1c8rVaG8Mgi7-2BG9aQvIWaiI4p6ucFxkGFgscNJa6kzi8k-2BJPmePoveHPgQ30FEc5VjpHfyg9k6pVIkOSxg6eUJ8hAtZY0hN9HIZrZdz4vb6irfLBc2FNQYJI12uVBjaTYtRWcO9B-2BV9Cq6vtpl3RDVUkbsJdCA-3D-3D'
                >
                  <button
                    type='button'
                    className='btn btn-outline-light my-2 p-3 w-100'
                  >
                    We Go Dey Cool
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
