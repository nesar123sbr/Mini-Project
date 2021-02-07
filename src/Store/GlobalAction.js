import {navigate} from '../Utils/Nav';

export const setLoading = (payload) => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};

export const setNavigate = (name, params) => {
  navigate(name, params);
};
