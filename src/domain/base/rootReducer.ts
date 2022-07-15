import { combineReducers } from "redux"
import { persistReducer, purgeStoredState } from "redux-persist"
import storage from "redux-persist/lib/storage"
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
  signOutUseCase,
} from "../useCases"

const basePersistConfig = {
  version: 1,
  storage,
  blacklist: [],
}

const authPersistConfig = {
  ...basePersistConfig,
  key: "auth",
  blacklist: ["error", "isLoading"],
}

const auth = persistReducer(authPersistConfig, logInUseCase.reducer)

export default combineReducers({
  auth,
  listClient: listClientUseCase.reducer,
  listEvaluation: listEvaluationUseCase.reducer,
  listInvoice: listInvoiceUseCase.reducer,
  listOrder: listOrderUseCase.reducer,
  listResult: listResultUseCase.reducer,
  takeOrderListMenu: takeOrderUseCase.reducer,
  listVitalSigns: listVitalSignsUseCase.reducer,
  listWeightHeight: listWeightHeightUseCase.reducer,
  saveVitalSigns: saveVitalSignsUseCase.reducer,
  saveWeightHeight: saveWeightHeightUseCase.reducer,
  updateVitalSigns: updateVitalSignsUseCase.reducer,
  updateWeightHeight: updateWeightHeightUseCase.reducer,
  signOut: signOutUseCase.reducer,
})
