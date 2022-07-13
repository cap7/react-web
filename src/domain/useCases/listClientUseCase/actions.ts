import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  listClient: ['refresh'],
  // Reducer
  listClientRequest: null,
  listClientSuccess: null,
  listClientFailure: ['error'],
});

export { Creators, Types };
