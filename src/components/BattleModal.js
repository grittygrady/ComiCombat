import React, { useState, useContext } from 'react';
import {
  Button,
  Dimmer,
  Icon,
  Image,
  Segment,
  Statistic,
  Card,
  Divider,
} from 'semantic-ui-react';
import { HeroContext } from '../HeroContext';
import fightClubImage from '../images/fightclub.png';

const BattleModal = ({ name, nameTwo, combatStat, combatStatTwo }) => {
  const [heroOne, setHeroOne, heroTwo, setHeroTwo] = useContext(HeroContext);
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

  const testInterval = (func, ms) => setInterval(func, ms);

  const blink = () => {
    setActive(!active);
  };

  return (
    <div>
      {heroOne && heroTwo && (
        <>
          <Dimmer.Dimmable as={Segment} dimmed={active} blurred>
            <Card>
              <Image src={fightClubImage} small />
              <Card.Content>
                <Card.Header>GET THE FIGHT ON</Card.Header>
                <Card.Meta>
                  <span>{`${name} VS ${nameTwo}`}</span>
                </Card.Meta>
                <Card.Description>KILL EACH OTHER</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='play' />
                  START FIGHT
                </a>
              </Card.Content>
            </Card>
            <Dimmer active={active} onClickOutside={handleHide} page>
              <Statistic.Group inverted>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='star' small />
                    {name}
                  </Statistic.Value>
                  <Statistic.Label>Alignment: Good</Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='crosshairs' color='red' />
                    VS
                  </Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='star' small />
                    {nameTwo}
                  </Statistic.Value>
                  <Statistic.Label>Alignment: Bad</Statistic.Label>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='crosshairs' small />
                    {combatStat}
                  </Statistic.Value>
                  <Statistic.Label>{name}</Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic>
                  <Statistic.Value>
                    <Icon color='red' /> COMBAT
                  </Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='crosshairs' small />
                    {combatStatTwo}
                  </Statistic.Value>
                  <Statistic.Label>{nameTwo}</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Dimmer>
          </Dimmer.Dimmable>

          <Button.Group>
            <Button onClick={() => testInterval(blink, 2000)} />
            <Button icon='plus' onClick={handleShow} />
            <Button icon='minus' onClick={handleHide} />
          </Button.Group>
        </>
      )}
    </div>
  );
};

export default BattleModal;
