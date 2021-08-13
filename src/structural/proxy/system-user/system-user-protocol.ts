export type SystemUserAddressProtocol = {
  street: string;
  number: number;
};

export interface SystemUserProtocol {
  firstName: string;
  lastName: string;
  age: number;
  userName: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
