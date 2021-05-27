import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Link to='/main'>
      <header className='header__page'>
        <h1>COMICOMBAT</h1>
        <p>The Nerdiest Site on the Net!</p>
      </header>
    </Link>
  );
};

export default Header;
