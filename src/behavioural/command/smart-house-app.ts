import { SmartHouseCommand } from './smart-house-command';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addCommand(key: string, command: SmartHouseCommand): void {
    if (this.commands[key]) return console.log('Command ja existente');
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    if (!this.commands[key]) return;
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    if (!this.commands[key]) return;
    this.commands[key].undo();
  }
}
