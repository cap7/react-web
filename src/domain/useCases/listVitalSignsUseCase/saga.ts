import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import VitalSignsRepository from "../../repositories/VitalSignsRepository"
import VitalSignsDataRepository from "../../../data/repositories/VitalSignsDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh, codOrder } = action
    yield put({ type: Types.LIST_VITAL_SIGNS_REQUEST, refresh })

    const repository: VitalSignsRepository = new VitalSignsDataRepository()

    const response = yield call(repository.listVitalSigns, codOrder)
    
    yield put({
      type: Types.LIST_VITAL_SIGNS_SUCCESS,
      data: response,
    })
    return
  } catch (error) {
    yield put({
      type: Types.LIST_VITAL_SIGNS_FAILURE,
      error: true,
    })
  }
}
