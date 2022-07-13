import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import EvaluationDataStore from "../EvaluationDataStore"

export default class EvaluationDataStoreApi implements EvaluationDataStore {
  private axiosClient = AxiosService.getInstance()
  async listEvaluation() {
    try {
      const response = await this.axiosClient.exchange<any>(
        "http://137.135.106.184:88/api/Neox/ListarEvaluacion",
        {
          method: HttpMethod.Get,
        }
      )
      return response
    } catch (error) {
      throw new Error("No Data")
    }
  }
}
