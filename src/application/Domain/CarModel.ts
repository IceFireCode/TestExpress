import { Brand } from './Brand';
import { EngineType } from './EngineType';

export interface CarModel {
  brand: Brand;
  model: string;
  engineType: EngineType;
  fuelConsumption: number;
  tankCapacity: number;
}
