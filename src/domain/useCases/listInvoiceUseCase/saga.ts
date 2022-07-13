import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import InvoiceRepository from "../../repositories/InvoiceRepository"
import InvoiceDataRepository from "../../../data/repositories/InvoiceDataRepository"

export default function* execute(action: any): any {
  try {
    const { refresh } = action
    yield put({ type: Types.LIST_INVOICE_REQUEST, refresh })

    const repository: InvoiceRepository = new InvoiceDataRepository()

    const response = yield call(repository.statusInvoice)

    yield put({
      type: Types.LIST_INVOICE_SUCCESS,
      data: response,
    })
  } catch (error) {
    yield put({
      type: Types.LIST_INVOICE_FAILURE,
      error: true
    })
  }
}

