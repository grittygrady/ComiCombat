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

const BattleModal = ({
  name,
  nameTwo,
  combatStat,
  combatStatTwo,
  imageUrl,
}) => {
  const [heroOne, setHeroOne, heroTwo, setHeroTwo] = useContext(HeroContext);
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

  const testInterval = (func, ms) => setInterval(func, ms);

  const blink = () => {
    setActive(!active);
  };

  const heroOneThumb = heroOne.imageUrl;

  return (
    <div>
      {heroOne && heroTwo && (
        <>
          {/* VISIBLE CONTENT */}
          <Dimmer.Dimmable dimmed={active} blurred='true'>
            <Statistic.Group className='battleModal border1' widths='three'>
              <Statistic inverted>
                <Statistic.Value>{heroOne.name}</Statistic.Value>
              </Statistic>
              <Statistic inverted>
                <Statistic.Value>VS</Statistic.Value>
              </Statistic>
              <Statistic inverted>
                <Statistic.Value>{heroTwo.name}</Statistic.Value>
              </Statistic>
            </Statistic.Group>
            {/* MODAL CONTENT */}
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

          <Button onClick={() => testInterval(blink, 2000)}>
            Test interval
          </Button>
          <Button icon='plus' onClick={handleShow} />
          <Button icon='minus' onClick={handleHide} />
        </>
      )}
    </div>
  );
};

export default BattleModal;
