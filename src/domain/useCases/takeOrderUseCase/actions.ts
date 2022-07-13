import { createActions } from "reduxsauce"

const { Types, Creators } = createActions({
  // View actions
  listMenu: ["refresh","codOrder"],
  // Reducer
  listMenuRequest: null,
  listMenuSuccess: null,
  listMenuFailure: ["error"],
})

export { Creators, Types }
