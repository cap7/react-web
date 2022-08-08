import React, { useEffect, useState } from "react"

interface Props {
  data?: any
  onSave: (
    temperature: string,
    pulse: string,
    breathing: string,
    systolicPressure: string,
    diastolicPressure: string,
    halfPressure: string,
    heartRate: string,
    saturation: string,
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

type FormVitalSigns = {
  temperature: string
  pulse: string
  breathing: string
  systolicPressure: string
  diastolicPressure: string
  halfPressure: string
  heartRate: string
  saturation: string
  observations: string
}

enum FormInput {
  temperature = "temperature",
  pulse = "pulse",
  breathing = "breathing",
  systolicPressure = "systolicPressure",
  diastolicPressure = "diastolicPressure",
  halfPressure = "halfPressure",
  heartRate = "heartRate",
  saturation = "saturation",
  observations = "observations",
}

const VitalSigns: React.FC<Props> = (props) => {
  const [stateTemperature, setStateTemperature] = useState("")
  const [statePulse, setStatePulse] = useState("")
  const [stateBreathing, setStateBreathing] = useState("")
  const [stateSystolicPressure, setStateSystolicPressure] = useState("")
  const [stateDiastolicPressure, setStateDiastolicPressure] = useState("")
  const [stateHalfPressure, setStateHalfPressure] = useState("")
  const [stateHeartRate, setStateHeartRate] = useState("")
  const [stateSaturation, setStateSaturation] = useState("")
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
    data &&  stateButton(true, true, false)
    !data &&  stateButton(false, true, true)
  }, [])

  useEffect(() => {
    if (data) {
      setStateTemperature(data.temperatura)
      setStatePulse(data.pulso)
      setStateBreathing(data.respiracion)
      setStateSystolicPressure(data.psistolica)
      setStateDiastolicPressure(data.pdiastolica)
      setStateHalfPressure(data.pmedia ? data.pmedia : "0.0")
      setStateHeartRate(data.frcardiaca)
      setStateSaturation(data.saturacion)
      setStateObservations(data.observaciones)
      
    }
  }, [data, formClean])

  useEffect(() => {
    if (formClean) {
      setStateTemperature("")
      setStatePulse("")
      setStateBreathing("")
      setStateSystolicPressure("")
      setStateDiastolicPressure("")
      setStateHalfPressure("")
      setStateHeartRate("")
      setStateSaturation("")
      setStateObservations("")
    }
  }, [formClean])

  useEffect(() => {
    if (formSave) {
      onSave(
        stateTemperature,
        statePulse,
        stateBreathing,
        stateSystolicPressure,
        stateDiastolicPressure,
        stateHalfPressure,
        stateHeartRate,
        stateSaturation,
        stateObservations
      )
    }
  }, [formSave])



  useEffect(() => {
    if (stateSystolicPressure !== "" && stateDiastolicPressure !== "") {
      let value = 0.0
      value =
        (parseFloat(stateSystolicPressure) +
          parseFloat(stateDiastolicPressure)) /
        2
      setStateHalfPressure(String(value.toFixed(1)))
    } else {
      setStateHalfPressure("0.0")
    }
  }, [stateSystolicPressure, stateDiastolicPressure])

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Temperatura:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateTemperature}
              onChange={(e) => setStateTemperature(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Pulso:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={statePulse}
              onChange={(e) => setStatePulse(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Respiración:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateBreathing}
              onChange={(e) => setStateBreathing(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={formDisabled}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4">
        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            P. Sistólica:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateSystolicPressure}
              onChange={(e) => setStateSystolicPressure(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            P.Diastólica:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateDiastolicPressure}
              onChange={(e) => setStateDiastolicPressure(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Pres. Media:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
              value={stateHalfPressure}
              onChange={(e) => setStateHalfPressure(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4">
        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Frec. Cardiaca:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateHeartRate}
              onChange={(e) => setStateHeartRate(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
              disabled={formDisabled}
            />
          </div>
        </div>

        <div className="flex flex-row place-items-center ">
          <label className="flex basis-1/4 justify-items-start text-sm font-medium text-gray-700 text-justify mr-2">
            Sat. 02:
          </label>

          <div className="basis-1/2">
            <input
              type="text"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                formDisabled ? "bg-gray-100" : "bg-white"
              }`}
              value={stateSaturation}
              onChange={(e) => setStateSaturation(e.target.value.replace(/[^0-9.]|(?<=\..*)\./g, ''))}
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
          <label className="pr-2 bg-gray-100 text-sm font-medium text-gray-700">
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

export default VitalSigns
