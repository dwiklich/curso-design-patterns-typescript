import { DeviceImplementation } from '../device/device-implementation';
import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  constructor(protected device: DeviceImplementation) {
    super(device);
  }

  //   volumeUp(): void {
  //     const oldVolume = this.device.volume;
  //     setTimeout(() => {
  //       this.device.volume = this.device.volume + 1;
  //       console.log(
  //         `Volume aumentado: ${this.device.volume} | Volume anterior ${oldVolume}`,
  //       );
  //     }, 1);
  //   }

  //   volumeDown(): void {
  //     const oldVolume = this.device.volume;
  //     setTimeout(() => {
  //       this.device.volume = -this.device.volume - 1;
  //       console.log(
  //         `Volume diminuido: ${this.device.volume} | Volume anterior ${oldVolume}`,
  //       );
  //     }, 1);
  //   }
  // }

  volumeUp(): void {
    const oldVolume = this.device.volume;
    // setTimeout(() => {
    this.device.volume = this.device.volume + 1;
    console.log(
      `Volume aumentado: ${this.device.volume} | Volume anterior ${oldVolume}`,
    );
    // }, 500);
  }

  volumeDown(): void {
    const oldVolume = this.device.volume;
    // setTimeout(() => {
    this.device.volume = this.device.volume - 1;
    console.log(
      `Volume diminuido: ${this.device.volume} | Volume anterior ${oldVolume}`,
    );
    // }, 500);
  }
}
