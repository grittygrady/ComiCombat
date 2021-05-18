import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import HeroCard from './components/HeroCard';
import AutocompleteSearch from './components/AutocompleteSearch';
import { Container, Grid, Segment } from 'semantic-ui-react';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = (heroName) => {
    console.log(`App says: ${heroName}`);
    fetch(
      `https://superheroapi.com/api.php/10217900902587540/search/${heroName}`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
      .then(setLoading(false))
      .catch(console.error);
  };

  return (
    <div>
      <Header />
      <main>
        <Container>
          <SearchForm
            loading={loading}
            setLoading={setLoading}
            setSearchResults={handleFetch}
          />
          <Grid container columns={1} divided>
            {/* MAP OVER DATA TO CREATE CHARACTER CARDS */}
            {searchResults &&
              searchResults.results.map((hero) => (
                <Grid.Column key={hero.id}>
                  <Segment>
                    <HeroCard
                      key={hero.id}
                      name={hero.name}
                      realName={hero.biography['full-name']}
                      birthplace={hero.biography['place-of-birth']}
                      firstAppearance={hero.biography['first-appearance']}
                      groupAffiliation={hero.connections['group-affiliation']}
                      combatStat={hero.powerstats.combat}
                      strengthStat={hero.powerstats.strength}
                      powerStat={hero.powerstats.power}
                      intelligenceStat={hero.powerstats.intelligence}
                      speedStat={hero.powerstats.speed}
                      durabilityStat={hero.powerstats.durability}
                      imageUrl={hero.image.url}
                    />
                  </Segment>
                </Grid.Column>
              ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
