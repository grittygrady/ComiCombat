import React, { useState } from 'react';

const SearchForm = (props) => {
  const [heroName, setHeroName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearchResult(heroName);
    setHeroName('');
  };

  return (
    <div className='searchForm'>
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
