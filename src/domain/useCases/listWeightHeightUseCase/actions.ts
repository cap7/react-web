import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  listWeightHeight: ['refresh', 'codOrder'],
  // Reducer
  listWeightHeightRequest: null,
  listWeightHeightSuccess: null,
  listWeightHeightFailure: ['error'],
});

export { Creators, Types };
