import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <h1 className='landing__header'>WHO WOULD WIN?</h1>
      <p className='landing__text'>
        Are you tired of the absolutely <em>nonstop</em> debates on who would
        win in a fight? Exhausted by those heated arguments that occur to{' '}
        <span className='landing__span'>all of us on a daily basis.</span>{' '}
        <br />
        Well, don't end that friendship just yet - try this site and put your
        vitriol in the past before you put your friend in the ground!
      </p>
      <Link to='/main' className='landing__link'>
        END THE MADNESS
      </Link>
    </div>
  );
};

export default Landing;
