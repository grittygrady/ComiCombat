import React, { useState } from 'react';
import { Button, Icon, Input, Form, Search } from 'semantic-ui-react';
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
    props.setSearchResults(heroIdOne);
  };

  const onChangeQueryOne = (event, data) => {
    console.log(data.value);
    console.log(data);

    setHeroIdOne(data.value);
  };
  const onChangeQueryTwo = (event, data) => {
    console.log(data.value);
    console.log(data);

    setHeroIdTwo(data.value);
  };

  return (
    <div className='searchform'>
      {/* SEMANTIC TEXT INPUT */}
      <Form.Group>
        <Form inverted loading={props.loading} onSubmit={handleSubmit}>
          <Form.Field inline>
            <Form.Dropdown
              placeholder='Deadpool, Yoda, etc'
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
            />
          </Form.Field>
          <Form.Field inline>
            <Form.Dropdown
              placeholder='Deadpool, Yoda, etc'
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
