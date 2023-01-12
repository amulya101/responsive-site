import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{color: 'fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/'className="navbar-logo">
            <MdFingerprint className='navbar-icon' />
            CHELSEA CORNER
          </Link>
          <div className="menu-icon" onClick={handleClick} >
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-tem">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-tem">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-tem">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                Players
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to='/login' className='btn-link'>
                  <Button buttonStyle='btn--outline'>
                    Login
                  </Button>
                </Link>
              ): (
                <Link to='/login' className="btn-link">
                  <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                          onClick={closeMobileMenu}>
                    Login
                  </Button>
                </Link>
              )}
            </li>  
          </ul>
        </div>
      </div>
    </IconContext.Provider>      
    </>
  )
}

export default Navbar