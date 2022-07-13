import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import EvaluationRepository from "../../repositories/EvaluationRepository"
import EvaluationDataRepository from "../../../data/repositories/EvaluationDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh } = action
    yield put({ type: Types.LIST_EVALUATION_REQUEST, refresh })

    const repository: EvaluationRepository = new EvaluationDataRepository()

    const response = yield call(repository.listEvaluation)

    yield put({
      type: Types.LIST_EVALUATION_SUCCESS,
      data: response,
    })
  } catch (error) {
    yield put({
      type: Types.LIST_EVALUATION_FAILURE,
      error: true
    })
  }
}

