const initialState = {
  cubesValues: {
    white1: null,
    white2: null,
    red: null,
    yellow: null,
    green: null,
    blue: null
  }
};

export default function cubesReducer(state = initialState, action) {
  // if (action.type === "ADD_ARTICLE") {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }

  return state;
}