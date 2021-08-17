export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    if (!this.isOn) {
      this.isOn = true;
      console.log(`${this.name} agora está ${this.getPowerStatus()}`);
      return this.isOn;
    } else return this.isOn;
  }

  off(): boolean {
    if (this.isOn) {
      this.isOn = false;
      console.log(`${this.name} agora está ${this.getPowerStatus()}`);
      return this.isOn;
    } else return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    return (this.intensity += 1);
  }

  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;
    return (this.intensity -= 1);
  }
}
