import React from 'react';
import { Router , Link } from 'react-router-dom';

export default class Game extends React.Component {
  render() {
    return (
      <Link to="/cubes-game/game-results">
        <button className='btn btn-sm btn-success'>Game Results</button>
      </Link>
    );
  }
}
