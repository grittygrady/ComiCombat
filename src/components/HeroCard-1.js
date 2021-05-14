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
    <>
      <div className='herocard' key={id}>
        <div className='herocard__title'>
          <h2>{name}</h2>
          <p>Real name: {realName}</p>
          <p>Birth: {birthplace}</p>
          <p>First Appearance: {firstAppearance}</p>
          <p>Group Affiliation: {groupAffiliation}</p>
          <div className='powerstats'>
            <h4>Powerstats: </h4>
            <ul>
              <li>COMBAT: {combatStat}</li>
              <li>STRENGTH: {strengthStat}</li>
              <li>POWER: {powerStat}</li>
              <li>INTELLIGENCE: {intelligenceStat}</li>
              <li>SPEED: {speedStat}</li>
              <li>DURABILITY: {durabilityStat}</li>
            </ul>
          </div>
        </div>
        <div className='herocard__img'>
          <img src={imageUrl} alt={name} />
        </div>
      </div>
    </>
  );
};

export default HeroCard;
