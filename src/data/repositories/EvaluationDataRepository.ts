import EvaluationRepository from "../../domain/repositories/EvaluationRepository"
import EvaluationDataStoreFactory from "../datasources/EvaluationDataStoreFactory"
import EvaluationDataStore from "../datasources/EvaluationDataStore"

export default class EvalutionDataRepository implements EvaluationRepository {
  listEvaluation() {
    const evaluationDataStore: EvaluationDataStore =
      EvaluationDataStoreFactory.create()
    return evaluationDataStore.listEvaluation()
  }
}
