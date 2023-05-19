import { v4 as createUuid } from "uuid";

enum Type {
  Input = "Input",
  Output = "Output",
}

export class Transactions {
  private _id: string;

  constructor(
    private _title: string,
    private _value: number,
    private _type: Type
  ) {
    this._id = createUuid();
  }

  public get id() {
    return this._id;
  }

  public get title() {
    return this._title;
  }

  public get value() {
    return this._value;
  }

  public get type() {
    return this._type;
  }
}
