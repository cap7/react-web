import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import VitalSignsRepository from "../../repositories/VitalSignsRepository"
import VitalSignsDataRepository from "../../../data/repositories/VitalSignsDataRepository"

export default function* execute(action: any): any {
  try {
    const {
      refresh,
      codOrder,
      codAnalysis,
      temperature,
      pulse,
      breathing,
      systolicPressure,
      diastolicPressure,
      halfPressure,
      heartRate,
      saturation,
      observations,
      codUser,
    } = action
    yield put({ type: Types.SAVE_VITAL_SIGNS_REQUEST, refresh })

    const repository: VitalSignsRepository = new VitalSignsDataRepository()

    const response = yield call(
      repository.saveVitalSigns,
      codOrder,
      codAnalysis,
      temperature,
      pulse,
      breathing,
      systolicPressure,
      diastolicPressure,
      halfPressure,
      heartRate,
      saturation,
      observations,
      codUser
    )
    if (response && response.codigo === "100") {
      yield put({
        type: "LIST_MENU",
        refresh: true,
        codOrder: codOrder,
      })
      yield put({
        type: "LIST_VITAL_SIGNS",
        refresh: true,
        codOrder: codOrder,
      })
      yield put({
        type: Types.SAVE_VITAL_SIGNS_SUCCESS,
        data: response,
      })
      return
    } else {
      yield put({
        type: Types.SAVE_VITAL_SIGNS_FAILURE,
        error: true,
      })
      return
    }
  } catch (error) {
    yield put({
      type: Types.SAVE_VITAL_SIGNS_FAILURE,
      error: true,
    })
  }
}
