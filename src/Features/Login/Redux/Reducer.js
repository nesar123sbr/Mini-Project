const initialState = {
  email: '',
  token: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CREDENTIAL':
      return {
        ...state,
        email: action.email,
        token: action.token,
      };

    default:
      return state;
  }
};
