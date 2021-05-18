import React from 'react';
import _ from 'lodash';
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';
import STORE from '../STORE';
import './SearchForm.css';

const source = STORE;

const initialState = {
  loading: false,
  results: [],
  value: '',
};

function searchReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState;
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query };
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results };
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection };
    default:
      throw new Error();
  }
}

const resultRenderer = ({ name }) => <Label content={name} />;

const AutocompleteSearch = (props) => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result) => re.test(result.name);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const selectHero = (heroName) => {
    console.log(heroName);
    props.selectHero(heroName);
  };

  return (
    <div className='searchform'>
      <Search
        title='heroName'
        loading={loading}
        onResultSelect={(e, data) => {
          dispatch({
            type: 'UPDATE_SELECTION',
            selection: data.result.name,
          });
          selectHero(data.result.name);
        }}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        resultRenderer={resultRenderer}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default AutocompleteSearch;
