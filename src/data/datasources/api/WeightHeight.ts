import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import WeightHeightDataStore from "../WeightHeightDataStore"
import Config from "Config"
export default class WeightHeightDataStoreApi implements WeightHeightDataStore {
  private axiosClient = AxiosService.getInstance()

  async saveWeightHeight(
    codOrder: string,
    codAnalysis: string,
    size: string,
    weight: string,
    valueImc: string,
    waist: string,
    hip: string,
    chestPerimeterInspiration: string,
    chestPerimeterExpiration: string,
    waistHip: string,
    nutritionalDiagnosis: string,
    observations: string,
    codUser: string
  ) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        `${Config.url_api}/GuardarPesoTalla`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder,
            codAnalisis: codAnalysis,
            talla: size,
            peso: weight,
            imc: valueImc,
            cintura: waist,
            cadera: hip,
            ptInspiracion: chestPerimeterInspiration,
            ptExpiracion: chestPerimeterExpiration,
            cinturaCadera: waistHip,
            diagnosticoN: nutritionalDiagnosis,
            observaciones: observations,
            codUsuario: codUser
          }),
        }
      )
      return response[0]
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async updateWeightHeight(
    codOrder: string,
    codAnalysis: string,
    size: string,
    weight: string,
    valueImc: string,
    waist: string,
    hip: string,
    chestPerimeterInspiration: string,
    chestPerimeterExpiration: string,
    waistHip: string,
    nutritionalDiagnosis: string,
    observations: string,
    codUser: string
  ) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ActualizarPesoTalla`,
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder,
            codAnalisis: codAnalysis,
            talla: size,
            peso: weight,
            imc: valueImc,
            cintura: waist,
            cadera: hip,
            ptInspiracion: chestPerimeterInspiration,
            ptExpiracion: chestPerimeterExpiration,
            cinturaCadera: waistHip,
            diagnosticoN: nutritionalDiagnosis,
            observaciones: observations,
            codUsuario: codUser
          }),
        }
      )
      return response[0]
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async listWeightHeight(codOrder: string) {
    try {
      const response:any = await this.axiosClient.exchange<any>(
        `${Config.url_api}/ListarPesoTalla`,
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
