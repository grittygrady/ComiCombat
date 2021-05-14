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
  );
};

export default HeroCard;
