import VitalSignsRepository from "../../domain/repositories/VitalSignsRepository"
import VitalSignsDataStoreFactory from "../datasources/VitalSignsDataStoreFactory"
import VitalSignsDataStore from "../datasources/VitalSignsDataStore"

export default class VitalSignsDataRepository implements VitalSignsRepository {
  saveVitalSigns(
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
    const vitalSignsDataStore: VitalSignsDataStore = VitalSignsDataStoreFactory.create()
    return vitalSignsDataStore.saveVitalSigns(
      codOrder,
      codAnalysis,
      temperature,
      pulse,
      breathing,
      systolicPressure,
      diastolicPressure,
      halfPressure,
      heartRate,
      saturation,
      observations,
      codUser,
    )
  }

  updateVitalSigns(
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
    const vitalSignsDataStore: VitalSignsDataStore = VitalSignsDataStoreFactory.create()
    return vitalSignsDataStore.updateVitalSigns(
      codOrder,
      codAnalysis,
      temperature,
      pulse,
      breathing,
      systolicPressure,
      diastolicPressure,
      halfPressure,
      heartRate,
      saturation,
      observations,
      codUser,
    )
  }

  listVitalSigns(codOrder: string) {
    const vitalSignsDataStore: VitalSignsDataStore = VitalSignsDataStoreFactory.create()
    return vitalSignsDataStore.listVitalSigns(codOrder)
  }
}
