import { Transactions } from "./transactions";
import { v4 as createUuid } from "uuid";

export class User {
  public id: string;
  private _transactions = [];

  constructor(
    private _name: string,
    private _cpf: string,
    private _email: string,
    private _age: number
  ) {
    this.id = createUuid();
    this._transactions = [];
  }

  public get name(): string {
    return this._name;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public get email(): string {
    return this._email;
  }

  public get age(): number {
    return this._age;
  }

  public get transaction(): Transactions[] {
    return this._transactions;
  }

  public toJson() {
    return {
      id: this.id,
      name: this._name,
      cpf: this._cpf,
      age: this._age,
      transactions: this._transactions,
    };
  }
}
