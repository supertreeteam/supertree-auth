export default {
  app: {
    name: 'Supertree',
  },

  common: {
    buttons: {
      apply: 'Apply',
      discard: 'Discard',
      create: 'Create',
    },
  },

  logout: {
    route: 'Sign out',
  },

  sessions: {
    new: {
      route: 'Login',
      title: 'Welcome back',
      submit: 'Login',
      invalidCredentials: 'Email or password were incorrect.',
    },
  },

  models: {
    users: {
      attributes: {
        email: 'Email',
        password: 'Password',
        passwordConfirmation: 'Confirm password',
        rememberMe: 'Remember Me',
      },

      placeholders: {
        email: 'ele@phant.trunk',
        password: 'Password',
        passwordConfirmation: 'Confirm password',
        lastName: 'Last name',
        firstName: 'First name',
      },

      hints: {

      },
    },
  },
};
