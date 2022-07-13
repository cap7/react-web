import { createActions } from "reduxsauce"

const { Types, Creators } = createActions({
  // View actions
  listOrder: [
    "refresh",
    "patient",
    "dni",
    "startDate",
    "endDate",
    "result",
    "client",
    "evaluation",
    "order",
    "invoice",
  ],
  // Reducer
  listOrderRequest: null,
  listOrderSuccess: null,
  listOrderFailure: ["error"],
})

export { Creators, Types }
