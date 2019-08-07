const initialState = {
  activePlayer: 'playerFirst',
  playerFirst: {
    rows: {
      red: {
        chosenNumbers: []
      },
      yellow: {
        chosenNumbers: []
      },
      green: {
        chosenNumbers: []
      },
      blue: {
        chosenNumbers: []
      },
    },
    finePoints: {
      numberOfFines: 0,
      points: 0
    }
  },
  playerSecond: {
    rows: {
      red: {
        chosenNumbers: []
      },
      yellow: {
        chosenNumbers: []
      },
      green: {
        chosenNumbers: []
      },
      blue: {
        chosenNumbers: []
      },
    },
    finePoints: {
      numberOfFines: 0,
      points: 0
    }
  },
};

export default function playersReducer(state = initialState, action) {
  // if (action.type === "ADD_ARTICLE") {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }

  return state;
}