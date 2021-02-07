export const actionRegister = (name, username, email, password) => {
  return {
    type: 'POST_REGISTER',
    name,
    username,
    email,
    password,
  };
};
