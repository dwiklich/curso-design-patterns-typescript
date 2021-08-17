import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bathroomLightIntensityCommand = new LightIntensityCommand(bathroomLight);

// Invoker - controle
const smartHouseApp = new SmartHouseApp();

// Usando o Command para executar a tarefa
bedroomLightPowerCommand.execute();
bedroomLightPowerCommand.undo();
bathroomLightPowerCommand.execute();
bathroomLightPowerCommand.undo();
bathroomLightIntensityCommand.execute();
bathroomLightIntensityCommand.undo();

console.log('-------------');

//Usando o Invoker para executar a tarefa que é o padrao deste projeto
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');
smartHouseApp.addCommand('btn-3', bathroomLightIntensityCommand);
smartHouseApp.executeCommand('btn-3');
smartHouseApp.undoCommand('btn-3');

for (let i = 0; i < 110; i++) {
  smartHouseApp.undoCommand('btn-3');
}

for (let i = 0; i < 110; i++) {
  smartHouseApp.executeCommand('btn-3');
}
