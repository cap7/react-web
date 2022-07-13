import InvoiceRepository from "../../domain/repositories/InvoiceRepository"
import InvoiceDataStoreFactory from "../datasources/InvoiceDataStoreFactory"
import InvoiceDataStore from "../datasources/InvoiceDataStore"

export default class InvoiceDataRepository implements InvoiceRepository {
  statusInvoice() {
    const invoiceDataStore: InvoiceDataStore = InvoiceDataStoreFactory.create()
    return invoiceDataStore.statusInvoice()
  }
}
