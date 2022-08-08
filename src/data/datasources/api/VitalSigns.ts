import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import VitalSignsDataStore from "../VitalSignsDataStore"
import Config from "Config"
export default class VitalSignsDataStoreApi implements VitalSignsDataStore {
  private axiosClient = AxiosService.getInstance()

  async saveVitalSigns(
    codOrder: string,
    codAnalysis: string,
    temperature: string,
    pulse: string,
    breathing: string,
    systolicPressure: string,
    diastolicPressure: string,
    halfPressure: string,
    heartRate: string,
    saturation: string,
    observations: string,
    codUser: string
  ) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        `${Config.url_api}/GuardarSignosVitales`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder,
            codAnalisis: codAnalysis,
            temperatura: temperature,
            pulso: pulse,
            respiracion: breathing,
            psistolica: systolicPressure,
            pdiastolica: diastolicPressure,
            pmedia: halfPressure,
            frcardiaca: heartRate,
            saturacion: saturation,
            observaciones: observations,
            codUsuario: codUser,
          }),
        }
      )
      return response[0]
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async updateVitalSigns(
    codOrder: string,
    codAnalysis: string,
    temperature: string,
    pulse: string,
    breathing: string,
    systolicPressure: string,
    diastolicPressure: string,
    halfPressure: string,
    heartRate: string,
    saturation: string,
    observations: string,
    codUser: string
  ) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ActualizarSignosVitales`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder,
            codAnalisis: codAnalysis,
            temperatura: temperature,
            pulso: pulse,
            respiracion: breathing,
            psistolica: systolicPressure,
            pdiastolica: diastolicPressure,
            pmedia: halfPressure,
            frcardiaca: heartRate,
            saturacion: saturation,
            observaciones: observations,
            codUsuario: codUser,
          }),
        }
      )
      return response[0]
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async listVitalSigns(codOrder: string) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ListarSignosVitales`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder
          }),
        }
      )
      return response[0]
    } catch (error) {
      throw new Error("No Data")
    }
  }
}
