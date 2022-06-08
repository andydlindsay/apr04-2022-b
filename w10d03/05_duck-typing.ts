interface IPotentialUser {
  username: string,
  password: string
};

const login = (user: IPotentialUser): boolean => {
  // user.roles

  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  roles: []
};

login(myUser);
