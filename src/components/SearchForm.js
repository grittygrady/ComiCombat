import React, { useState } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';
import './SearchForm.css';
import 'semantic-ui-css/semantic.min.css';
import HEROSTORE from '../HEROSTORE';

const heroOptions = HEROSTORE;

const SearchForm = (props) => {
  const [heroIdOne, setHeroIdOne] = useState(null);
  const [heroIdTwo, setHeroIdTwo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setLoading(true);
    props.setSearchResults(heroIdOne, heroIdTwo);
  };

  const onChangeQueryOne = (event, data) => {
    setHeroIdOne(data.value);
  };
  const onChangeQueryTwo = (event, data) => {
    setHeroIdTwo(data.value);
  };

  return (
    <div className='searchform'>
      {/* SEMANTIC TEXT INPUT */}
      <Form.Group>
        <Form inverted loading={props.loading} onSubmit={handleSubmit}>
          <Form.Field inline>
            <label>HERO 1</label>
            <Form.Dropdown
              placeholder='Spider-Man, Yoda, etc'
              fluid
              inline
              search
              minCharacters={1}
              selection
              name='search'
              id='heroIdTwo'
              options={heroOptions}
              value={heroIdOne}
              onChange={onChangeQueryOne}
              required
            />
          </Form.Field>
          <Form.Field inline>
            <label>HERO 2</label>
            <Form.Dropdown
              placeholder='Spider-Man, Yoda, etc'
              fluid
              inline
              search
              minCharacters={1}
              selection
              name='search'
              id='heroIdTwo'
              options={heroOptions}
              value={heroIdTwo}
              onChange={onChangeQueryTwo}
              required
            />
          </Form.Field>

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
        </Form>
      </Form.Group>
    </div>
  );
};

export default SearchForm;
