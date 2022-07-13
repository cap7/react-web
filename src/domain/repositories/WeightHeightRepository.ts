export default interface WeightHeightRepository {
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
  ): any
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
  ): any
  listWeightHeight(codOrder: string): any
}
