import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import ClientDataStore from "../ClientDataStore"

export default class ClientDataStoreApi implements ClientDataStore {
  private axiosClient = AxiosService.getInstance()

  async listClient() {
    try {
      const response = await this.axiosClient.exchange<any>(
        'http://137.135.106.184:88/api/Neox/ListarClientes',
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
