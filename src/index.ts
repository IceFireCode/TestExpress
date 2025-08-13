import express, { Express, Request, Response } from 'express';
import { GasolineCar } from './application/Domain/cars/car/GasolineCar';
import { AvailableVehicles } from './application/Domain/Primitives/AvailableVehicles';

const app: Express = express();
app.use(express.json()); // to parse JSON bodies

const port = 3000;

// GET /health
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'active',
  });
});

// GET /vehicles
app.get('/vehicles', (_req: Request, res: Response) => {
  const camryModelInfo = new GasolineCar(AvailableVehicles.Toyota.Camry)
    .modelInfo;
  const vehicles = [
    {
      id: 1,
      brand: camryModelInfo.brand,
      model: camryModelInfo.model,
      engineType: 'gasoline',
      totalMileage: 15000.5,
      fuelConsumption: camryModelInfo.fuelConsumption,
      tankCapacity: camryModelInfo.tankCapacity,
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
  ];
  res.status(200).json(vehicles);
});

// Start server
export const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
