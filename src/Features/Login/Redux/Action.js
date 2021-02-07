export const actionLogin = (email, password) => {
  return {
    type: 'POST_LOGIN',
    email,
    password,
  };
};
