import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import LogInDataStore from "../LogInDataStore"


export default class LogInDataStoreApi implements LogInDataStore {
  private axiosClient = AxiosService.getInstance()

  async logIn(user: string, password: string) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        'http://137.135.106.184:88/api/Neox/ValidarLogin',
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            usuario: user,
            clave: password,
            flag: "U",
          })
        }
      )
      return response[0]
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async refreshToken(refreshToken: string) {
    throw new Error("Method not implemented.")
  }

  async logOut(instanceId: string) {
    throw new Error("Method not implemented.")
  }
}
