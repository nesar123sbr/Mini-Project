const initialState = {
  theme: 'dark',
  language: 'indonesia',
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: 'japanese',
      };

    default:
      return state;
  }
};
