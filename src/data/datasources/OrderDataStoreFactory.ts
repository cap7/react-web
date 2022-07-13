import OrderDataStore from "./OrderDataStore"
import OrderDataStoreApi from "./api/Order"

export default class OrderDataStoreFactory {
  static create(): OrderDataStore {
    return new OrderDataStoreApi()
  }
}
