export default interface OrderDataStore {
  listOrder(patient: string,
    dni: string,
    startDate: string,
    endDate: string,
    result: string,
    client: string,
    evaluation: string,
    order: string,
    invoice: string): any

  listMenu(codOrder:string): any
}


