import ResultRepository from "../../domain/repositories/ResultRepository"
import ResultDataStoreFactory from "../datasources/ResultDataStoreFactory"
import ResultDataStore from "../datasources/ResultDataStore"

export default class ResultDataRepository implements ResultRepository {
  listResult() {
    const resultDataStore: ResultDataStore = ResultDataStoreFactory.create()
    return resultDataStore.listResult()
  }
}
