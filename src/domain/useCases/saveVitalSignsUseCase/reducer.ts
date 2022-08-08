import { createReducer } from "reduxsauce"
import { Types } from "./actions"

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  error: null,
}

const request = (state: any) => ({
  ...state,
  data: null,
  isLoading: true,
  error: null,
})

const success = (state: any, action: any) => ({
  ...state,
  data: action.data,
  isLoading: false,
  succes:true,
  error: null,
})

const failure = (state: any, action: any) => ({
  ...state,
  data: null,
  isLoading: false,
  error: action.error,
})

const clear = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_VITAL_SIGNS_REQUEST]: request,
  [Types.SAVE_VITAL_SIGNS_SUCCESS]: success,
  [Types.SAVE_VITAL_SIGNS_FAILURE]: failure,
  [Types.SAVE_VITAL_SIGNS_CLEAR]: clear
})
