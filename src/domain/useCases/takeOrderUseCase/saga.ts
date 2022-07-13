import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import OrderRepository from "../../repositories/OrderRepository"
import OrderDataRepository from "../../../data/repositories/OrderDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh, codOrder } = action
    yield put({ type: Types.LIST_MENU_REQUEST, refresh })

    const repository: OrderRepository = new OrderDataRepository()
    const response = yield call(repository.listMenu, codOrder)

    if (response) {
      yield put({
        type: Types.LIST_MENU_SUCCESS,
        data: response,
      })
      return
    }
  } catch (error) {
    yield put({
      type: Types.LIST_MENU_FAILURE,
      error: true,
    })
  }
}
