import { randomUUID, UUID } from 'node:crypto';

export abstract class Cars {
  protected readonly _id: UUID = randomUUID();
  protected readonly brand: string;
  protected readonly model: string;

  protected constructor(brand: string, model: string) {
    this._id = randomUUID();
    this.brand = brand;
    this.model = model;
  }

  public id(): UUID {
    return this._id;
  }

  public name(): string {
    return `${this.brand} ${this.model} ${this.id()}`;
  }
}
