import React, { useState } from 'react';
import { Button, Icon, Input, Form, Search } from 'semantic-ui-react';
import './SearchForm.css';
import 'semantic-ui-css/semantic.min.css';
import AutocompleteSearch from './AutocompleteSearch';
import DropdownSearch from './DropdownSearch';

const heroOptions = [
  { id: 1, value: 'A-Bomb', text: 'A-Bomb' },
  { id: 2, value: 'Abe Sapien', text: 'Abe Sapien' },
  { id: 3, value: 'Abin Sur', text: 'Abin Sur' },
  { id: 4, value: 'Abomination', text: 'Abomination' },
];

const SearchForm = (props) => {
  const [heroName, setHeroName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoading(true);
    props.setSearchResults(heroName);
    setHeroName('');
  };

  const selectHero = (value) => {
    setHeroName(value);
  };

  const handleChange = (e) => {
    setHeroName(e);
    console.log(heroName);
  };

  const onChangeQuery = (event, data) => {
    setHeroName(data.value);
  };

  return (
    <div className='searchform'>
      {/* SEMANTIC TEXT INPUT */}
      <Form inverted loading={props.loading} onSubmit={handleSubmit}>
        <Form.Field inline>
          {/* <Input
            className='formInput'
            type='text'
            name='search'
            id='heroName'
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
            label='Search for a Hero'
            placeholder='Spider-Man...'
            focus
            fluid
            align='center'
          /> */}
          <Form.Dropdown
            placeholder='Deadpool, Yoda, etc'
            fluid
            search
            minCharacters={2}
            selection
            name='search'
            id='heroName'
            options={heroOptions}
            value={heroName}
            onChange={onChangeQuery}
          />

          {/* <AutocompleteSearch selectHero={selectHero} /> */}
          {/* <DropdownSearch /> */}
          <Button
            inverted
            color='red'
            animated
            type='submit'
            className='searchBtn'
          >
            <Button.Content visible>Search</Button.Content>
            <Button.Content hidden>
              <Icon name='search plus' />
            </Button.Content>
          </Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default SearchForm;
