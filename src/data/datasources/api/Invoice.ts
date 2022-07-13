import { AxiosService } from "./client/AxiosHttpClient"
import { HttpMethod } from "./client/Http.interface"
import InvoiceDataStore from "../InvoiceDataStore"

export default class InvoiceDataStoreApi implements InvoiceDataStore {
  statusInvoice() {
    throw new Error("Method not implemented.")
  }
}
