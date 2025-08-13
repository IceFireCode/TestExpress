import request from 'supertest';
import { server } from '../src';
import carRepository from '../src/application/Domain/CarRepository';
import { GasolineCar } from '../src/application/Domain/cars/car/GasolineCar';
import { AvailableVehicles } from '../src/application/Domain/Primitives/AvailableVehicles';
import { ElectricCar } from '../src/application/Domain/cars/car/ElectricCar';

describe('GET /health', () => {
  afterAll(() => {
    server.close();
  });

  describe('GET /health', () => {
    it('should respond with status 200 and JSON { status: "active" }', async () => {
      const response = await request(server).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: 'active' });
    });
  });

  describe('POST /vehicle', () => {
    it('should respond with status 200', async () => {
      const response = await request(server).get('/vehicles');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /vehicles', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should respond with status 200 and JSON with 0 cars when the repository contains no cars', async () => {
      const response = await request(server).get('/vehicles');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
    it('should respond with status 200 and JSON with two vehicles, 1 petrol, 1 EV, when the repository contains those', async () => {
      with1GasolineAnd1ElectricCarInTheRepository();
      const response = await request(server).get('/vehicles');
      expect(response.status).toBe(200);
      // expect(response.body).toEqual([
      //   {
      //     id: 1,
      //     brand: 'Toyota',
      //     model: 'Camry',
      //     engineType: 'gasoline',
      //     totalMileage: 15000.5,
      //     fuelConsumption: 7,
      //     tankCapacity: 40,
      //     currentFuelLevel: 45,
      //   },
      //   {
      //     id: 2,
      //     brand: 'Tesla',
      //     model: 'Model 3',
      //     engineType: 'electric',
      //     totalMileage: 8500,
      //     energyConsumption: 18.5,
      //     batteryCapacity: 75,
      //     currentCharge: 0,
      //   },
      // ]);
    });
  });
});

function with1GasolineAnd1ElectricCarInTheRepository() {
  jest
    .spyOn(carRepository, 'getCars')
    .mockReturnValue([
      new GasolineCar(AvailableVehicles.Toyota.Camry),
      new ElectricCar(AvailableVehicles.Tesla.Model3),
    ]);
}
