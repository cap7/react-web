import { configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"
import createSagaMiddleware from "redux-saga"
import reducers from "./rootReducer"
import rootSaga from "./rootSaga"

export default function configStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = (getDefaultMiddleware: any) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ]
  const store = configureStore({
    reducer: reducers,
    middleware: middlewares,
  })

  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return { persistor, store }
}
