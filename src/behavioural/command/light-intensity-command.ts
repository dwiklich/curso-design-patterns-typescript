import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private command: SmartHouseLight) {}

  execute(): void {
    const intensity = this.command.increaseIntensity();
    console.log(`${this.command.name} esta com a intensidade: ${intensity}`);
  }
  undo(): void {
    const intensity = this.command.decreaseIntensity();
    console.log(`${this.command.name} esta com a intensidade: ${intensity}`);
  }
}
