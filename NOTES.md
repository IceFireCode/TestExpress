# Pomodoro Technique - :notebook: Notes from the journey :tomato: by :tomato:

## :bookmark: Labels

- ✅ : done
- 🚧 : WIP
- ⛌ : ERROR
- ❒ : TODO

## 🍅 Pomodoro 1

❒ go through the code and understand how it works, renaming and extracting methods as needed
Did not seem necessary, the code is quite readable and understandable, but the assignment not yet for me.

## 🍅 Pomodoro 2

[x] read the requirements again and understand what is needed to be done
[x] create 'application' directory and move the code there except 'index'
[x] New index test to get the vehicles, make it pass with hardcoded data

## 🍅 Pomodoro 3

[x] actually create the gasoline car instance in the get vehicles and keep the test passing
[x] refactor Car and ICarEntity to make it ready for adding the electric car type
[x] refactor: create abstract base class for shared logic of cars
[x] refactor: rename fuelConsumption to fuelConsumptionInLiterPer100km to get rid of two comments
[x] create test to create an electric car instance -> batteryCapacity = 0
[x] create the ElectricCar (using same CarModel) class and make the test pass

## 🍅 Pomodoro 4

[x] Somehow deal with CarModel also needing to be recognized as ElectricCar
[ ] create more tests for the ElectricCar (or move to the future?)
[x] create and store a gasoline and an electric car, then get them from the repository
[ ] create a VehicleController to handle the HTTP requests and responses

## 🍅 Pomodoro 5

[x] create POST /vehicles endpoint to create the cars and then list them