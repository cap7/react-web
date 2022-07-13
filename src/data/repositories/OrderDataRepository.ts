import OrderRepository from "../../domain/repositories/OrderRepository"
import OrderDataStoreFactory from "../datasources/OrderDataStoreFactory"
import OrderDataStore from "../datasources/OrderDataStore"

export default class OrderDataRepository implements OrderRepository {
 
  listOrder(
    patient: string,
    dni: string,
    startDate: string,
    endDate: string,
    result: string,
    client: string,
    evaluation: string,
    order: string,
    invoice: string
  ) {
    const orderDataStore: OrderDataStore = OrderDataStoreFactory.create()
    return orderDataStore.listOrder(
      patient,
      dni,
      startDate,
      endDate,
      result,
      client,
      evaluation,
      order,
      invoice
    )
  }

  listMenu(codOrder: string) {
    const orderDataStore: OrderDataStore = OrderDataStoreFactory.create()
    return orderDataStore.listMenu(codOrder)
  }
}
