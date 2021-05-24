import React, { useContext } from 'react';
import { Message } from 'semantic-ui-react';
import { HeroContext } from '../HeroContext';

const BattleMessage = () => {
  const [heroOne, setHeroOne, heroTwo, setHeroTwo] = useContext(HeroContext);

  return (
    <div>
      <Message size='massive'>
        <h1>{`${heroOne.name} VS ${heroTwo.name}`}</h1>
      </Message>
    </div>
  );
};

export default BattleMessage;
