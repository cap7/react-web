import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import WeightHeightRepository from "../../repositories/WeightHeightRepository"
import WeightHeightDataRepository from "../../../data/repositories/WeightHeightDataRepository"

export default function* execute(action: any): any {
  try {
    const {
      refresh,
      codOrder,
      codAnalysis,
      size,
      weight,
      valueImc,
      waist,
      hip,
      chestPerimeterInspiration,
      chestPerimeterExpiration,
      waistHip,
      nutritionalDiagnosis,
      observations,
      codUser,
    } = action
    yield put({ type: Types.SAVE_WEIGHT_HEIGHT_REQUEST, refresh })

    const repository: WeightHeightRepository = new WeightHeightDataRepository()

    const response = yield call(
      repository.saveWeightHeight,
      codOrder,
      codAnalysis,
      size,
      weight,
      valueImc,
      waist,
      hip,
      chestPerimeterInspiration,
      chestPerimeterExpiration,
      waistHip,
      nutritionalDiagnosis,
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
        type: "LIST_WEIGHT_HEIGHT",
        refresh: true,
        codOrder: codOrder,
      })
      yield put({
        type: Types.SAVE_WEIGHT_HEIGHT_SUCCESS,
        data: response,
      })
      return
    } else {
      yield put({
        type: Types.SAVE_WEIGHT_HEIGHT_FAILURE,
        error: true,
      })
      return
    }
  } catch (error) {
    yield put({
      type: Types.SAVE_WEIGHT_HEIGHT_FAILURE,
      error: true,
    })
  }
}
