import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import ResultDataStore from "../ResultDataStore"

export default class ResultDataStoreApi implements ResultDataStore {
    listResult() {
        throw new Error("Method not implemented.")
    }
}