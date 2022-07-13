export default interface VitalSignsDataStore {
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
  ): any
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
  ): any
  listVitalSigns(codOrder: string): any
}
