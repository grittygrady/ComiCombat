import React, { useState } from 'react';
import { Button, Icon, Input, Form } from 'semantic-ui-react';
import './SearchForm.css';

const SearchForm = (props) => {
  const [heroName, setHeroName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoading(true);
    props.setSearchResults(heroName);
    setHeroName('');
  };

  return (
    <div className='searchform'>
      {/* <Form loading={props.loading} onSubmit={handleSubmit}>
        <label htmlFor='heroName'>Search for a Hero: </label>
        <input
          type='text'
          name='search'
          id='heroName'
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />

        <Button primary type='submit'>
          Search
        </Button>
      </Form> */}

      <Form inverted loading={props.loading} onSubmit={handleSubmit}>
        <Form.Field inline>
          <Input
            className='formInput'
            type='text'
            name='search'
            id='heroName'
            value={heroName}
            onChange={(e) => setHeroName(e.target.value)}
            label='Search for a Hero'
            placeholder='Spider-Man...'
            focus
            required
            fluid
            align='center'
          />
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