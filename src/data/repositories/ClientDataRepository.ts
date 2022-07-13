import ClientRepository from "../../domain/repositories/ClientRepository"
import ClientDataStoreFactory from "../datasources/ClientDataStoreFactory"
import ClientDataStore from "../datasources/ClientDataStore"

export default class ClientDataRepository implements ClientRepository {
 
  listClient() {
    const clientDataStore: ClientDataStore = ClientDataStoreFactory.create()
    return clientDataStore.listClient()
  }
}
