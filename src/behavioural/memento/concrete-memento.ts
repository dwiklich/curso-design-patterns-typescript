import { MementoProtocol } from './memento-protocol';
import { FormatImage } from './type/format-image';

export class ConcreteMemento implements MementoProtocol {
  private readonly date: Date = new Date();
  static id = 1;
  constructor(
    private readonly name: string,
    private filePath: string,
    private fileFormat: FormatImage,
  ) {
    ConcreteMemento.id += 1;
  }

  getName(): string {
    return this.name;
  }
  getDate(): Date {
    return this.date;
  }
  getFilePath(): string {
    return this.filePath;
  }
  getFileFormat(): FormatImage {
    return this.fileFormat;
  }
}
