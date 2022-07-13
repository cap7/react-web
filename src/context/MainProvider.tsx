import React, { createContext, useReducer, Dispatch } from "react"
import { MainReducer } from "./MainReducer"

type Props = {
  children: React.ReactNode
}

type Auth = {
  access: boolean
}

type User = {
  codigo: string
  flag: string
  nombre: string
  respuesta: string
}

type TakeOrder = {
  show: boolean
  order: string
  orderVal: string
  patient: string
  age: string
  ocupation: string
  plan: string
  evaluation: string
}

type TypeInitState = {
  auth: Auth
  user: User
  takeOrder: TakeOrder
}

const initState = {
  auth: {
    access: false,
  },
  user: {
    codigo: "",
    flag: "",
    nombre: "",
    respuesta: "",
  },
  takeOrder: {
    show: false,
    order: "",
    orderVal: "",
    patient: "",
    age: "",
    ocupation: "",
    plan: "",
    evaluation: "",
  },
}

const MainContext = createContext<{
  stateContext: TypeInitState
  dispatchContext: Dispatch<any>
}>({
  stateContext: initState,
  dispatchContext: () => null,
})

const mainReducer = (
  {
    auth: { access },
    user: { codigo, flag, nombre, respuesta },
    takeOrder: { show, order, orderVal, patient, age, ocupation, plan, evaluation },
  }: TypeInitState,
  action: any
) => ({
  auth: MainReducer({ access }, action),
  user: MainReducer({ codigo, flag, nombre, respuesta }, action),
  takeOrder: MainReducer(
    { show, order, orderVal, patient, age, ocupation, plan, evaluation },
    action
  ),
})

const MainProvider: React.FC<Props> = ({ children }) => {
  const [stateContext, dispatchContext] = useReducer(mainReducer, initState)
  return (
    <MainContext.Provider value={{ stateContext, dispatchContext }}>
      {children}
    </MainContext.Provider>
  )
}

export { MainProvider, MainContext }
