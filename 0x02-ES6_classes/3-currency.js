export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set newCode(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set newName(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
