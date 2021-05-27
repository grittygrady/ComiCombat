import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import { HeroContext } from '../HeroContext';
import HeroCard from './HeroCard';
import SearchForm from './SearchForm';

const Main = () => {
  const [heroOne, setHeroOne, heroTwo, setHeroTwo, loading, setLoading] =
    useContext(HeroContext);

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
      <SearchForm
        loading={loading}
        setLoading={setLoading}
        setSearchResults={handleFetch}
      />
      {/* ENSURE HEROES ARE SELECTED - MAKE TERNARY! */}
      {heroOne && heroTwo && (
        <>
          <Card.Group
            className='card-group main__cardgroup'
            style={{ alignItems: 'center' }}
          >
            <HeroCard
              key={heroOne.id}
              name={heroOne.name}
              realName={heroOne.biography['full-name']}
              birthplace={heroOne.biography['place-of-birth']}
              firstAppearance={heroOne.biography['first-appearance']}
              groupAffiliation={heroOne.connections['group-affiliation'].slice(
                0,
                75
              )}
              combatStat={heroOne.powerstats.combat}
              strengthStat={heroOne.powerstats.strength}
              powerStat={heroOne.powerstats.power}
              intelligenceStat={heroOne.powerstats.intelligence}
              speedStat={heroOne.powerstats.speed}
              durabilityStat={heroOne.powerstats.durability}
              imageUrl={heroOne.image.url}
            />
            <Link to='/battleground'>
              <Button size='huge' color='red' className='fight__btn'>
                LET'S GO!
              </Button>
            </Link>
            <HeroCard
              key={heroTwo.id}
              name={heroTwo.name}
              realName={heroTwo.biography['full-name']}
              birthplace={heroTwo.biography['place-of-birth']}
              firstAppearance={heroTwo.biography['first-appearance']}
              groupAffiliation={heroTwo.connections['group-affiliation'].slice(
                0,
                75
              )}
              combatStat={heroTwo.powerstats.combat}
              strengthStat={heroTwo.powerstats.strength}
              powerStat={heroTwo.powerstats.power}
              intelligenceStat={heroTwo.powerstats.intelligence}
              speedStat={heroTwo.powerstats.speed}
              durabilityStat={heroTwo.powerstats.durability}
              imageUrl={heroTwo.image.url}
            />
          </Card.Group>
        </>
      )}
    </div>
  );
};

export default Main;
