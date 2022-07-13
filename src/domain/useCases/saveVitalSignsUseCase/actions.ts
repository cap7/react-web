import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  saveVitalSigns: ['refresh',
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
  saveVitalSignsRequest: null,
  saveVitalSignsSuccess: null,
  saveVitalSignsFailure: ['error'],
  saveVitalSignsClear: null,
});

export { Creators, Types };
