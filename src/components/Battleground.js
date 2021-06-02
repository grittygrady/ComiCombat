import React, { useContext, useState } from 'react';
import { HeroContext } from '../HeroContext';
import BattleModal from './BattleModal';
import './Battleground.css';

const Battleground = () => {
  const [heroOneStats, setHeroOneStats] = useState([]);
  const [heroTwoStats, setHeroTwoStats] = useState([]);
  const [heroOneFinalScore, setHeroOneFinalScore] = useState(0);
  const [heroTwoFinalScore, setHeroTwoFinalScore] = useState(0);

  const [heroOne, setHeroOne, heroTwo, setHeroTwo, loading, setLoading] =
    useContext(HeroContext);

  // PASTA BELOW ACCOMPLISHES: 1: PARSES NUMBERS FROM TEXT VALUES OF HERO POWERSTATS; 2: CHECKS FOR NULL/UNDEFINED VALUES, ASSIGNS A RANDOM VALUE; 3: SETS THE POWERSTATS IN STATE IN ORDER TO CALCULATE A WINNER AND DISPLAY SOMETHING OTHER THAN NULL - BOOORING!

  const battlefield = (heroOne, heroTwo) => {
    let h1TempStats = [];
    let h2TempStats = [];

    const h1ComStat = parseInt(heroOne.powerstats.combat);
    const h1StrStat = parseInt(heroOne.powerstats.strength);
    const h1PowStat = parseInt(heroOne.powerstats.power);
    const h1IntStat = parseInt(heroOne.powerstats.intelligence);
    const h1SpdStat = parseInt(heroOne.powerstats.speed);
    const h1DurStat = parseInt(heroOne.powerstats.durability);

    const h2ComStat = parseInt(heroTwo.powerstats.combat);
    const h2StrStat = parseInt(heroTwo.powerstats.strength);
    const h2PowStat = parseInt(heroTwo.powerstats.power);
    const h2IntStat = parseInt(heroTwo.powerstats.intelligence);
    const h2SpdStat = parseInt(heroTwo.powerstats.speed);
    const h2DurStat = parseInt(heroTwo.powerstats.durability);

    h1TempStats.push(
      h1ComStat,
      h1StrStat,
      h1PowStat,
      h1IntStat,
      h1SpdStat,
      h1DurStat
    );
    h2TempStats.push(
      h2ComStat,
      h2StrStat,
      h2PowStat,
      h2IntStat,
      h2SpdStat,
      h2DurStat
    );

    let h1FixedStats = [];
    let h2FixedStats = [];

    for (let i = 0; i < h1TempStats.length; i++) {
      if (isNaN(h1TempStats[i])) {
        h1TempStats[i] = Math.floor(Math.random() * 100);
      }
      h1FixedStats.push(h1TempStats[i]);
    }

    for (let i = 0; i < h2TempStats.length; i++) {
      if (isNaN(h2TempStats[i])) {
        h2TempStats[i] = Math.floor(Math.random() * 100);
      }
      h2FixedStats.push(h2TempStats[i]);
    }

    setHeroOneStats(h1FixedStats);
    setHeroTwoStats(h2FixedStats);
    determineWinner(heroOneStats, heroTwoStats);
  };

  const determineWinner = (heroOneStats, heroTwoStats) => {
    let h1FinalScore = heroOneStats.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setHeroOneFinalScore(h1FinalScore);

    let h2FinalScore = heroTwoStats.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setHeroTwoFinalScore(h2FinalScore);
  };

  // ACTUAL CONTENT - BASE DISPLAYED STATS ON PROPS PASSED FROM THIS STATE
  return (
    <div style={{ color: 'white' }}>
      {/* ESNSURE HEROES HAVE BEEN SELECTED */}
      {heroOne && heroTwo && (
        <>
          <BattleModal
            BattleLogic={battlefield}
            h1ComStat={heroOneStats[0]}
            h1StrStat={heroOneStats[1]}
            h1PowStat={heroOneStats[2]}
            h1IntStat={heroOneStats[3]}
            h1SpdStat={heroOneStats[4]}
            h1DurStat={heroOneStats[5]}
            h2ComStat={heroTwoStats[0]}
            h2StrStat={heroTwoStats[1]}
            h2PowStat={heroTwoStats[2]}
            h2IntStat={heroTwoStats[3]}
            h2SpdStat={heroTwoStats[4]}
            h2DurStat={heroTwoStats[5]}
            h1FinalScore={heroOneFinalScore}
            h2FinalScore={heroTwoFinalScore}
          />
        </>
      )}
    </div>
  );
};

export default Battleground;
