import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import HeroCard from './components/HeroCard';
import config from './config';
import STORE from './STORE';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const heroicFetch = (heroName) => {
    fetch(`https://superheroapi.com/api/10217900902587540/search/${heroName}`)
      .then((res) => res.json())

      .then((data) => console.log(data.results))
      .then((data) => setSearchResults(data))

      .catch(console.error);
  };

  return (
    <div>
      <Header />
      <h1>APP LEVEL</h1>
      <SearchForm setSearchResults={heroicFetch} />
      {searchResults ? (
        <h3>Current hero is {searchResults}</h3>
      ) : (
        <h3>Let's search for a Hero!</h3>
      )}

      <HeroCard heroes={STORE} />
    </div>
  );
}

export default App;
