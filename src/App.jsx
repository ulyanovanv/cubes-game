import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import Home from './js/pages/Home.jsx';
import GameOptions from './js/pages/GameOptions.jsx';
import Game from './js/pages/Game.jsx';
import GameResults from './js/pages/GameResults.jsx';
import NoMatch from './js/helpers/routeSupport.js';

const mapStateToProps = state => {
  return { state: state };
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heightOfTitle: 0
    };
    this.title = React.createRef();
  }

  componentDidMount() {
    this.setState({
      heightOfTitle: this.title.current.offsetHeight
    });
  }

  render() {
    console.log(this.state.heightOfTitle);

    return (
      <div className="app">
        <header className="py-3" ref={this.title}>
          <h1 className='app_gradient text-center font-weight-bold'>Cubes Game</h1>
        </header>

        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => (
                <Redirect to="/cubes-game/"/>
              )}/>
              <Route exact path="/cubes-game/" component={() => <Home height={this.state.heightOfTitle} />} />
              <Route exact path="/cubes-game/game/" component={Game} />
              <Route exact path="/cubes-game/game-options" component={GameOptions} />
              <Route exact path="/cubes-game/game-results/" component={GameResults} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

