import React, { useState } from 'react';
import './App.css';
import config from './config';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import HeroCard from './components/HeroCard';
import { Container, Grid, Segment } from 'semantic-ui-react';

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = (heroName) => {
    fetch(`https://superheroapi.com/api/${config.API_KEY}/search/${heroName}`)
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
          <Grid stackable columns={2}>
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
