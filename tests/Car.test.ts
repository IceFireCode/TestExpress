import { GasolineCar } from '../src/application/Domain/cars/car/GasolineCar';
import { AvailableVehicles } from '../src/application/Domain/Primitives/AvailableVehicles';
import { ElectricCar } from '../src/application/Domain/cars/car/ElectricCar';

describe('Cars', () => {
  describe('Electric Car', () => {
    it('should be instantiated with a battery charge of zero', () => {
      const car = new ElectricCar(AvailableVehicles.Tesla.Model3);
      const mileage = car.mileage();
      const batteryCharge = car.currentCharge();
      expect(mileage).toBe(0);
      expect(batteryCharge).toBe(0);
      expect(car.name()).toContain('Tesla');
      expect(car.name()).toContain('Model 3');
      expect(car.data()).toContain('Total Mileage: 0 Km');
      expect(car.data()).toContain('Charge Level: 0 kWh');
    });
  });
  describe('Gasoline Car', () => {
    it('should be instantiated with zero mileage', () => {
      const car = new GasolineCar(AvailableVehicles.Toyota.Corolla);
      const mileage = car.mileage();
      const amountOfFuelAvailable = car.fuelAmount();
      expect(mileage).toBe(0);
      expect(amountOfFuelAvailable).toBe(0);
      expect(car.name()).toContain('Toyota');
      expect(car.name()).toContain('Corolla');
      expect(car.data()).toContain('Total Mileage: 0 Km');
      expect(car.data()).toContain('Fuel Available: 0 l');
    });

    it('should be filled with gasoline', () => {
      const car = new GasolineCar(AvailableVehicles.Toyota.Corolla);
      car.refillGasoline(15);
      const amountOfFuelAvailable = car.fuelAmount();
      expect(amountOfFuelAvailable).toBe(15);
    });

    it('should be filled with gasoline not more than tank capacity', () => {
      const car = new GasolineCar(AvailableVehicles.Toyota.Camry);
      car.refillGasoline(75);
      const amountOfFuelAvailable = car.fuelAmount();
      expect(amountOfFuelAvailable).toBe(40);
    });

    it('should be able to travel using the fuel', () => {
      const car = new GasolineCar(AvailableVehicles.Toyota.Camry);
      car.refillGasoline(15);
      car.travel(100);
      const amountOfFuelAvailable = car.fuelAmount();
      expect(amountOfFuelAvailable).toBe(8);
      expect(car.data()).toContain('Fuel Available: 8 l');
    });

    it('should add up mileage after every trip', () => {
      const car = new GasolineCar(AvailableVehicles.Toyota.Camry);
      car.refillGasoline(15);
      car.travel(100);
      expect(car.mileage()).toBe(100);
    });

    it('should be able to travel using the fuel', () => {
      const car = new GasolineCar(AvailableVehicles.Toyota.Camry);
      car.refillGasoline(14);
      car.travel(50);
      const amountOfFuelAvailable = car.fuelAmount();
      expect(amountOfFuelAvailable).toBe(10.5);
      expect(car.data()).toContain('Fuel Available: 10.5 l');
    });
  });
});
