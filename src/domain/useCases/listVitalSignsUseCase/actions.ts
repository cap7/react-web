import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  listVitalSigns: ['refresh', 'codOrder'],
  // Reducer
  listVitalSignsRequest: null,
  listVitalSignsSuccess: null,
  listVitalSignsFailure: ['error'],
});

export { Creators, Types };
