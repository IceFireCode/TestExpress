export const AvailableVehicles = {
  Toyota: {
    Corolla: {
      brand: 'Toyota',
      model: 'Corolla',
      fuelConsumption: 5,
      tankCapacity: 30,
    },
    Camry: {
      brand: 'Toyota',
      model: 'Camry',
      fuelConsumption: 7,
      tankCapacity: 40,
    },
  },
  Ford: {
    Mustang: {
      brand: 'Ford',
      model: 'Mustang',
      fuelConsumption: 8,
      tankCapacity: 50,
    },
  },
  Tesla: {
    Model3: {
      brand: 'Tesla',
      model: 'Model 3',
      fuelConsumption: 15,
      tankCapacity: 75,
    },
    ModelS: {
      brand: 'Tesla',
      model: 'Model S',
      fuelConsumption: 20,
      tankCapacity: 100,
    },
  },
} as const;
