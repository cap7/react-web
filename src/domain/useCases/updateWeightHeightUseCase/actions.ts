import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  updateWeightHeight: ['refresh',
  'codOrder',
  'codAnalysis',
  'size',
  'weight',
  'valueImc',
  'waist',
  'hip',
  'chestPerimeterInspiration',
  'chestPerimeterExpiration',
  'waistHip',
  'nutritionalDiagnosis',
  'observations',
  'codUser'],
  // Reducer
  updateWeightHeightRequest: null,
  updateWeightHeightSuccess: null,
  updateWeightHeightFailure: ['error'],
  updateWeightHeightClear: null
});

export { Creators, Types };
