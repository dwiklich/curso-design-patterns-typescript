import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  public realUser: SystemUserProtocol | null = null;
  public realUserAddress: SystemUserAddressProtocol[] | null = null;
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public userName: string,
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(
        this.firstName,
        this.lastName,
        this.age,
        this.userName,
      );
    }
    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();
    if (this.realUserAddress === null) {
      const arrayAddresses = await this.realUser.getAddresses();
      this.realUserAddress = arrayAddresses;
    }
    return this.realUserAddress;
  }
}
