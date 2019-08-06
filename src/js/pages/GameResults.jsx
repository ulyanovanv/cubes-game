import React from 'react';
import { Router , Link} from 'react-router-dom';

export default class GameResults extends React.Component {
  render() {
    return (
      <Link to="/cubes-game/">
        <button className='btn btn-sm btn-success'>Home</button>
      </Link>
    );
  }
}
