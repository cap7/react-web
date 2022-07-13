import React, { Fragment } from "react"
import { Button, Table } from "../../../components"
import { ChevronDoubleDownIcon } from "@heroicons/react/solid"

const columsDatil = ["Código", "Procedimiento", "Estado", "Fecha resultado"]

enum columsName {
  col0 = "Order",
  col1 = "Paciente",
  col2 = "Fecha",
  col3 = "Tipo evaluación",
  col4 = "Estado resultado",
}

const headerTable = () => {
  return (
    <div className="min-w-full grid grid-flow-col justify-center gap-2 py-2 bg-gray-50">
      <div className="px-2"></div>
      <div className="w-48 flex justify-center ">
        <label className="text-md font-semibold text-gray-900">
          {columsName.col0}
        </label>
      </div>
      <div className="w-96 flex justify-center ">
        <label className="text-md font-semibold text-gray-900">
          {columsName.col1}
        </label>
      </div>
      <div className="w-48 flex justify-center ">
        <label className="text-md font-semibold text-gray-900">
          {columsName.col2}
        </label>
      </div>
      <div className="w-64 flex justify-center ">
        <label className="text-md font-semibold text-gray-900">
          {columsName.col3}
        </label>
      </div>
      <div className="w-64 flex justify-center ">
        <label className="text-md font-semibold text-gray-900">
          {columsName.col4}
        </label>
      </div>
      <div className="w-24"></div>
    </div>
  )
}

const rowTable = (
  order: string,
  patient: string,
  dateOrder: string,
  evaluation: string,
  result: string,
  codOrder: string,
  onClickTakeOrder: (
    codOrder: string,
    orderVal: string,
    patient: string,
    age: string,
    ocupation: string,
    plan: string,
    evaluation: string
  ) => void,
  age: string,
  ocupation: string,
  plan: string
) => {
  return (
    <div className="grid grid-flow-col justify-center gap-2 py-2 bg-white border-gray-300 border-t">
      <div className="flex justify-center ">
        <button type="submit">
          <ChevronDoubleDownIcon
            className="h-5 w-5  text-indigo-500 "
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="w-48 flex place-items-center justify-center">
        <label className="text-sm font-medium text-gray-500">{order}</label>
      </div>
      <div className="w-96 flex place-items-center text-sm font-medium text-gray-500">
        <label className="">{patient}</label>
      </div>
      <div className="w-48 flex place-items-center justify-center">
        <label className="text-sm font-medium text-gray-500">{dateOrder}</label>
      </div>
      <div className="w-64 flex place-items-center justify-center">
        <label className="text-sm font-medium text-gray-500">
          {evaluation}
        </label>
      </div>
      <div className="w-64 flex place-items-center justify-center">
        <label className="text-sm font-medium text-gray-500">{result}</label>
      </div>
      <div className="w-24 flex place-items-center justify-center">
        <Button
          id={"btn-atender-order"}
          name={`btn-atender-order`}
          text="Atender"
          sm
          onClick={() => onClickTakeOrder(codOrder, order, patient, age, ocupation, plan, evaluation)}
        />
      </div>
    </div>
  )
}

const tableDetail = (data: any) => {
  const dataDetail: any = []

  data.map((value: any) =>
    dataDetail.push([
      value.codigo,
      value.analisis,
      value.estado,
      value.fechaResultado,
    ])
  )
  return (
    <div className="bg-gray-100 p-4">
      <Table
        id={"table-order-detail"}
        columns={columsDatil}
        data={dataDetail}
      />
    </div>
  )
}

const bodyTable = (
  data: any,
  onClickTakeOrder: (
    codOrder: string,
    orderVal: string,
    patient: string,
    age: string,
    ocupation: string,
    plan: string,
    evaluation: string
  ) => void
) => {
  return (
    <Fragment>
      {data ? (
        <Fragment>
          {data.map((value: any, key: number) => (
            <Fragment key={key}>
              {rowTable(
                value[0],
                value[1],
                value[2],
                value[3],
                value[4],
                value[6],
                onClickTakeOrder,
                value[8],
                value[7],
                value[9]
              )}
              {tableDetail(value[5])}
            </Fragment>
          ))}
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  )
}

interface Props {
  id: string
  data: any
  onClickTakeOrder: (
    codOrder: string,
    orderVal: string,
    patient: string,
    age: string,
    ocupation: string,
    plan: string,
    evaluation: string
  ) => void
}

const TableOrder: React.FC<Props> = (props) => {
  const { id, data, onClickTakeOrder } = props
  return (
    <div id={id} className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {headerTable()}
              {bodyTable(data, onClickTakeOrder)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableOrder
