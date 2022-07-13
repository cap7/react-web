import EvaluationDataStore from "./EvaluationDataStore"
import EvaluationDataStoreApi from "./api/Evaluation"

export default class EvaluationDataStoreFactory {
  static create(): EvaluationDataStore {
    return new EvaluationDataStoreApi()
  }
}
