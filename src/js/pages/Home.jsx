import React from 'react';
import { Router , Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.rules = React.createRef();

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.scrollToInstructions = this.scrollToInstructions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      height: window.innerHeight - this.props.height
    });
  }

  scrollToInstructions() {
    window.scrollTo(0, this.rules.current.offsetTop)
  }

  render() {
    console.log(this.props);
    return (
      <section className='app__home jumbotron app_b-color py-0'>
        <div className="container text-center d-flex flex-column justify-content-center" style={{height: this.state.height}}>
          <h2 className="jumbotron-heading">Rules of Game</h2>
          <p className="lead">
            This is a small game designed for 2 people and takes no more than 20 minutes. The goal of the game is to collect as many points as possible by crossing out as many cells as possible on each color row. When throwing dice, you have a limited number of combinations to use. Good luck!
          </p>
          <div>
            <button
              className='btn btn-outline-secondary mr-3'
              onClick={() => this.scrollToInstructions()}
            >Go to rules</button>
            <Link to="/cubes-game/game-options">
              <button className='btn btn-outline-secondary'>Skip the rules</button>
            </Link>
          </div>
        </div>

        <div className='container text-left py-3' ref={this.rules}>
          <div className='row'>
            <div className='col-6 text-red'>
              <p>Once a number is chosen on a line, none of the numbers to its left are available any longer. The player is not required to start from the leftmost number. Cells are allowed to be skipped, but it is worth considering that the more you cross out in a series of numbers, the more points you get.</p>
              <p>The board of each player consists of 4 colored rows (red, yellow, green, blue) and each row is made of 11 numbers (red and yellow - from 2 to 12, green and blue - from 12 to 2).</p>
            </div>
            <div className='col-6'></div>
          </div>
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-6 text-yellow'>
              <p>In turn, <b>the active player</b> rolls the 2 white dice and the 2 colored dice and can perform two actions:</p>
              <p>1st action – As 2 white dices are summed, the active can decide whether the computed value is taken. If so, the player clicks on highlighted value and the number is crossed. Otherwise, this action is skipped.</p>
              <p>2nd action – The active player then has the option of combining a colored die with one of the white dice and checking that number on the corresponding colored row. This action is also optional, the player decides whether to do it or not</p>
              <p>3rd fine - If the active player cannot take neither the 1st action nor the 2nd action, then he/she gets a penalty of -5 points.</p>
              <p><b>The other player</b> has an option to make the first action with white cubes.</p>
              <p>As soon as active player and opponent player have completed their actions, they change roles and a new round begins.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-6 text-green'>
              <p>How to close a row:</p>
              <p>- Before you cross out the rightmost digit, at least 5 cells must be crossed out by that moment.</p>
              <p>- When you cross out the last digit in a row, the row closes. At the same time, the house is crossed out at the end, thus adding the number of crossed out numbers.</p>
              <p>- The dice corresponding to the color of the crossed row no longer participates in the game</p>
            </div>
            <div className='col-6'></div>
          </div>
          <div className='row'>
            <div className='col-6'></div>
            <div className='col-6 text-blue'>
              <p>The game ends immediately:</p>
              <p>- when either two lines are padlocked by any player,</p>
              <p>- or when any player has exhausted 4 times of fines (-5).</p>
              <p>The results are scored immediately.</p><br/>
              <p>The winner is the player with the most points.</p>
            </div>
          </div>
        </div>
        <div className="container text-center mt-3">
          <Link to="/cubes-game/game-options">
            <button className='btn btn-outline-secondary mx-auto'>Choose the game options</button>
          </Link>
        </div>
      </section>
    );
  }
}
