import React from "react"

interface Props {
  order: string
  patient: string
  age: string
  ocupation: string
  plan: string
  evaluation: string
}

const HeaderForm: React.FC<Props> = (props) => {
  const { order, patient, age, ocupation, plan, evaluation } = props
  return (
    <div className="pl-2">
      <div className=" grid grid-cols-4 space-y-3 pb-6 px-4">
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Paciente:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={patient}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Edad:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={age}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Nro Orden:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={order}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Ocupación:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={ocupation}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-left mr-2">
            Tipo de Evaluación:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={evaluation}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Plan:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="bg-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={plan}
              disabled
            />
          </div>
        </div>

        <div className="flex">
          <div className="basis-1/4 mr-2" />

          <div className="basis-1/2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Diagnostico y Conclusión
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-t  border-gray-300" />
    </div>
  )
}

export default HeaderForm
