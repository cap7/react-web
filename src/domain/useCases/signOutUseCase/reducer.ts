import { createReducer } from 'reduxsauce';
import { Types } from './actions';


const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  error: null
};


const request = (state: any) => ({
  ...state,
  isLoggedIn: false,
  isLoading: true,
  error: null
});

const success = (state: any) => ({
  ...state,
  isLoggedIn: true,
  isLoading: false,
  error: null
});

const failure = (state: any, action: any) => ({
  ...state,
  isLoggedIn: false,
  isLoading: false,
  error: action.error
});


export default createReducer(INITIAL_STATE, {
  [Types.SIGN_OUT_REQUEST]: request,
  [Types.SIGN_OUT_SUCCESS]: success,
  [Types.SIGN_OUT_FAILURE]: failure,
});
