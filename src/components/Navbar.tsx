import { Link } from 'react-router-dom';
import React from 'react';
import Styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={Styles.nav}>
        <ul>
          <li>
            <Link to='/FormPersonal'>Personal Information</Link>
          </li>
          <li>
            <Link to='/FormEducation'>Education</Link>
          </li>
          <li>
            <Link to='/FormExperience'>Experience</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
