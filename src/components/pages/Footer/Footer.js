import React from 'react'
import {Button} from '../../Button'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer= () => {
  return (
    <div className='footer-container'>
      <section className="footer-options">
        <p className="footer-options-heading">
          Join our group chat to interact with other chelsea fans
        </p>
        <p className="footer-options-text">
          You can leave at any time
        </p>
        <div className="input-areas">
          <form >
            <input type="email" name="email" placeholder='Your Email' className="footer-input" />
            <Button buttonStyle='btn--outline'>Join</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About our team</h2>
            <Link to='/login'>How it works</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Contributors</Link>
            <Link to='/'>Terms of services</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              CHELS <i className="fab fa-typo"/>
            </Link>
          </div>
          <small className="website-rights">CHELS ©2023 </small>
          <div className="social-icons">
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'>
                <i className="fab fa-twitter-t"/>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'>
                <i className="fab fa-instagram-t"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



