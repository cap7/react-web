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
  error: null,
})

const failure = (state: any, action: any) => ({
  ...state,
  data: null,
  isLoading: false,
  error: action.error,
})

const clear = () => INITIAL_STATE

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_WEIGHT_HEIGHT_REQUEST]: request,
  [Types.SAVE_WEIGHT_HEIGHT_SUCCESS]: success,
  [Types.SAVE_WEIGHT_HEIGHT_FAILURE]: failure,
  [Types.SAVE_WEIGHT_HEIGHT_CLEAR]: clear
})
