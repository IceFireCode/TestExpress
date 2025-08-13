import { GasolineCar } from '../src/application/Domain/cars/car/GasolineCar';
import { AvailableVehicles } from '../src/application/Domain/Primitives/AvailableVehicles';
import { ElectricCar } from '../src/application/Domain/cars/car/ElectricCar';
import carRepository from '../src/application/Domain/CarRepository';

describe('CarRepository', () => {
  it('should be able to create a gasoline and an electric Car and return them in a list', () => {
    const gasolineModel = AvailableVehicles.Toyota.Camry;
    const electricModel = AvailableVehicles.Tesla.Model3;

    const gasolineCarId = carRepository.addCar(gasolineModel);
    const electricCarId = carRepository.addCar(electricModel);

    const cars = carRepository.getCars();
    expect(cars.length).toBe(2);
    const firstCar = cars[0];
    expect(firstCar).toBeInstanceOf(GasolineCar);
    expect(firstCar.id()).toBe(gasolineCarId);
    expect(firstCar.name()).toContain('Toyota');
    expect(firstCar.name()).toContain('Camry');
    const secondCar = cars[1];
    expect(secondCar).toBeInstanceOf(ElectricCar);
    expect(secondCar.id()).toBe(electricCarId);
    expect(secondCar.name()).toContain('Tesla');
    expect(secondCar.name()).toContain('Model 3');
  });
});
