import React, { useState, useContext } from 'react';
import {
  Button,
  Dimmer,
  Icon,
  Statistic,
  Divider,
  Image,
} from 'semantic-ui-react';
import { HeroContext } from '../HeroContext';
import { BattleLogic } from './BattleLogic';
import './BattleModal.css';

const BattleModal = (props) => {
  const {
    h1ComStat,
    h1StrStat,
    h1PowStat,
    h1IntStat,
    h1SpdStat,
    h1DurStat,
    h2ComStat,
    h2StrStat,
    h2PowStat,
    h2IntStat,
    h2SpdStat,
    h2DurStat,
    isActive,
  } = props;

  const [heroOne, setHeroOne, heroTwo, setHeroTwo] = useContext(HeroContext);
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);
  const handleHide = () => setActive(false);

  // DYNAMIC COLOR BASED UPON GOOD / BAD ALIGNMENT
  const heroOneAlignment =
    heroOne.biography.alignment === 'good' ? 'blue' : 'red';
  const heroTwoAlignment =
    heroTwo.biography.alignment === 'good' ? 'blue' : 'red';

  const startFight = (argOne, argTwo) => {
    console.log(`starting fight`);
    props.BattleLogic(argOne, argTwo);
    setTimeout(handleShow, 2000);
  };

  return (
    <div>
      {heroOne && heroTwo && (
        <>
          {/* VISIBLE CONTENT */}
          <Dimmer.Dimmable dimmed={active} blurred='true'>
            <Statistic.Group className='battleModal' widths='three'>
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
            <div className='battleground__images'>
              <Image
                src={heroOne.image.url}
                alt={heroOne.name}
                rounded
                centered
                size='medium'
              />
              <Button
                size='huge'
                color='red'
                onClick={() => startFight(heroOne, heroTwo)}
              >
                BEGIN COMBAT!
              </Button>
              <Image
                src={heroTwo.image.url}
                alt={heroTwo.name}
                rounded
                centered
                size='medium'
              />
            </div>
            {/* MODAL CONTENT */}
            <Dimmer active={active} onClickOutside={handleHide} page>
              <Statistic.Group inverted>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='star' color={heroOneAlignment} /> {heroOne.name}
                  </Statistic.Value>
                  <Statistic.Label className='stat__label'>
                    Alignment: {heroOne.biography?.alignment}
                  </Statistic.Label>
                </Statistic>
                <Statistic> </Statistic>
                <Statistic>
                  <Statistic.Value>VS</Statistic.Value>
                  <Statistic.Label className='stat__label'>
                    {'  '}
                  </Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='star' color={heroTwoAlignment} /> {heroTwo.name}
                  </Statistic.Value>
                  <Statistic.Label className='stat__label'>
                    Alignment: {heroTwo.biography?.alignment}
                  </Statistic.Label>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='crosshairs' color={heroOneAlignment} />
                    {'    '}
                    {h1ComStat}
                  </Statistic.Value>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='orange' text>
                  <Statistic.Value>{'    '} COMBAT</Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='crosshairs' color={heroTwoAlignment} />
                    {'    '}
                    {h2ComStat}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='bomb' color={heroOneAlignment} />
                    {'    '}
                    {h1StrStat}
                  </Statistic.Value>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='orange' text>
                  <Statistic.Value>{'    '} STRENGTH</Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='bomb' color={heroTwoAlignment} />
                    {'    '}
                    {h2StrStat}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='certificate' color={heroOneAlignment} />
                    {'    '}
                    {h1PowStat}
                  </Statistic.Value>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='orange' text>
                  <Statistic.Value>{'    '} POWER</Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='certificate' color={heroTwoAlignment} />
                    {'    '}
                    {h2PowStat}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='eye' color={heroOneAlignment} />
                    {'    '}
                    {h1IntStat}
                  </Statistic.Value>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='orange' text>
                  <Statistic.Value>{'    '} INTELLIGENCE</Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='eye' color={heroTwoAlignment} />
                    {'    '}
                    {h2IntStat}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='certificate' color={heroOneAlignment} />
                    {'    '}
                    {h1SpdStat}
                  </Statistic.Value>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='orange' text>
                  <Statistic.Value>{'    '} SPEED</Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='certificate' color={heroTwoAlignment} />
                    {'    '}
                    {h2SpdStat}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
              <Divider />
              <Statistic.Group inverted>
                <Statistic>
                  <Statistic.Value>
                    <Icon name='heartbeat' color={heroOneAlignment} />
                    {'    '}
                    {h1DurStat}
                  </Statistic.Value>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='orange' text>
                  <Statistic.Value>{'    '} DURABILITY</Statistic.Value>
                  <Statistic.Label></Statistic.Label>
                </Statistic>
                <Statistic></Statistic>
                <Statistic color='red'>
                  <Statistic.Value>
                    <Icon name='heartbeat' color={heroTwoAlignment} />
                    {'    '}
                    {h2DurStat}
                  </Statistic.Value>
                </Statistic>
              </Statistic.Group>
            </Dimmer>
          </Dimmer.Dimmable>
        </>
      )}
    </div>
  );
};

export default BattleModal;
