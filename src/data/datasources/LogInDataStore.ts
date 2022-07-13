export default interface LogInDataStore {
    logIn(user: string, password: string): any;
    refreshToken(refreshToken: string): any;
    logOut(instanceId: string): any;
  }
  