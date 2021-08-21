export class ErrorFormat extends Error {
  private _resolve = 'Formato do arquivo é inválido';
  constructor(public message: string) {
    super(message);
    this.message = 'ErrorFormat: ' + this.message;
  }

  get resolveError(): string {
    return this._resolve;
  }
}
