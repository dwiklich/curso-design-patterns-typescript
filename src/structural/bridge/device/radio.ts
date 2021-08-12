import { DeviceImplementation } from './device-implementation';

export class Radio implements DeviceImplementation {
  private _name = 'Radio';
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
    if (this.volume >= 0 && this._volume <= 50) {
      this._volume = value;
    } else {
      return;
    }
  }
}
