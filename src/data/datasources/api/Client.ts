import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import ClientDataStore from "../ClientDataStore"
import Config from "Config"

export default class ClientDataStoreApi implements ClientDataStore {
  private axiosClient = AxiosService.getInstance()

  async listClient() {
    try {
      const response = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ListarClientes`,
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
