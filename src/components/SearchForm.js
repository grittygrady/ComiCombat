import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const [heroName, setHeroName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSomeResults(heroName);
    setHeroName('');
  };

  return (
    <div className='searchform'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='heroName'>Search for a Hero: </label>
        <input
          type='text'
          name='search'
          id='heroName'
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />
        <button type='submit'>buTtOnN</button>
      </form>
    </div>
  );
};

export default SearchForm;
