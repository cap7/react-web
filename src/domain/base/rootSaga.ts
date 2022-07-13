import { takeLatest } from "redux-saga/effects"

import {
  logInUseCase,
  listClientUseCase,
  listEvaluationUseCase,
  listInvoiceUseCase,
  listOrderUseCase,
  listResultUseCase,
  listVitalSignsUseCase,
  listWeightHeightUseCase,
  saveVitalSignsUseCase,
  saveWeightHeightUseCase,
  updateVitalSignsUseCase,
  updateWeightHeightUseCase,
  takeOrderUseCase,
} from "../useCases"

export default function* rootSaga() {
  yield takeLatest(logInUseCase.Types.LOG_IN, logInUseCase.saga)

  yield takeLatest(listClientUseCase.Types.LIST_CLIENT, listClientUseCase.saga)

  yield takeLatest(
    listEvaluationUseCase.Types.LIST_EVALUATION,
    listEvaluationUseCase.saga
  )

  yield takeLatest(
    listInvoiceUseCase.Types.LIST_INVOICE,
    listInvoiceUseCase.saga
  )

  yield takeLatest(listOrderUseCase.Types.LIST_ORDER, listOrderUseCase.saga)

  yield takeLatest(listResultUseCase.Types.LIST_RESULT, listResultUseCase.saga)

  yield takeLatest(takeOrderUseCase.Types.LIST_MENU, takeOrderUseCase.saga)

  yield takeLatest(
    listVitalSignsUseCase.Types.LIST_VITAL_SIGNS,
    listVitalSignsUseCase.saga
  )

  yield takeLatest(
    listWeightHeightUseCase.Types.LIST_WEIGHT_HEIGHT,
    listWeightHeightUseCase.saga
  )

  yield takeLatest(
    saveVitalSignsUseCase.Types.SAVE_VITAL_SIGNS,
    saveVitalSignsUseCase.saga
  )

  yield takeLatest(
    saveWeightHeightUseCase.Types.SAVE_WEIGHT_HEIGHT,
    saveWeightHeightUseCase.saga
  )

  yield takeLatest(
    updateVitalSignsUseCase.Types.UPDATE_VITAL_SIGNS,
    updateVitalSignsUseCase.saga
  )

  yield takeLatest(
    updateWeightHeightUseCase.Types.UPDATE_WEIGHT_HEIGHT,
    updateWeightHeightUseCase.saga
  )
}
