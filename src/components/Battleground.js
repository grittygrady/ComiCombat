import React, { useContext, useState } from 'react';
import {
  Card,
  Button,
  Divider,
  Image,
  Container,
  Column,
  Grid,
  Segment,
} from 'semantic-ui-react';
import { HeroContext } from '../HeroContext';
import HeroCard from './HeroCard';
import BattleMessage from './BattleMessage';
import BattleModal from './BattleModal';

const Battleground = () => {
  const [doingBattle, setDoingBattle] = useState(false);

  const [
    heroOne,
    setHeroOne,
    heroTwo,
    setHeroTwo,
    loading,
    setLoading,
    heroOneScore,
    setHeroOneScore,
    heroTwoScore,
    setHeroTwoScore,
  ] = useContext(HeroContext);

  // BATTLE SYSTEM, COMPARE STATS
  // TODO: 1 - RENDER A BETTER MESSAGE - 2. FIGURE OUT HOW TO DEAL WITH MULTIPLE NULL VALUES - 3. CHAIN TOGETHER TIMEOUTS / INTERVALS FOR EACH CAEGORY

  const doBattle = () => {
    setDoingBattle(true);
    const h1cstat = parseInt(heroOne.powerstats.combat);
    const h2cstat = parseInt(heroTwo.powerstats.combat);

    if (h1cstat > h2cstat) {
      setTimeout(increaseHeroOneScore, 1500);
    } else if (h1cstat < h2cstat) {
      setTimeout(increaseHeroTwoScore, 1500);
    }
  };

  const increaseHeroOneScore = () => {
    setDoingBattle(false);
    console.log(
      `${heroOne.name} wins with a Combat Stat of ${heroOne.powerstats.combat}`
    );

    return setHeroOneScore((HeroContext.heroOneScore = heroOneScore + 1));
  };

  const increaseHeroTwoScore = () => {
    setDoingBattle(false);
    console.log(
      `${heroTwo.name} wins with a Combat Stat of ${heroTwo.powerstats.combat}`
    );

    return setHeroTwoScore((HeroContext.heroTwoScore = heroTwoScore + 1));
  };

  return (
    <div style={{ color: 'white' }}>
      {/* ESNURE HEROES HAVE BEEN SELECTED */}
      <BattleModal
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
        keyTwo={heroTwo.id}
        nameTwo={heroTwo.name}
        realNameTwo={heroTwo.biography?.['full-name']}
        birthplaceTwo={heroTwo.biography?.['place-of-birth']}
        firstAppearanceTwo={heroTwo.biography?.['first-appearance']}
        groupAffiliationTwo={heroTwo.connections?.['group-affiliation']}
        combatStatTwo={heroTwo.powerstats?.combat}
        strengthStatTwo={heroTwo.powerstats?.strength}
        powerStatTwo={heroTwo.powerstats?.power}
        intelligenceStatTwo={heroTwo.powerstats?.intelligence}
        speedStatTwo={heroTwo.powerstats?.speed}
        durabilityStatTwo={heroTwo.powerstats?.durability}
        imageUrlTwo={heroTwo.image?.url}
      />
      {heroOne && heroTwo && (
        <>
          {/* <Card.Group className='card-group'>
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
          </Card.Group> */}
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Image
                  src={heroOne.image.url}
                  alt={heroOne.name}
                  rounded
                  inverted='true'
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Image src={heroTwo.image.url} alt={heroTwo.name} rounded />
              </Segment>
            </Grid.Column>
          </Grid>

          <Button onClick={doBattle}>BEGIN COMBAT!</Button>
        </>
      )}
    </div>
  );
};

export default Battleground;
