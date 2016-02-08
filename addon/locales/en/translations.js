export default {
  supertreeAuth: {
    app: {
      name: 'Supertree',
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

    registrations: {
      new: {
        route: 'Sign up',
        heading: 'Create a free account',
        submit: 'Get started',
        success: 'Registration successful',
      },
    },

    models: {
      users: {
        attributes: {
          email: 'Email',
          password: 'Password',
          passwordConfirmation: 'Confirm password',
          rememberMe: 'Remember me',
        },

        placeholders: {
          email: 'What is your email?',
          password: 'Password',
          passwordConfirmation: 'Confirm password',
          lastName: 'Last name',
          firstName: 'First name',
        },
      },
    },
  },
};
