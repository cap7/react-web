export enum ContextTypes {
  auth = "AUTH",
  takeOrder = "TAKE_ORDER",
}

export const MainReducer = (state: any, action: any) => {
  switch (action.type) {
    case "AUTH":
      return {
        access: action.access,
        codigo: action.codigo,
        flag: action.flag,
        nombre: action.nombre,
        respuesta: action.respuesta,
      }
    case "TAKE_ORDER":
      return {
          show: action.show,
          order: action.order,
          orderVal: action.orderVal,
          patient: action.patient,
          age: action.age,
          ocupation: action.ocupation, 
          plan: action.plan,
          evaluation: action.evaluation 
      }
    default:
      return state
  }
}
