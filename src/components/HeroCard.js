import { Card, Icon, Image, Label, List } from 'semantic-ui-react';
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
        <Card.Meta>
          <Icon size='small' name='user secret' />
          Real Name: {realName}
        </Card.Meta>
        <Card.Meta>
          <Icon size='small' name='birthday cake' />
          Birth: {birthplace}
        </Card.Meta>
        <Card.Meta></Card.Meta>
        <Card.Description className='card__description'>
          <strong>First Appearance:</strong> {firstAppearance}
          <br />
          <strong>Group Affiliation:</strong> {groupAffiliation}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <h4>POWER STATS</h4>
        <List divided>
          <List.Item>
            <Label color='red' horizontal>
              <Icon name='crosshairs' />
              COMBAT:
            </Label>
            <Label circular color='red'>
              {combatStat}
            </Label>
          </List.Item>

          <List.Item>
            <Label color='blue' horizontal>
              <Icon name='bomb' />
              STRENGTH:
            </Label>
            <Label circular color='blue'>
              {strengthStat}
            </Label>
          </List.Item>

          <List.Item>
            <Label color='green' horizontal>
              <Icon name='certificate' />
              POWER:
            </Label>
            <Label circular color='green'>
              {powerStat}
            </Label>
          </List.Item>
          <List.Item>
            <Label color='blue' horizontal>
              <Icon name='eye' />
              INTELLIGENCE:
            </Label>
            <Label circular color='blue'>
              {intelligenceStat}
            </Label>
          </List.Item>
          <List.Item>
            <Label color='green' horizontal>
              <Icon name='certificate' />
              SPEED:
            </Label>
            <Label circular color='green'>
              {speedStat}
            </Label>
          </List.Item>
          <List.Item>
            <Label color='red' horizontal>
              <Icon name='heartbeat' />
              DURABILITY:
            </Label>
            <Label circular color='red'>
              {durabilityStat}
            </Label>
          </List.Item>
        </List>
      </Card.Content>
    </Card>
  );
};

export default HeroCard;
