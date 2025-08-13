import { Cars } from './cars/Cars';
import { CarModel } from './CarModel';
import { GasolineCar } from './cars/car/GasolineCar';
import { ElectricCar } from './cars/car/ElectricCar';

export class CarRepository {
  private readonly cars: Cars[] = [];

  addCar(model: CarModel): string {
    let car: Cars;
    switch (model.engineType) {
      case 'gasoline':
        car = new GasolineCar(model);
        break;
      case 'electric':
        car = new ElectricCar(model);
        break;
      default:
        throw new Error(`Unsupported engine type: ${model.engineType}`);
    }
    this.cars.push(car);
    return car.id();
  }

  getCars(): Cars[] {
    return this.cars;
  }
}

const carRepository = new CarRepository();
export default carRepository;
