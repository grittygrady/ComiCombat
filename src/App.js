import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

import { Card, Container } from 'semantic-ui-react';
import HeroCard from './components/HeroCard';

function App() {
  const [heroOne, setHeroOne] = useState(null);
  const [heroTwo, setHeroTwo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = (heroIdOne, heroIdTwo) => {
    const queryOne = `https://superheroapi.com/api.php/10217900902587540/${heroIdOne}`;
    const queryTwo = `https://superheroapi.com/api.php/10217900902587540/${heroIdTwo}`;

    Promise.all([fetch(queryOne), fetch(queryTwo)]).then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      )
        .then(function (data) {
          setHeroOne(data[0]);
          setHeroTwo(data[1]);
        })
        .then(setLoading(false))
        .catch(console.error);
    });
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
          {/* <Grid center='true' container columns={2} divided> */}

          {heroOne && heroTwo && (
            <Card.Group className='card-group'>
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
              <HeroCard
                key={heroTwo.id}
                name={heroTwo.name}
                realName={heroTwo.biography['full-name']}
                birthplace={heroTwo.biography['place-of-birth']}
                firstAppearance={heroTwo.biography['first-appearance']}
                groupAffiliation={heroTwo.connections['group-affiliation']}
                combatStat={heroTwo.powerstats.combat}
                strengthStat={heroTwo.powerstats.strength}
                powerStat={heroTwo.powerstats.power}
                intelligenceStat={heroTwo.powerstats.intelligence}
                speedStat={heroTwo.powerstats.speed}
                durabilityStat={heroTwo.powerstats.durability}
                imageUrl={heroTwo.image.url}
              />
            </Card.Group>
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
