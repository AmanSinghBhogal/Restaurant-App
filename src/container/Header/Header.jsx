import React from 'react';
import {images} from "../../constants";
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to fine Dining</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates ducimus fugiat doloremque. Cupiditate incidunt, aliquam magnam facere, assumenda quisquam, aliquid iste consectetur nihil ad enim corrupti similique. Odit, explicabo?
        </p>
        <button type='button' className='custom__button'> Explore</button>
    </div>
    <div className="app__wrapper_img">
        <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
);

export default Header;
