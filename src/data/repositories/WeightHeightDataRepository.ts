import WeightHeightRepository from "../../domain/repositories/WeightHeightRepository"
import WeightHeightDataStoreFactory from "../datasources/WeightHeightDataStoreFactory"
import WeightHeightDataStore from "../datasources/WeightHeightDataStore"

export default class WeightHeightDataRepository
  implements WeightHeightRepository
{
  saveWeightHeight(
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
    const weightHeightDataStore: WeightHeightDataStore =
      WeightHeightDataStoreFactory.create()
    return weightHeightDataStore.saveWeightHeight(
      codOrder,
      codAnalysis,
      size,
      weight,
      valueImc,
      waist,
      hip,
      chestPerimeterInspiration,
      chestPerimeterExpiration,
      waistHip,
      nutritionalDiagnosis,
      observations,
      codUser
    )
  }

  updateWeightHeight(
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
    const weightHeightDataStore: WeightHeightDataStore =
      WeightHeightDataStoreFactory.create()
    return weightHeightDataStore.updateWeightHeight(
      codOrder,
      codAnalysis,
      size,
      weight,
      valueImc,
      waist,
      hip,
      chestPerimeterInspiration,
      chestPerimeterExpiration,
      waistHip,
      nutritionalDiagnosis,
      observations,
      codUser
    )
  }

  listWeightHeight(codOrder: string) {
    const weightHeightDataStore: WeightHeightDataStore =
      WeightHeightDataStoreFactory.create()
    return weightHeightDataStore.listWeightHeight(codOrder)
  }
}
