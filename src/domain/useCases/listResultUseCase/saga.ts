import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import ResultRepository from "../../repositories/ResultRepository"
import ResultDataRepository from "../../../data/repositories/ResultDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh } = action
    yield put({ type: Types.LIST_RESULT_REQUEST, refresh })

    const repository: ResultRepository = new ResultDataRepository()

    const response = yield call(repository.listResult)

    

    yield put({
      type: Types.LIST_RESULT_SUCCESS,
      data: response,
    })
  } catch (error) {
    yield put({
      type: Types.LIST_RESULT_FAILURE,
      error: true
    })
  }
}

