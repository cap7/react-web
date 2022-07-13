import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  saveWeightHeight: ['refresh',
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
  saveWeightHeightRequest: null,
  saveWeightHeightSuccess: null,
  saveWeightHeightFailure: ['error'],
  saveWeightHeightClear: null,
});

export { Creators, Types };
