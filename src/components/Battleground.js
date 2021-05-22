import React, { useContext } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { HeroContext } from '../HeroContext';
import HeroCard from './HeroCard';

const Battleground = () => {
  const [heroOne, loading, heroTwo] = useContext(HeroContext);
  console.log(loading);

  return (
    <div style={{ color: 'white' }}>
      <h1>BATTLEGROUND!</h1>
      {/* ESNURE HEROES HAVE BEEN SELECTED */}
      {heroOne && heroTwo && (
        <>
          <Card.Group className='card-group'>
            <HeroCard
              key={heroOne.id}
              name={heroOne.name}
              realName={heroOne.biography?.['full-name']}
              birthplace={heroOne.biography?.['place-of-birth']}
              firstAppearance={heroOne.biography?.['first-appearance']}
              groupAffiliation={heroOne.connections?.['group-affiliation']}
              combatStat={heroOne.powerstats?.combat}
              strengthStat={heroOne.powerstats?.strength}
              powerStat={heroOne.powerstats?.power}
              intelligenceStat={heroOne.powerstats?.intelligence}
              speedStat={heroOne.powerstats?.speed}
              durabilityStat={heroOne.powerstats?.durability}
              imageUrl={heroOne.image?.url}
            />
            <HeroCard
              key={heroTwo.id}
              name={heroTwo.name}
              realName={heroTwo.biography?.['full-name']}
              birthplace={heroTwo.biography?.['place-of-birth']}
              firstAppearance={heroTwo.biography?.['first-appearance']}
              groupAffiliation={heroTwo.connections?.['group-affiliation']}
              combatStat={heroTwo.powerstats?.combat}
              strengthStat={heroTwo.powerstats?.strength}
              powerStat={heroTwo.powerstats?.power}
              intelligenceStat={heroTwo.powerstats?.intelligence}
              speedStat={heroTwo.powerstats?.speed}
              durabilityStat={heroTwo.powerstats?.durability}
              imageUrl={heroTwo.image?.url}
            />
          </Card.Group>
          <Button>BEGIN COMBAT!</Button>
        </>
      )}
    </div>
  );
};

export default Battleground;
