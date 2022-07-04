import React, { useEffect } from 'react';

function Tour() {
  useEffect(() => {
    document.title = 'Tour | Nana A.J';
  }, []);
  return (
    <div>
      <section className='tour_section'>
        <div className='container-fluid tour'>
          <div className='row'>
            <div className='col-md-6 mx-auto tour_sec'>
              <h1 className='text-left text-light'>Tour Dates</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='tours'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12 text-center my-5'>
              <h4>Upcoming Events</h4>
            </div>
            <div className='col-md-9'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TBA</td>
                    <td>Saved to Serve Music Concert - France</td>
                  </tr>
                  <tr>
                    <td>4th November 2022</td>
                    <td>A.J and Friends</td>
                  </tr>
                  <tr>
                    <td>TBA</td>
                    <td>Special December</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-md-12 text-center my-5'>
              <h4>Past Events</h4>
            </div>
            <div className='col-md-9'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Event</th>
                  </tr>
                  <tr>
                    <td>16th June, 2022</td>
                    <td>Umsonst und Draußen Festival Würzburg 2022</td>
                  </tr>
                  <tr>
                    <td>26th May, 2022</td>
                    <td>We Go Dey Cool EP Virtual Release Party</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>23rd May, 2022</td>
                    <td>Music Pool Berlin Artist Meetup</td>
                  </tr>
                  <tr>
                    <td>March, 2021</td>
                    <td>Benefit Concert Berlin 2022</td>
                  </tr>
                  <tr>
                    <td>June, 2021</td>
                    <td>Afrika Praiz Concert 2021</td>
                  </tr>
                  <tr>
                    <td>September, 2021</td>
                    <td>Climate Justice Festival 2021</td>
                  </tr>
                  <tr>
                    <td>September , 2021</td>
                    <td>Fête de la Musique 2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tour;
