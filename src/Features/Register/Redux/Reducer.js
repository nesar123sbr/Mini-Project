const initialState = {
  name: '',
  username: '',
  email: '',
  password: '',
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        name: action.name,
        username: action.username,
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
};
