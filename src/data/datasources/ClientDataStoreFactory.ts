import ClientDataStore from "./ClientDataStore"
import ClientDataStoreApi from "./api/Client"

export default class ClientDataStoreFactory {
  static create(): ClientDataStore {
    return new ClientDataStoreApi()
  }
}
