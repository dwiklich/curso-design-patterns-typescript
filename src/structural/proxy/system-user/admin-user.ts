import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public userName: string, // public adress: SystemUserAddressProtocol[],
  ) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Jose Passador', number: 6 },
          { street: 'Donatelo Forte', number: 290 },
        ]);
      }, 2000);
    });
  }
}
