const initialState = {
  genres: [],
  movies: [],
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return {
        ...state,
        genres: action.payload,
      };

    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
