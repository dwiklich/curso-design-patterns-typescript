export interface DeviceImplementation {
  get name(): string;
  get power(): boolean;
  set power(powerStatus: boolean);
  get volume(): number;
  set volume(value: number);
}
