import InvoiceDataStore from "./InvoiceDataStore"
import InvoiceDataStoreMock from "./mock/Invoice"

export default class InvoiceDataStoreFactory {
  static create(): InvoiceDataStore {
    return new InvoiceDataStoreMock()
  }
}
