import { DeviceImplementation } from '../device/device-implementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.power = !this.device.power;
    console.log(
      `${this.device.name} power status: ${
        this.device.power ? 'Ativado' : 'Desativado'
      }`,
    );
  }
}
