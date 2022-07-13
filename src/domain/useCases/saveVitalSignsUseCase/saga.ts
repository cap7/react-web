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

    yield put({
      type: Types.SAVE_VITAL_SIGNS_SUCCESS,
      data: response[0],
    })
  } catch (error) {
    yield put({
      type: Types.SAVE_VITAL_SIGNS_FAILURE,
      error: true,
    })
  }
}
