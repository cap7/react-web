import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import OrderRepository from "../../repositories/OrderRepository"
import OrderDataRepository from "../../../data/repositories/OrderDataRepository"

export default function* execute(action: any): any {
  try {
    const {
      refresh,
      patient,
      dni,
      startDate,
      endDate,
      result,
      client,
      evaluation,
      order,
      invoice,
    } = action
    yield put({ type: Types.LIST_ORDER_REQUEST, refresh })

    const repository: OrderRepository = new OrderDataRepository()

    const response = yield call(
      repository.listOrder,
      patient,
      dni,
      startDate,
      endDate,
      result,
      client,
      evaluation,
      order,
      invoice
    )

    if (response) {
      const dataForTable: any = []

      response.map((value: any) =>
        dataForTable.push([
          value.orden,
          value.nomPaciente,
          value.fecRegistro,
          value.nomEvaluacion,
          value.estado,
          value.detalle,
          value.codOrden,
          value.ocupacion,
          value.edad,
          value.plan,
        ])
      )

      yield put({
        type: Types.LIST_ORDER_SUCCESS,
        data: response,
        dataTable: dataForTable,
      })
      return
    }
  } catch (error) {
    yield put({
      type: Types.LIST_ORDER_FAILURE,
      error: true,
    })
  }
}
