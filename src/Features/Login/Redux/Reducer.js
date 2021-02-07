const initialState = {
  email: '',
  token: '',
  name: '',
  username: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CREDENTIAL':
      return {
        ...state,
        email: action.email,
        token: action.token,
        name: action.name,
        username: action.username,
      };

    default:
      return state;
  }
};
