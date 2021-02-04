import {Value} from 'react-native-reanimated';

const initialState = {
  theme: false,
  language: 'indonesia',
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};
