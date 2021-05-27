import React, { useContext, useState } from 'react';
import { HeroContext } from '../HeroContext';
import BattleModal from './BattleModal';
import './Battleground.css';

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

  // const doBattle = () => {
  //   setIsActive(true);
  //   setDoingBattle(true);
  //   const h1cstat = parseInt(heroOne.powerstats.combat);
  //   const h2cstat = parseInt(heroTwo.powerstats.combat);

  //   if (h1cstat > h2cstat) {
  //     setTimeout(increaseHeroOneScore, 1500);
  //   } else if (h1cstat < h2cstat) {
  //     setTimeout(increaseHeroTwoScore, 1500);
  //   }
  // };
  // const doBattle = () => {
  //   console.log(`Doing Battle`);

  //   setDoingBattle(true);
  // };

  // const increaseHeroOneScore = () => {
  //   setDoingBattle(false);
  //   console.log(
  //     `${heroOne.name} wins with a Combat Stat of ${heroOne.powerstats.combat}`
  //   );

  //   return setHeroOneScore((HeroContext.heroOneScore = heroOneScore + 1));
  // };

  // const increaseHeroTwoScore = () => {
  //   setDoingBattle(false);
  //   console.log(
  //     `${heroTwo.name} wins with a Combat Stat of ${heroTwo.powerstats.combat}`
  //   );

  //   return setHeroTwoScore((HeroContext.heroTwoScore = heroTwoScore + 1));
  // };

  return (
    <div style={{ color: 'white' }}>
      {/* ESNSURE HEROES HAVE BEEN SELECTED */}

      {heroOne && heroTwo && (
        <>
          <BattleModal />
        </>
      )}
    </div>
  );
};

export default Battleground;
