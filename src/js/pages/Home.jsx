import React from 'react';
import { Router , Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <Link to="/cubes-game/game-options">
        <button className='btn btn-sm btn-success'>Game Options</button>
      </Link>
    );
  }
}
