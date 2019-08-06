import React from 'react';
import { Router , Link } from 'react-router-dom';

export default class GameOptions extends React.Component {
  render() {
    return (
      <Link to="/cubes-game/game">
        <button className='btn btn-sm btn-success'>Game</button>
      </Link>
    );
  }
}
