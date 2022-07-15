import { put, call } from "redux-saga/effects"
import { Types } from "./actions"

export default function* execute(action: any) {
  try {
    
    yield put({ type: 'LOG_IN_CLEAN' });
    yield put({ type: Types.SIGN_OUT_SUCCESS })

  } catch (error) {
    yield put({ type: Types.SIGN_OUT_SUCCESS })
  }
}
