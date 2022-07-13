import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  listResult: ['refresh'],
  // Reducer
  listResultRequest: null,
  listResultSuccess: null,
  listResultFailure: ['error'],
});

export { Creators, Types };

