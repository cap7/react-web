import { createReducer } from "reduxsauce"
import { Types } from "./actions"

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  dataTable:null,
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
  dataTable: action.dataTable,
  isLoading: false,
  error: null,
})

const failure = (state: any, action: any) => ({
  ...state,
  data: null,
  isLoading: false,
  error: action.error,
})

export default createReducer(INITIAL_STATE, {
  [Types.LIST_ORDER_REQUEST]: request,
  [Types.LIST_ORDER_SUCCESS]: success,
  [Types.LIST_ORDER_FAILURE]: failure
})