import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  signOut: null,
  // Reducer
  signOutRequest: null,
  signOutSuccess: null,
  signOutFailure: ["error"],
});

export { Creators, Types };
