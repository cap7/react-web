import InvoiceDataStore from "../InvoiceDataStore"

export default class InvoiceDataStoreMock implements InvoiceDataStore {
  async statusInvoice() {
    const data = [
      {
        id: 0,
        name: "Pendiente",
      },
      {
        id: 1,
        name: "Pago parcial",
      },
      {
        id: 2,
        name: "Pagado",
      },
    ]

    return data
  }
}
