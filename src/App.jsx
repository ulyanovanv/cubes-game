import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Home from './js/pages/Home.jsx';
import GameOptions from './js/pages/GameOptions.jsx';
import Game from './js/pages/Game.jsx';
import GameResults from './js/pages/GameResults.jsx';
import NoMatch from './js/helpers/routeSupport.js';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <h1>React App</h1>

          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/cubes-game/"/>
            )}/>
            <Route exact path="/cubes-game/" component={Home} />
            <Route exact path="/cubes-game/game/" component={Game} />
            <Route exact path="/cubes-game/game-options" component={GameOptions} />
            <Route exact path="/cubes-game/game-results/" component={GameResults} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
