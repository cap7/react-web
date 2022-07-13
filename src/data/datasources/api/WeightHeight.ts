import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import WeightHeightDataStore from "../WeightHeightDataStore"

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
      const response = await this.axiosClient.exchange<any>(
        "http://137.135.106.184:88/api/Neox/GuardarPesoTalla",
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
      return response
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
      const response = await this.axiosClient.exchange<any>(
        "http://137.135.106.184:88/api/Neox/ActualizarPesoTalla",
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
      return response
    } catch (error) {
      throw new Error("No Data")
    }
  }

  async listWeightHeight(codOrder: string) {
    try {
      const response = await this.axiosClient.exchange<any>(
        "http://137.135.106.184:88/api/Neox/ListarPesoTalla",
        {
          method: HttpMethod.Post,
          data: JSON.stringify({
            codOrden: codOrder
          }),
        }
      )
      return response
    } catch (error) {
      throw new Error("No Data")
    }
  }
}
