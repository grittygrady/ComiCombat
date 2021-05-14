<<<<<<< HEAD
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
=======
import { Card, Icon, Image } from 'semantic-ui-react';
import './HeroCard.css';
const HeroCard = (props) => {
  const {
    name,
    id,
    realName,
    birthplace,
    firstAppearance,
    groupAffiliation,
    combatStat,
    strengthStat,
    powerStat,
    intelligenceStat,
    speedStat,
    durabilityStat,
    imageUrl,
  } = props;
  return (
    <Card key={id}>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>Real Name: {realName}</Card.Meta>
        <Card.Meta>Birth: {birthplace}</Card.Meta>
        <Card.Description className='card__description'>
          <strong>First Appearance:</strong> {firstAppearance}
          <br />
          <strong>Group Affiliation:</strong> {groupAffiliation}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <h4>POWER STATS</h4>
        <ul className='powerstatlist'>
          <li>COMBAT: {combatStat}</li>
          <li>STRENGTH: {strengthStat}</li>
          <li>POWER: {powerStat}</li>
          <li>INTELLIGENCE: {intelligenceStat}</li>
          <li>SPEED: {speedStat}</li>
          <li>DURABILITY: {durabilityStat}</li>
        </ul>
      </Card.Content>
    </Card>
>>>>>>> parent of 04cb3f7 (Styling Hero Icons)
  );
};

export default HeroCard;
