import VitalSignsDataStore from "../VitalSignsDataStore"

export default class VitalSignsDataStoreMock implements VitalSignsDataStore {
    async saveVitalSigns(codOrder: string, codAnalysis: string, temperature: string, pulse: string, breathing: string, systolicPressure: string, diastolicPressure: string, halfPressure: string, heartRate: string, saturation: string, observations: string, codUser: string) {
        throw new Error("Method not implemented.");
    }

    async updateVitalSigns(codOrder: string, codAnalysis: string, temperature: string, pulse: string, breathing: string, systolicPressure: string, diastolicPressure: string, halfPressure: string, heartRate: string, saturation: string, observations: string, codUser: string) {
        throw new Error("Method not implemented.");
    }

    async listVitalSigns(codOrder: string) {
        const data:any = []
      
          return data
    }
    
}