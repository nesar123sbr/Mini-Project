export const editProfile = (name, username, email, password) => {
  return {
    type: 'PUT_PROFILE',
    name,
    username,
    email,
    password,
  };
};

export const showProfile = (name, username, email, password) => {
  return {
    type: 'GET_PROFILE',
    name,
    username,
    email,
    password,
  };
};
