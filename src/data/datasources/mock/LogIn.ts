import LogInDataStore from "../LogInDataStore"

export default class LogInDataStoreMock implements LogInDataStore {
  async logIn(user: string, password: string) {
    return 0
  }

  async refreshToken(refreshToken: string) {
    return 0
  }
  
  async logOut(instanceId: string) {
    return 0
  }
}
