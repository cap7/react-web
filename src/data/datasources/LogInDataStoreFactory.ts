import LogInDataStore from "./LogInDataStore"
import LogInDataStoreApi from "./api/LogIn"

export default class LogInDataStoreFactory {
  static create(): LogInDataStore {
    return new LogInDataStoreApi()
  }
}
