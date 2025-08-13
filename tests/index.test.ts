import request from 'supertest';
import { server } from '../src';

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

  describe('GET /vehicles', () => {
    it('should respond with status 200 and JSON with two vehicles, 1 petrol, 1 EV', async () => {
      const response = await request(server).get('/vehicles');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          id: 1,
          brand: 'Toyota',
          model: 'Camry',
          engineType: 'gasoline',
          totalMileage: 15000.5,
          fuelConsumption: 7,
          tankCapacity: 40,
          currentFuelLevel: 45,
        },
        {
          id: 2,
          brand: 'Tesla',
          model: 'Model 3',
          engineType: 'electric',
          totalMileage: 8500,
          energyConsumption: 18.5,
          batteryCapacity: 75,
          currentCharge: 0,
        },
      ]);
    });
  });
});
