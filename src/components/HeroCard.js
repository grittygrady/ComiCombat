import './HeroCard.css';
import STORE from '../STORE';

const HeroCard = () => {
  return (
    <>
      <h1>HERO CARD</h1>
      {STORE.results.map((hero) => (
        <div className='herocard' key={hero.id}>
          <div className='herocard__title'>
            <h2>{hero.name}</h2>
            <p>Real name: {hero.biography['full-name']}</p>
            <p>Birth: {hero.biography['place-of-birth']}</p>
            <p>First Appearance: {hero.biography['first-appearance']}</p>
            <p>Group Affiliation: {hero.connections['group-affiliation']}</p>
            <div className='powerstats'>
              <h4>Powerstats: </h4>
              <ul>
                <li>COMBAT: {hero.powerstats.combat}</li>
                <li>STRENGTH: {hero.powerstats.strength}</li>
                <li>POWER: {hero.powerstats.power}</li>
                <li>INTELLIGENCE: {hero.powerstats.intelligence}</li>
                <li>SPEED: {hero.powerstats.speed}</li>
                <li>DURABILITY: {hero.powerstats.durability}</li>
              </ul>
            </div>
          </div>
          <div className='herocard__img'>
            <img src={hero.image.url} alt={hero.name} />
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroCard;
