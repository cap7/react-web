import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  listEvaluation: ['refresh'],
  // Reducer
  listEvaluationRequest: null,
  listEvaluationSuccess: null,
  listEvaluationFailure: ['error'],
});

export { Creators, Types };
