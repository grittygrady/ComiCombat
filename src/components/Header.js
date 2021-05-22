import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Link to='/main'>
      <header className='Header'>
        <h1>HEROINfo</h1>
        <p>The crappiest Superhero Site on the Net!</p>
      </header>
    </Link>
  );
};

export default Header;
