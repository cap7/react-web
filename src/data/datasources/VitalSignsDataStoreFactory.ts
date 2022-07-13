import VitalSignsDataStore from "./VitalSignsDataStore"
import VitalSignsDataStoreMock from "./mock/VitalSigns"
import VitalSignsDataStoreApi from "./api/VitalSigns"
import config from '../../Config'

export default class VitalSignsDataStoreFactory {
  static create(): VitalSignsDataStore {
    if(config.datasource === 'MOCK'){
     return new VitalSignsDataStoreMock()
    }
    return new VitalSignsDataStoreApi()
  }
}
