import { ImageEditor } from './image-editor';
import { MementoProtocol } from './memento-protocol';

export class ImageEditorBackupManager {
  private mementos: MementoProtocol[] = [];
  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    const mementoSaveState = this.imageEditor.saveState();
    this.mementos.push(mementoSaveState);
    console.log(`Backup: ${mementoSaveState.getName()}`);
  }
  restore(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('Backup: no mementos');
      return;
    }
    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
