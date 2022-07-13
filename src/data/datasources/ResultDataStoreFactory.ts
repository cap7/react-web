import ResultDataStore from "./ResultDataStore"
import ResultDataStoreMock from "./mock/Result"

export default class ResultDataStoreFactory {
  static create(): ResultDataStore {
    return new ResultDataStoreMock()
  }
}
