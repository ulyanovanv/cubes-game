import { combineReducers } from 'redux';

import cubes from './cubes.js';
import players from './players.js';

const initialState = {
  gameOption: 'default',
  isModalWindowOpened: false,
  currentPath: window.location.href
};

function root(state = initialState, action) {
  // if (action.type === "ADD_ARTICLE") {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }

  return state;
}

export default combineReducers({
  root,
  cubes,
  players
})