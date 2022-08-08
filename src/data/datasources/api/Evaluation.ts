import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import EvaluationDataStore from "../EvaluationDataStore"
import Config from "Config"

export default class EvaluationDataStoreApi implements EvaluationDataStore {
  private axiosClient = AxiosService.getInstance()
  async listEvaluation() {
    try {
      const response = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ListarEvaluacion`,
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
