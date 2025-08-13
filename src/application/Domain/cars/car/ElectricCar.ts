import { Cars } from '../Cars';
import { CarModel } from '../../CarModel';

export class ElectricCar extends Cars {
  private readonly energyConsumptionInKWhPer100km: number;
  private readonly batteryCapacity: number;
  private _currentCharge: number = 0;

  constructor(public modelInfo: CarModel) {
    super(modelInfo.brand, modelInfo.model);
    this.energyConsumptionInKWhPer100km = modelInfo.fuelConsumption;
    this.batteryCapacity = modelInfo.tankCapacity;
  }

  public currentCharge(): number {
    return this._currentCharge;
  }

  public data(): string {
    return `${this.name()}\nTotal Mileage: ${this.mileage()} Km\nCharge Level: ${this.currentCharge()} kWh`;
  }
}
