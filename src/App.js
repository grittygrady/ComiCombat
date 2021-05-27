import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { HeroProvider } from './HeroContext';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Main from './components/Main';
import Battleground from './components/Battleground';

import { Container } from 'semantic-ui-react';

function App() {
  return (
    <HeroProvider>
      <BrowserRouter>
        <Header />
        <Container>
          <main>
            <Switch>
              <Route component={Landing} exact path='/' />
              <Route component={Main} path='/main' />
              <Route component={Battleground} path='/battleground' />
            </Switch>
          </main>
        </Container>
      </BrowserRouter>
    </HeroProvider>
  );
}

export default App;
