import React, { useEffect, useState, useContext } from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { useNavigate } from "react-router-dom"
import { MainContext } from "../../context/MainProvider"
import { ContextTypes } from "../../context/MainReducer"
import { SidebarNav, Input, SelectMenu } from "../../components"
import TableOrder from "./components/TableOrder"
import TakeOrder from "../TakeOrder"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { SearchIcon } from "@heroicons/react/solid"
import { Creators as actionListResult } from "../../domain/useCases/listResultUseCase"
import { Creators as actionListClient } from "../../domain/useCases/listClientUseCase"
import { Creators as actionListEvaluation } from "../../domain/useCases/listEvaluationUseCase"
import { Creators as actionListInvoice } from "../../domain/useCases/listInvoiceUseCase"
import { Creators as actionListOrder } from "../../domain/useCases/listOrderUseCase"
import { Creators as actionTakeOrder } from "../../domain/useCases/takeOrderUseCase"
import { useForm, SubmitHandler } from "react-hook-form"
import Helpers from "../../core/Helper"

interface Props {
  dispatch: Dispatch
  isLoggedIn: boolean
  results: any
  resultsIsLoading: boolean
  clients: any
  clientsIsLoading: boolean
  evaluations: any
  evaluationsIsLoading: boolean
  invoices: any
  invoicesIsLoading: boolean
  ordersDataTable: any
}

enum SelectMenuType {
  results = "result",
  clients = "clients",
  evaluations = "evaluations",
  invoices = "invoices",
}

enum FormInput {
  patient = "patient",
  dni = "dni",
  startDate = "startDate",
  endDate = "endDate",
  result = "result",
  client = "client",
  evaluation = "evaluation",
  order = "order",
  invoice = "invoice",
}

type FormSearchOrder = {
  patient: string
  dni: string
  startDate: string
  endDate: string
  result: string
  client: string
  evaluation: string
  order: string
  invoice: string
}

const HomeViewController: React.FC<Props> = (props) => {
  const {
    dispatch,
    isLoggedIn,
    results,
    resultsIsLoading,
    clients,
    clientsIsLoading,
    evaluations,
    evaluationsIsLoading,
    invoices,
    invoicesIsLoading,
    ordersDataTable,
  } = props
  const navigate = useNavigate()
  const [stateListResult, setStateListResult] = useState<any>()
  const [stateListClients, setStateListClients] = useState<any>()
  const [stateListEvaluations, setStateListEvaluations] = useState<any>()
  const [stateListInvoices, setStateListInvoices] = useState<any>()
  const { register, handleSubmit } = useForm<FormSearchOrder>()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [stateResult, setStateResult] = useState<string>("")
  const [stateClient, setStateClient] = useState<string>("")
  const [stateEvaluation, setStateEvaluation] = useState<string>("")
  const [stateInvoice, setStateInvoice] = useState<string>("")
  const [stateOrdersDataTable, setStateOrdersDataTable] = useState<any>()
  const [stateTakeOrder, setStateTakeOrder] = useState<boolean>(false)
  const { stateContext, dispatchContext } = useContext(MainContext)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/LogIn")
    }
  }, [])

  useEffect(() => {
    dispatch(actionListResult.listResult())
    dispatch(actionListClient.listClient())
    dispatch(actionListEvaluation.listEvaluation())
    dispatch(actionListInvoice.listInvoice())
  }, [])

  const setDataMenuSelect = (selectMenu: string) => {
    const arrayValues: any = []

    switch (selectMenu) {
      case SelectMenuType.results:
        results.map((value: any) =>
          arrayValues.push({ id: value.id, name: value.name })
        )
        setStateListResult(arrayValues)
        break
      case SelectMenuType.clients:
        clients.map((value: any) =>
          arrayValues.push({ id: value.codigo, name: value.cliente })
        )
        setStateListClients(arrayValues)
        break
      case SelectMenuType.evaluations:
        evaluations.map((value: any) =>
          arrayValues.push({ id: value.codigo, name: value.evaluacion })
        )
        setStateListEvaluations(arrayValues)
        break
      case SelectMenuType.invoices:
        invoices.map((value: any) =>
          arrayValues.push({ id: value.id, name: value.name })
        )
        setStateListInvoices(arrayValues)
        break
    }
  }

  useEffect(() => {
    results != null && setDataMenuSelect(SelectMenuType.results)
  }, [results])

  useEffect(() => {
    clients != null && setDataMenuSelect(SelectMenuType.clients)
  }, [clients])

  useEffect(() => {
    evaluations != null && setDataMenuSelect(SelectMenuType.evaluations)
  }, [evaluations])

  useEffect(() => {
    invoices != null && setDataMenuSelect(SelectMenuType.invoices)
  }, [invoices])

  useEffect(() => {
    ordersDataTable != null && setStateOrdersDataTable(ordersDataTable)
  }, [ordersDataTable])

  const onSelectMenuItem = (item: string, selectMenu: string) => {
    switch (selectMenu) {
      case SelectMenuType.results:
        setStateResult(item)
        break
      case SelectMenuType.clients:
        setStateClient(item)
        break
      case SelectMenuType.evaluations:
        setStateEvaluation(item)
        break
      case SelectMenuType.invoices:
        setStateInvoice(item)
        break
    }
  }

  const onSearchForOrders: SubmitHandler<FormSearchOrder> = (data) => {
    const { dispatch } = props
    dispatch(
      actionListOrder.listOrder(
        true,
        data.patient,
        data.dni,
        Helpers.formatDate(startDate.getTime()),
        Helpers.formatDate(endDate.getTime()),
        stateResult,
        stateClient,
        stateEvaluation,
        data.order,
        stateInvoice
      )
    )
  }

  const onClickTakeOrder = (codOrder: string,
    vorderVal:string,
    vpatient: string,
    vage: string,
    vocupation: string,
    vplan: string,
    vevaluation: string) => {
    dispatch(actionTakeOrder.listMenu(true, codOrder))
    dispatchContext({
      type: ContextTypes.takeOrder,
      show: true,
      order: codOrder,
      orderVal: vorderVal,
      patient: vpatient,
      age: vage,
      ocupation: vocupation,
      plan: vplan,
      evaluation: vevaluation,
    })
  }

  return (
    <div className="min-h-full">
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
        <SidebarNav />
      </div>
      <div className="lg:pl-64 flex flex-col">
        <main className="flex-1">
          <div className="p-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Listado de Ordenes
            </h3>
          </div>

          <form onSubmit={handleSubmit(onSearchForOrders)}>
            <div className="grid grid-cols-8 gap-4 px-8">
              <div className="col-span-2 flex place-items-center justify-center">
                <div className="flex-auto">
                  <label className="block text-sm font-medium text-gray-700  ">
                    Paciente:
                  </label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...register(FormInput.patient)}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center justify-center ">
                <div className="flex-auto">
                  <label className="block text-sm font-medium text-gray-700 ">
                    Nro de documento:
                  </label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...register(FormInput.dni)}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center justify-center ">
                <div className="flex-auto">
                  <label className="block text-sm font-medium text-gray-700 ">
                    Fecha de ininicio:
                  </label>
                </div>
                <div className="w-64">
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center justify-center ">
                <div className="flex-auto">
                  <label className="block text-sm font-medium text-gray-700 ">
                    Fecha de fin:
                  </label>
                </div>
                <div className="w-64">
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center  justify-center">
                <div className="flex-auto">
                  <label className="block  text-sm font-medium text-gray-700 ">
                    Estado resultado:
                  </label>
                </div>
                <div className="w-64">
                  <SelectMenu
                    isLoading={resultsIsLoading}
                    items={stateListResult}
                    id={"sm-results"}
                    name={"sm-results"}
                    typeSelect={SelectMenuType.results}
                    onSelectMenuItem={onSelectMenuItem}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center  justify-center">
                <div className="flex-auto">
                  <label className="block  text-sm font-medium text-gray-700 ">
                    Cliente:
                  </label>
                </div>
                <div className="w-64">
                  <SelectMenu
                    isLoading={clientsIsLoading}
                    items={stateListClients}
                    id={"sm-clients"}
                    name={"sm-clients"}
                    typeSelect={SelectMenuType.clients}
                    onSelectMenuItem={onSelectMenuItem}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center  justify-center">
                <div className="flex-auto">
                  <label className="block  text-sm font-medium text-gray-700 ">
                    Tipo de evaluación:
                  </label>
                </div>
                <div className="w-64">
                  <SelectMenu
                    isLoading={evaluationsIsLoading}
                    items={stateListEvaluations}
                    id={"sm-results"}
                    name={"sm-results"}
                    typeSelect={SelectMenuType.evaluations}
                    onSelectMenuItem={onSelectMenuItem}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center  justify-center">
                <div className="flex-auto">
                  <label className="block  text-sm font-medium text-gray-700 ">
                    Estado de facturación:
                  </label>
                </div>
                <div className="w-64">
                  <SelectMenu
                    isLoading={invoicesIsLoading}
                    items={stateListInvoices}
                    id={"sm-results"}
                    name={"sm-results"}
                    typeSelect={SelectMenuType.invoices}
                    onSelectMenuItem={onSelectMenuItem}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center  justify-center">
                <div className="flex-auto">
                  <label className="block  text-sm font-medium text-gray-700 ">
                    Orden:
                  </label>
                </div>
                <div className="w-64">
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...register(FormInput.order)}
                  />
                </div>
              </div>

              <div className="col-span-2 flex place-items-center justify-end">
                <div className="w-64">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-5">
                      <SearchIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </form>
          <TableOrder
            id={"table-order"}
            data={stateOrdersDataTable}
            onClickTakeOrder={onClickTakeOrder}
          />
        </main>
      </div>
      <TakeOrder />
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    results: state.listResult.data,
    resultsIsLoading: state.listResult.isLoading,
    clients: state.listClient.data,
    clientsIsLoading: state.listClient.isLoading,
    evaluations: state.listEvaluation.data,
    evaluationsIsLoading: state.listEvaluation.isLoading,
    invoices: state.listInvoice.data,
    invoicesIsLoading: state.listInvoice.isLoading,
    orders: state.listOrder.data,
    ordersDataTable: state.listOrder.dataTable,
  }
}

export default connect(mapStateToProps)(HomeViewController)
