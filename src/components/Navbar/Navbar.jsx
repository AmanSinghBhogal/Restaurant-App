import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [ openMenu, setOpenMenu ] = useState(false);
    
  return (
      <div className="app__Navbar">
        <div className="app__Navbar-logo">
          <a href='/'><img src={images.gericht} alt="GERICHT" /></a>
        </div>
        <ul className="app__Navbar-links">
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        <div className="app__Navbar-login">
          <a className='p__opensans' href="#login">Log In / Register</a>
          <div />
          <a href="/" className="p__opensans">Book Table</a>
        </div>
        <div className="app__Navabar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setOpenMenu(true)} />
          {
            openMenu && (
              <div className="app__Navbar-smallscreen-overlay flex__center slide-bottom">
                <MdRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setOpenMenu(false)}/>
                <ul className="app__Navbar-smallscreen-links">
                  <li className='p__opensans'><a href='#home'>Home</a></li>
                  <li className='p__opensans'><a href='#About'>About</a></li>
                  <li className='p__opensans'><a href='#menu'>Menu</a></li>
                  <li className='p__opensans'><a href='#awards'>Awards</a></li>
                  <li className='p__opensans'><a href='#contact'>Contact</a></li>
                </ul>
              </div>
            )
          }
        </div>
      </div>
    ); 
} 

export default Navbar;
