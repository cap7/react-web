import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import ClientRepository from "../../repositories/ClientRepository"
import ClientDataRepository from "../../../data/repositories/ClientDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh } = action
    yield put({ type: Types.LIST_CLIENT_REQUEST, refresh })

    const repository: ClientRepository = new ClientDataRepository()

    const response = yield call(repository.listClient)

    yield put({
      type: Types.LIST_CLIENT_SUCCESS,
      data: response,
    })
  } catch (error) {
    yield put({
      type: Types.LIST_CLIENT_FAILURE,
      error: true
    })
  }
}
