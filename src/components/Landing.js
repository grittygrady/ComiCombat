import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className='Landing'>
      <h1>WHO WOULD WIN</h1>
      <p>
        Are you tired of the absolutely <em>nonstop</em> debates on who would
        win in a fight? Exhausted by those heated arguments that occur to{' '}
        <span>
          <strong>all of us on a daily basis</strong>.
        </span>{' '}
        Well, don't end that friendship just yet - try this site and put your
        vitriol in the past before you put your friend in the ground!
      </p>
      <Link to='/main'>
        <button>END THE MADNESS</button>
      </Link>
    </div>
  );
};

export default Landing;
