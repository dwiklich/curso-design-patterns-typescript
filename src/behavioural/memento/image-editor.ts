import { ConcreteMemento } from './concrete-memento';
import { MementoProtocol } from './memento-protocol';
import { FormatImage } from './type/format-image';
import { ErrorFormat } from './errors/error-format';
// Originator
export class ImageEditor {
  private fileFormat: string;

  constructor(private filePath: string) {
    const file = this.filePath.split('.');
    const typeFormatImage = file[1];
    if (
      typeFormatImage !== 'gif' &&
      typeFormatImage !== 'jpg' &&
      typeFormatImage !== 'png'
    ) {
      throw new ErrorFormat('O formato do arquivo é inválido.');
    } else {
      this.fileFormat = file[1];
    }
  }

  convertFromateTo(format: FormatImage): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += `.${format}`;
  }

  saveState(): Readonly<MementoProtocol> {
    return new ConcreteMemento(
      'BackupID' + ConcreteMemento.id,
      this.filePath,
      this.fileFormat as FormatImage,
    );
  }
  restore(memento: MementoProtocol): void {
    const concreteMemento = memento as ConcreteMemento;
    this.fileFormat = concreteMemento.getFileFormat();
    this.filePath = concreteMemento.getFilePath();
  }
}
