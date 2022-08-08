import { put, call } from "redux-saga/effects"
import { Types } from "./actions"
import LogInRepository from "../../repositories/LogInRepository"
import LogInDataRepository from "../../../data/repositories/LogInDataRepository"
import LogInEnt from "../../entities/LogIn"

export default function* execute(action: any) {
  try {
    yield put({ type: Types.LOG_IN_REQUEST })

    const repository: LogInRepository = new LogInDataRepository()

    const response: LogInEnt = yield call(
      repository.logIn,
      action.user,
      action.password
    )

    if (!response) {
      yield put({
        type: Types.LOG_IN_FAILURE,
        errorMessage: "Código y/o contraseña incorrectos.",
        error: true,
      })
      return
    }

    if (response && response.respuesta === "1") {
      yield put({
        type: Types.LOG_IN_FAILURE,
        errorMessage: "Código y/o contraseña incorrectos.",
        error: true,
      })
      return
    }
    if (response && response.respuesta === "0") {
      yield put({ type: Types.LOG_IN_SUCCESS, data: response })
      return
    }
  } catch (error) {
    yield put({
      type: Types.LOG_IN_FAILURE,
      errorMessage: "Código y/o contraseña incorrectos.",
      error: true,
    })
  }
}
