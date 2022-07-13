import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import WeightHeightRepository from "../../repositories/WeightHeightRepository"
import WeightHeightDataRepository from "../../../data/repositories/WeightHeightDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh, codOrder } = action
    yield put({ type: Types.LIST_WEIGHT_HEIGHT_REQUEST, refresh })

    const repository: WeightHeightRepository = new WeightHeightDataRepository()

    const response = yield call(repository.listWeightHeight, codOrder)

    yield put({
      type: Types.LIST_WEIGHT_HEIGHT_SUCCESS,
      data: response[0],
    })
  } catch (error) {
    yield put({
      type: Types.LIST_WEIGHT_HEIGHT_FAILURE,
      error: true,
    })
  }
}
