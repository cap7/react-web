import { createReducer } from "reduxsauce"
import { Types } from "./actions"

const INITIAL_STATE = {
  data:null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
}

const request = (state: any) => ({
  ...state,
  data:null,
  isLoggedIn: false,
  isLoading: true,
  error: null,
})

const success = (state: any, action: any) => ({
  ...state,
  data: action.data,
  isLoggedIn: true,
  isLoading: false,
  error: null,
})

const failure = (state: any, action: any) => ({
  ...state,
  data:null,
  isLoggedIn: false,
  isLoading: false,
  error: action.error,
})

const clean = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.LOG_IN_REQUEST]: request,
  [Types.LOG_IN_SUCCESS]: success,
  [Types.LOG_IN_FAILURE]: failure,
  [Types.LOG_IN_CLEAN]: clean
})
