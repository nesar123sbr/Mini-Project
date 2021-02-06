const initialState = {
  genres: [],
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};
