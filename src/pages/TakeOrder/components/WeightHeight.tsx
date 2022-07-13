import React, { useEffect, useState } from "react"

interface Props {
  data?: any
  onSave: (
    size: string,
    weight: string,
    imc: string,
    waist: string,
    hip: string,
    chestPerimeterInspiration: string,
    chestPerimeterExpiration: string,
    waistHip: string,
    nutritionalDiagnosis: string,
    observations: string
  ) => void
  formDisabled: boolean
  formInit: () => void
  formClean: boolean
  formSave: boolean
  stateButton: (btnNew: boolean, btnSave: boolean, btnEdit: boolean) => void
  responseSave?: any
  responseUpdate?:any
}

const WeightHeight: React.FC<Props> = (props) => {
  const [stateSize, setStateSize] = useState("")
  const [stateWeight, setStateWeight] = useState("")
  const [stateImc, setStateImc] = useState("")
  const [stateWaist, setStateWaist] = useState("")
  const [stateHip, setStateHip] = useState("")
  const [stateChestPerimeterInspiration, setStateChestPerimeterInspiration] =
    useState("")
  const [stateChestPerimeterExpiration, setStateChestPerimeterExpiration] =
    useState("")
  const [stateWaistHip, setStateWaistHip] = useState("")
  const [stateNutritionalDiagnosis, setStateNutritionalDiagnosis] = useState("")
  const [stateObservations, setStateObservations] = useState("")

  const {
    data,
    onSave,
    formDisabled,
    formInit,
    formClean,
    formSave,
    stateButton,
  } = props

  useEffect(() => {
    formInit()
    data && stateButton(true, true, false)
    !data && stateButton(false, true, true)
  }, [])

  useEffect(() => {
    if (data) {
      setStateSize(data.talla)
      setStateWeight(data.peso)
      setStateImc(data.imc ? data.imc : "0.0")
      setStateWaist(data.cintura)
      setStateHip(data.cadera)
      setStateChestPerimeterInspiration(data.ptInspiracion)
      setStateChestPerimeterExpiration(data.ptExpiracion)
      setStateWaistHip(data.cinturaCadera ? data.cinturaCadera : "0.0")
      setStateNutritionalDiagnosis(data.diagnosticoN)
      setStateObservations(data.observaciones)
    }
  }, [data, formClean])

  useEffect(() => {
    if (formClean) {
      setStateSize("")
      setStateWeight("")
      setStateImc("")
      setStateWaist("")
      setStateHip("")
      setStateChestPerimeterInspiration("")
      setStateChestPerimeterExpiration("")
      setStateWaistHip("")
      setStateNutritionalDiagnosis("")
      setStateObservations("")
    }
  }, [formClean])

  useEffect(() => {
    if (formSave) {
      onSave(
        stateSize,
        stateWeight,
        stateImc,
        stateWaist,
        stateHip,
        stateChestPerimeterInspiration,
        stateChestPerimeterExpiration,
        stateWaistHip,
        stateNutritionalDiagnosis,
        stateObservations
      )
    }
  }, [formSave])

  useEffect(() => {
    if (stateSize !== "" && stateWeight !== "") {
      let value = 0.0
      value = parseFloat(stateWeight) / ((parseFloat(stateSize)/100)*(parseFloat(stateSize)/100))
      setStateImc(String(value.toFixed(1)))
    } else {
      setStateImc("0.0")
    }
  }, [stateSize, stateWeight])

  useEffect(() => {
    if (stateWaist !== "" && stateHip !== "") {
      let value = 0.0
      value = parseFloat(stateWaist) / parseFloat(stateHip)
      setStateWaistHip(String(value.toFixed(1)))
    } else {
      setStateWaistHip("0.0")
    }
  }, [stateWaist, stateHip])

  useEffect(() => {
    if (parseFloat(stateImc) < 18.5) {
      setStateNutritionalDiagnosis("Bajo Peso")
    }
    if (parseFloat(stateImc) >= 18.5 && parseFloat(stateImc) <= 24.9) {
      setStateNutritionalDiagnosis("Peso Normal")
    }
    if (parseFloat(stateImc) >= 25 && parseFloat(stateImc) <= 29.9) {
      setStateNutritionalDiagnosis("Sobrepeso")
    }
    if (parseFloat(stateImc) >= 30) {
      setStateNutritionalDiagnosis("Obeso")
    }
  }, [stateImc])

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Talla cm:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateSize}
              onChange={(e) => setStateSize(e.target.value)}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Peso Kg:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateWeight}
              onChange={(e) => setStateWeight(e.target.value)}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            IMC Kg/m2:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
              value={stateImc}
              onChange={(e) => setStateImc(e.target.value)}
              disabled={true}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Diagnóstico Nutricional:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
              value={stateNutritionalDiagnosis}
              onChange={(e) => setStateNutritionalDiagnosis(e.target.value)}
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-4">
        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            {"Cintura (cm):"}
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateWaist}
              onChange={(e) => setStateWaist(e.target.value)}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            {"Cadera (cm):"}
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateHip}
              onChange={(e) => setStateHip(e.target.value)}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            {"Cintura/ Cadera:"}
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
              value={stateWaistHip}
              onChange={(e) => setStateWaistHip(e.target.value)}
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-6 mb-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-start">
          <label className="pr-2 bg-gray-100 text-sm font-medium text-gray-700 ">
            Perímetro Toráxico
          </label>
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Max. Inspiración:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateChestPerimeterInspiration}
              onChange={(e) =>
                setStateChestPerimeterInspiration(e.target.value)
              }
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Expiración Forzada:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateChestPerimeterExpiration}
              onChange={(e) => setStateChestPerimeterExpiration(e.target.value)}
              disabled={formDisabled}
            />
          </div>
        </div>
      </div>

      <div className="relative mt-6 mb-6">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-start">
          <label className="pr-2 bg-gray-100 text-sm font-medium text-gray-700 ">
            Observaciones
          </label>
        </div>
      </div>
      <div>
        <textarea
          rows={10}
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full py-3 border-2 resize-none focus:ring-0 sm:text-sm border-gray-300 rounded-md ${
            formDisabled ? "bg-gray-100" : "bg-white"
          }`}
          defaultValue={""}
          value={stateObservations}
          onChange={(e) => setStateObservations(e.target.value)}
          disabled={formDisabled}
        />
      </div>
    </div>
  )
}

export default WeightHeight
