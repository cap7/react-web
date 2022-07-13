import React from "react"
import { MainProvider } from "../context/MainProvider"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"
import { Routes, Route } from "react-router-dom"
import configureStore from "../domain/base/configureStore"
import Home from "./Home"
import LogIn from "./LogIn"
import NotFoundPage from "./404"

const Root: React.FC = () => {
  const { persistor, store } = configureStore()

  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </MainProvider>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default Root
