import React, { useState, createContext } from 'react';

export const HeroContext = createContext();

export const HeroProvider = (props) => {
  const [heroOne, setHeroOne] = useState(null);
  const [heroTwo, setHeroTwo] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <HeroContext.Provider
      value={[loading, setLoading, heroOne, setHeroOne, heroTwo, setHeroTwo]}
    >
      {props.children}
    </HeroContext.Provider>
  );
};
