import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import HeroCard from './components/HeroCard';
import { Container, Grid, Segment, Card } from 'semantic-ui-react';
import FormatThis from './FormatThis';

function App() {
  const [heroOne, setHeroOne] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = (heroId) => {
    console.log(`App says: ${heroId}`);
    fetch(`https://superheroapi.com/api.php/10217900902587540/${heroId}`)
      .then((res) => res.json())
      .then((data) => setHeroOne(data))
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
          <Grid center='true' container columns={1} divided>
            {/* MAP OVER DATA TO CREATE CHARACTER CARDS */}
            {heroOne && (
              <Grid.Column key={heroOne.id}>
                <Segment>
                  <HeroCard
                    key={heroOne.id}
                    name={heroOne.name}
                    realName={heroOne.biography['full-name']}
                    birthplace={heroOne.biography['place-of-birth']}
                    firstAppearance={heroOne.biography['first-appearance']}
                    groupAffiliation={heroOne.connections['group-affiliation']}
                    combatStat={heroOne.powerstats.combat}
                    strengthStat={heroOne.powerstats.strength}
                    powerStat={heroOne.powerstats.power}
                    intelligenceStat={heroOne.powerstats.intelligence}
                    speedStat={heroOne.powerstats.speed}
                    durabilityStat={heroOne.powerstats.durability}
                    imageUrl={heroOne.image.url}
                  />
                </Segment>
              </Grid.Column>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
