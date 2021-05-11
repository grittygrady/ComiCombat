import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div>
      <Header />
      <h1>APP LEVEL</h1>
      <SearchForm setSearchResults={setSearchResults} />
      {searchResults ? (
        <h3>Current hero is {searchResults}</h3>
      ) : (
        <h3>Let's search for a Hero!</h3>
      )}
    </div>
  );
}

export default App;
