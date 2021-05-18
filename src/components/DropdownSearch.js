import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const heroOptions = [
  { id: 1, value: 'A-Bomb', text: 'A-Bomb' },
  { id: 2, value: 'Abe Sapien', text: 'Abe Sapien' },
  { id: 3, value: 'Abin Sur', text: 'Abin Sur' },
  { id: 4, value: 'Abomination', text: 'Abomination' },
];

const DropdownSearch = () => {
  return (
    <Dropdown
      placeholder='Deadpool, Yoda, etc'
      fluid
      search
      minCharacters={2}
      selection
      options={heroOptions}
    />
  );
};

export default DropdownSearch;
