import { CarModel } from '../../CarModel';
import { IGasolineCarEntity } from './ICarEntity';
import { Cars } from '../Cars';

export class GasolineCar extends Cars implements IGasolineCarEntity {
  private readonly fuelConsumption: number; // unit is l/100 km
  private readonly tankCapacity: number;
  private totalMileage: number = 0;
  private fuelAvailable: number;

  constructor(public modelInfo: CarModel) {
    super(modelInfo.brand, modelInfo.model);
    this.fuelConsumption = modelInfo.fuelConsumption;
    this.tankCapacity = modelInfo.tankCapacity;
    this.fuelAvailable = 0;
  }

  public refillGasoline(liters: number): void {
    this.fuelAvailable += liters;
    if (this.fuelAvailable > this.tankCapacity) {
      this.fuelAvailable = this.tankCapacity;
    }
  }

  public travel(distance: number) {
    const tripFuelConsumption = this.calculateTripFuelConsumption(distance);
    this.fuelAvailable -= tripFuelConsumption;
    this.totalMileage += distance;
  }

  public mileage(): number {
    return this.totalMileage;
  }

  public fuelAmount(): number {
    return this.fuelAvailable;
  }

  public data(): string {
    return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nFuel Available: ${this.fuelAmount()} l`;
  }

  private calculateTripFuelConsumption(distance: number) {
    //consumption unit is l/100 km
    return (this.fuelConsumption * distance) / 100;
  }
}
