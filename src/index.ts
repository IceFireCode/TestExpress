import express, { Express, Request, Response } from 'express';
import carRepository from './application/Domain/CarRepository';

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
  const vehicles = carRepository.getCars();
  res.status(200).json(vehicles);
});

// Start server
export const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
