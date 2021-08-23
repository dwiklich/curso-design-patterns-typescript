export class CustomerBudget {
  private _approved = false;

  constructor(private _total: number) {}

  get total(): number {
    return this._total;
  }

  set approved(value: boolean) {
    this._approved = value;
  }
}
