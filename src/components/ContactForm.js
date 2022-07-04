import React from 'react';

function ContactForm() {
  return (
    <div>
      <div id='mc_embed_signup'>
        <form
          action='https://gmail.us12.list-manage.com/subscribe/post?u=887e407783925a9343f37cdce&amp;id=faff998900'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='validate'
          target='_blank'
          noValidate='novalidate'
        >
          <div id='mc_embed_signup_scroll'>
            <h2>Sign up to be amongst the first to hear it.</h2>
            <div className='indicates-required'>
              <span className='asterisk'>*</span> indicates required
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-EMAIL'>
                Email Address <span className='asterisk'>*</span>
              </label>
              <input
                type='email'
                defaultValue=''
                name='EMAIL'
                className='required email'
                id='mce-EMAIL'
              />
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-FNAME'>
                First Name <span className='asterisk'>*</span>
              </label>
              <input
                type='text'
                defaultValue=''
                name='FNAME'
                className='required'
                id='mce-FNAME'
              />
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-MMERGE6'>
                Last Name <span className='asterisk'>*</span>
              </label>
              <input
                type='text'
                defaultValue=''
                name='MMERGE6'
                className='required'
                id='mce-MMERGE6'
              />
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-MMERGE2'>
                Message <span className='asterisk'>*</span>
              </label>
              <input
                type='text'
                defaultValue=''
                name='MMERGE2'
                className='required'
                id='mce-MMERGE2'
              />
            </div>
            <div hidden={true}>
              <input type='hidden' name='tags' value='10402524' />
            </div>
            <div id='mce-responses' className='clear foot'>
              <div
                className='response'
                id='mce-error-response'
                style={{ display: 'none' }}
              ></div>
              <div
                className='response'
                id='mce-success-response'
                style={{ display: 'none' }}
              ></div>
            </div>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups --> */}
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden='true'
            >
              <input
                type='text'
                name='b_887e407783925a9343f37cdce_faff998900'
                tabIndex='-1'
                defaultValue=''
              />
            </div>
            <div className='optionalParent'>
              <div className='clear foot'>
                <input
                  type='submit'
                  value='Send'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='button'
                />
                <p className='brandingLogo'>
                  <a
                    href='http://eepurl.com/h2bfCv'
                    title='Mailchimp - email marketing made easy and fun'
                  >
                    <img src='https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg' />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
