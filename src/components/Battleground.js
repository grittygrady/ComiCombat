import React, { useContext, useState } from 'react';
import { HeroContext } from '../HeroContext';
import BattleModal from './BattleModal';
import './Battleground.css';

const Battleground = () => {
  const [doingBattle, setDoingBattle] = useState(false);
  const [heroOneScore, setHeroOneScore] = useState(0);
  const [heroTwoScore, setHeroTwoScore] = useState(0);

  const [heroOne, setHeroOne, heroTwo, setHeroTwo, loading, setLoading] =
    useContext(HeroContext);

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

  // COMMENT THE HELL OUT OF THE RULES - ALL THE PARSING TO NUMBERS IS WEIRD

  const battlefield = (heroOne, heroTwo) => {
    const h1cstat = parseInt(heroOne.powerstats.combat);
    const h1pstat = parseInt(heroOne.powerstats.power);

    const h2cstat = parseInt(heroTwo.powerstats.combat);
    let test = parseInt(null);
    if (isNaN(test)) {
      test = 50;
    }
    console.log(test);
  };

  // ACTUAL CONTENT - REALLY JUST A CHECK FOR STATE
  return (
    <div style={{ color: 'white' }}>
      {/* ESNSURE HEROES HAVE BEEN SELECTED */}
      {heroOne && heroTwo && (
        <>
          <BattleModal BattleLogic={battlefield} />
        </>
      )}
    </div>
  );
};

export default Battleground;
