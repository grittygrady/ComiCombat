import React from 'react';
import heroOptions from './STORE';

const heroJson = heroOptions.map((hero) => (
  <p>
    `key: {hero.id}, value: `{hero.id}`, text: `{hero.value}``
  </p>
));

const FormatThis = () => {
  return (
    <div>
      <h1>MAP IT</h1>

      {'<h1>Somethin</h1>'}
      {heroJson}
    </div>
  );
};

export default FormatThis;
