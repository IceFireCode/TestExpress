import { UUID } from 'node:crypto';

export interface ICarEntity {
  id(): UUID;
  name(): string;
  data(): string;
  travel(distance: number): void;
  mileage(): number;
}

export interface IGasolineCarEntity extends ICarEntity {
  refillGasoline(liters: number): void;
}
