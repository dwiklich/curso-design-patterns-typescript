import { DeviceImplementation } from './device-implementation';

export class Tv implements DeviceImplementation {
  private _name = 'Tv Samsung';
  private _power = false;
  private _volume = 10;

  get name(): string {
    return this._name;
  }
  get power(): boolean {
    return this._power;
  }
  set power(powerStatus: boolean) {
    this._power = powerStatus;
  }
  get volume(): number {
    return this._volume;
  }
  set volume(value: number) {
    if (this.volume > 0 && this._volume < 100) {
      this._volume = value;
    } else {
      return;
    }
  }
}
