import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import OrderDataStore from "../OrderDataStore"
import Config from "Config"
export default class OrderDataStoreApi implements OrderDataStore {
  private axiosClient = AxiosService.getInstance()

  async listOrder(
    patient: string,
    dni: string,
    startDate: string,
    endDate: string,
    result: string,
    client: string,
    evaluation: string,
    order: string,
    invoice: string
  ) {
    try {
      const response = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ListarOrdenes`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            fecIni: startDate,
            fecFin: endDate,
            nombre: patient,
            documento: dni,
            orden: order,
            codCliente: client,
            estadoResultado: result,
            codEvaluacion: evaluation,
            codFacturacion: invoice,
            flag: "B",
          }),
        }
      )

      return response
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async listMenu(codOrder: string) {
    try {
      const response = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ListarMenu`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder,
          }),
        }
      )
      return response
    } catch (error) {
      throw new Error("No Data")
    }
  }
}
