export default interface LogInRepository {
    logIn(user: string, password: string): any;
    refreshToken(value: string): any;
    logOut(instanceId: string): any;
  }
  