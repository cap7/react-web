import LogInRepository from "../../domain/repositories/LogInRepository"
import LogInDataStoreFactory from "../datasources/LogInDataStoreFactory"
import LogInDataStore from "../datasources/LogInDataStore"

export default class LogInDataRepository implements LogInRepository {
  logIn(user: string, password: string) {
    const logInDataStore: LogInDataStore = LogInDataStoreFactory.create()
    return logInDataStore.logIn(user, password)
  }

  refreshToken(value: string) {
    const logInDataStore: LogInDataStore = LogInDataStoreFactory.create()
    return logInDataStore.refreshToken(value)
  }

  logOut(instanceId: string) {
    const logInDataStore: LogInDataStore = LogInDataStoreFactory.create()
    return logInDataStore.logOut(instanceId)
  }
}
