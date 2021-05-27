import React, { useState } from 'react';
import { Image, Reveal, Card, Icon, Label, List } from 'semantic-ui-react';
import './HeroCard.css'; //TODO:EMPTY MAYBE DELETE

//

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

  const [isFrontVisible, setIsFrontVisible] = useState(true);

  const handleClick = () => {
    setIsFrontVisible(!isFrontVisible);
  };

  return (
    <div className='herocard'>
      <Reveal
        animated='move up'
        style={{
          margin: '1rem auto',
        }}
      >
        <Reveal.Content visible>
          <Card raised key={id}>
            <Image size='small' src={imageUrl} wrapped ui={false} />
            <Card.Content style={{ padding: '1rem' }}>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                <Icon name='user secret' />
                Real Name: {realName}
              </Card.Meta>
            </Card.Content>
            <Card.Content>
              <span onClick={handleClick}>
                <Icon name='certificate' />
                DETAILS
              </span>
            </Card.Content>
          </Card>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Card raised>
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                <Icon name='user secret' />
                Real Name: {realName}
              </Card.Meta>
              <Card.Meta>
                <Icon name='birthday cake' />
                Birth: {birthplace}
              </Card.Meta>
              <Card.Description className='card__description'>
                <strong>First Appearance:</strong> {firstAppearance}
                <br />
                <strong>Group Affiliation:</strong> {groupAffiliation}
                {'...'}
              </Card.Description>
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
        </Reveal.Content>
      </Reveal>
    </div>
  );
};

export default HeroCard;
