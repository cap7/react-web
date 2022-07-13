import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  updateVitalSigns: ['refresh',
  'codOrder',
  'codAnalysis',
  'temperature',
  'pulse',
  'breathing',
  'systolicPressure',
  'diastolicPressure',
  'halfPressure',
  'heartRate',
  'saturation',
  'observations',
  'codUser'],
  // Reducer
  updateVitalSignsRequest: null,
  updateVitalSignsSuccess: null,
  updateVitalSignsFailure: ['error'],
  updateVitalSignsClear: null
});

export { Creators, Types };
