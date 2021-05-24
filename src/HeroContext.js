import React, { useState, createContext } from 'react';

export const HeroContext = createContext();

export const HeroProvider = (props) => {
  const [heroOne, setHeroOne] = useState(null);
  const [heroTwo, setHeroTwo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [heroOneScore, setHeroOneScore] = useState(0);
  const [heroTwoScore, setHeroTwoScore] = useState(0);

  return (
    <HeroContext.Provider
      value={[
        loading,
        setLoading,
        heroOne,
        setHeroOne,
        heroTwo,
        setHeroTwo,
        heroOneScore,
        setHeroOneScore,
        heroTwoScore,
        setHeroTwoScore,
      ]}
    >
      {props.children}
    </HeroContext.Provider>
  );
};
